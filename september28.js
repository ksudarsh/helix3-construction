(()=>{
  const section=document.createElement('section');
  section.id='update-sept28';section.className='section';
  section.dataset.updateDate='2026-09-28';
  section.innerHTML=`<div class="wrap">
    <div class="eyebrow">Field update</div>
    <h2>The morning refueling<br>operation is confirmed.</h2>
    <p class="lede">The earlier wide view placed the red service truck beside the Volvo excavator but could not establish that fuel was being transferred. This closer September 28 view supplies the missing visual link: a hose runs from the truck to the excavator while a worker attends the machine.</p>
    <div class="cutting-grid">
      <figure><img loading="lazy" src="images/originals/IMG_0067.jpeg" alt="Red service truck connected by a hose to a Volvo excavator while a worker attends the excavator"><figcaption>The hose is clearly visible between the service truck and Volvo. This turns the earlier observer report into a photographically documented operation.</figcaption></figure>
      <div class="haulage-copy">
        <article class="card">
          <div class="status observed">Observed</div>
          <h3>A service hose connects truck and excavator</h3>
          <p>The red truck's service equipment is open, a hose crosses the working area to the Volvo, and a worker is positioned at the excavator's service/fill area.</p>
          <div class="status observed">Confirmed by observer</div>
          <p>The site observer identifies this as the routine morning refueling operation. The photograph and direct observation now support that conclusion together.</p>
          <div class="status unknown">Important limit</div>
          <p>The photograph alone does not identify the liquid, show the transferred quantity or establish the site's total daily fuel use. Diesel is the observer-reported fuel and is consistent with this equipment, not something readable from the hose itself.</p>
        </article>
        <p class="note"><b>Why this matters:</b> construction progress depends on an often-invisible support system—fuel delivery, inspection, maintenance, access and coordination—before the excavators can begin productive work.</p>
      </div>
    </div>
  </div>`;
  document.querySelector('#update-sept25').before(section);
  const nav=document.querySelector('.nav .wrap');const link=document.createElement('a');link.href='#update-sept28';link.textContent='September 28';nav.insertBefore(link,nav.querySelector('a'));
  section.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>openLightbox(img.src,img.alt)));
})();
