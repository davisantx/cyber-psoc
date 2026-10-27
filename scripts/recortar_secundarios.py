"""Recorta as seis expressões das fichas novas de personagens secundários."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SHEETS = ("mae", "luana", "tomas", "nadia")
EXPRESSIONS = ("normal", "feliz", "triste", "surpreso", "pensativo", "aliviado")


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
            portrait = sheet.crop((x, y, x + 512, y + 512))
            portrait.save(destination / f"{index + 1:02}_{expression}.png", optimize=True)


if __name__ == "__main__":
    main()
