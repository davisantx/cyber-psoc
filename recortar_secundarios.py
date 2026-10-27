"""Recorta as seis expressões das fichas novas de personagens secundários."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parent
SHEETS = ("mae", "luana", "tomas", "nadia")
EXPRESSIONS = ("normal", "feliz", "triste", "surpreso", "pensativo", "aliviado")


def main():
    for name in SHEETS:
        sheet = Image.open(ROOT / "fichas_secundarios" / f"{name}.png").convert("RGBA")
        if sheet.size != (1536, 1024):
            raise ValueError(f"Dimensões inesperadas da ficha {name}: {sheet.size}")
        destination = ROOT / "game" / "public" / "characters" / name
        destination.mkdir(parents=True, exist_ok=True)
        for index, expression in enumerate(EXPRESSIONS):
            x, y = (index % 3) * 512, (index // 3) * 512
            portrait = sheet.crop((x, y, x + 512, y + 512))
            portrait.save(destination / f"{index + 1:02}_{expression}.png", optimize=True)


if __name__ == "__main__":
    main()
