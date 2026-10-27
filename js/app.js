(()=>{const p=document.createElement('div');p.id='progress';document.body.appendChild(p);const onScroll=()=>{const d=document.documentElement;const m=d.scrollHeight-d.clientHeight;p.style.width=(m?d.scrollTop/m*100:0)+'%'};document.addEventListener('scroll',onScroll,{passive:true});onScroll();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.07});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if(window.L&&document.getElementById('life-map')){const map=L.map('life-map',{scrollWheelZoom:false}).setView([35.2,137.4],6);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
const pts=[
['横浜・南舞岡',[35.40,139.55],'1972– 少年期／現在の原点'],
['横浜中心部',[35.443,139.642],'1980s 中学・高校／街から学ぶ'],
['鈴鹿・白子',[34.833,136.588],'1990s 学生生活'],
['名古屋',[35.171,136.881],'1998–2005 仕事と家庭'],
['那須周辺',[36.94,140.02],'2010s 本社・研修期の記憶'],
['東京・田町',[35.645,139.747],'本社勤務期'],
['川崎',[35.530,139.703],'現在の仕事拠点']
];const latlngs=[];pts.forEach(([n,ll,t])=>{L.circleMarker(ll,{radius:7,color:'#d7a642',weight:2,fillColor:'#d7a642',fillOpacity:.55}).addTo(map).bindPopup('<b>'+n+'</b><br>'+t);latlngs.push(ll)});L.polyline(latlngs,{color:'#8db3d9',weight:2,opacity:.65,dashArray:'7,7'}).addTo(map);}
})();