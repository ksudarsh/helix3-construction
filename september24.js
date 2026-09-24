(()=>{
  const section=document.createElement('section');
  section.id='update-sept24';section.className='section';
  section.innerHTML=`<div class="wrap">
    <div class="eyebrow">Field update · September 24, 2026</div>
    <h2>Two more shafts emerge<br>from a deeper cut.</h2>
    <p class="lede">A CAT excavator is working beside a localized pocket cut below the surrounding surface. Two drilled-shaft heads now stand inside it, surrounded by water and sharply broken, rock-rich excavation material. The photograph captures both the scale of the ongoing earthwork and the day-to-day logistics that sustain it.</p>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/annotated/IMG_0060.svg" alt="Annotated September 24 overview locating two shaft heads in a water-filled cut, angular material, exposed shoring and a red service truck near a Volvo excavator"><figcaption>Two exposed shaft heads sit in the deeper water-filled pocket; the red service truck is beside the Volvo in the foreground.<br><a class="photo-original" href="images/originals/IMG_0060.jpeg" target="_blank" rel="noopener">Inspect original photograph</a></figcaption></figure>
      <div class="haulage-copy">
        <article class="card"><div class="status observed">Observed</div><h3>Excavation drops around completed shafts</h3><p>The two circular elements in the deeper pocket are drilled-shaft heads, not building columns. A CAT excavator works along the edge while angular material covers much of the adjacent floor. Water collects at the lower elevation. The observer identifies this large CAT as the 390; its precise model number is not established by markings in this frame.</p><div class="status observed">Observed</div><h3>More of the retained wall is visible</h3><p>As the excavation floor falls, a greater height of the perimeter shoring is exposed. The photograph does not by itself show that the wall has been extended or reveal its engineered support capacity.</p><div class="status likely">Likely</div><p>The angular material appears rock-rich, but photographs cannot distinguish weathered bedrock from broken rock fill or classify the strata.</p></article>
        <article class="card"><div class="status observed">Observer report</div><h3>The morning refueling ritual</h3><p>A red service truck is parked beside a Volvo excavator. The observer reports that equipment is refueled each morning; this frame does not show a fuel hose or prove that a transfer is underway. Heavy excavation still runs on a daily choreography of fuel, maintenance, trucking and access—diesel and money, as the site observer puts it.</p></article>
      </div>
    </div>
  </div>`;
  document.querySelector('#update-sept22').before(section);
  const nav=document.querySelector('.nav .wrap');const link=document.createElement('a');link.href='#update-sept24';link.textContent='September 24';nav.insertBefore(link,nav.querySelector('a'));
  section.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>openLightbox(img.src,img.alt)));
})();
