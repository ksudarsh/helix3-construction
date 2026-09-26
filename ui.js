(()=>{
  const heroInner=document.querySelector('.hero .inner');
  if(heroInner&&!heroInner.querySelector('.hero-actions')){
    const actions=document.createElement('div');
    actions.className='hero-actions';
    actions.innerHTML=`<a class="btn btn-primary" href="#gallery-section">Explore the build</a><a class="btn btn-ghost" href="#field-guide">Student field guide</a>`;
    heroInner.appendChild(actions);
    const stats=document.createElement('div');
    stats.className='hero-stats';
    stats.innerHTML=`<div><strong>Nested excavation</strong><span>compact machine in the cut</span></div><div><strong>Upper casing removal</strong><span>shaft heads exposed</span></div><div><strong data-latest-commit-date>Checking…</strong><span><a href="https://github.com/ksudarsh/helix3-construction/commits/main">latest commit</a></span></div>`;
    heroInner.appendChild(stats);
    const latestCommitDate=stats.querySelector('[data-latest-commit-date]');
    fetch('https://api.github.com/repos/ksudarsh/helix3-construction/commits/main',{
      headers:{Accept:'application/vnd.github+json'},
      cache:'no-store'
    }).then(response=>{
      if(!response.ok)throw new Error(`GitHub returned ${response.status}`);
      return response.json();
    }).then(({commit})=>{
      const date=new Date(commit?.committer?.date||commit?.author?.date);
      if(Number.isNaN(date.getTime()))throw new Error('Missing commit date');
      latestCommitDate.textContent=new Intl.DateTimeFormat('en-US',{
        month:'short',day:'numeric',year:'numeric',timeZone:'UTC'
      }).format(date);
    }).catch(()=>{latestCommitDate.textContent='See GitHub';});
  }

  const fixStyle=document.createElement('style');
  fixStyle.textContent=`
    .process>.step{padding-top:24px!important}
    .process>.step:before{position:static!important;display:grid!important;margin:0 0 18px 0!important;width:36px!important;height:36px!important}
    .process>.step h3{margin-top:0!important}
    @media(max-width:720px){.process>.step{padding:18px!important}.process>.step:before{margin-bottom:16px!important}}
    .page-jumps{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));z-index:60;display:grid;gap:8px}
    .page-jumps button{width:46px;height:46px;border:1px solid rgba(255,255,255,.3);border-radius:50%;background:var(--navy-2);color:#fff;box-shadow:var(--shadow);font:700 1.55rem/1 system-ui,sans-serif;cursor:pointer;transition:transform .2s ease,opacity .2s ease}
    .page-jumps button:hover:not(:disabled){transform:translateY(-2px);background:var(--accent-dark)}
    .page-jumps button:focus-visible{outline:3px solid var(--gold);outline-offset:3px}
    .page-jumps button:disabled{opacity:.38;cursor:default}
    @media(prefers-reduced-motion:reduce){.page-jumps button{transition:none}}
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
  const jumps=document.createElement('div');
  jumps.className='page-jumps';
  jumps.setAttribute('role','group');
  jumps.setAttribute('aria-label','Page navigation');
  jumps.innerHTML='<button type="button" aria-label="Back to top" title="Back to top">↑</button><button type="button" aria-label="Go to bottom" title="Go to bottom">↓</button>';
  document.body.appendChild(jumps);
  const [jumpTop,jumpBottom]=jumps.querySelectorAll('button');
  const jumpTo=top=>scrollTo({top,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  jumpTop.addEventListener('click',()=>jumpTo(0));
  jumpBottom.addEventListener('click',()=>jumpTo(document.documentElement.scrollHeight));
  const updateProgress=()=>{
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.transform=`scaleX(${max>0?scrollY/max:0})`;
    jumpTop.disabled=scrollY<16;
    jumpBottom.disabled=scrollY>=max-16;
  };
  addEventListener('scroll',updateProgress,{passive:true});
  addEventListener('resize',updateProgress);
  updateProgress();

  const sections=[...document.querySelectorAll('.section')];
  // Primary content must not depend on a viewport-percentage reveal threshold.
  // The photo journal is taller than the viewport, so some Chromium browsers
  // can never report the old 8% threshold and leave the section transparent.
  sections.forEach(s=>s.classList.add('is-visible'));

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
