(()=>{
const stages=[
{file:'IMG_4183_Original.jpeg',stage:'Before H3 foundations',title:'A quiet winter site',text:'The future H3 footprint is still largely undisturbed. This establishes the urban context before the deep-foundation campaign became visible.'},
{file:'IMG_4632_Original.jpeg',stage:'District construction',title:'The neighboring structure rises',text:'Steel framing and cranes dominate the adjacent construction while the H3 site remains comparatively quiet below. The image is useful for separating neighboring work from H3 itself.'},
{file:'IMG_4639_Original.jpeg',stage:'District construction',title:'Steel frame develops',text:'The adjacent steel structure gains floors and deck area. For students, this is a reminder that multiple major construction programs can overlap in one dense urban block.'},
{file:'IMG_4691_Original.jpeg',stage:'District construction',title:'Cranes reshape the skyline',text:'Heavy lifting and steel erection continue next door while the future H3 footprint remains visible at ground level.'},
{file:'IMG_4695_Original.jpeg',stage:'District construction',title:'A mature steel-erection phase',text:'The neighboring frame is substantially developed, giving a strong visual benchmark for how quickly the district around H3 was changing.'},
{file:'IMG_4939_Original.jpeg',stage:'Site preparation',title:'The H3 footprint opens up',text:'The H3 site is now visibly cleared and graded. Earthmoving equipment begins to define the full construction footprint before deep foundations take over.'},
{file:'IMG_5236_Original.jpeg',stage:'Early foundations',title:'Excavation and casings appear',text:'The site has transitioned from broad earthwork into foundation construction. Circular steel casings and specialist rigs begin to populate the footprint.'},
{file:'IMG_5244_Original.jpeg',stage:'Deep foundations',title:'The shaft program accelerates',text:'Multiple casings, drilling rigs and excavators now occupy the site. The future structural grid is beginning to reveal itself through the foundation locations.'},
{file:'IMG_5245_Original.jpeg',stage:'Deep foundations',title:'Inside the drilling operation',text:'A close view captures a rotary foundation rig working through a large steel casing, linking the wide site sequence to the detailed drilled-shaft process documented elsewhere in this journal.'}
];
const section=document.createElement('section');
section.id='history';
section.className='section history-section';
section.innerHTML=`<div class="wrap"><div class="eyebrow">Site evolution</div><div class="history-heading"><div><h2>From a quiet block to deep foundations</h2><p class="lede">These earlier photographs turn the journal into a time sequence. They show how the block changed before the current drilled-shaft work and help distinguish H3 from construction on neighboring buildings.</p></div><div class="history-index"><strong>9</strong><span>historic views</span></div></div><div class="history-compare"><figure><div class="history-label">Earlier</div><img src="images/history/IMG_4183_Original.jpeg" alt="Earlier view of the H3 site in winter"><figcaption>Before the present foundation campaign</figcaption></figure><div class="history-arrow" aria-hidden="true">→</div><figure><div class="history-label">Foundation phase</div><img src="images/history/IMG_5244_Original.jpeg" alt="H3 site during deep foundation construction"><figcaption>Casings, rigs and excavation now fill the site</figcaption></figure></div><div class="history-rule"><span></span><b>Visual construction timeline</b><span></span></div><div class="history-track">${stages.map((s,i)=>`<article class="history-card"><div class="history-photo"><img loading="lazy" src="images/history/${s.file}" alt="${s.title}"><span class="history-number">${String(i+1).padStart(2,'0')}</span></div><div class="history-copy"><div class="history-stage">${s.stage}</div><h3>${s.title}</h3><p>${s.text}</p></div></article>`).join('')}</div><div class="history-lesson"><div class="history-lesson-mark">For students</div><div><h3>Why the sequence matters</h3><p>A construction photograph is more useful when placed in time. Site clearing, mass excavation, temporary works, deep foundations and structural framing are not isolated activities; each stage creates the conditions for the next. Comparing the same urban block over time makes construction sequencing visible.</p></div></div></div>`;
const what=document.querySelector('#what');
if(what) what.before(section); else document.querySelector('.hero')?.after(section);
const navWrap=document.querySelector('.nav .wrap');
if(navWrap&&!navWrap.querySelector('a[href="#history"]')){
 const link=document.createElement('a'); link.href='#history'; link.textContent='Site evolution';
 const first=navWrap.querySelector('a'); if(first) navWrap.insertBefore(link,first); else navWrap.appendChild(link);
}
section.querySelectorAll('img').forEach(img=>img.addEventListener('click',()=>{
 const lb=document.querySelector('.lightbox'); if(!lb)return;
 const target=lb.querySelector('img'); target.src=img.src; target.alt=img.alt; lb.classList.add('open');
}));
})();
