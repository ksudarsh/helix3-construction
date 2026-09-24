(()=>{
  const section=document.createElement('section');
  section.id='update-sept22';section.className='section';
  section.innerHTML=`<div class="wrap">
    <div class="eyebrow">Field update · September 22, 2026</div>
    <h2>The excavation opens up<br>the foundation field.</h2>
    <p class="lede">The site has changed scale again. Mass excavation has removed much more of the ground around the drilled shafts, exposing long shaft-head profiles, rough concrete where upper casing has been removed, and reinforcement waiting for the next structural connection.</p>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/annotated/IMG_0055.svg" alt="Annotated September 22 overview identifying exposed drilled-shaft heads, two large excavators and angular rock-rich material"><figcaption>The wide view records the scale of the excavation and the distinct rock-rich working zone.<br><a class="photo-original" href="images/originals/IMG_0055.jpeg" target="_blank" rel="noopener">Inspect original photograph</a></figcaption></figure>
      <div class="haulage-copy">
        <article class="card"><div class="status observed">Observed</div><h3>Much more of the shafts is exposed</h3><p>The surrounding working surface has been lowered around numerous foundations. Along the retained edge, some shaft heads remain within steel casing while others show rough concrete and projecting reinforcement.</p><div class="status likely">Likely</div><p>The coarse, angular material being worked by the large excavators is consistent with weathered or broken rock, rock fill, or another rocky stratum.</p><div class="status unknown">Unknown</div><p>The photographs do not establish excavation depth, intact bedrock, rock type, concrete acceptance or the final cap, grade-beam or mat arrangement.</p></article>
      </div>
    </div>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/annotated/IMG_0054.svg" alt="Annotated September 22 close view showing workers beside a large cased shaft, rough exposed concrete, projecting reinforcement and angular material"><figcaption>Workers beside the nearest shaft provide an unusually clear human scale.<br><a class="photo-original" href="images/originals/IMG_0054.jpeg" target="_blank" rel="noopener">Inspect original photograph</a></figcaption></figure>
      <div class="haulage-copy">
        <article class="card"><h3>Rough concrete and projecting bars</h3><p>These elements are still best described as <b>drilled-shaft heads</b>, not building columns. Concrete cast against an irregular bore—or later exposed and chipped to a cutoff level—need not have an architectural finish. Its rough appearance alone does not demonstrate defective concrete.</p><p>The projecting bars are intentional reinforcement. They will tie the shaft into a future structural connection such as a cap, grade beam, wall base or mat. The exact arrangement will become clear only when horizontal reinforcement is installed.</p></article>
        <p class="note"><b>What changed:</b> the earlier photographs documented casing cutback. September 22 makes the consequence legible at site scale: the soil has dropped away, the shaft heads stand exposed, and the next substructure phase is approaching.</p>
      </div>
    </div>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/annotated/IMG_0056.svg" alt="Annotated September 22 photograph showing one longitudinal casing half still vertical and the detached matching half lying to the right"><figcaption>The paired halves make the removal method unusually clear: the upper casing is split longitudinally into pieces that the excavators can handle.<br><a class="photo-original" href="images/originals/IMG_0056.jpeg" target="_blank" rel="noopener">Inspect original photograph</a></figcaption></figure>
      <div class="haulage-copy">
        <article class="card"><div class="status observed">Observed</div><h3>The casing is being taken off in halves</h3><p>One curved half remains upright beside the shaft while the matching half lies on the ground to the right. The cut is clean and clearly thermal. Earlier photographs and the observer's report establish gas cutting, but this frame alone does not identify acetylene or another fuel gas.</p><h3>Wasteful—or necessary temporary works?</h3><p>The casing consumed a great deal of steel, but it stabilized the upper bore during construction through wet or unstable ground. Once the concrete shaft was complete and excavation exposed its head, the upper casing could obstruct the future cap, wall or mat connection. Splitting it is a practical way to remove steel that may be locked around concrete and soil.</p><p>Cutting prevents reuse as an intact casing, so there is a real embodied-energy cost. Recycling recovers the steel itself, though not all the energy used to manufacture, transport and cut it. The fair conclusion is: <b>material-intensive, but serving an essential temporary function rather than simply being discarded.</b></p></article>
      </div>
    </div>
  </div>`;
  document.querySelector('#latest').before(section);
  const nav=document.querySelector('.nav .wrap');const link=document.createElement('a');link.href='#update-sept22';link.textContent='September 22';nav.insertBefore(link,nav.querySelector('a'));
  section.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>openLightbox(img.src,img.alt)));
})();
