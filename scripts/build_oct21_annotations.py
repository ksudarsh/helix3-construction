"""Reproducible numbered vector overlays on unchanged photographic viewing copies."""
from base64 import b64encode
from html import escape
from pathlib import Path
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
PHOTOS={
'0171':('October 13: lining before reinforcement',[(.18,.53,'White sheet inside the forms'),(.28,.55,'Opening around a shaft head'),(.72,.64,'Projecting shaft reinforcement'),(.85,.68,'Perimeter shuttering')]),
'0174':('October 14: reinforcing steel goes in',[(.68,.57,'Horizontal reinforcing steel'),(.34,.51,'Upright bars within the enclosure'),(.75,.66,'Shuttering around the square'),(.27,.14,'Compact excavator near shaft heads')]),
'0199':('October 16: a densely reinforced square',[(.60,.60,'Closely spaced horizontal bars'),(.56,.34,'Projecting vertical reinforcement'),(.19,.58,'White lining at the form edge'),(.86,.85,'Exposed shaft head beside the forms')]),
'0209':('October 17: concrete delivery and pumping',[(.31,.13,'Concrete mixer at the site edge'),(.25,.62,'Truck-mounted concrete pump'),(.69,.51,'Articulated placing boom'),(.85,.87,'Boom reaches toward the formed square')]),
'0212':('October 17: two stages side by side',[(.47,.58,'Concrete surface in the initial square'),(.52,.64,'Adjacent gray prepared base'),(.64,.66,'Shaft bars remain exposed'),(.48,.75,'Yellow crane on outriggers')]),
'2470':('October 21: neighboring zones take shape',[(.25,.36,'Shuttering around another rectangle'),(.38,.43,'Projecting reinforcement inside'),(.48,.58,'Gray base around shaft-bar groups'),(.54,.55,'Excavator breaker attachment')]),
'2471':('October 21: the crane at the west end',[(.48,.42,'White mobile crane'),(.40,.65,'Extended crane outriggers'),(.74,.62,'Telehandler beside the crane'),(.88,.53,'Yellow crane boom in the foreground')]),
'2473':('October 21: the sequence repeats nearby',[(.28,.65,'White sheet in a newer formed zone'),(.83,.59,'Sheet leaves shaft-head openings'),(.78,.50,'Prepared base with projecting bars'),(.28,.44,'Reinforcing steel being assembled')]),
'2474':('October 21: cranes at opposite ends',[(.41,.19,'White crane at the far / west end'),(.50,.83,'Yellow crane at the near / east end'),(.72,.62,'Newer lined foundation zone'),(.53,.48,'Adjoining zones at earlier stages')]),
}
def build(code,title,pins):
 name='IMG_'+code;photo=ROOT/'images/web'/f'{name}.jpg';w,h=Image.open(photo).size
 # A single-column legend remains readable on portrait photographs and phones.
 margin=w*.045;font=w*.025;line=w*.054;head=w*.037;footer=int(margin*2+head+line*len(pins))
 parts=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h+footer}" viewBox="0 0 {w} {h+footer}" role="img" aria-labelledby="title desc">',f'<title id="title">{escape(title)}</title>',f'<desc id="desc">Numbered callouts: {escape("; ".join(p[2] for p in pins))}. Compass orientation supplied by the observer.</desc>',f'<image width="{w}" height="{h}" href="data:image/jpeg;base64,{b64encode(photo.read_bytes()).decode()}"/>',f'<rect y="{h}" width="{w}" height="{footer}" fill="#142b38"/>',f'<text x="{margin}" y="{h+margin+head*.8}" font-family="Arial,sans-serif" font-size="{head}" font-weight="700" fill="white">{escape(title)}</text>']
 for i,(x,y,label) in enumerate(pins,1):
  x*=w;y*=h;r=w*.022
  parts += [f'<circle cx="{x}" cy="{y}" r="{r*1.35}" fill="#142b38" fill-opacity=".65"/>',f'<circle cx="{x}" cy="{y}" r="{r}" fill="#fffdf7" stroke="#efad52" stroke-width="{w*.003}"/>',f'<text x="{x}" y="{y+r*.36}" text-anchor="middle" font-family="Arial,sans-serif" font-size="{r*1.2}" font-weight="700" fill="#142b38">{i}</text>',f'<text x="{margin}" y="{h+margin+head+line*(i-.15)}" font-family="Arial,sans-serif" font-size="{font}" fill="#e8f0f0"><tspan font-weight="700" fill="#efad52">{i:02d}</tspan><tspan dx="{w*.018}">{escape(label)}</tspan></text>']
 parts.append('</svg>');(ROOT/'images/annotated'/f'{name}.svg').write_text('\n'.join(parts))
if __name__=='__main__':
 for code,(title,pins) in PHOTOS.items():build(code,title,pins)
