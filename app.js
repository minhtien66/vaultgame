// ══ 0. THEME (Light / Dark) ══════════════════════════════
let _theme = localStorage.getItem('vg_theme') || 'dark';

function applyTheme(t) {
  _theme = t;
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('vg_theme', t);
  const btn = document.getElementById('themeBtn');
  if (btn) btn.innerHTML = t === 'light'
    ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>'
    : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
}
function toggleTheme() { applyTheme(_theme === 'dark' ? 'light' : 'dark'); }

// ============================================================
// APP.JS — VaultGame  (i18n: vi / en / es)
// ============================================================

// ══ 1. TRANSLATIONS ═════════════════════════════════════════
const LANGS = {
  vi: {
    code:'vi',flag:'🇻🇳',name:'Tiếng Việt',
    nav:{ home:'Trang chủ',games:'Tất cả Game',genre:'Thể loại',viet:'Việt Hóa',new_:'Game Mới',top:'Top Game',search:'Tìm kiếm',blog:'Blog' },
    hero:{ eyebrow:'Cập nhật liên tục — 100% miễn phí',size:'Dung lượng',version:'Phiên bản',downloads:'Lượt tải',dlBtn:'⬇ Tải ngay — Miễn phí',detailBtn:'Xem chi tiết →' },
    stripe:{ updated:'Cập nhật thường xuyên',speed:'Tốc độ cao không giới hạn',noads:'Không quảng cáo',viet:'Việt hóa',games:'game' },
    home:{ hot:'Game Nổi Bật',hotMore:'Xem tất cả →',new_:'Mới Cập Nhật',newMore:'Xem thêm →' },
    pages:{
      games:   { title:'Tất Cả Game PC',          sub:'Toàn bộ kho game — tìm kiếm và lọc theo nhu cầu' },
      genre:   { title:'Thể Loại Game',            sub:'Chọn thể loại yêu thích để khám phá' },
      viet:    { title:'Game Việt Hóa',            sub:'Trải nghiệm game bằng tiếng Việt hoàn toàn' },
      new_:    { title:'Game Mới Cập Nhật',        sub:'Những game vừa được thêm vào kho' },
      top:     { title:'Top Game',                 sub:'Bảng xếp hạng theo đánh giá và lượt tải' },
      blog:    { title:'Blog VaultGame',           sub:'Tin tức, thủ thuật và bài viết về thế giới gaming' },
      about:   { title:'Giới Thiệu',               sub:'Về VaultGame và sứ mệnh của chúng tôi' },
      contact: { title:'Liên Hệ',                  sub:'Chúng tôi luôn sẵn sàng hỗ trợ bạn' },
      report:  { title:'Báo Lỗi',                  sub:'Giúp chúng tôi cải thiện VaultGame mỗi ngày' },
      privacy: { title:'Chính Sách Bảo Mật',       sub:'Cập nhật lần cuối: Tháng 1, 2025' },
      terms:   { title:'Điều Khoản Sử Dụng',       sub:'Cập nhật lần cuối: Tháng 1, 2025' },
    },
    filter:{ all:'Tất cả',action:'Action',rpg:'RPG',strategy:'Chiến thuật',puzzle:'Đố trí',shooter:'Bắn súng',adventure:'Phiêu lưu',simulation:'Mô phỏng',horror:'Kinh dị',sports:'Thể Thao',sortNew:'Mới nhất',sortName:'Tên A→Z',sortRating:'Đánh giá',sortDl:'Lượt tải',placeholder:'Tìm theo tên, thể loại, tags...',found:'Tìm thấy',gameUnit:'game' },
    blogCats:{ all:'Tất cả',news:'Tin tức',guide:'Hướng dẫn',review:'Đánh giá',viet:'Việt hóa',dev:'Phát triển game' },
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
    nav:{ home:'Home',games:'All Games',genre:'Genres',viet:'Vietnamese',new_:'New Games',top:'Top Games',search:'Search',blog:'Blog' },
    hero:{ eyebrow:'Updated constantly — 100% free',size:'File size',version:'Version',downloads:'Downloads',dlBtn:'⬇ Download Free',detailBtn:'View details →' },
    stripe:{ updated:'Regular updates',speed:'Unlimited high speed',noads:'No ads',viet:'Vietnamese patch',games:'games' },
    home:{ hot:'Featured Games',hotMore:'View all →',new_:'Recently Added',newMore:'View more →' },
    pages:{
      games:   { title:'All PC Games',          sub:'Full game library — search and filter as needed' },
      genre:   { title:'Game Genres',            sub:'Pick your favourite genre and explore' },
      viet:    { title:'Vietnamese Games',        sub:'Fully localised games in Vietnamese' },
      new_:    { title:'New Releases',            sub:'Latest games added to the vault' },
      top:     { title:'Top Games',               sub:'Rankings by rating and downloads' },
      blog:    { title:'VaultGame Blog',          sub:'News, guides and articles about gaming' },
      about:   { title:'About Us',                sub:'About VaultGame and our mission' },
      contact: { title:'Contact',                 sub:'Get in touch with our team' },
      report:  { title:'Report an Issue',         sub:'Help us improve VaultGame every day' },
      privacy: { title:'Privacy Policy',          sub:'Last updated: January 2025' },
      terms:   { title:'Terms of Service',        sub:'Last updated: January 2025' },
    },
    filter:{ all:'All',action:'Action',rpg:'RPG',strategy:'Strategy',puzzle:'Puzzle',shooter:'Shooter',adventure:'Adventure',simulation:'Simulation',horror:'Horror',sports:'Sports',sortNew:'Newest',sortName:'Name A→Z',sortRating:'Rating',sortDl:'Downloads',placeholder:'Search by name, genre, tags...',found:'Found',gameUnit:'games' },
    blogCats:{ all:'All',news:'News',guide:'Guides',review:'Reviews',viet:'Vietnamese',dev:'Game Dev' },
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
    nav:{ home:'Inicio',games:'Todos los Juegos',genre:'Géneros',viet:'Vietnamita',new_:'Novedades',top:'Top Juegos',search:'Buscar',blog:'Blog' },
    hero:{ eyebrow:'Actualizado constantemente — 100% gratis',size:'Tamaño',version:'Versión',downloads:'Descargas',dlBtn:'⬇ Descargar Gratis',detailBtn:'Ver detalles →' },
    stripe:{ updated:'Actualizaciones frecuentes',speed:'Velocidad ilimitada',noads:'Sin publicidad',viet:'Parche vietnamita',games:'juegos' },
    home:{ hot:'Juegos Destacados',hotMore:'Ver todos →',new_:'Recién Añadidos',newMore:'Ver más →' },
    pages:{
      games:   { title:'Todos los Juegos PC',     sub:'Biblioteca completa — busca y filtra a tu gusto' },
      genre:   { title:'Géneros de Juegos',        sub:'Elige tu género favorito y explora' },
      viet:    { title:'Juegos en Vietnamita',      sub:'Juegos completamente localizados al vietnamita' },
      new_:    { title:'Novedades',                 sub:'Los últimos juegos añadidos al catálogo' },
      top:     { title:'Top Juegos',                sub:'Rankings por puntuación y descargas' },
      blog:    { title:'Blog de VaultGame',         sub:'Noticias, guías y artículos sobre gaming' },
      about:   { title:'Sobre Nosotros',            sub:'Acerca de VaultGame y nuestra misión' },
      contact: { title:'Contacto',                  sub:'Ponte en contacto con nuestro equipo' },
      report:  { title:'Reportar Problema',         sub:'Ayúdanos a mejorar VaultGame cada día' },
      privacy: { title:'Política de Privacidad',    sub:'Última actualización: Enero 2025' },
      terms:   { title:'Términos de Uso',           sub:'Última actualización: Enero 2025' },
    },
    filter:{ all:'Todos',action:'Acción',rpg:'RPG',strategy:'Estrategia',puzzle:'Puzzle',shooter:'Shooter',adventure:'Aventura',simulation:'Simulación',horror:'Terror',sports:'Deportes',sortNew:'Más nuevos',sortName:'Nombre A→Z',sortRating:'Puntuación',sortDl:'Descargas',placeholder:'Buscar por nombre, género, etiquetas...',found:'Encontrados',gameUnit:'juegos' },
    blogCats:{ all:'Todos',news:'Noticias',guide:'Guías',review:'Reseñas',viet:'Vietnamita',dev:'Desarrollo' },
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

// ── Flag images ──────────────────────────
const FLAG_IMGS = { vi:'https://flagcdn.com/w40/vn.png', en:'https://flagcdn.com/w40/gb.png', es:'https://flagcdn.com/w40/es.png' };

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
  if (btn) btn.innerHTML = `<span class="lb-flag-circle"><img src="${FLAG_IMGS[cur.code]||cur.flag}" alt="${cur.code.toUpperCase()}"></span><span class="lb-code">${cur.code.toUpperCase()}</span><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>`;
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
  // Page headers — all pages including static ones
  const allPageKeys = ['games','genre','viet','new_','top','blog','about','contact','report','privacy','terms'];
  const pageIdMap = {games:'page-games',genre:'page-genre',viet:'page-viet',new_:'page-new',top:'page-top',blog:'page-blog',about:'page-about',contact:'page-contact',report:'page-report',privacy:'page-privacy',terms:'page-terms'};
  allPageKeys.forEach(key => {
    const p = L().pages[key]; if(!p) return;
    const pid = pageIdMap[key]; if(!pid) return;
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
  const dIcons=['🏠','🎮','🗂','🌐','⚡','📈','✍️'];
  const dTxts=[nl.home,nl.games,nl.genre,nl.viet,nl.new_,nl.top,nl.blog||'Blog'];
  document.querySelectorAll('.drawer .nav-link').forEach((el,i)=>{ if(dTxts[i]) el.textContent=`${dIcons[i]} ${dTxts[i]}`; });
  // navCount lang
  const nc2=document.getElementById('navCount'); if(nc2) nc2.textContent=GAMES.length+' games';
  // Blog category buttons
  const bc=L().blogCats||{}; const catMap={all:bc.all,news:bc.news,guide:bc.guide,review:bc.review,viet:bc.viet,dev:bc.dev};
  document.querySelectorAll('.blog-cat[onclick]').forEach(btn => {
    const m=btn.getAttribute('onclick').match(/filterBlog\(this,'(\w+)'\)/);
    if(m && catMap[m[1]]) { const icon=btn.textContent.split(' ')[0]; btn.textContent=icon+' '+catMap[m[1]]; }
  });
}

function toggleLangMenu(e) { e.stopPropagation(); document.getElementById('langMenu').classList.toggle('open'); }
function closeLangMenu()   { document.getElementById('langMenu')?.classList.remove('open'); }
document.addEventListener('click', closeLangMenu);

// ══ 2. ROUTING ═══════════════════════════════════════════
let curPage = 'home';
let genreFilter = 'all';
let genrePageFilter = null;

// Base path: '' cho domain riêng, '/repo-name' cho GitHub Pages subdomain
const BASE_PATH = '';

const ROUTES = {
  home:     { path:'/',           el:'page-home',      nav:'nl-home'  },
  games:    { path:'/games',      el:'page-games',     nav:'nl-games' },
  genre:    { path:'/the-loai',   el:'page-genre',     nav:'nl-genre' },
  viet:     { path:'/viet-hoa',   el:'page-viet',      nav:'nl-viet'  },
  new:      { path:'/game-moi',   el:'page-new',       nav:'nl-new'   },
  top:      { path:'/top-game',   el:'page-top',       nav:'nl-top'   },
  detail:   { path:'/game/',      el:'page-detail',    nav:null       },
  about:    { path:'/gioi-thieu', el:'page-about',     nav:null       },
  contact:  { path:'/lien-he',    el:'page-contact',   nav:null       },
  report:   { path:'/bao-loi',    el:'page-report',    nav:null       },
  blog:     { path:'/blog',       el:'page-blog',      nav:'nl-blog'  },
  privacy:  { path:'/chinh-sach', el:'page-privacy',   nav:null       },
  terms:    { path:'/dieu-khoan', el:'page-terms',     nav:null       },
  blogpost: { path:'/blog/',      el:'page-blog-post', nav:null       },
};

function showPage(page) {
  curPage = page;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  const r = ROUTES[page]; if (!r) return;
  const el = document.getElementById(r.el); if (el) el.classList.add('active');
  if (r.nav) { const n=document.getElementById(r.nav); if(n) n.classList.add('active'); }
}

function go(page, param) {
  closeLangMenu();
  showPage(page);
  if (page==='detail' && param) {
    const g = GAMES.find(x=>x.id===+param);
    const urlSlug = g ? g.slug : param;
    history.pushState(null,'', BASE_PATH + '/game/' + urlSlug);
    renderDetail(+param);
  } else {
    const r = ROUTES[page]; if(!r) return;
    history.pushState(null,'', BASE_PATH + r.path);
    reRender(page);
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

function getCleanPath() {
  let p = location.pathname;
  if (BASE_PATH && p.startsWith(BASE_PATH)) p = p.slice(BASE_PATH.length);
  return p || '/';
}

function reRender(page) {
  switch(page||curPage) {
    case 'home':     renderHome(); break;
    case 'games':    renderGames(); break;
    case 'genre':    renderGenrePage(); break;
    case 'viet':     renderViet(); break;
    case 'new':      renderNew(); break;
    case 'top':      renderTop(); break;
    case 'blog':     renderBlog(); break;
    case 'blogpost': {
      const slug = getCleanPath().replace('/blog/','');
      const bp = BLOG_POSTS.find(x=>x.slug===slug);
      if (bp) renderBlogPost(bp);
      break;
    }
    case 'detail': {
      const slug = getCleanPath().replace('/game/','');
      const g = GAMES.find(x=>x.slug===slug) || GAMES.find(x=>x.id===+slug);
      if (g) renderDetail(g.id);
      break;
    }
  }
}

function handlePath() {
  const p = getCleanPath();
  // Blog post: /blog/slug
  const bp = p.match(/^\/blog\/(.+)$/);
  if (bp) {
    const post = BLOG_POSTS.find(x=>x.slug===bp[1]);
    if (post) { showPage('blogpost'); renderBlogPost(post); return; }
  }
  // Game detail: /game/slug
  const gm = p.match(/^\/game\/(.+)$/);
  if (gm) {
    const g = GAMES.find(x=>x.slug===gm[1]) || GAMES.find(x=>x.id===+gm[1]);
    if (g) { showPage('detail'); renderDetail(g.id); return; }
  }
  // Static pages
  const found = Object.entries(ROUTES).find(([k,r])=>!['detail','blogpost'].includes(k) && r.path===p);
  const target = found ? found[0] : 'home';
  showPage(target);
  reRender(target);
}

window.addEventListener('popstate', handlePath);


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

// ── HERO SLIDESHOW ──
var _hIdx=0,_hTimer=null,_hPaused=false,_hFill=0,_hFillT=null;
var H_MS=6000,H_TICK=60;
function _hGames(){return GAMES.slice(0,5);}
function _hRender(g){
  var l=L(),gs=_hGames(),idx=gs.findIndex(function(x){return x.id===g.id;});
  var bg=document.getElementById('heroBg'),bgP=document.getElementById('heroBgPrev');
  if(bg&&g.thumbnail){
    if(bgP){bgP.style.backgroundImage=bg.style.backgroundImage;bgP.style.opacity='1';setTimeout(function(){if(bgP)bgP.style.opacity='0';},50);}
    bg.style.backgroundImage='url('+g.thumbnail+')';
  }
  var tEl=document.getElementById('heroTitle');
  if(tEl){tEl.innerHTML='';var sp=document.createElement('span');sp.className='hero-title-anim';sp.textContent=g.title;tEl.appendChild(sp);}
  var mEl=document.getElementById('heroMeta');
  if(mEl){
    var mb=(g.badges.includes('hot')?'<span class="hbadge hot">HOT</span>':'');
    mb+=(g.badges.includes('new')?'<span class="hbadge new">'+l.card.newBadge+'</span>':'');
    mb+=(g.viet?'<span class="hbadge viet">'+l.card.vietBadge+'</span>':'');
    mb+='<span class="hero-genre-pill">'+g.genre_label+'</span>';
    mb+='<span class="hero-rating">&#9733; '+g.rating.toFixed(1)+'</span>';
    mEl.innerHTML=mb;
  }
  var dEl=document.getElementById('heroDesc');if(dEl)dEl.textContent=g.desc_short;
  var iEl=document.getElementById('heroInfoRow');
  if(iEl){
    iEl.innerHTML='<div class="hi-item"><span class="hi-val">'+g.size+'</span><span class="hi-key">'+l.hero.size+'</span></div>'
      +'<div class="hi-item"><span class="hi-val">'+g.version+'</span><span class="hi-key">'+l.hero.version+'</span></div>'
      +'<div class="hi-item"><span class="hi-val">'+fmtN(g.downloads)+'</span><span class="hi-key">'+l.hero.downloads+'</span></div>';
  }
  var bEl=document.getElementById('heroBtns');
  if(bEl){
    bEl.innerHTML='<button class="btn btn-primary" onclick="go(\'detail\','+g.id+')">'+l.hero.dlBtn+'</button>'
      +'<button class="btn btn-ghost" onclick="go(\'detail\','+g.id+')">'+l.hero.detailBtn+'</button>';
  }
  var imgEl=document.getElementById('heroImg');
  if(imgEl){
    var imgH=g.thumbnail?'<img src="'+g.thumbnail+'" alt="" onerror="this.style.display=\'none\'">':'<div class="hero-img-fb">'+g.emoji+'</div>';
    imgH+='<div style="position:absolute;bottom:.55rem;right:.65rem;background:rgba(0,0,0,.65);color:#fff;font-size:.6rem;font-family:var(--mono);padding:.15rem .45rem;border-radius:4px;z-index:3">'+(idx+1)+' / '+gs.length+'</div>';
    imgEl.innerHTML=imgH;
  }
  var siEl=document.getElementById('heroSlideInfo');if(siEl)siEl.textContent=(idx+1)+'/'+gs.length;
  var wrap=document.getElementById('heroDots');
  if(wrap){
    var dotsH='';
    for(var di=0;di<gs.length;di++){
      dotsH+='<div class="hdot '+(di===idx?'active':'inactive')+'" onclick="_hGoTo('+di+')" title="'+gs[di].title+'"><div class="hdot-fill" id="hf'+di+'"></div></div>';
    }
    wrap.innerHTML=dotsH;
  }
}
function _hStartFill(){
  _hFill=0;clearInterval(_hFillT);
  _hFillT=setInterval(function(){
    if(_hPaused)return;
    _hFill=Math.min(100,_hFill+(H_TICK/H_MS)*100);
    var el=document.getElementById('hf'+_hIdx);if(el)el.style.width=_hFill+'%';
  },H_TICK);
}
function _hGoTo(idx){
  var gs=_hGames();if(!gs.length)return;
  _hIdx=((idx%gs.length)+gs.length)%gs.length;
  _hRender(gs[_hIdx]);_hStartFill();
  clearInterval(_hTimer);
  if(!_hPaused)_hTimer=setInterval(function(){_hGoTo(_hIdx+1);},H_MS);
}
function heroNext(){_hGoTo(_hIdx+1);}
function heroPrev(){_hGoTo(_hIdx-1);}
function heroTogglePause(){
  _hPaused=!_hPaused;
  var btn=document.getElementById('heroPauseBtn');if(btn)btn.classList.toggle('paused',_hPaused);
  if(_hPaused){clearInterval(_hTimer);}
  else{_hTimer=setInterval(function(){_hGoTo(_hIdx+1);},H_MS);}
}
function _hInit(){
  _hIdx=0;_hPaused=false;clearInterval(_hTimer);clearInterval(_hFillT);
  var gs=_hGames();if(!gs.length)return;
  _hRender(gs[0]);_hStartFill();
  _hTimer=setInterval(function(){_hGoTo(_hIdx+1);},H_MS);
}
function switchHero(id,dotEl){
  var i=_hGames().findIndex(function(x){return x.id===id;});
  if(i>=0)_hGoTo(i);
}

function renderHome() {
  const l=L(); const total=GAMES.length; const vietN=GAMES.filter(g=>g.viet).length;
  const nc=document.getElementById('navCount'); if(nc) nc.textContent=total+' games';
  document.getElementById('stripTotal').textContent=total+' '+l.stripe.games;
  document.getElementById('stripViet').textContent=vietN+' '+l.stripe.viet;
  const ey=document.getElementById('heroEyebrow'); if(ey) ey.textContent=l.hero.eyebrow;
  _hInit();
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

function renderDetail(id){
  var ld=L().detail; var g=GAMES.find(function(x){return x.id===id;}); var el=document.getElementById('page-detail');
  if(!g){
    el.innerHTML='<div style="padding:8rem 2rem;text-align:center;color:var(--text3)"><div style="font-size:3rem">&#128533;</div><h2 style="margin:.75rem 0 .5rem;font-family:var(--display)">'+L().empty.notFound+'</h2><button class="btn btn-primary" onclick="go(\'games\')" style="margin-top:1rem">'+L().empty.back+'</button></div>';
    return;
  }
  var shots=g.screenshots||(g.thumbnail?[g.thumbnail]:[]);
  var related=GAMES.filter(function(x){return x.genre===g.genre&&x.id!==g.id;}).slice(0,4);
  var s100=Math.round(g.rating*20);

  // Slideshow
  var ssH='';
  if(shots.length){
    var dotsH2='';
    for(var si=0;si<shots.length;si++) dotsH2+='<button class="dv2-sdot '+(si===0?'active':'')+'" onclick="dv2SlideTo('+si+')"></button>';
    ssH='<div style="margin-bottom:1.2rem">'
      +'<div class="dv2-sec"><div class="dv2-sec-icon">&#128444;</div><div class="dv2-sec-title">&#7842;NH GAME '+g.title+'</div></div>'
      +'<div class="dv2-slideshow" id="dv2ss"><img id="dv2ss-img" src="'+shots[0]+'" alt="'+g.title+'" onerror="this.style.display=\'none\'">'
      +'<button class="dv2-slide-prev" onclick="dv2SlidePrev()">&#8249;</button>'
      +'<button class="dv2-slide-next" onclick="dv2SlideNext()">&#8250;</button>'
      +'<div class="dv2-slide-counter" id="dv2ss-ctr">1 / '+shots.length+'</div></div>'
      +'<div class="dv2-slide-dots">'+dotsH2+'</div></div>';
  }

  // Info grid
  var igH='<div class="dv2-info-grid">'
    +'<div class="dv2-info-box">'
    +'<div class="dv2-info-row"><span class="dv2-info-key">&#128203; T&ecirc;n:</span><span class="dv2-info-val">'+g.title+'</span></div>'
    +'<div class="dv2-info-row"><span class="dv2-info-key">&#128197; N&#259;m:</span><span class="dv2-info-val">'+g.year+'</span></div>'
    +'<div class="dv2-info-row"><span class="dv2-info-key">&#127918; Th&#7875; lo&#7841;i:</span><span class="dv2-info-val" style="color:var(--accent)">'+g.genre_label+'</span></div>'
    +'<div class="dv2-info-row"><span class="dv2-info-key">&#128190; Dung l&#432;&#7907;ng:</span><span class="dv2-info-val">'+g.size+'</span></div>'
    +'<div class="dv2-info-row"><span class="dv2-info-key">Phi&ecirc;n b&#7843;n:</span><span class="dv2-info-val">'+g.version+'</span></div>'
    +'</div>'
    +'<div class="dv2-info-box">'
    +'<div class="dv2-info-check">Ch&#417;i &#273;&#417;n l&#7867;</div>'
    +'<div class="dv2-info-check">Ng&ocirc;n ng&#7919;: '+(g.viet?'Ti&#7871;ng Vi&#7879;t':'Ti&#7871;ng Anh')+'</div>'
    +'<div class="dv2-info-check">H&#7879; &#273;i&#7873;u h&agrave;nh: Windows</div>'
    +'<div class="dv2-info-check">B&agrave;n ph&iacute;m / Chu&#7897;t</div>'
    +'<div class="dv2-info-check">Developer: '+(g.developer||'&mdash;')+'</div>'
    +'<div class="dv2-info-check">Publisher: '+(g.publisher||'&mdash;')+'</div>'
    +'</div></div>';

  // TOC
  var tocH='<div class="dv2-toc"><div class="dv2-toc-head">&#128203; N&#7897;i dung b&agrave;i</div><ol>'
    +'<li><a onclick="document.getElementById(\'dv2-intro\')&&document.getElementById(\'dv2-intro\').scrollIntoView({behavior:\'smooth\'})">Gi&#7899;i thi&#7879;u '+g.title+'</a><ol><li><a>T&#7893;ng quan &amp; n&#7893;i b&#7853;t</a></li><li><a>Gameplay &amp; c&#417; ch&#7871;</a></li></ol></li>'
    +(shots.length?'<li><a onclick="document.getElementById(\'dv2-shots\')&&document.getElementById(\'dv2-shots\').scrollIntoView({behavior:\'smooth\'})">H&igrave;nh &#7843;nh game</a></li>':'')
    +'<li><a onclick="document.getElementById(\'dv2-process\')&&document.getElementById(\'dv2-process\').scrollIntoView({behavior:\'smooth\'})">Quy tr&igrave;nh c&agrave;i &#273;&#7863;t A-Z</a></li>'
    +'<li><a onclick="document.getElementById(\'dv2-install\')&&document.getElementById(\'dv2-install\').scrollIntoView({behavior:\'smooth\'})">H&#432;&#7899;ng d&#7851;n c&agrave;i &#273;&#7863;t</a></li>'
    +(g.trailer?'<li><a onclick="document.getElementById(\'dv2-trailer\')&&document.getElementById(\'dv2-trailer\').scrollIntoView({behavior:\'smooth\'})">Video Trailer</a></li>':'')
    +'<li><a onclick="document.getElementById(\'dv2-sysreq\')&&document.getElementById(\'dv2-sysreq\').scrollIntoView({behavior:\'smooth\'})">C&#7845;u h&igrave;nh y&ecirc;u c&#7847;u</a></li>'
    +'<li><a onclick="document.getElementById(\'dv2-score\')&&document.getElementById(\'dv2-score\').scrollIntoView({behavior:\'smooth\'})">&#272;&aacute;nh gi&aacute; game</a></li>'
    +'</ol></div>';

  var introH='<div id="dv2-intro" style="margin-bottom:1.3rem"><div class="dv2-sec"><div class="dv2-sec-icon">i</div><div class="dv2-sec-title">Gi&#7899;i thi&#7879;u game '+g.title+'</div></div><div class="dv2-body">'+(g.desc_full||'<p>'+g.desc_short+'</p>')+'</div></div>';

  var processH='<div id="dv2-process" style="margin-bottom:1.3rem">'
    +'<div class="dv2-sec"><div class="dv2-sec-icon">&#9881;</div><div class="dv2-sec-title">Quy tr&igrave;nh c&agrave;i &#273;&#7863;t Game t&#7915; A-Z</div></div>'
    +'<div class="dv2-warn"><strong>QUY TR&Igrave;NH B&#7854;T BU&#7896;C</strong> &mdash; l&agrave;m theo &#273;&#7875; tr&aacute;nh l&#7895;i khi c&agrave;i.</div>'
    +'<div class="dv2-steps"><ol>'
    +'<li><strong>&#431;U TI&Ecirc;N KI&#7EC4;M TRA C&#7844;U H&Igrave;NH TR&#431;&#7898;C KHI T&#7842;I GAME.</strong></li>'
    +'<li>T&#7855;t Windows Defender / antivirus tr&#432;&#7899;c khi c&agrave;i &#273;&#7863;t.</li>'
    +'<li>C&agrave;i ph&#7847;n m&#7873;m h&#7895; tr&#7907; (Visual C++, DirectX...).</li>'
    +'<li>T&#7843;i, gi&#7843;i n&eacute;n v&agrave; ch&#7841;y theo h&#432;&#7899;ng d&#7851;n b&ecirc;n d&#432;&#7899;i.</li>'
    +'</ol><div class="dv2-steps-note">'
    +'<div class="dv2-steps-note-item">&#272;&#432;&#7901;ng d&#7851;n, th&#432; m&#7909;c kh&ocirc;ng d&ugrave;ng k&yacute; t&#7921; c&oacute; d&#7845;u ho&#7863;c Ti&#7871;ng Vi&#7879;t.</div>'
    +'<div class="dv2-steps-note-item">Khi t&#7843;i nhi&#7873;u PART, b&#7887; chung v&agrave;o 1 th&#432; m&#7909;c v&agrave; gi&#7843;i n&eacute;n ch&#7881; t&#7915; 1 file.</div>'
    +'</div></div></div>';

  var installH=g.install_guide?'<div id="dv2-install" style="margin-bottom:1.3rem">'
    +'<div class="dv2-sec"><div class="dv2-sec-icon">&#128230;</div><div class="dv2-sec-title">H&#432;&#7899;ng d&#7851;n c&agrave;i &#273;&#7863;t '+g.title+'</div></div>'
    +'<div class="dv2-warn"><strong>L&#431;U &Yacute;: T&#7855;t Di&#7879;t Virus Tr&#432;&#7899;c Khi C&agrave;i &#272;&#7863;t Game</strong></div>'
    +'<div class="dv2-install">'+g.install_guide+'</div></div>':'';

  var trailerH=g.trailer?'<div id="dv2-trailer" style="margin-bottom:1.3rem">'
    +'<div class="dv2-sec"><div class="dv2-sec-icon">&#9654;</div><div class="dv2-sec-title">Video Trailer &amp; Gameplay</div></div>'
    +'<div class="dv2-trailer"><iframe src="'+g.trailer+'" allowfullscreen allow="autoplay;encrypted-media"></iframe></div></div>':'';

  var srH='';
  if(g.sys_req){
    srH='<div id="dv2-sysreq" style="margin-bottom:1.3rem">'
      +'<div class="dv2-sec"><div class="dv2-sec-icon">&#128187;</div><div class="dv2-sec-title">C&#7845;u h&igrave;nh y&ecirc;u c&#7847;u</div></div>'
      +'<div class="dv2-req-tabs"><button class="dv2-req-tab active" id="dv2rt-min" onclick="dv2SR(\'min\')">T&#7889;i thi&#7875;u</button><button class="dv2-req-tab" id="dv2rt-rec" onclick="dv2SR(\'rec\')">&#272;&#7873; ngh&#7883;</button></div>'
      +'<div id="dv2-req-min" class="dv2-req-table">'+dv2Rows(g.sys_req.min)+'</div>'
      +'<div id="dv2-req-rec" class="dv2-req-table" style="display:none">'+dv2Rows(g.sys_req.rec)+'</div></div>';
  }

  var scoreRows=[['C&#7889;t Truy&#7879;n',Math.round(g.rating*18.5)],['Gameplay',Math.round(g.rating*19)],['&#272;&#7891; H&#7885;a',s100],['&Acirc;m Thanh',Math.round(g.rating*18)],['T&#7893;ng Th&#7875;',Math.min(100,Math.round(g.rating*21))]];
  var scoreBarsH='';
  for(var sri=0;sri<scoreRows.length;sri++){
    scoreBarsH+='<div class="dv2-score-bar-row"><span class="dv2-score-bar-name">'+scoreRows[sri][0]+'</span><div class="dv2-score-bar-track"><div class="dv2-score-bar-fill" style="width:'+scoreRows[sri][1]+'%"></div></div><span class="dv2-score-bar-val">'+scoreRows[sri][1]+' &#273;i&#7875;m</span></div>';
  }
  var scoreH='<div id="dv2-score" style="margin-bottom:1.3rem">'
    +'<div class="dv2-sec"><div class="dv2-sec-icon">&#11088;</div><div class="dv2-sec-title">&#272;&aacute;nh gi&aacute; game '+g.title+'</div></div>'
    +'<div class="dv2-score-box"><div class="dv2-score-head">'
    +'<div class="dv2-score-circle"><span class="dv2-score-num">'+s100+'</span><span class="dv2-score-lbl">VaultGame</span></div>'
    +'<div class="dv2-score-bars">'+scoreBarsH+'</div></div>'
    +'<div style="font-size:.72rem;color:var(--text3);text-align:center">'+starStr(g.rating)+' '+g.rating.toFixed(1)+'/5.0 &middot; '+fmtN(g.downloads)+' l&#432;&#7907;t t&#7843;i</div></div></div>';

  var relatedH='';
  if(related.length){
    relatedH='<div style="margin-top:1.4rem"><div class="dv2-sec"><div class="dv2-sec-icon">&#127918;</div><div class="dv2-sec-title">Game li&ecirc;n quan</div></div>'
      +'<div class="game-grid lg">'+related.map(function(r,i){return gcard(r,i*.05);}).join('')+'</div></div>';
  }

  var seriesGames=GAMES.filter(function(x){return x.genre===g.genre&&x.id!==g.id;}).slice(0,5);
  var seriesH='';
  if(seriesGames.length){
    var sItemsH='';
    for(var sii=0;sii<seriesGames.length;sii++){
      var sg=seriesGames[sii];
      sItemsH+='<div class="dv2-series-item" onclick="go(\'detail\','+sg.id+')">'
        +'<div class="dv2-series-thumb">'+(sg.thumbnail?'<img src="'+sg.thumbnail+'" alt="" onerror="this.style.display=\'none\'">':'<span style="font-size:1.2rem">'+sg.emoji+'</span>')+'</div>'
        +'<div class="dv2-series-name">'+sg.title.substring(0,20)+'</div></div>';
    }
    seriesH='<div style="margin-bottom:1.2rem"><div class="dv2-sec"><div class="dv2-sec-icon">&#128279;</div><div class="dv2-sec-title">Game c&ugrave;ng th&#7875; lo&#7841;i</div></div><div class="dv2-series">'+sItemsH+'</div></div>';
  }

  var dlBtnsH='';
  var dlinks=g.download_links||[];
  if(dlinks.length){
    // Kiểm tra có link nào dùng group không
    var hasGroup=dlinks.some(function(d){return d.group;});
    if(!hasGroup){
      // Game cũ: render nút đơn như cũ
      for(var dli=0;dli<dlinks.length;dli++){
        dlBtnsH+='<a href="'+dlinks[dli].url+'" class="dv2-dl-btn" target="_blank" rel="noopener">'+(dlinks[dli].icon||'&#11015;')+' T&#7842;I GAME &mdash; '+dlinks[dli].label+'</a>';
      }
    }else{
      // Game mới: nhóm theo host
      var groups={}, groupOrder=[];
      for(var dli=0;dli<dlinks.length;dli++){
        var d=dlinks[dli];
        var grpName=d.group||'Khác';
        if(!groups[grpName]){groups[grpName]=[];groupOrder.push(grpName);}
        groups[grpName].push(d);
      }
      dlBtnsH='<div class="dv2-dl-groups">';
      for(var gi=0;gi<groupOrder.length;gi++){
        var grp=groupOrder[gi];
        var grpLinks=groups[grp];
        dlBtnsH+='<div class="dv2-dl-group">';
        dlBtnsH+='<div class="dv2-dl-group-label">'+grpLinks[0].icon+' '+grp+'</div>';
        dlBtnsH+='<div class="dv2-dl-group-btns">';
        for(var gli=0;gli<grpLinks.length;gli++){
          dlBtnsH+='<a href="'+grpLinks[gli].url+'" class="dv2-dl-part-btn" target="_blank" rel="noopener">&#11015; '+grpLinks[gli].label+'</a>';
        }
        dlBtnsH+='</div></div>';
      }
      dlBtnsH+='</div>';
    }
  }else{
    dlBtnsH='<div style="opacity:.5;font-size:.8rem;text-align:center;padding:.5rem">&#9203; S&#7855;p c&oacute; link t&#7843;i</div>';
  }

  var sideGames=GAMES.filter(function(x){return x.id!==g.id;}).slice(0,5);
  var sideRelH='';
  if(sideGames.length){
    var sideItemsH='';
    for(var sri2=0;sri2<sideGames.length;sri2++){
      var rg=sideGames[sri2];
      sideItemsH+='<div class="dv2-related-item" onclick="go(\'detail\','+rg.id+')">'
        +'<div class="dv2-related-thumb">'+(rg.thumbnail?'<img src="'+rg.thumbnail+'" alt="" onerror="this.style.display=\'none\'">':rg.emoji)+'</div>'
        +'<div class="dv2-related-info"><div class="dv2-related-genre">'+rg.genre_label+'</div><div class="dv2-related-title">'+rg.title+'</div><div class="dv2-related-size">'+rg.size+' &middot; '+rg.year+'</div></div>'
        +'</div>';
    }
    sideRelH='<div class="dv2-sinfo"><div class="dv2-sinfo-title">Game kh&aacute;c</div><div class="dv2-related-list">'+sideItemsH+'</div></div>';
  }

  var tagsH='';
  for(var ti=0;ti<g.tags.length;ti++) tagsH+='<span class="dv2-tag">'+g.tags[ti]+'</span>';

  el.innerHTML=
    '<div class="dv2-bc"><div class="dv2-bc-inner">'
    +'<a onclick="go(\'home\')">Trang ch&#7911;</a><span>&#8250;</span>'
    +'<a onclick="go(\'games\')">T&#7845;t c&#7843; Game</a><span>&#8250;</span>'
    +'<a onclick="go(\'genre\')">'+g.genre_label+'</a><span>&#8250;</span>'
    +'<span>'+g.title+'</span></div></div>'
    +'<div class="dv2-ptitle">T&#7843;i Game '+g.title+' &mdash; PC Download Full</div>'
    +'<div class="dv2-wrap">'
    +'<div class="dv2-main">'
    +ssH+seriesH
    +'<div class="dv2-sec" style="margin-bottom:.75rem"><div class="dv2-sec-icon">i</div><div class="dv2-sec-title">Chi ti&#7871;t game '+g.title+'</div></div>'
    +igH+tocH+introH
    +'<div id="dv2-shots"></div>'
    +processH+installH+trailerH+srH+scoreH+relatedH
    +"<div class=\"cmt-wrap\"><div class=\"cmt-sec\"><div class=\"cmt-sec-icon\">&#128172;</div><div class=\"cmt-sec-title\">B&igrave;nh lu&#7853;n</div></div><div id=\"cmt-section\"><div class=\"cmt-empty\">&#8987; &#272;ang t&#7843;i...</div></div></div>"
    +'</div>'
    +'<div class="dv2-side">'
    +'<div class="dv2-dl-box"><div class="dv2-dl-inner">'
    +'<div class="dv2-dl-badge">&#10004; Ki&#7875;m tra an to&agrave;n</div>'
    +'<div class="dv2-dl-title">'+g.title+'</div>'
    +'<div class="dv2-dl-ver">'+g.version+'</div>'
    +'<div class="dv2-dl-stats">'
    +'<div class="dv2-dl-stat"><span class="dv2-dl-stat-val">'+g.size+'</span><span class="dv2-dl-stat-key">Dung l&#432;&#7907;ng</span></div>'
    +'<div class="dv2-dl-stat"><span class="dv2-dl-stat-val">'+g.year+'</span><span class="dv2-dl-stat-key">N&#259;m</span></div>'
    +'<div class="dv2-dl-stat"><span class="dv2-dl-stat-val">'+fmtN(g.downloads)+'</span><span class="dv2-dl-stat-key">L&#432;&#7907;t t&#7843;i</span></div>'
    +'</div>'
    +dlBtnsH
    +'<div class="dv2-dl-free-note">&#10003; Ho&agrave;n to&agrave;n mi&#7877;n ph&iacute;</div>'
    +'<div class="dv2-dl-warn">T&#7855;t antivirus tr&#432;&#7899;c khi c&agrave;i. Link Gofile t&#7889;c &#273;&#7897; cao.</div>'
    +(g.viet?'<div class="dv2-dl-viet">&#127992; &#272;&atilde; Vi&#7879;t H&oacute;a ho&agrave;n ch&#7881;nh</div>':'')
    +'</div></div>'
    +'<div class="dv2-sinfo">'
    +'<div class="dv2-sinfo-title">Th&ocirc;ng tin game</div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">Developer</span><span class="dv2-sinfo-v">'+(g.developer||'&mdash;')+'</span></div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">Publisher</span><span class="dv2-sinfo-v">'+(g.publisher||'&mdash;')+'</span></div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">Th&#7875; lo&#7841;i</span><span class="dv2-sinfo-v">'+g.genre_label+'</span></div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">N&#259;m</span><span class="dv2-sinfo-v">'+g.year+'</span></div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">&#272;&aacute;nh gi&aacute;</span><span class="dv2-sinfo-v" style="color:var(--yellow)">&#9733; '+g.rating.toFixed(1)+' / 5.0</span></div>'
    +'<div class="dv2-sinfo-row" style="flex-direction:column;gap:.3rem;align-items:flex-start"><span class="dv2-sinfo-k">Tags</span><div class="dv2-tags">'+tagsH+'</div></div>'
    +'</div>'
    +sideRelH
    +'</div></div>';

  window._dv2Shots=shots; window._dv2Idx=0;
  setTimeout(function(){ _cmtRender(g.id); }, 100);
}

function dv2Rows(req){
  var lb={os:'OS',cpu:'CPU',ram:'RAM',gpu:'GPU',storage:'&#7840; c&#7913;ng',directx:'DirectX'};
  var h='';
  for(var k in req) h+='<div class="dv2-req-row"><div class="dv2-req-k">'+(lb[k]||k)+'</div><div class="dv2-req-v">'+req[k]+'</div></div>';
  return h;
}
function dv2SR(tab){
  document.getElementById('dv2-req-min').style.display=tab==='min'?'block':'none';
  document.getElementById('dv2-req-rec').style.display=tab==='rec'?'block':'none';
  document.getElementById('dv2rt-min').classList.toggle('active',tab==='min');
  document.getElementById('dv2rt-rec').classList.toggle('active',tab==='rec');
}
function dv2SlideTo(idx){
  var s=window._dv2Shots||[]; if(!s.length)return;
  window._dv2Idx=((idx%s.length)+s.length)%s.length;
  var img=document.getElementById('dv2ss-img'); if(img)img.src=s[window._dv2Idx];
  var ctr=document.getElementById('dv2ss-ctr'); if(ctr)ctr.textContent=(window._dv2Idx+1)+' / '+s.length;
  var dots=document.querySelectorAll('.dv2-sdot');
  for(var di=0;di<dots.length;di++) dots[di].classList.toggle('active',di===window._dv2Idx);
}
function dv2SlideNext(){dv2SlideTo((window._dv2Idx||0)+1);}
function dv2SlidePrev(){dv2SlideTo((window._dv2Idx||0)-1);}


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

// ══ 8. BLOG ══════════════════════════════════════════════

const BLOG_CAT_META = {
  news:   { label:'Tin tức',          color:'rgba(0,180,216,.15)',   text:'var(--accent)' },
  guide:  { label:'Hướng dẫn',        color:'rgba(6,214,160,.15)',   text:'var(--green)'  },
  review: { label:'Đánh giá',         color:'rgba(255,214,10,.15)',  text:'var(--yellow)' },
  viet:   { label:'Việt hóa',         color:'rgba(196,30,58,.15)',   text:'#ef4444'       },
  dev:    { label:'Phát triển game',  color:'rgba(247,127,0,.15)',   text:'var(--orange)' },
};

function blogTagHtml(cat) {
  const m = BLOG_CAT_META[cat]||{label:cat,color:'rgba(255,255,255,.1)',text:'var(--text2)'};
  return `<span class="blog-tag ${cat}" style="background:${m.color};color:${m.text}">${m.label}</span>`;
}

function renderBlog(activeCat='all') {
  const grid = document.getElementById('blogGrid');
  const empty = document.getElementById('blogEmpty');
  if (!grid) return;
  // Sort by id descending — bài mới nhất (id cao nhất) luôn ở trên đầu
  const sorted = [...BLOG_POSTS].sort((a,b)=>b.id-a.id);
  const list = activeCat==='all' ? sorted : sorted.filter(p=>p.cat===activeCat);
  if (!list.length) { grid.innerHTML=''; if(empty) empty.style.display='block'; return; }
  if(empty) empty.style.display='none';
  grid.innerHTML = list.map((p,i) => {
    const bg = p.thumbnail
      ? `style="background-image:url(${p.thumbnail});background-size:cover;background-position:center"`
      : `style="background:${p.gradient||'linear-gradient(135deg,#0077b6,#00b4d8)'}"`;
    const imgInner = p.thumbnail ? '' : `<span style="font-size:2.5rem">${p.icon||'📝'}</span>`;
    return `
<article class="blog-card" style="animation-delay:${i*.05}s" onclick="goBlogPost('${p.slug}')">
  <div class="blog-card-img" ${bg}>${imgInner}</div>
  <div class="blog-card-body">
    ${blogTagHtml(p.cat)}
    <h3 class="blog-card-title">${p.title}</h3>
    <p class="blog-card-desc">${p.desc}</p>
    <div class="blog-card-foot"><span class="blog-date">📅 ${p.date}</span><span class="blog-read">⏱ ${p.readTime}</span></div>
  </div>
</article>`;
  }).join('');
}

function filterBlog(el, cat) {
  document.querySelectorAll('.blog-cat').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  renderBlog(cat);
}

function goBlogPost(slug) {
  const post = BLOG_POSTS.find(p=>p.slug===slug);
  if (!post) return;
  curPage = 'blogpost';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-blog-post').classList.add('active');
  history.pushState(null,'', BASE_PATH + '/blog/' + post.slug);
  renderBlogPost(post);
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderBlogPost(post) {
  const el = document.getElementById('page-blog-post');
  if (!el) return;
  const catMeta = BLOG_CAT_META[post.cat]||{label:post.cat,color:'rgba(0,180,216,.15)',text:'var(--accent)'};
  // Preload thumbnail to detect load failure, fallback to gradient
  const thumbSrc = post.thumbnail;
  const fallbackBg = post.gradient || 'linear-gradient(135deg,#111318,#16181f)';
  const heroBgId = 'bp-hero-bg-' + post.id;
  // Use <img> for thumbnail (natural size, no duplicate), gradient div as fallback
  const heroBg = thumbSrc
    ? `<img class="bp-hero-img" id="${heroBgId}" src="${thumbSrc}" alt="${post.title}" onerror="this.style.display='none';document.getElementById('${heroBgId}-fb').style.display='block'">
<div id="${heroBgId}-fb" class="bp-hero-bg" style="display:none;background:${fallbackBg}"></div>`
    : (post.gradient ? `<div class="bp-hero-bg" style="background:${fallbackBg}"></div>` : '');
  // Related posts
  const related = BLOG_POSTS.filter(p=>p.cat===post.cat && p.id!==post.id).slice(0,3);
  const relatedHtml = related.length ? `
<div class="bp-related">
  <div class="bp-related-title">Bài viết liên quan</div>
  <div class="bp-related-grid">
    ${related.map(p => {
      const cm = BLOG_CAT_META[p.cat]||{label:p.cat,color:'rgba(255,255,255,.1)',text:'var(--text2)'};
      const imgHtml = p.thumbnail
        ? `<img src="${p.thumbnail}" alt="${p.title}" onerror="this.parentElement.style.background='${p.gradient||'#111'}';this.remove()">`
        : `<span>${p.icon||'📝'}</span>`;
      const imgBg = p.thumbnail ? '' : `style="background:${p.gradient||'#111'}"`;
      return `<div class="bp-related-card" onclick="goBlogPost('${p.slug}')">
        <div class="bp-related-card-img" ${imgBg}>${imgHtml}</div>
        <div class="bp-related-card-body">
          <span class="bp-related-card-cat" style="color:${cm.text}">${cm.label}</span>
          <div class="bp-related-card-title">${p.title}</div>
          <div class="bp-related-card-meta">
            <span class="bp-related-card-date">📅 ${p.date}</span>
            <span class="bp-related-card-read">⏱ ${p.readTime}</span>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>
</div>` : '';

  // Build table of contents from h2 tags in content
  const tocMatches = [...post.content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];
  const tocHtml = tocMatches.length > 1 ? `
<div class="bp-toc-inline">
  <div class="bp-toc-inline-head">
    <span class="bp-toc-inline-icon">☰</span>
    <span class="bp-toc-inline-label">Nội dung bài</span>
  </div>
  <ol class="bp-toc-inline-list">
    ${tocMatches.map((m,i)=>`<li><a onclick="document.querySelectorAll('.bp-content h2')[${i}]?.scrollIntoView({behavior:'smooth',block:'start'})">${i+1}. ${m[1]}</a></li>`).join('')}
  </ol>
</div>` : '';

  // All posts for sidebar
  const sidebarPosts = BLOG_POSTS.filter(p=>p.id!==post.id).slice(0,5);

  el.innerHTML = `
<div class="bc"><div class="bc-inner">
  <a onclick="go('home')">Trang chủ</a><span>›</span>
  <a onclick="go('blog')">Blog</a><span>›</span>
  <span>${post.title}</span>
</div></div>
<div class="bp-wrap">
  <div class="bp-main">
    <div class="bp-pre-hero">
      <div class="bp-pre-cat" style="color:${catMeta.text}">${catMeta.label}</div>
      <h1 class="bp-pre-title">${post.title}</h1>
      <div class="bp-meta-bar">
        <span class="bp-meta-item">📅 ${post.date}</span>
        <span class="bp-meta-item">⏱ ${post.readTime}</span>
      </div>
    </div>
    <div class="bp-hero" id="${heroBgId}-wrap">
      ${heroBg}
    </div>
    ${tocHtml}
    <div class="bp-content">${post.content}</div>
    ${relatedHtml}
  </div>
  <aside class="bp-sidebar">
    <div class="bp-sidebar-box">
      <div class="bp-sidebar-title">✍️ Bài viết mới nhất</div>
      ${sidebarPosts.map(p=>{
        const bg3 = p.thumbnail
          ? `background-image:url(${p.thumbnail});background-size:cover;background-position:center`
          : `background:${p.gradient||'#111'}`;
        const cm = BLOG_CAT_META[p.cat]||{label:p.cat,color:'rgba(255,255,255,.1)',text:'var(--text2)'};
        return `<div class="bp-sidebar-post" onclick="goBlogPost('${p.slug}')">
          <div class="bp-sidebar-post-img" style="${bg3}">${p.thumbnail?'':'<span>'+( p.icon||'📝')+'</span>'}</div>
          <div class="bp-sidebar-post-info">
            <span class="bp-sidebar-post-cat" style="color:${cm.text}">${cm.label}</span>
            <div class="bp-sidebar-post-title">${p.title}</div>
            <span class="bp-sidebar-post-date">📅 ${p.date}</span>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div class="bp-sidebar-box" style="text-align:center">
      <div class="bp-sidebar-title">🎮 Khám phá kho game</div>
      <p style="font-size:.74rem;color:var(--text3);margin:.5rem 0 .85rem;line-height:1.6">Tải game PC miễn phí, Việt hóa đầy đủ, không quảng cáo.</p>
      <button class="btn btn-primary" onclick="go('games')" style="width:100%;justify-content:center">Xem tất cả game →</button>
    </div>
  </aside>
</div>`;
}

// ══ 8. INIT ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded',()=>{ applyTheme(_theme); updateLangUI(); handlePath(); });


// ── COMMENTS (Firebase Firestore) ──────────────────────────
var _cmtRating = 0;
var _cmtUnsub = null; // realtime listener unsubscribe

function _cmtSetStar(n) {
  _cmtRating = n;
  var stars = document.querySelectorAll('.cmt-star');
  for (var i = 0; i < stars.length; i++) {
    stars[i].classList.toggle('on', i < n);
  }
}

function _cmtSubmit(gameId) {
  var nameEl = document.getElementById('cmt-name-input');
  var textEl = document.getElementById('cmt-text-input');
  if (!nameEl || !textEl) return;
  var name = nameEl.value.trim();
  var text = textEl.value.trim();
  if (!name) { alert('Vui lòng nhập tên!'); nameEl.focus(); return; }
  if (!text) { alert('Vui lòng nhập nội dung bình luận!'); textEl.focus(); return; }

  var submitBtn = document.getElementById('cmt-submit-btn');
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Đang gửi...'; }

  var db = window._db || (typeof firebase !== 'undefined' && firebase.firestore ? firebase.firestore() : null);
  if(!db){ alert('Lỗi kết nối Firebase!'); if(submitBtn){submitBtn.disabled=false;submitBtn.textContent='💬 Gửi bình luận';} return; }
  db.collection('comments').add({
    gameId: gameId,
    name: name,
    text: text,
    rating: _cmtRating,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function() {
    nameEl.value = '';
    textEl.value = '';
    _cmtSetStar(0);
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = '💬 Gửi bình luận'; }
  }).catch(function(err) {
    console.error('Comment error:', err);
    alert('Gửi thất bại, thử lại nhé!');
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = '💬 Gửi bình luận'; }
  });
}

function _cmtRender(gameId) {
  var wrap = document.getElementById('cmt-section');
  if (!wrap) return;

  // Show loading
  wrap.innerHTML = '<div class="cmt-empty">⏳ Đang tải bình luận...</div>';

  // Unsubscribe previous listener if any
  if (_cmtUnsub) { try { _cmtUnsub(); } catch(e){} _cmtUnsub = null; }

  // Check Firebase available
  if (typeof firebase === 'undefined' || !firebase.firestore) {
    wrap.innerHTML = _cmtFormHtml(gameId) + '<div class="cmt-empty">Không thể tải bình luận.</div>';
    return;
  }

  var db = window._db || (typeof firebase !== 'undefined' && firebase.firestore ? firebase.firestore() : null);
  if(!db){ wrap.innerHTML = _cmtFormHtml(gameId) + '<div class="cmt-empty">Không thể kết nối Firebase.</div>'; return; }

  // Realtime listener
  _cmtUnsub = db.collection('comments')
    .where('gameId', '==', gameId)
    .orderBy('createdAt', 'desc')
    .limit(50)
    .onSnapshot(function(snap) {
      var list = [];
      snap.forEach(function(doc) { list.push(doc.data()); });
      _cmtDraw(gameId, list);
    }, function(err) {
      console.error('Firestore error:', err);
      // Fallback: try one-time fetch
      db.collection('comments')
        .where('gameId', '==', gameId)
        .orderBy('createdAt', 'desc')
        .limit(50)
        .get().then(function(snap) {
          var list = [];
          snap.forEach(function(doc) { list.push(doc.data()); });
          _cmtDraw(gameId, list);
        }).catch(function() {
          wrap.innerHTML = _cmtFormHtml(gameId) + '<div class="cmt-empty">Lỗi tải bình luận.</div>';
        });
    });
}

function _cmtFormHtml(gameId) {
  return '<div class="cmt-form">'
    + '<div class="cmt-form-row">'
    + '<input class="cmt-input" id="cmt-name-input" placeholder="Tên của bạn *" maxlength="40">'
    + '<input class="cmt-input" id="cmt-email-input" placeholder="Email (không bắt buộc)" maxlength="80">'
    + '</div>'
    + '<div class="cmt-stars">'
    + '<span style="font-size:.75rem;color:var(--text3);margin-right:.3rem">Đánh giá:</span>'
    + '<span class="cmt-star" onclick="_cmtSetStar(1)">&#9733;</span>'
    + '<span class="cmt-star" onclick="_cmtSetStar(2)">&#9733;</span>'
    + '<span class="cmt-star" onclick="_cmtSetStar(3)">&#9733;</span>'
    + '<span class="cmt-star" onclick="_cmtSetStar(4)">&#9733;</span>'
    + '<span class="cmt-star" onclick="_cmtSetStar(5)">&#9733;</span>'
    + '</div>'
    + '<textarea class="cmt-textarea" id="cmt-text-input" placeholder="Chia sẻ trải nghiệm của bạn về game này..." maxlength="1000"></textarea>'
    + '<button class="cmt-submit" id="cmt-submit-btn" onclick="_cmtSubmit(' + gameId + ')">&#128172; Gửi bình luận</button>'
    + '<div class="cmt-note">&#127759; Bình luận của bạn sẽ hiển thị cho tất cả mọi người.</div>'
    + '</div>';
}

function _cmtDraw(gameId, list) {
  var wrap = document.getElementById('cmt-section');
  if (!wrap) return;

  var countH = '<div class="cmt-count">&#128172; <strong>' + list.length + '</strong> bình luận</div>';
  var formH  = _cmtFormHtml(gameId);

  var listH = '';
  if (list.length === 0) {
    listH = '<div class="cmt-empty">Chưa có bình luận nào. Hãy là người đầu tiên! &#128515;</div>';
  } else {
    listH = '<div class="cmt-list">';
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      var av = (c.name || '?').charAt(0).toUpperCase();
      // Format date
      var dateStr = '';
      if (c.createdAt && c.createdAt.toDate) {
        var d = c.createdAt.toDate();
        dateStr = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
          + ' ' + d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes();
      }
      var starsH = '';
      if (c.rating > 0) {
        for (var s = 1; s <= 5; s++) starsH += (s <= c.rating ? '&#9733;' : '&#9734;');
      }
      var safeText = (c.text||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
      listH += '<div class="cmt-item">'
        + '<div class="cmt-item-head">'
        + '<div class="cmt-avatar">' + av + '</div>'
        + '<div class="cmt-meta"><div class="cmt-name">' + (c.name||'Ẩn danh') + '</div>'
        + (dateStr ? '<div class="cmt-date">' + dateStr + '</div>' : '')
        + '</div>'
        + (starsH ? '<div class="cmt-rating">' + starsH + '</div>' : '')
        + '</div>'
        + '<div class="cmt-text">' + safeText + '</div>'
        + '</div>';
    }
    listH += '</div>';
  }

  wrap.innerHTML = countH + formH + listH;
}
