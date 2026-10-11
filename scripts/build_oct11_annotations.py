"""Build self-contained, numbered SVG overlays for the October 11 photo set."""

from base64 import b64encode
from html import escape
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PHOTOS = {
    "IMG_1707": (
        "The formed inner area",
        [
            (0.25, 0.49, "Projecting bars at a shaft head"),
            (0.60, 0.52, "Another exposed shaft head"),
            (0.30, 0.29, "Black form-facing panels"),
            (0.64, 0.40, "White sheet over part of the surface"),
            (0.52, 0.84, "Orange perimeter formwork"),
            (0.86, 0.37, "Temporary access platform"),
        ],
    ),
    "IMG_1709": (
        "The full excavation on October 11",
        [
            (0.43, 0.59, "Newly formed inner area"),
            (0.56, 0.48, "Exposed shaft heads across the cut"),
            (0.48, 0.77, "Mobile crane on outriggers"),
            (0.76, 0.79, "Bent reinforcing bars staged nearby"),
        ],
    ),
    "IMG_1710": (
        "Equipment beside exposed shafts",
        [
            (0.79, 0.35, "CAT excavator at the far work area"),
            (0.32, 0.49, "Open debris container"),
            (0.43, 0.67, "Exposed shaft reinforcement"),
            (0.77, 0.71, "Another shaft head in the cut"),
        ],
    ),
    "IMG_1711": (
        "Bent bars await installation",
        [
            (0.39, 0.47, "Repeated right-angle bar bends"),
            (0.67, 0.56, "Bundled, parallel lengths"),
            (0.68, 0.79, "More bars staged on the ground"),
        ],
    ),
    "IMG_1712": (
        "Materials beside the shoring",
        [
            (0.35, 0.55, "Long bent bars staged at the edge"),
            (0.78, 0.43, "Perimeter shoring wall"),
            (0.83, 0.71, "Projecting shaft bars below"),
            (0.37, 0.28, "Street-side material area"),
        ],
    ),
    "IMG_1713": (
        "Crane, shafts and formed area",
        [
            (0.19, 0.28, "Two exposed shaft heads"),
            (0.45, 0.64, "Crane boom and hook assembly"),
            (0.82, 0.49, "Formed inner area at right"),
            (0.53, 0.80, "Bent bars staged below the boom"),
        ],
    ),
}


def build(name: str, title: str, pins: list[tuple[float, float, str]]) -> None:
    photo = ROOT / "images/web" / f"{name}.jpg"
    width, height = Image.open(photo).size
    margin = 0.055 * width
    heading = 0.048 * width
    line_height = 0.079 * width
    rows = (len(pins) + 1) // 2
    footer_height = int(heading + rows * line_height + margin * 2.35)
    whole_height = height + footer_height
    image_data = b64encode(photo.read_bytes()).decode("ascii")
    pieces = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{whole_height}" viewBox="0 0 {width} {whole_height}" role="img" aria-labelledby="title desc">',
        f'<title id="title">{escape(title)}</title>',
        f'<desc id="desc">October 11, 2026 photograph with numbered callouts: {escape("; ".join(label for _, _, label in pins))}.</desc>',
        f'<image x="0" y="0" width="{width}" height="{height}" href="data:image/jpeg;base64,{image_data}"/>',
        f'<rect x="0" y="{height}" width="{width}" height="{footer_height}" fill="#142b38"/>',
        f'<text x="{margin:.0f}" y="{height + margin + heading * .65:.0f}" fill="#ffffff" font-family="Arial,sans-serif" font-size="{heading:.0f}" font-weight="700">{escape(title)}</text>',
    ]
    for index, (x, y, label) in enumerate(pins, 1):
        px, py = x * width, y * height
        radius = width * 0.022
        pieces += [
            f'<circle cx="{px:.0f}" cy="{py:.0f}" r="{radius * 1.4:.0f}" fill="#142b38" fill-opacity=".45"/>',
            f'<circle cx="{px:.0f}" cy="{py:.0f}" r="{radius:.0f}" fill="#fffdf7" stroke="#efad52" stroke-width="{width * .003:.0f}"/>',
            f'<text x="{px:.0f}" y="{py + radius * .38:.0f}" fill="#142b38" text-anchor="middle" font-family="Arial,sans-serif" font-size="{radius * 1.25:.0f}" font-weight="700">{index}</text>',
        ]
        col = (index - 1) % 2
        row = (index - 1) // 2
        tx = margin + col * width * 0.47
        ty = height + margin + heading + (row + 0.7) * line_height
        pieces.append(f'<text x="{tx:.0f}" y="{ty:.0f}" fill="#e8f0f0" font-family="Arial,sans-serif" font-size="{width * .021:.0f}"><tspan fill="#efad52" font-weight="700">{index:02d}</tspan><tspan dx="{width * .012:.0f}">{escape(label)}</tspan></text>')
    pieces.append("</svg>")
    output = ROOT / "images/annotated" / f"{name}.svg"
    output.write_text("\n".join(pieces), encoding="utf-8")
    print(output.relative_to(ROOT), output.stat().st_size)


for photo_name, (photo_title, photo_pins) in PHOTOS.items():
    build(photo_name, photo_title, photo_pins)
