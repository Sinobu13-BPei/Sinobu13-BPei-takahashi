(()=>{const d=document,doc=d.documentElement,body=d.body;
body.classList.add('js-ready');const progress=d.createElement('div');progress.id='progress';body.prepend(progress);
const back=d.createElement('button');back.id='backTop';back.type='button';back.setAttribute('aria-label','ページ上部へ戻る');back.textContent='↑';body.append(back);
const updateScroll=()=>{const m=doc.scrollHeight-doc.clientHeight;progress.style.width=(m?doc.scrollTop/m*100:0)+'%';back.classList.toggle('on',doc.scrollTop>520)};
d.addEventListener('scroll',updateScroll,{passive:true});updateScroll();back.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

const nav=d.querySelector('.topnav .nav-scroll'),toggle=d.querySelector('.nav-toggle');
if(toggle&&nav){toggle.addEventListener('click',()=>{const on=body.classList.toggle('nav-open');toggle.setAttribute('aria-expanded',String(on))});
d.addEventListener('keydown',e=>{if(e.key==='Escape'){body.classList.remove('nav-open');toggle.setAttribute('aria-expanded','false')}});
d.addEventListener('click',e=>{if(body.classList.contains('nav-open')&&!e.target.closest('.topnav')){body.classList.remove('nav-open');toggle.setAttribute('aria-expanded','false')}});}

const p=location.pathname.toLowerCase();
let section='home';
if(/be-free|chapters|dream|\/novel\/|\/zoo\//.test(p))section='story';
else if(/timeline/.test(p))section='timeline';
else if(/atlas/.test(p))section='map';
else if(/roots|takahashi-history|\/nijiro\/|\/ine\//.test(p))section='roots';
else if(/career/.test(p))section='career';
else if(/family/.test(p))section='family';
else if(/about/.test(p))section='about';
d.querySelectorAll('.topnav [data-section]').forEach(a=>{if(a.dataset.section===section)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
d.querySelectorAll('.subnav a').forEach(a=>{const u=new URL(a.href,location.href);if(u.pathname===location.pathname)a.setAttribute('aria-current','page')});

const reveal=d.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.05});reveal.forEach(el=>io.observe(el))}else reveal.forEach(el=>el.classList.add('on'));

})();