"""Build self-contained annotations for the October 9 sheeting sequence."""

from base64 import b64encode
from html import escape
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PHOTOS = {
    "IMG_0167": (
        "October 9: sheet inside the forms",
        [
            (0.51, 0.57, "White sheet across the interior"),
            (0.64, 0.46, "Erected perimeter shuttering"),
            (0.56, 0.65, "Projecting shaft reinforcement"),
            (0.67, 0.58, "Workers beside the sheet"),
            (0.76, 0.43, "Ladder access"),
        ],
    ),
    "IMG_0169": (
        "October 9: sheeting close up",
        [
            (0.48, 0.47, "Sheet around a shaft-head opening"),
            (0.57, 0.23, "Sheet meets the inner form edge"),
            (0.67, 0.56, "Worker handling material"),
            (0.76, 0.35, "Access ladder above the form"),
        ],
    ),
}


def build(name: str, title: str, pins: list[tuple[float, float, str]]) -> None:
    photo = ROOT / "images/web" / f"{name}.jpg"
    width, height = Image.open(photo).size
    margin = 0.055 * width
    heading = 0.044 * width
    line_height = 0.065 * width
    rows = (len(pins) + 1) // 2
    footer_height = int(heading + rows * line_height + margin * 2.2)
    image_data = b64encode(photo.read_bytes()).decode("ascii")
    pieces = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height + footer_height}" viewBox="0 0 {width} {height + footer_height}" role="img" aria-labelledby="title desc">',
        f'<title id="title">{escape(title)}</title>',
        f'<desc id="desc">October 9, 2026 photograph with numbered callouts: {escape("; ".join(label for _, _, label in pins))}.</desc>',
        f'<image x="0" y="0" width="{width}" height="{height}" href="data:image/jpeg;base64,{image_data}"/>',
        f'<rect x="0" y="{height}" width="{width}" height="{footer_height}" fill="#142b38"/>',
        f'<text x="{margin:.0f}" y="{height + margin + heading * .65:.0f}" fill="#ffffff" font-family="Arial,sans-serif" font-size="{heading:.0f}" font-weight="700">{escape(title)}</text>',
    ]
    for index, (x, y, label) in enumerate(pins, 1):
        px, py = x * width, y * height
        radius = width * 0.017
        pieces += [
            f'<circle cx="{px:.0f}" cy="{py:.0f}" r="{radius * 1.4:.0f}" fill="#142b38" fill-opacity=".45"/>',
            f'<circle cx="{px:.0f}" cy="{py:.0f}" r="{radius:.0f}" fill="#fffdf7" stroke="#efad52" stroke-width="{width * .0025:.0f}"/>',
            f'<text x="{px:.0f}" y="{py + radius * .38:.0f}" fill="#142b38" text-anchor="middle" font-family="Arial,sans-serif" font-size="{radius * 1.25:.0f}" font-weight="700">{index}</text>',
        ]
        col = (index - 1) % 2
        row = (index - 1) // 2
        tx = margin + col * width * 0.47
        ty = height + margin + heading + (row + 0.7) * line_height
        pieces.append(f'<text x="{tx:.0f}" y="{ty:.0f}" fill="#e8f0f0" font-family="Arial,sans-serif" font-size="{width * .018:.0f}"><tspan fill="#efad52" font-weight="700">{index:02d}</tspan><tspan dx="{width * .009:.0f}">{escape(label)}</tspan></text>')
    pieces.append("</svg>")
    output = ROOT / "images/annotated" / f"{name}.svg"
    output.write_text("\n".join(pieces), encoding="utf-8")
    print(output.relative_to(ROOT), output.stat().st_size)


for photo_name, (photo_title, photo_pins) in PHOTOS.items():
    build(photo_name, photo_title, photo_pins)
