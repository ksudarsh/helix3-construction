(()=>{
  const section=document.createElement('section');
  section.id='latest';section.className='section';
  section.innerHTML=`<div class="wrap">
    <div class="eyebrow">Field update · September 15, 2026</div>
    <h2>The steel shell opens.<br>The concrete is revealed.</h2>
    <p class="lede">Further excavation has exposed more of the shaft casings. Today, cutting sparks and opened steel sections reveal what was previously hidden: concrete shaft heads and their reinforcing bars.</p>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/annotated/IMG_6266.svg" alt="Annotated September 15 photo locating cutting sparks, remaining steel casing, exposed concrete and perimeter shoring"><figcaption>Cutting at the exposed casing. Numbered callouts identify visible evidence.<br><a class="photo-original" href="images/originals/IMG_6266.JPG" target="_blank" rel="noopener">Inspect original photograph</a></figcaption></figure>
      <div class="haulage-copy">
        <article class="card"><div class="status observed">Observed</div><h3>Steel cut away around the shaft head</h3><p>A bright cutting point and sparks are visible at the casing. Nearby shafts have open sides with cut steel edges, concrete surfaces, vertical bars and circular reinforcement exposed. Gas cylinders and hoses are present; the observer reports gas cutting.</p><div class="status likely">Likely</div><p>This is upper-casing cutback and removal, providing access around the shaft heads as excavation proceeds. It is consistent with preparation for later trimming, inspection and connection work.</p><div class="status unknown">Unknown</div><p>The final cutoff elevation, acceptance of the exposed concrete and eventual cap, mat or grade-beam layout are not established. Removing upper casing does not tell us whether casing retained deeper down contributes structurally.</p></article>
        <p class="note"><b>What changed in our interpretation:</b> earlier steel scrap suggested casing cutback. These photographs now directly show cutting and the opened shell. They do not show the entire shaft being uncased or the whole foundation program complete.</p>
      </div>
    </div>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/annotated/IMG_6271.svg" alt="Annotated concrete shaft heads with projecting vertical and circular reinforcement, cut casing edges and nearby gas cylinders"><figcaption>The exposed concrete and reinforcement are easier to read once the steel shell is opened.<br><a class="photo-original" href="images/originals/IMG_6271.JPG" target="_blank" rel="noopener">Inspect original photograph</a></figcaption></figure>
      <div class="haulage-copy">
        <figure><img loading="lazy" src="images/annotated/IMG_6268.svg" alt="Annotated site overview showing the casing-cutting area, removed steel segments, exposed casings and perimeter shoring"><figcaption>The wider view connects casing removal with excavation and material handling.</figcaption></figure>
        <article class="card"><h3>Why the concrete top is not the whole story</h3><p>In drilled-shaft construction, excess or contaminated concrete at the head may need removal before the next structural connection. That is general construction context, not a diagnosis of the rough surface in these photographs. The images cannot establish concrete quality or the approved trimming level.</p><p><a href="https://www.fhwa.dot.gov/engineering/geotech/nhi18024.pdf" target="_blank" rel="noopener">FHWA Drilled Shafts Manual, §7.3.4</a> explains shaft-head completion; project drawings and inspection records would establish the HELIX 3 requirements.</p></article>
      </div>
    </div>
    <details class="guide-item"><summary><span class="guide-title">Read the deeper excavation and shoring together</span><span class="guide-chevron">+</span></summary><div class="guide-body"><p><b>Observed:</b> casings 48, 49 and 40 now stand above a lower, uneven working surface beside steel posts and horizontal lagging. <b>Likely:</b> further soil removal has increased the exposed casing length and retained height. The observer identifies the heavily supported boundaries as the north and south walls. <b>Unknown:</b> measured excavation depth, wall loads, support embedment and movement.</p><img loading="lazy" src="images/annotated/IMG_6272.svg" alt="Annotated casing corridor identifying casing 48, casing 49, shoring and gas equipment"><p>Annotations are separate vector overlays on the unchanged camera images. Four complementary frames were selected from seven; repetitive views were left on the card. Tap an image to enlarge it.</p></div></details>
  </div>`;
  document.querySelector('#history').before(section);
  const nav=document.querySelector('.nav .wrap');const link=document.createElement('a');link.href='#latest';link.textContent='Latest update';nav.insertBefore(link,nav.querySelector('a'));
  section.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>openLightbox(img.src,img.alt)));
})();
