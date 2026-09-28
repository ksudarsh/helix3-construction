(()=>{
  const section=document.createElement('section');
  section.id='update-sept24';section.className='section';
  section.dataset.updateDate='2026-09-24';
  section.innerHTML=`<div class="wrap">
    <div class="eyebrow">Field update</div>
    <h2>Two more shafts emerge<br>from a deeper cut.</h2>
    <p class="lede">A CAT excavator is working beside a localized pocket cut below the surrounding surface. Two drilled-shaft heads now stand inside it, surrounded by water and sharply broken, rock-rich excavation material. The photograph captures both the scale of the ongoing earthwork and the day-to-day logistics that sustain it.</p>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/annotated/IMG_0060.svg" alt="Annotated September 24 overview locating two shaft heads in a water-filled cut, angular material, exposed shoring and a red service truck near a Volvo excavator"><figcaption>Two exposed shaft heads sit in the deeper water-filled pocket; the red service truck is beside the Volvo in the foreground.<br><a class="photo-original" href="images/originals/IMG_0060.jpeg" target="_blank" rel="noopener">Inspect original photograph</a></figcaption></figure>
      <div class="haulage-copy">
        <article class="card"><div class="status observed">Observed</div><h3>Excavation drops around completed shafts</h3><p>The two circular elements in the deeper pocket are drilled-shaft heads, not building columns. A CAT excavator works along the edge while angular material covers much of the adjacent floor. Water collects at the lower elevation. The observer identifies this large CAT as the 390; its precise model number is not established by markings in this frame.</p><div class="status observed">Observed</div><h3>More of the retained wall is visible</h3><p>As the excavation floor falls, a greater height of the perimeter shoring is exposed. The photograph does not by itself show that the wall has been extended or reveal its engineered support capacity.</p><div class="status likely">Likely</div><p>The angular material appears rock-rich, but photographs cannot distinguish weathered bedrock from broken rock fill or classify the strata.</p></article>
        <article class="card"><div class="status observed">Observed sequence</div><h3>The morning refueling ritual</h3><p>This September 24 frame placed the red service truck beside the Volvo but did not show a hose. The September 28 photograph now shows the hose running between them, while the observer directly confirms refueling. Together the two dates document the recurring morning service operation—part of the fuel, maintenance and access choreography that keeps excavation moving.</p></article>
      </div>
    </div>
  </div>`;
  document.querySelector('#update-sept22').before(section);
  const nav=document.querySelector('.nav .wrap');const link=document.createElement('a');link.href='#update-sept24';link.textContent='September 24';nav.insertBefore(link,nav.querySelector('a'));
  section.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>openLightbox(img.src,img.alt)));
})();
