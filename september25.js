(()=>{
  const section=document.createElement('section');
  section.id='update-sept25';section.className='section';
  section.dataset.updateDate='2026-09-25';
  section.innerHTML=`<div class="wrap">
    <div class="eyebrow">Field update</div>
    <h2>A compact excavator<br>goes down into the cut.</h2>
    <p class="lede">The excavation has moved beyond broad earthmoving alone. A large excavator lowered a compact CAT into a confined pocket so it could perform finer excavation and cleanup around the exposed drilled-shaft heads. Workers and the orange access ladder make the scale of the operation unusually clear.</p>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/web/IMG_0065.jpg" alt="Compact CAT excavator working in a lower water-filled pocket among exposed drilled-shaft heads, with a large excavator above, workers and an orange access ladder"><figcaption>The compact machine works at the lower level while the large excavator remains above. Workers and the orange ladder provide scale.<br><a class="photo-original" href="images/originals/IMG_0065.heic" download>Download HEIC original</a></figcaption></figure>
      <div class="haulage-copy">
        <article class="card"><div class="status observed">Observed</div><h3>Different machines for different scales of work</h3><p>A compact CAT is positioned in the deeper pocket beside exposed shaft heads and standing water. A much larger CAT occupies the higher working bench. Several workers stand at different elevations, and an orange ladder reaches down the cut face.</p><div class="status observed">Observer report</div><p>The site observer watched the large excavator lower the compact excavator into the excavation and reports that the smaller machine was used for finer excavation and cleaning around the shafts.</p><div class="status likely">Likely</div><p>The compact machine's smaller footprint and shorter working envelope let it operate in gaps where the larger excavator would have limited room near reinforcement, irregular rock-rich faces and foundation elements.</p><div class="status unknown">Unknown</div><p>The photographs do not establish the measured lift depth, rigging design, excavation elevation, production rate or final shaft-head preparation requirements.</p></article>
      </div>
    </div>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/web/IMG_0062.jpg" alt="Large CAT excavator lowering a compact CAT excavator on a support platform into a deeper excavation pocket while workers guide the operation"><figcaption>8:21:41 a.m. · The compact excavator is suspended over the lower pocket while workers monitor the placement.</figcaption></figure>
      <figure><img loading="lazy" src="images/web/IMG_0063.jpg" alt="The same compact excavator lowering operation nine seconds later beside exposed shaft reinforcement and an orange ladder"><figcaption>8:21:50 a.m. · Nine seconds later. These frames document one coordinated placement, not two separate lifts.</figcaption></figure>
    </div>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/web/IMG_0061.jpg" alt="September 25 dawn overview of the HELIX 3 excavation with exposed drilled-shaft heads, rock-rich material, standing water and excavators across the site"><figcaption>The dawn overview shows how broadly the working surface has dropped around the foundation field.</figcaption></figure>
      <div class="haulage-copy">
        <article class="card"><div class="status observed">Observed</div><h3>Upper casing removal continues across the site</h3><p>Many shaft locations now show concrete and projecting reinforcement rather than tall intact steel shells. Cut steel sections and remaining exposed casing are still visible elsewhere.</p><div class="status observed">Observer report</div><p>The observer reports that the steel tubing is being removed as excavation progresses. In the context of the documented cutting, splitting, flattening and recycling sequence, this establishes an ongoing site-wide casing-removal operation.</p><div class="status unknown">Important limit</div><p>The evidence supports removal of exposed upper casing. It does not establish that every casing has already been removed or that no steel remains below the visible excavation level.</p></article>
        <p class="note"><b>Scale without a tape measure:</b> the ladder, workers and compact excavator make the depth visually legible, but perspective and uneven ground prevent a reliable dimension from these photographs alone.</p>
      </div>
    </div>
  </div>`;
  document.querySelector('#update-sept24').before(section);
  const nav=document.querySelector('.nav .wrap');const link=document.createElement('a');link.href='#update-sept25';link.textContent='September 25';nav.insertBefore(link,nav.querySelector('a'));
  section.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>openLightbox(img.src,img.alt)));
})();
