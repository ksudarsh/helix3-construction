(()=>{
  const heroInner=document.querySelector('.hero .inner');
  if(heroInner&&!heroInner.querySelector('.hero-actions')){
    const actions=document.createElement('div');
    actions.className='hero-actions';
    actions.innerHTML=`<a class="btn btn-primary" href="#gallery-section">Explore the build</a><a class="btn btn-ghost" href="#field-guide">Student field guide</a>`;
    heroInner.appendChild(actions);
    const stats=document.createElement('div');
    stats.className='hero-stats';
    stats.innerHTML=`<div><strong>45+</strong><span>shaft IDs observed</span></div><div><strong>Deep foundations</strong><span>wet-hole drilled shafts</span></div><div><strong>Sept 3</strong><span>latest field update</span></div>`;
    heroInner.appendChild(stats);
  }

  const fixStyle=document.createElement('style');
  fixStyle.textContent=`
    .process>.step{padding-top:24px!important}
    .process>.step:before{position:static!important;display:grid!important;margin:0 0 18px 0!important;width:36px!important;height:36px!important}
    .process>.step h3{margin-top:0!important}
    @media(max-width:720px){.process>.step{padding:18px!important}.process>.step:before{margin-bottom:16px!important}}
  `;
  document.head.appendChild(fixStyle);

  const nav=document.querySelector('.nav');
  const navWrap=document.querySelector('.nav .wrap');
  if(nav&&navWrap&&!nav.querySelector('.menu-toggle')){
    const toggle=document.createElement('button');
    toggle.className='menu-toggle';
    toggle.setAttribute('aria-label','Open navigation');
    toggle.setAttribute('aria-expanded','false');
    toggle.innerHTML='<span></span><span></span><span></span>';
    navWrap.insertBefore(toggle,navWrap.children[1]||null);
    toggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded',String(open));
    });
    navWrap.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded','false');
    }));
  }

  const progress=document.createElement('div');
  progress.className='scroll-progress';
  document.body.prepend(progress);
  const updateProgress=()=>{
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.transform=`scaleX(${max>0?scrollY/max:0})`;
  };
  addEventListener('scroll',updateProgress,{passive:true});
  addEventListener('resize',updateProgress);
  updateProgress();

  const sections=[...document.querySelectorAll('.section')];
  sections.forEach(s=>s.classList.add('reveal'));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}
    }),{threshold:.08,rootMargin:'0px 0px -40px'});
    sections.forEach(s=>observer.observe(s));
  }else sections.forEach(s=>s.classList.add('is-visible'));

  const navLinks=[...document.querySelectorAll('.nav a[href^="#"]')];
  const targetMap=new Map(navLinks.map(a=>[a.getAttribute('href').slice(1),a]));
  if('IntersectionObserver' in window){
    const activeObserver=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(!visible)return;
      navLinks.forEach(a=>a.classList.remove('active'));
      targetMap.get(visible.target.id)?.classList.add('active');
    },{rootMargin:'-25% 0px -60% 0px',threshold:[0,.2,.5]});
    sections.filter(s=>s.id).forEach(s=>activeObserver.observe(s));
  }
})();
