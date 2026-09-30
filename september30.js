(()=>{
  const section=document.createElement('section');
  section.id='update-sept30';section.className='section';
  section.dataset.updateDate='2026-09-30';
  section.innerHTML=`<div class="wrap">
    <div class="eyebrow">Field update</div>
    <h2>Deeper excavation, close work<br>and a steady stream of spoil.</h2>
    <p class="lede">The latest submitted views show earthmoving at several levels. A Volvo loads angular excavated material into a red dump truck while another waits; farther inside, a large CAT and a compact excavator work around a wet pocket with exposed drilled-shaft heads.</p>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/originals/IMG_0076.jpeg" alt="Wide overview of the HELIX 3 excavation, with several excavators, trucks, exposed shaft heads, a wet lower pocket and an angular spoil pile"><figcaption>The repeated wide viewpoint makes the expanded excavation, multiple working levels and exposed foundation pattern easy to compare with earlier entries.</figcaption></figure>
      <div class="haulage-copy"><article class="card">
        <div class="status observed">Observed</div><h3>More of the shaft field is exposed</h3>
        <p>Concrete shaft heads and projecting reinforcement remain visible as the working surface drops around them. Several excavators occupy different benches; water is visible in a deeper localized pocket. The perimeter shoring shows a greater exposed height as excavation advances.</p>
        <div class="status unknown">What the photograph cannot measure</div>
        <p>The depth, groundwater source, shoring design and final elevations require site records. A taller exposed wall does not by itself show that the wall was extended.</p>
      </article></div>
    </div>
    <div class="cutting-grid" style="margin-top:36px">
      <figure><img loading="lazy" src="images/originals/IMG_0075.jpeg" alt="Volvo excavator loading angular rock-rich spoil into a red dump truck, with a second truck waiting"><figcaption>Angular material is being loaded into the truck. Its exact geology and destination are not established by the image.</figcaption></figure>
      <div class="haulage-copy"><article class="card">
        <div class="status observed">Observed</div><h3>The loading cycle in one frame</h3>
        <p>The Volvo's bucket reaches into the near truck bed, already filled with angular fragments, while another truck waits along the boundary. This links the rock-rich excavation seen across the site with visible off-site haulage preparation.</p>
        <div class="status likely">Likely</div><p>Different sized excavators divide bulk excavation and careful work among the foundation shafts. The chunks might be broken or weathered rock, or rock-rich fill; photographs alone cannot identify a bearing stratum.</p>
      </article></div>
    </div>
    <div class="cutting-grid" style="margin-top:36px">
      <figure><img loading="lazy" src="images/originals/IMG_0074.jpeg" alt="Large CAT on a higher bench overlooking a compact excavator, workers and exposed drilled-shaft reinforcement in a wet lower excavation"><figcaption>Workers and the compact machine show the scale of the lower cut and the constrained space around the shaft heads.</figcaption></figure>
      <div class="haulage-copy"><article class="card">
        <div class="status observed">Observed</div><h3>Large and compact machines share the cut</h3>
        <p>The compact excavator remains among several exposed shaft heads at the lower level. A much larger CAT is stationed above, with a narrow attachment extending toward the cut. This is another view of work in the pocket, not evidence of a second lowering of the compact machine.</p>
        <div class="status unknown">Still unresolved</div><p>The precise task of the large excavator's attachment and the final treatment of the shaft heads are not clear in this still.</p>
      </article></div>
    </div>
  </div>`;
  document.querySelector('#update-sept28').before(section);
  const nav=document.querySelector('.nav .wrap');const link=document.createElement('a');link.href='#update-sept30';link.textContent='September 30';nav.insertBefore(link,nav.querySelector('a'));
  section.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>openLightbox(img.src,img.alt)));
})();
