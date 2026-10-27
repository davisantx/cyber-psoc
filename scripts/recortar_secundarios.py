"""Recorta as seis expressões das fichas novas de personagens secundários."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SHEETS = ("mae", "luana", "tomas", "nadia")
EXPRESSIONS = ("normal", "feliz", "triste", "surpreso", "pensativo", "aliviado")


def clean_cell(portrait: Image.Image) -> Image.Image:
    """Remove vazamentos laterais de poses vizinhas e alinha a base ao fundo."""
    w, h = portrait.size
    px = portrait.load()

    # Encontra lacuna vertical esquerda (0..80) e limpa ruído antes dela
    left_gap = None
    for x in range(80, 0, -1):
        if all(px[x, y][3] < 16 for y in range(h)):
            left_gap = x
            break
    if left_gap is not None:
        for x in range(left_gap + 1):
            for y in range(h):
                px[x, y] = (0, 0, 0, 0)

    # Encontra lacuna vertical direita (w-80..w) e limpa ruído após ela
    right_gap = None
    for x in range(w - 80, w):
        if all(px[x, y][3] < 16 for y in range(h)):
            right_gap = x
            break
    if right_gap is not None:
        for x in range(right_gap, w):
            for y in range(h):
                px[x, y] = (0, 0, 0, 0)

    # Zera RGB onde alpha é totalmente transparente
    for x in range(w):
        for y in range(h):
            if px[x, y][3] < 8:
                px[x, y] = (0, 0, 0, 0)

    bbox = portrait.getbbox()
    if bbox and bbox[3] < h:
        shifted = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        shifted.paste(portrait, (0, h - bbox[3]))
        return shifted
    return portrait


def main():
    sheets_dir = ROOT / "artes" / "fichas_originais" / "fichas_secundarios"
    destination_base = ROOT / "game" / "public" / "characters"
    for name in SHEETS:
        sheet = Image.open(sheets_dir / f"{name}.png").convert("RGBA")
        if sheet.size != (1536, 1024):
            raise ValueError(f"Dimensões inesperadas da ficha {name}: {sheet.size}")
        destination = destination_base / name
        destination.mkdir(parents=True, exist_ok=True)
        for index, expression in enumerate(EXPRESSIONS):
            x, y = (index % 3) * 512, (index // 3) * 512
            portrait = clean_cell(sheet.crop((x, y, x + 512, y + 512)))
            portrait.save(destination / f"{index + 1:02}_{expression}.png", optimize=True)


if __name__ == "__main__":
    main()
