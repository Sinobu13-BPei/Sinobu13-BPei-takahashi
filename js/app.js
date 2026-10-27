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

const mapEl=d.getElementById('life-map');
if(mapEl){
 if(window.L){
  const map=L.map('life-map',{scrollWheelZoom:false,zoomControl:true}).setView([35.2,137.4],6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
  const pts=[['横浜・南舞岡',[35.40,139.55],'1972– 少年期／現在の原点'],['横浜中心部',[35.443,139.642],'1980s 中学・高校／街から学ぶ'],['鈴鹿・白子',[34.833,136.588],'1990s 学生生活'],['名古屋',[35.171,136.881],'1998–2005 仕事と家庭'],['那須周辺',[36.94,140.02],'2010s 本社・研修期の記憶'],['東京・田町',[35.645,139.747],'本社勤務期'],['川崎',[35.530,139.703],'現在の仕事拠点']];
  const ll=[];pts.forEach(([n,pos,t])=>{L.circleMarker(pos,{radius:7,color:'#d7a642',weight:2,fillColor:'#d7a642',fillOpacity:.55}).addTo(map).bindPopup('<b>'+n+'</b><br>'+t);ll.push(pos)});L.polyline(ll,{color:'#91b8dc',weight:2,opacity:.65,dashArray:'7,7'}).addTo(map);
 }else mapEl.innerHTML='<div class="map-fallback"><div><strong>地図を読み込めませんでした。</strong><br><span>通信状況により外部地図が利用できない場合があります。下の地域一覧はそのまま閲覧できます。</span></div></div>';
}
})();