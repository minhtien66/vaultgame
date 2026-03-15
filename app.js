// ============================================================
// APP.JS — VaultGame  (i18n: vi / en / es)
// ============================================================

// ══ 1. TRANSLATIONS ═════════════════════════════════════════
const LANGS = {
  vi: {
    code:'vi',flag:'🇻🇳',name:'Tiếng Việt',
    nav:{ home:'Trang chủ',games:'Tất cả Game',genre:'Thể loại',viet:'Việt Hóa',new_:'Game Mới',top:'Top Game',search:'Tìm kiếm' },
    hero:{ eyebrow:'Cập nhật liên tục — 100% miễn phí',size:'Dung lượng',version:'Phiên bản',downloads:'Lượt tải',dlBtn:'⬇ Tải ngay — Miễn phí',detailBtn:'Xem chi tiết →' },
    stripe:{ updated:'Cập nhật thường xuyên',speed:'Tốc độ cao không giới hạn',noads:'Không quảng cáo',viet:'Việt hóa',games:'game' },
    home:{ hot:'Game Nổi Bật',hotMore:'Xem tất cả →',new_:'Mới Cập Nhật',newMore:'Xem thêm →' },
    pages:{
      games:{ title:'Tất Cả Game PC',sub:'Toàn bộ kho game — tìm kiếm và lọc theo nhu cầu' },
      genre:{ title:'Thể Loại Game',sub:'Chọn thể loại yêu thích để khám phá' },
      viet: { title:'Game Việt Hóa',sub:'Trải nghiệm game bằng tiếng Việt hoàn toàn' },
      new_: { title:'Game Mới Cập Nhật',sub:'Những game vừa được thêm vào kho' },
      top:  { title:'Top Game',sub:'Bảng xếp hạng theo đánh giá và lượt tải' },
    },
    filter:{ all:'Tất cả',action:'Action',rpg:'RPG',strategy:'Chiến thuật',puzzle:'Đố trí',shooter:'Bắn súng',adventure:'Phiêu lưu',simulation:'Mô phỏng',horror:'Kinh dị',sports:'Thể Thao',sortNew:'Mới nhất',sortName:'Tên A→Z',sortRating:'Đánh giá',sortDl:'Lượt tải',placeholder:'Tìm theo tên, thể loại, tags...',found:'Tìm thấy',gameUnit:'game' },
    vietBanner:{ title:'Game đã được Việt hóa hoàn chỉnh',sub:'Dịch bởi cộng đồng game thủ Việt Nam — giao diện & lời thoại đầy đủ tiếng Việt.',count:'game đã được Việt hóa' },
    top:{ rating:'Đánh Giá Cao Nhất',dl:'Tải Nhiều Nhất' },
    card:{ detail:'Chi tiết →',newBadge:'MỚI',vietBadge:'VIỆT HÓA' },
    detail:{ intro:'Giới thiệu game',screenshots:'Ảnh chụp màn hình',trailer:'Trailer',info:'Thông tin game',sysreq:'Cấu hình yêu cầu',install:'Hướng dẫn cài đặt',related:'Game cùng thể loại',min:'Tối thiểu',rec:'Khuyến nghị',version:'Phiên bản',year:'Năm phát hành',size:'Dung lượng',genre:'Thể loại',dev:'Nhà phát triển',viet:'Việt hóa',vietYes:'✅ Có',vietNo:'❌ Chưa có',dlFree:'Tải miễn phí',dlBtn:'Tải xuống',dlFreeTag:'✅ Hoàn toàn miễn phí',dlNote:'Không quảng cáo · Không đăng ký · Tốc độ cao',dlViet:'🇻🇳 Bản này đã có tiếng Việt',dlSizeLbl:'Dung lượng tải về',dlDownloads:'Lượt tải',dlYear:'Năm',infoTitle:'Thông tin chi tiết',publisher:'Publisher',rating:'Đánh giá',tags:'Tags',breadHome:'Trang chủ',breadGames:'Tất cả game',dlcountLabel:'lượt tải' },
    search:{ placeholder:'Tìm kiếm game...',hint:'Nhập tên game để tìm kiếm...',notFound:'Không tìm thấy' },
    empty:{ title:'Chưa có dữ liệu',notFound:'Không tìm thấy game',back:'← Quay lại',noHot:'Chưa có game nổi bật',noNew:'Chưa có game mới',noViet:'Chưa có game Việt hóa, sắp cập nhật...',noSearch:'Thử từ khóa khác hoặc bỏ bộ lọc' },
    footer:{ explore:'Khám phá',list:'Danh sách',info:'Thông tin',about:'Giới thiệu',contact:'Liên hệ',report:'Báo lỗi',copy:'© 2025 VaultGame — All rights reserved',made:'Made with ❤️ for VN gamers' },
    sr:{ os:'Hệ điều hành',cpu:'CPU',ram:'RAM',gpu:'GPU',storage:'Ổ cứng',directx:'DirectX' },
  },
  en: {
    code:'en',flag:'🇬🇧',name:'English',
    nav:{ home:'Home',games:'All Games',genre:'Genres',viet:'Vietnamese',new_:'New Games',top:'Top Games',search:'Search' },
    hero:{ eyebrow:'Updated constantly — 100% free',size:'File size',version:'Version',downloads:'Downloads',dlBtn:'⬇ Download Free',detailBtn:'View details →' },
    stripe:{ updated:'Regular updates',speed:'Unlimited high speed',noads:'No ads',viet:'Vietnamese patch',games:'games' },
    home:{ hot:'Featured Games',hotMore:'View all →',new_:'Recently Added',newMore:'View more →' },
    pages:{
      games:{ title:'All PC Games',sub:'Full game library — search and filter as needed' },
      genre:{ title:'Game Genres',sub:'Pick your favourite genre and explore' },
      viet: { title:'Vietnamese Games',sub:'Fully localised games in Vietnamese' },
      new_: { title:'New Releases',sub:'Latest games added to the vault' },
      top:  { title:'Top Games',sub:'Rankings by rating and downloads' },
    },
    filter:{ all:'All',action:'Action',rpg:'RPG',strategy:'Strategy',puzzle:'Puzzle',shooter:'Shooter',adventure:'Adventure',simulation:'Simulation',horror:'Horror',sports:'Sports',sortNew:'Newest',sortName:'Name A→Z',sortRating:'Rating',sortDl:'Downloads',placeholder:'Search by name, genre, tags...',found:'Found',gameUnit:'games' },
    vietBanner:{ title:'These games are fully localised in Vietnamese',sub:'Translated by the Vietnamese gaming community — full UI & dialogue.',count:'games localised in Vietnamese' },
    top:{ rating:'Highest Rated',dl:'Most Downloaded' },
    card:{ detail:'Details →',newBadge:'NEW',vietBadge:'VIET' },
    detail:{ intro:'About this game',screenshots:'Screenshots',trailer:'Trailer',info:'Game info',sysreq:'System requirements',install:'Installation guide',related:'More like this',min:'Minimum',rec:'Recommended',version:'Version',year:'Release year',size:'File size',genre:'Genre',dev:'Developer',viet:'Vietnamese patch',vietYes:'✅ Available',vietNo:'❌ Not available',dlFree:'Free Download',dlBtn:'Download',dlFreeTag:'✅ Completely free',dlNote:'No ads · No sign-up · High speed',dlViet:'🇻🇳 Vietnamese patch included',dlSizeLbl:'Download size',dlDownloads:'Downloads',dlYear:'Year',infoTitle:'Details',publisher:'Publisher',rating:'Rating',tags:'Tags',breadHome:'Home',breadGames:'All games',dlcountLabel:'downloads' },
    search:{ placeholder:'Search games...',hint:'Type a game name to search...',notFound:'Not found' },
    empty:{ title:'No data yet',notFound:'Game not found',back:'← Go back',noHot:'No featured games yet',noNew:'No new games yet',noViet:'No Vietnamese games yet, coming soon...',noSearch:'Try a different keyword or remove filters' },
    footer:{ explore:'Explore',list:'Browse',info:'Info',about:'About us',contact:'Contact',report:'Report issue',copy:'© 2025 VaultGame — All rights reserved',made:'Made with ❤️ for VN gamers' },
    sr:{ os:'OS',cpu:'CPU',ram:'RAM',gpu:'GPU',storage:'Storage',directx:'DirectX' },
  },
  es: {
    code:'es',flag:'🇪🇸',name:'Español',
    nav:{ home:'Inicio',games:'Todos los Juegos',genre:'Géneros',viet:'Vietnamita',new_:'Novedades',top:'Top Juegos',search:'Buscar' },
    hero:{ eyebrow:'Actualizado constantemente — 100% gratis',size:'Tamaño',version:'Versión',downloads:'Descargas',dlBtn:'⬇ Descargar Gratis',detailBtn:'Ver detalles →' },
    stripe:{ updated:'Actualizaciones frecuentes',speed:'Velocidad ilimitada',noads:'Sin publicidad',viet:'Parche vietnamita',games:'juegos' },
    home:{ hot:'Juegos Destacados',hotMore:'Ver todos →',new_:'Recién Añadidos',newMore:'Ver más →' },
    pages:{
      games:{ title:'Todos los Juegos PC',sub:'Biblioteca completa — busca y filtra a tu gusto' },
      genre:{ title:'Géneros de Juegos',sub:'Elige tu género favorito y explora' },
      viet: { title:'Juegos en Vietnamita',sub:'Juegos completamente localizados al vietnamita' },
      new_: { title:'Novedades',sub:'Los últimos juegos añadidos al catálogo' },
      top:  { title:'Top Juegos',sub:'Rankings por puntuación y descargas' },
    },
    filter:{ all:'Todos',action:'Acción',rpg:'RPG',strategy:'Estrategia',puzzle:'Puzzle',shooter:'Shooter',adventure:'Aventura',simulation:'Simulación',horror:'Terror',sports:'Deportes',sortNew:'Más nuevos',sortName:'Nombre A→Z',sortRating:'Puntuación',sortDl:'Descargas',placeholder:'Buscar por nombre, género, etiquetas...',found:'Encontrados',gameUnit:'juegos' },
    vietBanner:{ title:'Todos los juegos están localizados en vietnamita',sub:'Traducido por la comunidad gamer vietnamita — interfaz y diálogos completos.',count:'juegos localizados en vietnamita' },
    top:{ rating:'Mejor Valorados',dl:'Más Descargados' },
    card:{ detail:'Detalles →',newBadge:'NUEVO',vietBadge:'VIET' },
    detail:{ intro:'Sobre este juego',screenshots:'Capturas de pantalla',trailer:'Tráiler',info:'Información del juego',sysreq:'Requisitos del sistema',install:'Guía de instalación',related:'Juegos similares',min:'Mínimos',rec:'Recomendados',version:'Versión',year:'Año de lanzamiento',size:'Tamaño',genre:'Género',dev:'Desarrollador',viet:'Parche vietnamita',vietYes:'✅ Disponible',vietNo:'❌ No disponible',dlFree:'Descarga Gratuita',dlBtn:'Descargar',dlFreeTag:'✅ Completamente gratis',dlNote:'Sin anuncios · Sin registro · Alta velocidad',dlViet:'🇻🇳 Incluye parche en vietnamita',dlSizeLbl:'Tamaño de descarga',dlDownloads:'Descargas',dlYear:'Año',infoTitle:'Detalles',publisher:'Editor',rating:'Puntuación',tags:'Etiquetas',breadHome:'Inicio',breadGames:'Todos los juegos',dlcountLabel:'descargas' },
    search:{ placeholder:'Buscar juegos...',hint:'Escribe un nombre para buscar...',notFound:'No encontrado' },
    empty:{ title:'Sin datos',notFound:'Juego no encontrado',back:'← Volver',noHot:'Sin juegos destacados todavía',noNew:'Sin juegos nuevos todavía',noViet:'Sin juegos en vietnamita todavía, próximamente...',noSearch:'Prueba otra palabra clave o quita los filtros' },
    footer:{ explore:'Explorar',list:'Catálogo',info:'Info',about:'Sobre nosotros',contact:'Contacto',report:'Reportar error',copy:'© 2025 VaultGame — Todos los derechos reservados',made:'Hecho con ❤️ para gamers VN' },
    sr:{ os:'Sistema',cpu:'CPU',ram:'RAM',gpu:'GPU',storage:'Almacenamiento',directx:'DirectX' },
  },
};

// ── Lang state ────────────────────────────
let _lang = localStorage.getItem('vg_lang') || 'vi';
const L = () => LANGS[_lang] || LANGS.vi;

function setLang(code) {
  if (!LANGS[code]) return;
  _lang = code;
  localStorage.setItem('vg_lang', code);
  closeLangMenu();
  updateLangUI();
  reRender();
}

function updateLangUI() {
  const cur = LANGS[_lang];
  // Button
  const btn = document.getElementById('langBtn');
  if (btn) btn.innerHTML = `<span class="lb-flag">${cur.flag}</span><span class="lb-code">${cur.code.toUpperCase()}</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>`;
  // Dropdown active
  document.querySelectorAll('.lang-opt').forEach(o => o.classList.toggle('active', o.dataset.lang === _lang));

  const nl = L().nav;
  // Nav links — preserve SVG icons
  [['nl-home',nl.home],['nl-games',nl.games],['nl-genre',nl.genre],['nl-viet',nl.viet],['nl-new',nl.new_],['nl-top',nl.top]].forEach(([id,txt]) => {
    const el = document.getElementById(id); if (!el) return;
    const svg = el.querySelector('svg'); el.textContent = txt; if (svg) el.prepend(svg);
  });
  // Search button
  const sb = document.querySelector('.nav-search');
  if (sb) { const s=sb.querySelector('svg'),k=sb.querySelector('kbd'); sb.textContent=nl.search; if(s)sb.prepend(s); if(k)sb.append(k); }
  // Modal placeholder
  const si = document.getElementById('sInput'); if (si) si.placeholder = L().search.placeholder;
  // gSearch placeholder & sort
  const gsp = document.getElementById('gSearch'); if (gsp) gsp.placeholder = L().filter.placeholder;
  const gs = document.getElementById('gSort');
  if (gs) { const fl=L().filter; gs.options[0].text=fl.sortNew; gs.options[1].text=fl.sortName; gs.options[2].text=fl.sortRating; gs.options[3].text=fl.sortDl; }
  // Filter chips
  const fl = L().filter;
  [['chip-all',fl.all],['chip-action',fl.action],['chip-rpg',fl.rpg],['chip-strategy',fl.strategy],['chip-puzzle',fl.puzzle],['chip-shooter',fl.shooter],['chip-adventure',fl.adventure],['chip-simulation',fl.simulation],['chip-horror',fl.horror],['chip-sports',fl.sports]].forEach(([id,txt]) => { const el=document.getElementById(id); if(el) el.textContent=txt; });
  // Page headers
  [['page-games',L().pages.games],['page-genre',L().pages.genre],['page-viet',L().pages.viet],['page-new',L().pages.new_],['page-top',L().pages.top]].forEach(([pid,p]) => {
    const page=document.getElementById(pid); if(!page) return;
    const t=page.querySelector('.ph-title'),s=page.querySelector('.ph-sub');
    if(t) t.textContent=p.title; if(s) s.textContent=p.sub;
  });
  // Stripe
  const sv=document.getElementById('stripViet'); if(sv){ const n=GAMES.filter(g=>g.viet).length; sv.textContent=`${n} ${L().stripe.viet}`; }
  const st=document.getElementById('stripUpdated');  if(st) st.textContent=L().stripe.updated;
  const spd=document.getElementById('stripSpeed');   if(spd) spd.textContent=L().stripe.speed;
  const sna=document.getElementById('stripNoads');   if(sna) sna.textContent=L().stripe.noads;
  // Footer
  const ff=L().footer;
  const fh=document.querySelectorAll('.footer-ht'); if(fh[0])fh[0].textContent=ff.explore; if(fh[1])fh[1].textContent=ff.list; if(fh[2])fh[2].textContent=ff.info;
  document.querySelectorAll('.flink-about').forEach(e=>e.textContent=ff.about);
  document.querySelectorAll('.flink-contact').forEach(e=>e.textContent=ff.contact);
  document.querySelectorAll('.flink-report').forEach(e=>e.textContent=ff.report);
  const fc=document.querySelectorAll('.footer-copy'); if(fc[0])fc[0].textContent=ff.copy; if(fc[1])fc[1].textContent=ff.made;
  // Drawer
  const dIcons=['🏠','🎮','🗂','🌐','⚡','📈'];
  const dTxts=[nl.home,nl.games,nl.genre,nl.viet,nl.new_,nl.top];
  document.querySelectorAll('.drawer .nav-link').forEach((el,i)=>{ if(dTxts[i]) el.textContent=`${dIcons[i]} ${dTxts[i]}`; });
  // navCount lang
  // navCount removed
}

function toggleLangMenu(e) { e.stopPropagation(); document.getElementById('langMenu').classList.toggle('open'); }
function closeLangMenu()   { document.getElementById('langMenu')?.classList.remove('open'); }
document.addEventListener('click', closeLangMenu);

// ══ 2. ROUTING ═══════════════════════════════════════════
let curPage = 'home';
let genreFilter = 'all';
let genrePageFilter = null;

const ROUTES = {
  home:   { hash:'',           el:'page-home',    nav:'nl-home'  },
  games:  { hash:'games',      el:'page-games',   nav:'nl-games' },
  genre:  { hash:'the-loai',   el:'page-genre',   nav:'nl-genre' },
  viet:   { hash:'viet-hoa',   el:'page-viet',    nav:'nl-viet'  },
  new:    { hash:'game-moi',   el:'page-new',     nav:'nl-new'   },
  top:    { hash:'top-game',   el:'page-top',     nav:'nl-top'   },
  detail: { hash:'game/',      el:'page-detail',  nav:null       },
  about:  { hash:'gioi-thieu', el:'page-about',   nav:null       },
  contact:{ hash:'lien-he',    el:'page-contact', nav:null       },
  report: { hash:'bao-loi',    el:'page-report',  nav:null       },
};

function go(page, param) {
  curPage = page;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  closeLangMenu();
  const r = ROUTES[page]; if (!r) return;
  const el = document.getElementById(r.el); if (el) el.classList.add('active');
  if (r.nav) { const n=document.getElementById(r.nav); if(n) n.classList.add('active'); }
  if (page==='detail' && param) {
    const g = GAMES.find(x=>x.id===+param);
    const urlSlug = g ? g.slug : param;
    history.replaceState(null,'', location.pathname + '#game/' + urlSlug);
    renderDetail(+param);
  } else {
    history.replaceState(null,'', location.pathname + (r.hash ? '#' + r.hash : '#'));
    reRender(page);
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

function reRender(page) {
  switch(page||curPage) {
    case 'home':  renderHome(); break;
    case 'games': renderGames(); break;
    case 'genre': renderGenrePage(); break;
    case 'viet':  renderViet(); break;
    case 'new':   renderNew(); break;
    case 'top':   renderTop(); break;
    case 'detail': {
      const h = location.hash.replace('#','');
      const m = h.match(/^game\/(.+)$/);
      if (m) {
        const raw = m[1];
        const g = GAMES.find(x=>x.id===+raw) || GAMES.find(x=>x.slug===raw);
        if (g) renderDetail(g.id);
      }
      break;
    }
  }
}

function handleHash() {
  const h = location.hash.replace('#','');
  const m = h.match(/^game\/(.+)$/);
  if (m) {
    const raw = m[1];
    const g = GAMES.find(x=>x.id===+raw) || GAMES.find(x=>x.slug===raw);
    if (g) {
      curPage = 'detail';
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      document.getElementById('page-detail').classList.add('active');
      renderDetail(g.id);
      window.scrollTo({top:0,behavior:'smooth'});
      return;
    }
  }
  const found = Object.entries(ROUTES).find(([k,r])=>k!=='detail' && r.hash===h);
  const target = found ? found[0] : 'home';
  curPage = target;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  const r = ROUTES[target];
  const el = document.getElementById(r.el); if (el) el.classList.add('active');
  if (r.nav) { const n=document.getElementById(r.nav); if(n) n.classList.add('active'); }
  reRender(target);
  window.scrollTo({top:0,behavior:'smooth'});
}
window.addEventListener('hashchange', handleHash);

// ══ 3. HELPERS ═══════════════════════════════════════════
function starStr(r) { let s=''; for(let i=1;i<=5;i++) s+=i<=Math.floor(r)?'★':(i===Math.ceil(r)&&r%1>=.5?'½':'☆'); return s; }
function fmtN(n)    { return n>=1000?(n/1000).toFixed(1)+'k':n; }
function badgeHtml(badges,viet) {
  const l=L().card; let h='';
  if(badges.includes('hot')) h+=`<span class="badge badge-hot">HOT</span>`;
  if(badges.includes('new')) h+=`<span class="badge badge-new">${l.newBadge}</span>`;
  if(viet)                   h+=`<span class="badge badge-viet">${l.vietBadge}</span>`;
  return h?`<div class="gcard-badges">${h}</div>`:'';
}
function emptyHtml(title,sub='') { return `<div class="empty" style="grid-column:1/-1"><div class="empty-icon">🎮</div><h3>${title}</h3>${sub?`<p>${sub}</p>`:''}</div>`; }

function gcard(g,delay=0) {
  const img=g.thumbnail?`<img src="${g.thumbnail}" alt="${g.title}" loading="lazy" onerror="this.style.display='none'">`:'';
  return `
<div class="gcard" style="animation-delay:${delay}s" onclick="go('detail',${g.id})">
  <div class="gcard-thumb">${img}<span class="gcard-emoji">${g.emoji}</span><div class="gcard-grad"></div></div>
  ${badgeHtml(g.badges,g.viet)}
  <div class="gcard-score">★ ${g.rating.toFixed(1)}</div>
  <div class="gcard-body">
    <div class="gcard-genre">${g.genre_label}</div>
    <div class="gcard-title">${g.title}</div>
    <div class="gcard-desc">${g.desc_short}</div>
    <div class="gcard-foot">
      <span class="gcard-size">📦 ${g.size}</span>
      <button class="gcard-btn" onclick="event.stopPropagation();go('detail',${g.id})">${L().card.detail}</button>
    </div>
  </div>
</div>`;
}

function topRow(g,rank) {
  const cls=rank===1?'g1':rank===2?'g2':rank===3?'g3':'';
  const icon=rank<=3?['🥇','🥈','🥉'][rank-1]:'#'+rank;
  return `<div class="top-item" onclick="go('detail',${g.id})"><div class="top-rank ${cls}">${icon}</div><div class="top-emoji">${g.emoji}</div><div class="top-info"><div class="top-title">${g.title}</div><div class="top-meta">${g.genre_label} · ${g.year}</div></div><div class="top-dl">⬇ ${fmtN(g.downloads)}</div></div>`;
}

// ══ 4. RENDERS ═══════════════════════════════════════════

function renderHome() {
  const l=L(); const total=GAMES.length; const vietN=GAMES.filter(g=>g.viet).length;
  document.getElementById('navCount').textContent=total+' games';
  document.getElementById('stripTotal').textContent=`${total} ${l.stripe.games}`;
  document.getElementById('stripViet').textContent=`${vietN} ${l.stripe.viet}`;
  const ey=document.getElementById('heroEyebrow'); if(ey) ey.textContent=l.hero.eyebrow;

  const feat=[...GAMES].sort((a,b)=>b.downloads-a.downloads)[0];
  if (feat) {
    if(feat.thumbnail) document.getElementById('heroBg').style.backgroundImage=`url(${feat.thumbnail})`;
    document.getElementById('heroTitle').textContent=feat.title;
    document.getElementById('heroMeta').innerHTML=
      (feat.badges.includes('hot')?'<span class="hbadge hot">HOT</span>':'')+
      (feat.badges.includes('new')?`<span class="hbadge new">${l.card.newBadge}</span>`:'')+
      (feat.viet?`<span class="hbadge viet">${l.card.vietBadge}</span>`:'')+
      `<span class="hero-rating">★ ${feat.rating.toFixed(1)}</span>`;
    document.getElementById('heroDesc').textContent=feat.desc_short;
    document.getElementById('heroInfoRow').innerHTML=`
      <div class="hi-item"><span class="hi-val">${feat.size}</span><span class="hi-key">${l.hero.size}</span></div>
      <div class="hi-item"><span class="hi-val">${feat.version}</span><span class="hi-key">${l.hero.version}</span></div>
      <div class="hi-item"><span class="hi-val">${fmtN(feat.downloads)}</span><span class="hi-key">${l.hero.downloads}</span></div>`;
    document.getElementById('heroBtns').innerHTML=`
      <button class="btn btn-primary" onclick="go('detail',${feat.id})">${l.hero.dlBtn}</button>
      <button class="btn btn-ghost"   onclick="go('detail',${feat.id})">${l.hero.detailBtn}</button>`;
    document.getElementById('heroImg').innerHTML=feat.thumbnail
      ?`<img src="${feat.thumbnail}" alt="${feat.title}" onerror="this.style.display='none'">`
      :`<div class="hero-img-fb">${feat.emoji}</div>`;
    document.getElementById('heroDots').innerHTML=GAMES.slice(0,5).map((g,i)=>
      `<div class="hdot ${i===0?'active':''}" onclick="switchHero(${g.id},this)"></div>`).join('');
  }

  const lh=l.home;
  const shl=document.getElementById('secHotLabel'); if(shl) shl.textContent=lh.hot;
  const shm=document.getElementById('secHotMore');  if(shm) shm.textContent=lh.hotMore;
  const snl=document.getElementById('secNewLabel'); if(snl) snl.textContent=lh.new_;
  const snm=document.getElementById('secNewMore');  if(snm) snm.textContent=lh.newMore;

  const hot=GAMES.filter(g=>g.badges.includes('hot'));
  const newG=GAMES.filter(g=>g.badges.includes('new'));
  document.getElementById('homeHot').innerHTML=(hot.length?hot:GAMES).slice(0,8).map((g,i)=>gcard(g,i*.04)).join('')||emptyHtml(l.empty.noHot);
  document.getElementById('homeNew').innerHTML=(newG.length?newG:GAMES).slice(0,4).map((g,i)=>gcard(g,i*.05)).join('')||emptyHtml(l.empty.noNew);
}

function switchHero(id,dotEl) {
  const l=L(); const g=GAMES.find(x=>x.id===id); if(!g) return;
  if(g.thumbnail) document.getElementById('heroBg').style.backgroundImage=`url(${g.thumbnail})`;
  document.getElementById('heroTitle').textContent=g.title;
  document.getElementById('heroDesc').textContent=g.desc_short;
  document.getElementById('heroBtns').innerHTML=`
    <button class="btn btn-primary" onclick="go('detail',${g.id})">${l.hero.dlBtn}</button>
    <button class="btn btn-ghost"   onclick="go('detail',${g.id})">${l.hero.detailBtn}</button>`;
  document.getElementById('heroImg').innerHTML=g.thumbnail?`<img src="${g.thumbnail}" alt="${g.title}" onerror="this.style.display='none'">`:`<div class="hero-img-fb">${g.emoji}</div>`;
  document.querySelectorAll('.hdot').forEach(d=>d.classList.remove('active'));
  dotEl.classList.add('active');
}

function renderGames() {
  const fl=L().filter;
  const q=(document.getElementById('gSearch')?.value||'').toLowerCase().trim();
  const sort=document.getElementById('gSort')?.value||'new';
  let list=[...GAMES];
  if(genreFilter!=='all') list=list.filter(g=>g.genre===genreFilter);
  if(q) list=list.filter(g=>g.title.toLowerCase().includes(q)||g.desc_short.toLowerCase().includes(q)||g.genre_label.toLowerCase().includes(q)||g.tags.some(t=>t.toLowerCase().includes(q)));
  if(sort==='name')   list.sort((a,b)=>a.title.localeCompare(b.title));
  if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);
  if(sort==='dl')     list.sort((a,b)=>b.downloads-a.downloads);
  const c=document.getElementById('gCount'); if(c) c.innerHTML=`${fl.found} <strong>${list.length}</strong> ${fl.gameUnit}`;
  const grid=document.getElementById('gGrid'); if(!grid) return;
  grid.innerHTML=list.length?list.map((g,i)=>gcard(g,i*.025)).join(''):emptyHtml(L().empty.notFound,L().empty.noSearch);
}
function setGenreFilter(el,g) { genreFilter=g; document.querySelectorAll('#gChips .chip').forEach(c=>c.classList.remove('active')); el.classList.add('active'); renderGames(); }

function renderGenrePage() {
  const fl=L().filter;
  const grid=document.getElementById('genreGrid');
  let html=`<div class="gc ${!genrePageFilter?'active':''}" onclick="selectGenre(null)"><div class="gc-icon">🎮</div><div class="gc-name">${fl.all}</div><div class="gc-count">${GAMES.length} ${fl.gameUnit}</div></div>`;
  html+=GENRES.map(g=>{ const cnt=GAMES.filter(x=>x.genre===g.id).length; return `<div class="gc ${genrePageFilter===g.id?'active':''}" onclick="selectGenre('${g.id}')"><div class="gc-icon">${g.icon}</div><div class="gc-name">${g.name}</div><div class="gc-count">${cnt} ${fl.gameUnit}</div></div>`; }).join('');
  grid.innerHTML=html;
  const head=document.getElementById('genreHead'),label=document.getElementById('genreLabel'),games=document.getElementById('genreGames');
  if(genrePageFilter){
    const gObj=GENRES.find(x=>x.id===genrePageFilter);
    head.style.display='flex';
    label.innerHTML=`${gObj?.icon||'🎮'} ${gObj?.name||''} <span style="color:var(--text3);font-weight:400;font-size:.9rem;font-family:var(--body)">(${GAMES.filter(x=>x.genre===genrePageFilter).length})</span>`;
    games.innerHTML=GAMES.filter(x=>x.genre===genrePageFilter).map((g,i)=>gcard(g,i*.03)).join('')||emptyHtml(L().empty.title);
  } else { head.style.display='none'; games.innerHTML=GAMES.map((g,i)=>gcard(g,i*.02)).join(''); }
}
function selectGenre(id){ genrePageFilter=id; renderGenrePage(); }

function renderViet() {
  const l=L(); const list=GAMES.filter(g=>g.viet);
  const bt=document.getElementById('vietBannerTitle'); if(bt) bt.textContent=l.vietBanner.title;
  const bs=document.getElementById('vietBannerSub');   if(bs) bs.textContent=l.vietBanner.sub;
  document.getElementById('vietCount').innerHTML=`<strong>${list.length}</strong> ${l.vietBanner.count}`;
  document.getElementById('vietGrid').innerHTML=list.length?list.map((g,i)=>gcard(g,i*.03)).join(''):emptyHtml(l.empty.noViet);
}

function renderNew() {
  document.getElementById('newGrid').innerHTML=[...GAMES].sort((a,b)=>b.year-a.year).map((g,i)=>gcard(g,i*.03)).join('')||emptyHtml(L().empty.noNew);
}

function renderTop() {
  const lt=L().top;
  const rl=document.getElementById('topRatingLabel'); if(rl) rl.textContent=lt.rating;
  const dl=document.getElementById('topDlLabel');     if(dl) dl.textContent=lt.dl;
  document.getElementById('topRating').innerHTML=[...GAMES].sort((a,b)=>b.rating-a.rating).slice(0,10).map((g,i)=>topRow(g,i+1)).join('');
  document.getElementById('topDl').innerHTML=[...GAMES].sort((a,b)=>b.downloads-a.downloads).slice(0,10).map((g,i)=>topRow(g,i+1)).join('');
}

function renderDetail(id) {
  const ld=L().detail; const g=GAMES.find(x=>x.id===id); const el=document.getElementById('page-detail');
  if(!g){ el.innerHTML=`<div style="padding:8rem 2rem;text-align:center;color:var(--text3)"><div style="font-size:3rem">😕</div><h2 style="margin:.75rem 0 .5rem;font-family:var(--display)">${L().empty.notFound}</h2><button class="btn btn-primary" onclick="go('games')" style="margin-top:1rem">${L().empty.back}</button></div>`; return; }
  const shots=g.screenshots||(g.thumbnail?[g.thumbnail]:[]); const mainShot=shots[0]||'';
  const related=GAMES.filter(x=>x.genre===g.genre&&x.id!==g.id).slice(0,4);

  const galleryHtml=shots.length?`
<div class="gallery">
  <div class="dt">${ld.screenshots}</div>
  <div class="gal-main" onclick="openLb('${mainShot}')"><img id="galMain" src="${mainShot}" alt="${g.title}" onerror="this.style.display='none'"></div>
  ${shots.length>1?`<div class="gal-thumbs">${shots.map((s,i)=>`<div class="gal-thumb ${i===0?'active':''}" onclick="switchGal(this,'${s}')"><img src="${s}" alt="" onerror="this.parentElement.style.display='none'"></div>`).join('')}</div>`:''}
</div>`:'';

  const trailerHtml=g.trailer?`<div class="d-trailer"><div class="dt">${ld.trailer}</div><div class="trailer-wrap"><iframe src="${g.trailer}" allowfullscreen allow="autoplay;encrypted-media"></iframe></div></div>`:'';

  const srHtml=g.sys_req?`
<div>
  <div class="dt">${ld.sysreq}</div>
  <div class="sr-tabs">
    <button class="sr-tab active" id="srt-min" onclick="switchSr('min')">${ld.min}</button>
    <button class="sr-tab" id="srt-rec" onclick="switchSr('rec')">${ld.rec}</button>
  </div>
  <div id="sr-min" class="sr-table">${srRows(g.sys_req.min)}</div>
  <div id="sr-rec" class="sr-table" style="display:none">${srRows(g.sys_req.rec)}</div>
</div>`:'';

  const installHtml=g.install_guide?`<div><div class="dt">${ld.install}</div><div class="install-box">${g.install_guide}</div></div>`:'';
  const dlLinks=(g.download_links||[]).map(lk=>`<a href="${lk.url}" class="btn btn-dl" target="_blank" rel="noopener">${lk.icon} ${ld.dlBtn} — ${lk.label}</a>`).join('');

  el.innerHTML=`
<div class="bc"><div class="bc-inner">
  <a onclick="go('home')">${ld.breadHome}</a><span>›</span>
  <a onclick="go('games')">${ld.breadGames}</a><span>›</span>
  <span>${g.title}</span>
</div></div>
<div class="detail-wrap">
  <div class="d-hero">
    ${mainShot?`<img src="${mainShot}" alt="${g.title}" onerror="this.style.display='none'">`:`<div class="d-hero-fb">${g.emoji}</div>`}
    <div class="d-hero-ov"></div>
    <div class="d-hero-bottom"><div class="d-hero-title">${g.title}</div></div>
  </div>
  <div class="d-layout">
    <div class="d-left">
      <div class="d-meta">
        <span class="d-genre">${g.genre_label}</span>
        <span class="d-stars">${starStr(g.rating)}</span>
        <span class="d-rnum">${g.rating.toFixed(1)}</span>
        ${badgeHtml(g.badges,g.viet)}
        <span class="d-dlcount">⬇ ${fmtN(g.downloads)} ${ld.dlcountLabel}</span>
      </div>
      <div style="margin-bottom:1.5rem"><div class="dt">${ld.intro}</div><div class="d-desc">${g.desc_full||`<p>${g.desc_short}</p>`}</div></div>
      ${galleryHtml}${trailerHtml}
      <div style="margin-bottom:1.5rem">
        <div class="dt">${ld.info}</div>
        <div class="d-specs">
          <div class="spec-box"><div class="spec-k">${ld.version}</div><div class="spec-v">${g.version}</div></div>
          <div class="spec-box"><div class="spec-k">${ld.year}</div><div class="spec-v">${g.year}</div></div>
          <div class="spec-box"><div class="spec-k">${ld.size}</div><div class="spec-v">${g.size}</div></div>
          <div class="spec-box"><div class="spec-k">${ld.genre}</div><div class="spec-v">${g.genre_label}</div></div>
          <div class="spec-box"><div class="spec-k">${ld.dev}</div><div class="spec-v">${g.developer||'—'}</div></div>
          <div class="spec-box"><div class="spec-k">${ld.viet}</div><div class="spec-v">${g.viet?ld.vietYes:ld.vietNo}</div></div>
        </div>
      </div>
      ${srHtml}${installHtml}
      ${related.length?`<div style="margin-top:1.5rem"><div class="dt">${ld.related}</div><div class="game-grid lg">${related.map((r,i)=>gcard(r,i*.05)).join('')}</div></div>`:''}
    </div>
    <div class="d-right">
      <div class="dl-box">
        <div class="dl-head">
          <div class="dl-label">${ld.dlFree}</div>
          <div class="dl-name">${g.title}</div>
          <div class="dl-ver">${g.version}</div>
          <div class="dl-rows">
            <div class="dl-row"><span class="dl-rk">${ld.size}</span><span class="dl-rv">${g.size}</span></div>
            <div class="dl-row"><span class="dl-rk">${ld.dlYear}</span><span class="dl-rv">${g.year}</span></div>
            <div class="dl-row"><span class="dl-rk">${ld.dlDownloads}</span><span class="dl-rv">${fmtN(g.downloads)}</span></div>
          </div>
        </div>
        <div class="dl-body">
          <div class="dl-size-big"><span class="dl-size-num">${g.size}</span><span class="dl-size-lbl">${ld.dlSizeLbl}</span></div>
          ${dlLinks}
          <div class="dl-free">${ld.dlFreeTag}</div>
          <div class="dl-note">${ld.dlNote}</div>
          ${g.viet?`<div class="dl-viet">${ld.dlViet}</div>`:''}
        </div>
      </div>
      <div class="info-box">
        <div class="info-box-t">${ld.infoTitle}</div>
        <div class="info-r"><span class="info-k">Developer</span><span class="info-v">${g.developer||'—'}</span></div>
        <div class="info-r"><span class="info-k">${ld.publisher}</span><span class="info-v">${g.publisher||'—'}</span></div>
        <div class="info-r"><span class="info-k">${ld.genre}</span><span class="info-v">${g.genre_label}</span></div>
        <div class="info-r"><span class="info-k">${ld.year}</span><span class="info-v">${g.year}</span></div>
        <div class="info-r"><span class="info-k">${ld.rating}</span><span class="info-v" style="color:var(--yellow)">★ ${g.rating.toFixed(1)} / 5.0</span></div>
        <div class="info-r" style="flex-direction:column;gap:.4rem;align-items:flex-start"><span class="info-k">${ld.tags}</span><div class="info-tags">${g.tags.map(t=>`<span class="itag">${t}</span>`).join('')}</div></div>
      </div>
    </div>
  </div>
</div>`;
}

function srRows(req) {
  const lbl=L().sr;
  return Object.entries(req).map(([k,v])=>`<div class="sr-row"><div class="sr-k">${lbl[k]||k}</div><div class="sr-v">${v}</div></div>`).join('');
}
function switchSr(tab) {
  document.getElementById('sr-min').style.display=tab==='min'?'block':'none';
  document.getElementById('sr-rec').style.display=tab==='rec'?'block':'none';
  document.getElementById('srt-min').classList.toggle('active',tab==='min');
  document.getElementById('srt-rec').classList.toggle('active',tab==='rec');
}

// ══ 5. GALLERY / LIGHTBOX ════════════════════════════════
function switchGal(el,src) { const m=document.getElementById('galMain'); if(m){m.src=src;m.onclick=()=>openLb(src);} document.querySelectorAll('.gal-thumb').forEach(t=>t.classList.remove('active')); el.classList.add('active'); }
function openLb(src) { document.getElementById('lb-img').src=src; document.getElementById('lb').classList.add('open'); document.body.style.overflow='hidden'; }
function closeLb()   { document.getElementById('lb').classList.remove('open'); document.body.style.overflow=''; }
document.getElementById('lb').addEventListener('click',function(e){if(e.target===this)closeLb();});

// ══ 6. SEARCH ═════════════════════════════════════════════
function openSearch() { document.getElementById('searchOverlay').classList.add('open'); setTimeout(()=>document.getElementById('sInput').focus(),50); document.body.style.overflow='hidden'; renderSearch(); }
function closeSearch() { document.getElementById('searchOverlay').classList.remove('open'); document.getElementById('sInput').value=''; document.body.style.overflow=''; }
document.getElementById('searchOverlay').addEventListener('click',function(e){if(e.target===this)closeSearch();});
function renderSearch() {
  const ls=L().search; const q=document.getElementById('sInput').value.toLowerCase().trim(); const c=document.getElementById('sList');
  if(!q){c.innerHTML=`<div class="s-empty">${ls.hint}</div>`;return;}
  const res=GAMES.filter(g=>g.title.toLowerCase().includes(q)||g.genre_label.toLowerCase().includes(q)||g.tags.some(t=>t.toLowerCase().includes(q))).slice(0,8);
  c.innerHTML=res.length?res.map(g=>`<div class="s-item" onclick="closeSearch();go('detail',${g.id})"><div class="s-icon">${g.emoji}</div><div class="s-info"><div class="s-title">${g.title} ${g.viet?'🇻🇳':''}</div><div class="s-meta">${g.genre_label} · ${g.size} · ${g.year}</div></div><div style="font-size:.65rem;color:var(--text3)">★${g.rating}</div></div>`).join(''):`<div class="s-empty">${ls.notFound} "<strong>${q}</strong>"</div>`;
}

// ══ 7. KEYBOARD / DRAWER ══════════════════════════════════
document.addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch();}
  if(e.key==='Escape'){closeSearch();closeLb();closeLangMenu();document.getElementById('drawer').classList.remove('open');}
});
function toggleDrawer(){ document.getElementById('drawer').classList.toggle('open'); }

// ══ 8. INIT ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded',()=>{ updateLangUI(); handleHash(); });
