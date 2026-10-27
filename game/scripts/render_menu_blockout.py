"""Cria uma pré-visualização raster original para o menu, sem serviços externos.

Requer Pillow e NumPy somente para regenerar a arte provisória. O jogo usa apenas
o WebP exportado; a ilustração anime final deverá substituir este arquivo.
"""

from pathlib import Path
import math
import random

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont


W, H = 1920, 1080
RNG = random.Random(46)
OUT = Path(__file__).resolve().parents[1] / "docs" / "visual-history" / "cafe-blockout.webp"


def gradient(top, bottom, width=W, height=H):
    a = np.asarray(top, dtype=np.float32)
    b = np.asarray(bottom, dtype=np.float32)
    t = np.linspace(0, 1, height, dtype=np.float32)[:, None, None]
    values = a[None, None, :] * (1 - t) + b[None, None, :] * t
    return Image.fromarray(np.broadcast_to(values, (height, width, 3)).astype("uint8"), "RGB").convert("RGBA")


def glow(image, cx, cy, rx, ry, color, opacity):
    layer = Image.new("RGBA", image.size, (0, 0, 0, 0))
    left, top = max(0, int(cx - rx)), max(0, int(cy - ry))
    right, bottom = min(W, int(cx + rx)), min(H, int(cy + ry))
    if right <= left or bottom <= top:
        return
    yy, xx = np.mgrid[top:bottom, left:right]
    distance = ((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2
    alpha = np.clip((1 - distance) ** 2, 0, 1) * opacity
    rgba = np.empty((bottom - top, right - left, 4), dtype=np.uint8)
    rgba[:, :, :3] = color
    rgba[:, :, 3] = (alpha * 255).astype("uint8")
    layer.alpha_composite(Image.fromarray(rgba, "RGBA"), (left, top))
    image.alpha_composite(layer)


def polygon(draw, points, fill, outline=None, width=1):
    draw.polygon(points, fill=fill)
    if outline:
        draw.line(points + [points[0]], fill=outline, width=width, joint="curve")


canvas = gradient((43, 39, 48), (73, 55, 55))
draw = ImageDraw.Draw(canvas, "RGBA")

# Ceiling, plaster, wall panels and a dim left booth: the negative space for UI.
polygon(draw, [(0, 0), (1920, 0), (1920, 188), (0, 126)], (31, 34, 44, 255))
polygon(draw, [(0, 120), (670, 148), (670, 719), (0, 769)], (53, 42, 49, 220))
draw.line([(670, 146), (670, 731)], fill=(168, 133, 113, 80), width=6)
for y in (265, 497, 700):
    draw.line([(0, y + 23), (670, y)], fill=(184, 141, 113, 40), width=4)
polygon(draw, [(0, 752), (664, 702), (809, 1080), (0, 1080)], (46, 34, 41, 255))
polygon(draw, [(0, 812), (612, 757), (674, 914), (0, 982)], (67, 43, 48, 210))
draw.line([(0, 809), (610, 755)], fill=(205, 143, 106, 76), width=7)

# Large rain window. The outer view is softened like painted scenery.
window_box = (760, 143, 1816, 711)
outside = gradient((40, 52, 74), (101, 95, 120), window_box[2] - window_box[0], window_box[3] - window_box[1])
od = ImageDraw.Draw(outside, "RGBA")
for i in range(37):
    x = RNG.randint(0, outside.width)
    ht = RNG.randint(100, 360)
    y = outside.height - ht
    c = RNG.choice([(45, 55, 77, 220), (53, 61, 83, 230), (62, 66, 86, 210)])
    od.rectangle((x, y, x + RNG.randint(30, 90), outside.height), fill=c)
    for _ in range(RNG.randint(1, 6)):
        wx = x + RNG.randint(5, 38)
        wy = y + RNG.randint(13, max(15, ht - 13))
        od.rectangle((wx, wy, wx + 4, wy + 7), fill=(240, 201, 157, RNG.randint(60, 130)))
outside = outside.filter(ImageFilter.GaussianBlur(4))
canvas.alpha_composite(outside, window_box[:2])
draw = ImageDraw.Draw(canvas, "RGBA")
draw.rectangle((748, 131, 1828, 724), outline=(27, 30, 40, 255), width=31)
draw.rectangle((766, 149, 1810, 706), outline=(178, 142, 120, 85), width=5)
draw.rectangle((1270, 146, 1295, 712), fill=(35, 38, 47, 250))
draw.rectangle((757, 439, 1819, 462), fill=(35, 38, 47, 244))
draw.line([(1277, 150), (1277, 704)], fill=(153, 154, 156, 60), width=3)
draw.line([(760, 449), (1810, 449)], fill=(170, 165, 162, 50), width=3)

# Rain strokes and glass reflection, kept inside the window.
rain = Image.new("RGBA", (1048, 557), (0, 0, 0, 0))
rd = ImageDraw.Draw(rain, "RGBA")
for _ in range(240):
    x = RNG.randint(8, 1037)
    y = RNG.randint(8, 540)
    length = RNG.randint(3, 38)
    rd.line((x, y, x - RNG.randint(0, 8), min(555, y + length)), fill=(222, 224, 232, RNG.randint(25, 85)), width=RNG.choice([1, 1, 2]))
for _ in range(58):
    x = RNG.randint(10, 1032)
    y = RNG.randint(5, 546)
    rd.ellipse((x, y, x + 3, y + RNG.randint(4, 9)), fill=(229, 227, 233, RNG.randint(25, 70)))
rain = rain.filter(ImageFilter.GaussianBlur(.45))
canvas.alpha_composite(rain, (764, 149))

# Back counter, menu board and kitchen light: suggest a Brazilian lanchonete.
draw = ImageDraw.Draw(canvas, "RGBA")
polygon(draw, [(680, 639), (1920, 648), (1920, 843), (680, 814)], (52, 42, 46, 255))
polygon(draw, [(682, 633), (1920, 644), (1920, 662), (678, 651)], (130, 89, 67, 255))
draw.line([(683, 633), (1920, 644)], fill=(214, 156, 109, 80), width=4)
for x in (804, 920, 1041, 1130):
    draw.rectangle((x, 547, x + 9, 624), fill=(30, 31, 38, 180))
    draw.ellipse((x - 12, 535, x + 22, 553), fill=(99, 66, 58, 200))
draw.rounded_rectangle((78, 217, 424, 475), radius=8, fill=(31, 35, 43, 210), outline=(140, 96, 73, 100), width=6)
try:
    board_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 24)
except OSError:
    board_font = ImageFont.load_default()
draw.text((118, 265), "CAFÉ COADO", font=board_font, fill=(223, 185, 136, 180))
draw.text((118, 330), "PÃO DE QUEIJO", font=board_font, fill=(223, 185, 136, 160))
draw.line((118, 307, 375, 307), fill=(225, 184, 134, 60), width=2)
draw.line((118, 374, 375, 374), fill=(225, 184, 134, 60), width=2)

# Lamps are integrated into the room rather than used as UI ornaments.
for x, y, scale in ((684, 266, 1), (1530, 284, .86)):
    draw.line((x, 0, x, y - 25), fill=(22, 25, 32, 240), width=7)
    polygon(draw, [(x - 75 * scale, y + 18), (x - 35 * scale, y - 30), (x + 35 * scale, y - 30), (x + 75 * scale, y + 18)], (62, 44, 42, 255))
    draw.ellipse((x - 66 * scale, y + 10, x + 66 * scale, y + 31), fill=(235, 186, 121, 155))
    glow(canvas, x, y + 125, 350 * scale, 330 * scale, (243, 173, 103), .35)
    draw = ImageDraw.Draw(canvas, "RGBA")

# Furniture depth: distant chairs, then a broad foreground table.
for x, y, scale in ((894, 750, .85), (1691, 775, 1.0)):
    polygon(draw, [(x - 56 * scale, y - 43 * scale), (x + 58 * scale, y - 38 * scale), (x + 45 * scale, y + 44 * scale), (x - 45 * scale, y + 42 * scale)], (50, 43, 48, 220))
    draw.line((x - 39 * scale, y + 31 * scale, x - 52 * scale, y + 188 * scale), fill=(39, 35, 39, 220), width=14)
    draw.line((x + 39 * scale, y + 31 * scale, x + 54 * scale, y + 188 * scale), fill=(39, 35, 39, 220), width=14)
polygon(draw, [(690, 807), (1920, 787), (1920, 1080), (407, 1080)], (105, 69, 57, 255))
polygon(draw, [(690, 807), (1920, 787), (1920, 818), (670, 843)], (152, 100, 69, 255))
draw.line((682, 819, 1919, 801), fill=(222, 160, 103, 105), width=6)
for i in range(25):
    y = 849 + i * 11
    draw.line((612 - i * 8, y, 1920, y - 22), fill=(48, 35, 34, RNG.randint(9, 30)), width=RNG.randint(1, 4))

# A cup, glass, study notebook, bag, and small phone give the scene its story cue.
draw.ellipse((1300, 850, 1530, 925), fill=(31, 29, 34, 90))
draw.ellipse((1320, 843, 1507, 900), fill=(211, 181, 151, 230))
draw.ellipse((1345, 858, 1485, 888), fill=(91, 61, 52, 225))
polygon(draw, [(1356, 783), (1469, 778), (1485, 868), (1346, 872)], (226, 205, 179, 255))
draw.ellipse((1357, 768, 1468, 808), fill=(229, 214, 192, 255))
draw.ellipse((1370, 778, 1456, 798), fill=(84, 54, 47, 255))
draw.arc((1460, 795, 1524, 857), 260, 90, fill=(223, 202, 175, 230), width=15)

polygon(draw, [(824, 872), (1090, 838), (1191, 938), (920, 984)], (208, 189, 165, 255))
polygon(draw, [(839, 871), (1087, 844), (1171, 930), (925, 970)], (236, 220, 192, 255))
draw.line((1010, 858, 1025, 958), fill=(138, 111, 92, 125), width=3)
for n in range(5):
    draw.line((871 + n * 5, 895 + n * 10, 1003, 882 + n * 13), fill=(81, 107, 118, 55), width=2)
draw.line((1070, 904, 1140, 938), fill=(36, 47, 57, 240), width=7)

polygon(draw, [(1767, 814), (1873, 791), (1920, 841), (1920, 957), (1778, 929)], (59, 53, 62, 245))
draw.arc((1770, 735, 1858, 856), 178, 353, fill=(49, 43, 50, 210), width=17)

phone = Image.new("RGBA", (226, 140), (0, 0, 0, 0))
pd = ImageDraw.Draw(phone, "RGBA")
pd.rounded_rectangle((11, 12, 211, 127), radius=18, fill=(21, 30, 42, 255), outline=(184, 177, 163, 220), width=5)
pd.rounded_rectangle((23, 23, 199, 115), radius=8, fill=(55, 77, 93, 255))
pd.rounded_rectangle((33, 43, 188, 95), radius=8, fill=(196, 207, 208, 225))
try:
    font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 14)
except OSError:
    font = ImageFont.load_default()
pd.text((42, 51), "Você viu essa notícia?", font=font, fill=(42, 49, 61, 255))
phone = phone.rotate(17, expand=True, resample=Image.Resampling.BICUBIC)
glow(canvas, 1645, 878, 230, 145, (167, 187, 196), .24)
canvas.alpha_composite(phone, (1570, 827))

# Paint texture and colour grade soften the blockout; this remains provisional art.
texture = Image.new("RGBA", (W, H), (0, 0, 0, 0))
td = ImageDraw.Draw(texture, "RGBA")
for _ in range(2400):
    x, y = RNG.randrange(W), RNG.randrange(H)
    span = RNG.randrange(2, 42)
    colour = RNG.choice([(252, 204, 152, 9), (183, 171, 184, 10), (24, 30, 45, 12)])
    td.line((x, y, x + span, y - RNG.randrange(0, 8)), fill=colour, width=RNG.choice([1, 2, 3]))
canvas.alpha_composite(texture.filter(ImageFilter.GaussianBlur(.4)))
glow(canvas, 680, 520, 760, 620, (224, 151, 100), .16)
glow(canvas, 1540, 310, 610, 450, (200, 138, 108), .14)

arr = np.asarray(canvas.convert("RGB"), dtype=np.int16)
noise = np.random.default_rng(46).normal(0, 2.4, (H, W, 1))
arr = np.clip(arr + noise, 0, 255).astype("uint8")
result = Image.fromarray(arr, "RGB")
OUT.parent.mkdir(parents=True, exist_ok=True)
result.save(OUT, "WEBP", quality=88, method=6)
print(f"Arte provisória exportada: {OUT} ({OUT.stat().st_size // 1024} KiB)")
