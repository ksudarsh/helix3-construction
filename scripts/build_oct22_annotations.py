"""Reproducible numbered vector overlays on unchanged photographic viewing copies."""
from base64 import b64encode
from html import escape
from pathlib import Path
import subprocess, re
ROOT=Path(__file__).resolve().parents[1]
PHOTOS={
'0253':('October 22: the west-side rectangle',[(.34,.42,'White-lined portion of the west area'),(.62,.48,'Adjacent enclosure with shaft bars'),(.45,.21,'White-crane hook above the work'),(.43,.84,'Exposed shaft head and cutback debris')]),
'0254':('October 22: a larger eastern rectangle',[(.22,.24,'Earlier poured portion (observer)'),(.80,.42,'Lined surrounding area for concrete'),(.74,.22,'Open connection around shaft bars'),(.64,.42,'Reinforcement across adjoining portions')]),
'0260':('October 22: afternoon foundation progress',[(.44,.43,'West-side rectangle taking shape'),(.73,.64,'Larger east-side prepared footprint'),(.32,.59,'Earlier poured portion (observer)'),(.40,.17,'White crane at the west end')]),
}
def build(code,title,pins):
 name='IMG_'+code;photo=ROOT/'images/web'/f'{name}.jpg';size=subprocess.check_output(['sips','-g','pixelWidth','-g','pixelHeight',str(photo)],text=True);w,h=map(int,re.findall(r'pixel(?:Width|Height): (\d+)',size))
 # A single-column legend remains readable on portrait photographs and phones.
 margin=w*.045;font=w*.025;line=w*.054;head=w*.037;footer=int(margin*2+head+line*len(pins))
 parts=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h+footer}" viewBox="0 0 {w} {h+footer}" role="img" aria-labelledby="title desc">',f'<title id="title">{escape(title)}</title>',f'<desc id="desc">Numbered callouts: {escape("; ".join(p[2] for p in pins))}. Compass orientation supplied by the observer.</desc>',f'<image width="{w}" height="{h}" href="data:image/jpeg;base64,{b64encode(photo.read_bytes()).decode()}"/>',f'<rect y="{h}" width="{w}" height="{footer}" fill="#142b38"/>',f'<text x="{margin}" y="{h+margin+head*.8}" font-family="Arial,sans-serif" font-size="{head}" font-weight="700" fill="white">{escape(title)}</text>']
 for i,(x,y,label) in enumerate(pins,1):
  x*=w;y*=h;r=w*.022
  parts += [f'<circle cx="{x}" cy="{y}" r="{r*1.35}" fill="#142b38" fill-opacity=".65"/>',f'<circle cx="{x}" cy="{y}" r="{r}" fill="#fffdf7" stroke="#efad52" stroke-width="{w*.003}"/>',f'<text x="{x}" y="{y+r*.36}" text-anchor="middle" font-family="Arial,sans-serif" font-size="{r*1.2}" font-weight="700" fill="#142b38">{i}</text>',f'<text x="{margin}" y="{h+margin+head+line*(i-.15)}" font-family="Arial,sans-serif" font-size="{font}" fill="#e8f0f0"><tspan font-weight="700" fill="#efad52">{i:02d}</tspan><tspan dx="{w*.018}">{escape(label)}</tspan></text>']
 parts.append('</svg>');(ROOT/'images/annotated'/f'{name}.svg').write_text('\n'.join(parts))
if __name__=='__main__':
 for code,(title,pins) in PHOTOS.items():build(code,title,pins)
