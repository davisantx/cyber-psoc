"""Recorta as fichas transparentes em sprites individuais.

Uso: python recortar_sprites_novos.py
"""

from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage


ROOT = Path(__file__).resolve().parent
SHEETS = (
    ("Ficha de Personagem 3 - Fundo Transparente.png", "sprites_recortados_3", False),
    ("Ficha de Personagem 4 - Brasileira - Fundo Transparente.png", "sprites_recortados_4", True),
    ("Ficha de Personagem 5 - Brasileiro - Fundo Transparente.png", "sprites_recortados_5", False),
    ("Ficha de Personagem 6 - Brasileira Branca - Fundo Transparente.png", "sprites_recortados_6", True),
    ("Ficha de Personagem 7 - Brasileiro - Fundo Transparente.png", "sprites_recortados_7", False),
    ("Ficha de Personagem 8 - Brasileira - Fundo Transparente.png", "sprites_recortados_8", True),
    ("Ficha de Personagem 9 - Brasileiro - Fundo Transparente.png", "sprites_recortados_9", False),
    ("Ficha de Personagem 10 - Brasileira - Fundo Transparente.png", "sprites_recortados_10", True),
)
PORTRAIT_SIZE = (240, 350)
NAMES_MALE = (
    "normal", "feliz", "triste", "bravo", "surpreso", "constrangido",
    "pensativo", "rindo", "com_raiva", "olhando_esquerda",
    "olhando_direita", "de_costas",
)
NAMES_FEMALE = (
    "normal", "feliz", "triste", "brava", "surpresa", "constrangida",
    "pensativa", "rindo", "com_raiva", "olhando_esquerda",
    "olhando_direita", "de_costas",
)


def crop_sheet(source_name: str, output_name: str, female: bool) -> None:
    source = np.array(Image.open(ROOT / source_name).convert("RGBA"))
    alpha = source[:, :, 3]

    # As 13 figuras grandes formam componentes separados. O limiar alto ignora
    # a antialiasing fraca; os pixels das bordas são reintegrados depois.
    # Na ficha feminina, a manga da pose inteira toca levemente o primeiro
    # retrato. Um pixel de erosão separa as figuras antes da atribuição das bordas.
    core_mask = ndimage.binary_erosion(alpha > 128, iterations=1)
    labels, count = ndimage.label(
        core_mask, structure=ndimage.generate_binary_structure(2, 2)
    )
    sizes = np.bincount(labels.ravel())
    sizes[0] = 0
    main_ids = np.argsort(sizes)[-13:]
    if len(main_ids) != 13 or np.min(sizes[main_ids]) < 20_000:
        raise ValueError(f"Esperadas 13 figuras grandes em {source_name}")

    boxes = ndimage.find_objects(labels)
    fullbody_id = max(main_ids, key=lambda component_id: sizes[component_id])
    portrait_ids = sorted(
        (component_id for component_id in main_ids if component_id != fullbody_id),
        key=lambda component_id: (
            boxes[component_id - 1][0].start // 350,
            boxes[component_id - 1][1].start,
        ),
    )

    # Cada pixel semitransparente pertence à figura grande mais próxima. Isso
    # preserva cachos soltos e bordas suaves sem incorporar os rótulos abaixo.
    cores = np.where(np.isin(labels, main_ids), labels, 0)
    distances, nearest_indices = ndimage.distance_transform_edt(
        cores == 0, return_indices=True
    )
    owners = cores[tuple(nearest_indices)]
    output_dir = ROOT / output_name
    output_dir.mkdir(exist_ok=True)
    names = NAMES_FEMALE if female else NAMES_MALE

    for index, component_id in enumerate((fullbody_id, *portrait_ids)):
        component_box = boxes[component_id - 1]
        min_y = component_box[0].start
        max_y = component_box[0].stop + 2
        keep = (
            (owners == component_id)
            & (alpha >= 32)
            & (distances <= 4)
            & (np.arange(alpha.shape[0])[:, None] >= min_y)
            & (np.arange(alpha.shape[0])[:, None] < max_y)
        )
        ys, xs = np.where(keep)
        x0, x1 = max(0, xs.min() - 4), min(alpha.shape[1], xs.max() + 5)
        y0, y1 = max(0, ys.min() - 4), min(alpha.shape[0], ys.max() + 5)
        cropped = source[y0:y1, x0:x1].copy()
        cropped[~keep[y0:y1, x0:x1], 3] = 0
        cropped[cropped[:, :, 3] == 0, :3] = 0
        image = Image.fromarray(cropped, "RGBA")

        if index == 0:
            filename = "00_corpo_inteiro.png"
        else:
            if image.width > PORTRAIT_SIZE[0] or image.height > PORTRAIT_SIZE[1]:
                raise ValueError(f"Retrato {index} não cabe em {PORTRAIT_SIZE}: {image.size}")
            canvas = Image.new("RGBA", PORTRAIT_SIZE)
            offset = ((PORTRAIT_SIZE[0] - image.width) // 2,
                      PORTRAIT_SIZE[1] - image.height)
            canvas.paste(image, offset)
            image = canvas
            filename = f"{index:02d}_{names[index - 1]}.png"

        image.save(output_dir / filename, optimize=True)
        print(f"{output_name}/{filename}: {image.width}x{image.height}")


if __name__ == "__main__":
    for sheet in SHEETS:
        crop_sheet(*sheet)
