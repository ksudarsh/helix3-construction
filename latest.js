(()=>{
  const section=document.createElement('section');
  section.id='latest';
  section.className='section';
  section.innerHTML=`<div class="wrap">
    <div class="eyebrow">Field update · September 11, 2026</div>
    <h2>Excavation has a supply chain.</h2>
    <p class="lede">The long line of dump trucks makes the earthmoving operation visible beyond the excavation itself. New morning photographs show a CAT 330D loading soil into a truck, while more trucks wait along the site boundary.</p>
    <div class="haulage-layout">
      <figure class="haulage-photo"><img loading="lazy" src="images/web/IMG_5326.jpg" alt="Long line of dump trucks in the barrier-separated lane beside the HELIX 3 excavation"><figcaption>September 11, 7:20 a.m. · Trucks queue beside the shoring. Tap to inspect the full photograph.</figcaption></figure>
      <div class="haulage-copy">
        <article class="card"><div class="status observed">Observed</div><h3>From the excavation into a truck</h3><p>The close views show a CAT 330D bucket over a dump-truck body, with soil entering the bed. The wider view places the loading area beside soil stockpiles, exposed shaft casings and the waiting trucks.</p><div class="status likely">Likely</div><p>The queue supports a coordinated haulage operation: trucks are staged so the excavator can continue loading as vehicles arrive and leave. Material removal links excavation progress to access, loading space and truck turnaround.</p><div class="status unknown">Unknown</div><p>The photographs do not establish daily tonnage, excavation volume, truck capacity, waiting time or disposal destination. A long queue alone does not tell us whether the fleet is efficiently matched to the excavator.</p></article>
        <figure class="haulage-photo"><img loading="lazy" src="images/web/IMG_5328.jpg" alt="CAT 330D loading brown excavated material into a dump truck"><figcaption>IMG_5327 and IMG_5328 capture the same loading operation three seconds apart, not two separate truckloads.</figcaption></figure>
      </div>
    </div>
    <p class="note"><b>Placing the evidence in time:</b> these four iPhone photographs were taken around 7:20 a.m. on September 11, before the afternoon Canon set. They strengthen the evidence for active material removal; they do not demonstrate additional deepening after the afternoon photographs. Unchanged HEIC originals are retained, with JPEG viewing copies in the gallery.</p>
    <h3>The ground drops. The casings emerge.</h3>
    <p class="lede">Excavation is now the most visible operation. Six distinct excavators appear across this photo set, from a mini CAT working in narrow gaps to a large CAT 390F handling bulk earthwork.</p>
    <div class="grid" style="margin-top:28px">
      <article class="card"><div class="status observed">Observed</div><h3>More steel above the ground</h3><p>Compare casings 49 and 40 on September 10 and 11 below. More of their sides are exposed as surrounding ground is removed. Steel posts and horizontal lagging remain visible along the retained boundary.</p></article>
      <article class="card"><div class="status likely">Likely</div><h3>A transition toward substructure excavation</h3><p>The fleet and exposed shafts are consistent with excavation around previously installed foundations. Greater retained height increases the importance of lateral earth support. The observer identifies the heavily supported edges as the north and south walls.</p></article>
      <article class="card"><div class="status unknown">Unknown</div><h3>The final levels and connections</h3><p>The observer reports the drilling rig gone; no tall rig is visible in the September 10 overview. That does not establish that all shafts are complete. Excavation depth, shoring capacity and the final cap, mat or grade-beam arrangement remain unconfirmed.</p></article>
    </div>
    <div class="history-compare">
      <figure><div class="history-label">September 10</div><img loading="lazy" src="images/originals/IMG_6245.JPG" alt="September 10 casings 49 and 40 beside the shoring before further excavation"><figcaption>Casings 49 and 40 provide recognizable comparison points.</figcaption></figure>
      <div class="history-arrow" aria-hidden="true">→</div>
      <figure><div class="history-label">September 11</div><img loading="lazy" src="images/originals/IMG_6254.JPG" alt="September 11 CAT excavator between more exposed casings 49 and 40"><figcaption>More casing length is exposed around the excavator. Viewpoints differ; this is a qualitative comparison.</figcaption></figure>
    </div>
    <p class="note"><b>Reading the sequence:</b> the tubes have not necessarily become taller—the soil around them has been lowered. Exposed length does not reveal the full shaft depth, and a dark casing interior does not establish that the shaft is empty.</p>
    <details class="guide-item"><summary><span class="guide-title">Corrections to the earlier journal</span><span class="guide-chevron">+</span></summary><div class="guide-body"><p>The September 11 review corrected mismatched captions and field-guide photographs. IMG_6238 shows a large CAT, not a compact excavator; IMG_6239 shows a CAT 330D; IMG_6240 shows a Volvo on the access lane; IMG_6242 and IMG_6243 show reinforcement and casing material, not active drilling; IMG_6247 provides the CAT 390F identification.</p><p>Camera metadata dates IMG_6230–IMG_6232 to September 4, not September 10. The drilling rig is visible in IMG_6232 and absent from the September 10 overview IMG_6241. Earlier drilling descriptions remain part of the historical construction sequence.</p><p>All 12 September 11 camera originals are retained. The clearer views support identification without enhancement; glare remains visible in several alternate views. Exact equipment models are stated only where markings are legible. Six individual machines are distinguished by body shape, blade, markings and location; that does not establish six different models or rated size classes.</p></div></details>
  </div>`;
  document.querySelector('#what').before(section);
  const nav=document.querySelector('.nav .wrap');
  const link=document.createElement('a'); link.href='#latest'; link.textContent='Latest update';
  nav.insertBefore(link,nav.querySelector('a'));
  section.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>openLightbox(img.src,img.alt)));
})();
