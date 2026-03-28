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
    home:{ hot:'Game Nổi Bật',hotMore:'Xem tất cả →',new_:'Mới Cập Nhật',newMore:'Xem thêm →',blog:'Bài Viết Mới Nhất',blogMore:'Xem tất cả →' },
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
      privacy: { title:'Chính Sách Bảo Mật',       sub:'Cập nhật lần cuối: Tháng 3, 2026' },
      terms:   { title:'Điều Khoản Sử Dụng',       sub:'Cập nhật lần cuối: Tháng 3, 2026' },
    },
    filter:{ all:'Tất cả',action:'Action',rpg:'RPG',strategy:'Chiến thuật',puzzle:'Đố trí',shooter:'Bắn súng',adventure:'Phiêu lưu',simulation:'Mô phỏng',horror:'Kinh dị',sports:'Thể Thao',sortNew:'Mới nhất',sortName:'Tên A→Z',sortRating:'Đánh giá',sortDl:'Lượt tải',placeholder:'Tìm theo tên, thể loại, tags...',found:'Tìm thấy',gameUnit:'game' },
    blogCats:{ all:'Tất cả',news:'Tin tức',guide:'Hướng dẫn',review:'Đánh giá',viet:'Việt hóa',dev:'Phát triển game' },
    vietBanner:{ title:'Game đã được Việt hóa hoàn chỉnh',sub:'Dịch bởi cộng đồng game thủ Việt Nam — giao diện & lời thoại đầy đủ tiếng Việt.',count:'game đã được Việt hóa' },
    top:{ rating:'Đánh Giá Cao Nhất',dl:'Tải Nhiều Nhất' },
    card:{ detail:'Chi tiết →',newBadge:'MỚI',vietBadge:'VIỆT HÓA' },
    detail:{ intro:'Giới thiệu game',screenshots:'Ảnh chụp màn hình',trailer:'Trailer',info:'Thông tin game',sysreq:'Cấu hình yêu cầu',install:'Hướng dẫn cài đặt',related:'Game cùng thể loại',min:'Tối thiểu',rec:'Khuyến nghị',version:'Phiên bản',year:'Năm phát hành',size:'Dung lượng',genre:'Thể loại',dev:'Nhà phát triển',viet:'Việt hóa',vietYes:'✅ Có',vietNo:'❌ Chưa có',dlFree:'Tải miễn phí',dlBtn:'Tải xuống',dlFreeTag:'✅ Hoàn toàn miễn phí',dlNote:'Không quảng cáo · Không đăng ký · Tốc độ cao',dlViet:'🇻🇳 Bản này đã có tiếng Việt',dlSizeLbl:'Dung lượng tải về',dlDownloads:'Lượt tải',dlYear:'Năm',infoTitle:'Thông tin chi tiết',publisher:'Publisher',rating:'Đánh giá',tags:'Tags',breadHome:'Trang chủ',breadGames:'Tất cả game',dlcountLabel:'lượt tải',
      galTitle:'Hình ảnh game',tocIntro:'Giới thiệu',tocOverview:'Tổng quan & nổi bật',tocGameplay:'Gameplay & cơ chế',tocShots:'Hình ảnh game',tocProcess:'Quy trình cài đặt A-Z',tocInstall:'Hướng dẫn cài đặt',tocTrailer:'Video Trailer',tocSysreq:'Cấu hình yêu cầu',tocScore:'Đánh giá game',
      secDetail:'Chi tiết game',secIntro:'Giới thiệu game',secProcess:'Quy trình cài đặt Game từ A-Z',secInstall:'Hướng dẫn cài đặt',secTrailer:'Video Trailer & Gameplay',secSysreq:'Cấu hình yêu cầu',secScore:'Đánh giá game',secRelated:'Game liên quan',secSeries:'Game cùng thể loại',secOther:'Game khác',secInfo:'Thông tin game',
      infoName:'Tên:',infoYear:'Năm:',infoSize:'Dung lượng:',infoVersion:'Phiên bản:',infoSingle:'Chơi đơn lẻ',infoLangVi:'Tiếng Việt',infoLangEn:'Tiếng Anh',infoOS:'Hệ điều hành: Windows',infoInput:'Bàn phím / Chuột',
      dlStatSize:'Dung lượng',dlStatYear:'Năm',dlStatDl:'Lượt tải',dlFreeNote:'✓ Hoàn toàn miễn phí',dlWarn:'Tắt antivirus trước khi cài. Link Gofile tốc độ cao.',dlVietBadge:'🎮 Đã Việt Hóa hoàn chỉnh',
      cdScrollHint:'Cuộn xuống hướng dẫn cài đặt để mở khoá link tải',cdWaiting:'Đang chuẩn bị link tải...',cdSeconds:'giây',cdReady:'Link đã sẵn sàng!',
      processWarn:'QUY TRÌNH BẮT BUỘC — làm theo để tránh lỗi khi cài.',processStep1:'ƯU TIÊN KIỂM TRA CẤU HÌNH TRƯỚC KHI TẢI GAME.',processStep2:'Tắt Windows Defender / antivirus trước khi cài đặt.',processStep3:'Cài phần mềm hỗ trợ (Visual C++, DirectX...).',processStep4:'Tải, giải nén và chạy theo hướng dẫn bên dưới.',processNote1:'Đường dẫn, thư mục không dùng ký tự có dấu hoặc Tiếng Việt.',processNote2:'Khi tải nhiều PART, bỏ chung vào 1 thư mục và giải nén chỉ từ 1 file.',
      scoreStory:'Cốt Truyện',scoreGameplay:'Gameplay',scoreGraphics:'Đồ Họa',scoreAudio:'Âm Thanh',scoreTotal:'Tổng Thể',scorePoints:'điểm' },
    search:{ placeholder:'Tìm kiếm game...',hint:'Nhập tên game để tìm kiếm...',notFound:'Không tìm thấy' },
    empty:{ title:'Chưa có dữ liệu',notFound:'Không tìm thấy game',back:'← Quay lại',noHot:'Chưa có game nổi bật',noNew:'Chưa có game mới',noViet:'Chưa có game Việt hóa, sắp cập nhật...',noSearch:'Thử từ khóa khác hoặc bỏ bộ lọc' },
    footer:{ explore:'Khám phá',list:'Danh sách',info:'Thông tin',about:'Giới thiệu',contact:'Liên hệ',report:'Báo lỗi',copy:'© 2026 VaultGame — All rights reserved',made:'Made with ❤️ for VN gamers' },
    sr:{ os:'Hệ điều hành',cpu:'CPU',ram:'RAM',gpu:'GPU',storage:'Ổ cứng',directx:'DirectX' },
  },
  en: {
    code:'en',flag:'🇬🇧',name:'English',
    nav:{ home:'Home',games:'All Games',genre:'Genres',viet:'Vietnamese',new_:'New Games',top:'Top Games',search:'Search',blog:'Blog' },
    hero:{ eyebrow:'Updated constantly — 100% free',size:'File size',version:'Version',downloads:'Downloads',dlBtn:'⬇ Download Free',detailBtn:'View details →' },
    stripe:{ updated:'Regular updates',speed:'Unlimited high speed',noads:'No ads',viet:'Vietnamese patch',games:'games' },
    home:{ hot:'Featured Games',hotMore:'View all →',new_:'Recently Added',newMore:'View more →',blog:'Latest Blog Posts',blogMore:'View all →' },
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
      privacy: { title:'Privacy Policy',          sub:'Last updated: March 2026' },
      terms:   { title:'Terms of Service',        sub:'Last updated: March 2026' },
    },
    filter:{ all:'All',action:'Action',rpg:'RPG',strategy:'Strategy',puzzle:'Puzzle',shooter:'Shooter',adventure:'Adventure',simulation:'Simulation',horror:'Horror',sports:'Sports',sortNew:'Newest',sortName:'Name A→Z',sortRating:'Rating',sortDl:'Downloads',placeholder:'Search by name, genre, tags...',found:'Found',gameUnit:'games' },
    blogCats:{ all:'All',news:'News',guide:'Guides',review:'Reviews',viet:'Vietnamese',dev:'Game Dev' },
    vietBanner:{ title:'These games are fully localised in Vietnamese',sub:'Translated by the Vietnamese gaming community — full UI & dialogue.',count:'games localised in Vietnamese' },
    top:{ rating:'Highest Rated',dl:'Most Downloaded' },
    card:{ detail:'Details →',newBadge:'NEW',vietBadge:'VIET' },
    detail:{ intro:'About this game',screenshots:'Screenshots',trailer:'Trailer',info:'Game info',sysreq:'System requirements',install:'Installation guide',related:'More like this',min:'Minimum',rec:'Recommended',version:'Version',year:'Release year',size:'File size',genre:'Genre',dev:'Developer',viet:'Vietnamese patch',vietYes:'✅ Available',vietNo:'❌ Not available',dlFree:'Free Download',dlBtn:'Download',dlFreeTag:'✅ Completely free',dlNote:'No ads · No sign-up · High speed',dlViet:'🇻🇳 Vietnamese patch included',dlSizeLbl:'Download size',dlDownloads:'Downloads',dlYear:'Year',infoTitle:'Details',publisher:'Publisher',rating:'Rating',tags:'Tags',breadHome:'Home',breadGames:'All games',dlcountLabel:'downloads',
      galTitle:'Game Screenshots',tocIntro:'Introduction',tocOverview:'Overview & highlights',tocGameplay:'Gameplay & mechanics',tocShots:'Screenshots',tocProcess:'Installation process A-Z',tocInstall:'Installation guide',tocTrailer:'Video Trailer',tocSysreq:'System requirements',tocScore:'Game rating',
      secDetail:'Game details',secIntro:'About this game',secProcess:'Full Installation Process A-Z',secInstall:'Installation guide',secTrailer:'Video Trailer & Gameplay',secSysreq:'System requirements',secScore:'Game rating',secRelated:'Related games',secSeries:'More in this genre',secOther:'Other games',secInfo:'Game info',
      infoName:'Title:',infoYear:'Year:',infoSize:'File size:',infoVersion:'Version:',infoSingle:'Single-player',infoLangVi:'Vietnamese',infoLangEn:'English',infoOS:'OS: Windows',infoInput:'Keyboard / Mouse',
      dlStatSize:'File size',dlStatYear:'Year',dlStatDl:'Downloads',dlFreeNote:'✓ Completely free',dlWarn:'Disable antivirus before installing. Gofile links are high speed.',dlVietBadge:'🎮 Vietnamese patch included',
      cdScrollHint:'Scroll down to the install guide to unlock the download link',cdWaiting:'Preparing download link...',cdSeconds:'seconds',cdReady:'Link is ready!',
      processWarn:'REQUIRED STEPS — follow these to avoid installation errors.',processStep1:'CHECK YOUR SYSTEM REQUIREMENTS BEFORE DOWNLOADING.',processStep2:'Disable Windows Defender / antivirus before installing.',processStep3:'Install required software (Visual C++, DirectX...).',processStep4:'Download, extract and follow the guide below.',processNote1:'Avoid accented characters or spaces in folder paths.',processNote2:'When downloading multiple PARTs, put them all in one folder and extract from the first file only.',
      scoreStory:'Story',scoreGameplay:'Gameplay',scoreGraphics:'Graphics',scoreAudio:'Audio',scoreTotal:'Overall',scorePoints:'pts' },
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
    home:{ hot:'Juegos Destacados',hotMore:'Ver todos →',new_:'Recién Añadidos',newMore:'Ver más →',blog:'Últimas Entradas del Blog',blogMore:'Ver todo →' },
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
      privacy: { title:'Política de Privacidad',    sub:'Última actualización: Marzo 2026' },
      terms:   { title:'Términos de Uso',           sub:'Última actualización: Marzo 2026' },
    },
    filter:{ all:'Todos',action:'Acción',rpg:'RPG',strategy:'Estrategia',puzzle:'Puzzle',shooter:'Shooter',adventure:'Aventura',simulation:'Simulación',horror:'Terror',sports:'Deportes',sortNew:'Más nuevos',sortName:'Nombre A→Z',sortRating:'Puntuación',sortDl:'Descargas',placeholder:'Buscar por nombre, género, etiquetas...',found:'Encontrados',gameUnit:'juegos' },
    blogCats:{ all:'Todos',news:'Noticias',guide:'Guías',review:'Reseñas',viet:'Vietnamita',dev:'Desarrollo' },
    vietBanner:{ title:'Todos los juegos están localizados en vietnamita',sub:'Traducido por la comunidad gamer vietnamita — interfaz y diálogos completos.',count:'juegos localizados en vietnamita' },
    top:{ rating:'Mejor Valorados',dl:'Más Descargados' },
    card:{ detail:'Detalles →',newBadge:'NUEVO',vietBadge:'VIET' },
    detail:{ intro:'Sobre este juego',screenshots:'Capturas de pantalla',trailer:'Tráiler',info:'Información del juego',sysreq:'Requisitos del sistema',install:'Guía de instalación',related:'Juegos similares',min:'Mínimos',rec:'Recomendados',version:'Versión',year:'Año de lanzamiento',size:'Tamaño',genre:'Género',dev:'Desarrollador',viet:'Parche vietnamita',vietYes:'✅ Disponible',vietNo:'❌ No disponible',dlFree:'Descarga Gratuita',dlBtn:'Descargar',dlFreeTag:'✅ Completamente gratis',dlNote:'Sin anuncios · Sin registro · Alta velocidad',dlViet:'🇻🇳 Incluye parche en vietnamita',dlSizeLbl:'Tamaño de descarga',dlDownloads:'Descargas',dlYear:'Año',infoTitle:'Detalles',publisher:'Editor',rating:'Puntuación',tags:'Etiquetas',breadHome:'Inicio',breadGames:'Todos los juegos',dlcountLabel:'descargas',
      galTitle:'Imágenes del juego',tocIntro:'Introducción',tocOverview:'Visión general',tocGameplay:'Gameplay y mecánicas',tocShots:'Imágenes',tocProcess:'Proceso de instalación A-Z',tocInstall:'Guía de instalación',tocTrailer:'Video Tráiler',tocSysreq:'Requisitos del sistema',tocScore:'Valoración',
      secDetail:'Detalles del juego',secIntro:'Sobre este juego',secProcess:'Proceso de instalación completo A-Z',secInstall:'Guía de instalación',secTrailer:'Video Tráiler & Gameplay',secSysreq:'Requisitos del sistema',secScore:'Valoración del juego',secRelated:'Juegos relacionados',secSeries:'Más de este género',secOther:'Otros juegos',secInfo:'Información del juego',
      infoName:'Título:',infoYear:'Año:',infoSize:'Tamaño:',infoVersion:'Versión:',infoSingle:'Un jugador',infoLangVi:'Vietnamita',infoLangEn:'Inglés',infoOS:'SO: Windows',infoInput:'Teclado / Ratón',
      dlStatSize:'Tamaño',dlStatYear:'Año',dlStatDl:'Descargas',dlFreeNote:'✓ Completamente gratis',dlWarn:'Desactiva el antivirus antes de instalar. Los enlaces Gofile son de alta velocidad.',dlVietBadge:'🎮 Parche vietnamita incluido',
      cdScrollHint:'Desplázate hasta la guía de instalación para desbloquear el enlace',cdWaiting:'Preparando enlace de descarga...',cdSeconds:'segundos',cdReady:'¡Enlace listo!',
      processWarn:'PASOS OBLIGATORIOS — síguelos para evitar errores de instalación.',processStep1:'COMPRUEBA LOS REQUISITOS DEL SISTEMA ANTES DE DESCARGAR.',processStep2:'Desactiva Windows Defender / antivirus antes de instalar.',processStep3:'Instala el software necesario (Visual C++, DirectX...).',processStep4:'Descarga, extrae y sigue la guía a continuación.',processNote1:'Evita caracteres acentuados o espacios en las rutas de carpetas.',processNote2:'Si descargas varios PARTs, colócalos en una misma carpeta y extrae solo desde el primer archivo.',
      scoreStory:'Historia',scoreGameplay:'Gameplay',scoreGraphics:'Gráficos',scoreAudio:'Audio',scoreTotal:'Global',scorePoints:'pts' },
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
  // Unsubscribe stats listener nếu rời khỏi trang detail
  if (curPage === 'detail' && page !== 'detail') {
    if (_statsUnsub) { try { _statsUnsub(); } catch(e){} _statsUnsub = null; }
  }
  curPage = page;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  const r = ROUTES[page]; if (!r) return;
  const el = document.getElementById(r.el); if (el) el.classList.add('active');
  if (r.nav) { const n=document.getElementById(r.nav); if(n) n.classList.add('active'); }
}

function updateCanonical(path) {
  let el = document.getElementById('canonical-url');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    el.id = 'canonical-url';
    document.head.appendChild(el);
  }
  el.href = 'https://vaultgame.qzz.io' + path;
}

function updateSEO(title, description, imageUrl) {
  // --- <title> ---
  document.title = title;

  // --- <meta name="description"> ---
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  // --- Open Graph ---
  const ogMap = {
    'og:title':       title,
    'og:description': description,
    'og:image':       imageUrl || 'https://vaultgame.qzz.io/og-default.jpg',
    'og:type':        'website',
  };
  for (const [prop, val] of Object.entries(ogMap)) {
    let el = document.querySelector(`meta[property="${prop}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', prop);
      document.head.appendChild(el);
    }
    el.content = val;
  }

  // --- Twitter Card ---
  const twMap = {
    'twitter:title':       title,
    'twitter:description': description,
    'twitter:image':       imageUrl || 'https://vaultgame.qzz.io/og-default.jpg',
  };
  for (const [name, val] of Object.entries(twMap)) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.name = name;
      document.head.appendChild(el);
    }
    el.content = val;
  }
}

function go(page, param) {
  closeLangMenu();
  showPage(page);
  if (page==='detail' && param) {
    const g = GAMES.find(x=>x.id===+param);
    const urlSlug = g ? g.slug : param;
    history.pushState(null,'', BASE_PATH + '/game/' + urlSlug);
    updateCanonical('/game/' + urlSlug);
    if (g) {
      const seoTitle = 'Tải ' + g.title + ' PC miễn phí — VaultGame';
      const seoDesc  = g.desc_short + ' | Tải ' + g.title + ' full crack miễn phí, không quảng cáo, tốc độ cao tại VaultGame.';
      updateSEO(seoTitle, seoDesc, g.thumbnail || '');
    }
    renderDetail(+param);
  } else {
    const r = ROUTES[page]; if(!r) return;
    history.pushState(null,'', BASE_PATH + r.path);
    updateCanonical(r.path);
    const p = L().pages[page];
    if (p) {
      updateSEO(p.title + ' — VaultGame', p.sub);
    } else {
      updateSEO('VaultGame — Tải Game PC Miễn Phí', 'Kho game PC miễn phí, Việt hóa đầy đủ, không quảng cáo, tốc độ cao.');
    }
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
    case 'privacy':  renderPrivacy(); break;
    case 'terms':    renderTerms(); break;
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
    if (post) {
      showPage('blogpost');
      renderBlogPost(post);
      updateCanonical(p);
      updateSEO(post.title + ' — VaultGame Blog', post.desc || '', post.thumbnail || '');
      return;
    }
  }
  // Game detail: /game/slug
  const gm = p.match(/^\/game\/(.+)$/);
  if (gm) {
    const g = GAMES.find(x=>x.slug===gm[1]) || GAMES.find(x=>x.id===+gm[1]);
    if (g) {
      showPage('detail');
      renderDetail(g.id);
      updateCanonical(p);
      const seoTitle = 'Tải ' + g.title + ' PC miễn phí — VaultGame';
      const seoDesc  = g.desc_short + ' | Tải ' + g.title + ' full crack miễn phí, không quảng cáo, tốc độ cao tại VaultGame.';
      updateSEO(seoTitle, seoDesc, g.thumbnail || '');
      return;
    }
  }
  // Static pages
  const found = Object.entries(ROUTES).find(([k,r])=>!['detail','blogpost'].includes(k) && r.path===p);
  const target = found ? found[0] : 'home';
  showPage(target);
  reRender(target);
  updateCanonical(p);
  const pg = L().pages[target];
  if (pg) {
    updateSEO(pg.title + ' — VaultGame', pg.sub);
  } else {
    updateSEO('VaultGame — Tải Game PC Miễn Phí', 'Kho game PC miễn phí, Việt hóa đầy đủ, không quảng cáo, tốc độ cao.');
  }
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
function _hGames(){return [...GAMES].sort(function(a,b){return (b.downloads||0)-(a.downloads||0);}).slice(0,5);}
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
var _hStatsUnsub=null;
function _hLoadStats(gameId,baseDl){
  if(_hStatsUnsub){try{_hStatsUnsub();}catch(e){}  _hStatsUnsub=null;}
  var db=_getDb();if(!db)return;
  _hStatsUnsub=db.collection('game_stats').doc(String(gameId)).onSnapshot(function(doc){
    var dlDelta=0;if(doc.exists)dlDelta=doc.data().downloads||0;
    var total=baseDl+dlDelta;
    var row=document.getElementById('heroInfoRow');
    if(row){var items=row.querySelectorAll('.hi-item');if(items.length>=3){var v=items[2].querySelector('.hi-val');if(v)v.textContent=fmtN(total);}}
  },function(e){console.warn('hLoadStats:',e);});
}
function _hGoTo(idx){
  var gs=_hGames();if(!gs.length)return;
  _hIdx=((idx%gs.length)+gs.length)%gs.length;
  _hRender(gs[_hIdx]);_hStartFill();
  _hLoadStats(gs[_hIdx].id,gs[_hIdx].downloads||0);
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
  _hLoadStats(gs[0].id,gs[0].downloads||0);
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

  // Blog section
  const sbl=document.getElementById('secBlogLabel'); if(sbl) sbl.textContent=lh.blog;
  const sbm=document.getElementById('secBlogMore');  if(sbm) sbm.textContent=lh.blogMore;
  const blogEl=document.getElementById('homeBlog'); if(!blogEl) return;
  const sortedBlog=[...BLOG_POSTS].sort((a,b)=>b.id-a.id).slice(0,3);
  const BLOG_CAT_LABELS={news:'Tin tức',guide:'Hướng dẫn',review:'Đánh giá',viet:'Việt hóa',dev:'Phát triển game'};
  blogEl.innerHTML=sortedBlog.map((p,i)=>{
    const cat=BLOG_CAT_LABELS[p.cat]||p.cat;
    const bg=p.thumbnail?`url(${p.thumbnail})`:(p.gradient||'linear-gradient(135deg,var(--accent),var(--accent2))');
    const iconH=!p.thumbnail?`<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:2.5rem">${p.icon||'📝'}</div>`:'';
    return `<div class="hbc" style="animation-delay:${i*.06}s" onclick="showPage('blogpost');history.pushState(null,'','/blog/${p.slug}');renderBlogPost(BLOG_POSTS.find(x=>x.slug==='${p.slug}'))">
      <div class="hbc-img" style="background:${bg};background-size:cover;background-position:center;position:relative">${iconH}</div>
      <div class="hbc-body">
        <span class="hbc-cat hbc-cat-${p.cat}">${cat}</span>
        <div class="hbc-title">${p.title}</div>
        <div class="hbc-meta">${p.date} · ${p.readTime}</div>
      </div>
    </div>`;
  }).join('');
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
function goGenre(genreId){ genrePageFilter=genreId; go('genre'); }

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
      +'<div class="dv2-sec"><div class="dv2-sec-icon">&#128444;</div><div class="dv2-sec-title">'+ld.galTitle+' — '+g.title+'</div></div>'
      +'<div class="dv2-slideshow" id="dv2ss"><img id="dv2ss-img" src="'+shots[0]+'" alt="'+g.title+'" onerror="this.style.display=\'none\'">'
      +'<button class="dv2-slide-prev" onclick="dv2SlidePrev()">&#8249;</button>'
      +'<button class="dv2-slide-next" onclick="dv2SlideNext()">&#8250;</button>'
      +'<div class="dv2-slide-counter" id="dv2ss-ctr">1 / '+shots.length+'</div></div>'
      +'<div class="dv2-slide-dots">'+dotsH2+'</div></div>';
  }

  // Info grid
  var igH='<div class="dv2-info-grid">'
    +'<div class="dv2-info-box">'
    +'<div class="dv2-info-row"><span class="dv2-info-key">&#128203; '+ld.infoName+'</span><span class="dv2-info-val">'+g.title+'</span></div>'
    +'<div class="dv2-info-row"><span class="dv2-info-key">&#128197; '+ld.infoYear+'</span><span class="dv2-info-val">'+g.year+'</span></div>'
    +'<div class="dv2-info-row"><span class="dv2-info-key">&#127918; '+ld.genre+':</span><span class="dv2-info-val" style="color:var(--accent)">'+g.genre_label+'</span></div>'
    +'<div class="dv2-info-row"><span class="dv2-info-key">&#128190; '+ld.infoSize+'</span><span class="dv2-info-val">'+g.size+'</span></div>'
    +'<div class="dv2-info-row"><span class="dv2-info-key">'+ld.version+':</span><span class="dv2-info-val">'+g.version+'</span></div>'
    +'</div>'
    +'<div class="dv2-info-box">'
    +'<div class="dv2-info-check">'+ld.infoSingle+'</div>'
    +'<div class="dv2-info-check">'+ld.viet+': '+(g.viet?ld.infoLangVi:ld.infoLangEn)+'</div>'
    +'<div class="dv2-info-check">'+ld.infoOS+'</div>'
    +'<div class="dv2-info-check">'+ld.infoInput+'</div>'
    +'<div class="dv2-info-check">Developer: '+(g.developer||'&mdash;')+'</div>'
    +'<div class="dv2-info-check">Publisher: '+(g.publisher||'&mdash;')+'</div>'
    +'</div></div>';

  // TOC
  var tocH='<div class="dv2-toc"><div class="dv2-toc-head">&#128203; '+ld.info+'</div><ol>'
    +'<li><a onclick="document.getElementById(\'dv2-intro\')&&document.getElementById(\'dv2-intro\').scrollIntoView({behavior:\'smooth\'})">'+ld.tocIntro+' '+g.title+'</a><ol><li><a>'+ld.tocOverview+'</a></li><li><a>'+ld.tocGameplay+'</a></li></ol></li>'
    +(shots.length?'<li><a onclick="document.getElementById(\'dv2-shots\')&&document.getElementById(\'dv2-shots\').scrollIntoView({behavior:\'smooth\'})">'+ld.tocShots+'</a></li>':'')
    +'<li><a onclick="document.getElementById(\'dv2-process\')&&document.getElementById(\'dv2-process\').scrollIntoView({behavior:\'smooth\'})">'+ld.tocProcess+'</a></li>'
    +'<li><a onclick="document.getElementById(\'dv2-install\')&&document.getElementById(\'dv2-install\').scrollIntoView({behavior:\'smooth\'})">'+ld.tocInstall+'</a></li>'
    +(g.trailer?'<li><a onclick="document.getElementById(\'dv2-trailer\')&&document.getElementById(\'dv2-trailer\').scrollIntoView({behavior:\'smooth\'})">'+ld.tocTrailer+'</a></li>':'')
    +'<li><a onclick="document.getElementById(\'dv2-sysreq\')&&document.getElementById(\'dv2-sysreq\').scrollIntoView({behavior:\'smooth\'})">'+ld.tocSysreq+'</a></li>'
    +'<li><a onclick="document.getElementById(\'dv2-score\')&&document.getElementById(\'dv2-score\').scrollIntoView({behavior:\'smooth\'})">'+ld.tocScore+'</a></li>'
    +'</ol></div>';

  var introH='<div id="dv2-intro" style="margin-bottom:1.3rem"><div class="dv2-sec"><div class="dv2-sec-icon">i</div><div class="dv2-sec-title">'+ld.secIntro+' '+g.title+'</div></div><div class="dv2-body">'+(g.desc_full||'<p>'+g.desc_short+'</p>')+'</div></div>';

  var processH='<div id="dv2-process" style="margin-bottom:1.3rem">'
    +'<div class="dv2-sec"><div class="dv2-sec-icon">&#9881;</div><div class="dv2-sec-title">'+ld.secProcess+'</div></div>'
    +'<div class="dv2-warn"><strong>'+ld.processWarn+'</strong></div>'
    +'<div class="dv2-steps"><ol>'
    +'<li><strong>'+ld.processStep1+'</strong></li>'
    +'<li>'+ld.processStep2+'</li>'
    +'<li>'+ld.processStep3+'</li>'
    +'<li>'+ld.processStep4+'</li>'
    +'</ol><div class="dv2-steps-note">'
    +'<div class="dv2-steps-note-item">'+ld.processNote1+'</div>'
    +'<div class="dv2-steps-note-item">'+ld.processNote2+'</div>'
    +'</div></div></div>';

  var installH=g.install_guide?'<div id="dv2-install" style="margin-bottom:1.3rem">'
    +'<div class="dv2-sec"><div class="dv2-sec-icon">&#128230;</div><div class="dv2-sec-title">'+ld.secInstall+' '+g.title+'</div></div>'
    +'<div class="dv2-warn"><strong>'+ld.dlWarn+'</strong></div>'
    +'<div class="dv2-install">'+g.install_guide+'</div></div>':'';

  var trailerH=g.trailer?'<div id="dv2-trailer" style="margin-bottom:1.3rem">'
    +'<div class="dv2-sec"><div class="dv2-sec-icon">&#9654;</div><div class="dv2-sec-title">'+ld.secTrailer+'</div></div>'
    +'<div class="dv2-trailer"><iframe src="'+g.trailer+'" allowfullscreen allow="autoplay;encrypted-media"></iframe></div></div>':'';

  var srH='';
  if(g.sys_req){
    srH='<div id="dv2-sysreq" style="margin-bottom:1.3rem">'
      +'<div class="dv2-sec"><div class="dv2-sec-icon">&#128187;</div><div class="dv2-sec-title">'+ld.secSysreq+'</div></div>'
      +'<div class="dv2-req-tabs"><button class="dv2-req-tab active" id="dv2rt-min" onclick="dv2SR(\'min\')">'+ld.min+'</button><button class="dv2-req-tab" id="dv2rt-rec" onclick="dv2SR(\'rec\')">'+ld.rec+'</button></div>'
      +'<div id="dv2-req-min" class="dv2-req-table">'+dv2Rows(g.sys_req.min)+'</div>'
      +'<div id="dv2-req-rec" class="dv2-req-table" style="display:none">'+dv2Rows(g.sys_req.rec)+'</div></div>';
  }

  var scoreRows=[[ld.scoreStory,Math.round(g.rating*18.5)],[ld.scoreGameplay,Math.round(g.rating*19)],[ld.scoreGraphics,s100],[ld.scoreAudio,Math.round(g.rating*18)],[ld.scoreTotal,Math.min(100,Math.round(g.rating*21))]];
  var scoreBarsH='';
  for(var sri=0;sri<scoreRows.length;sri++){
    scoreBarsH+='<div class="dv2-score-bar-row"><span class="dv2-score-bar-name">'+scoreRows[sri][0]+'</span><div class="dv2-score-bar-track"><div class="dv2-score-bar-fill" style="width:'+scoreRows[sri][1]+'%"></div></div><span class="dv2-score-bar-val">'+scoreRows[sri][1]+' '+ld.scorePoints+'</span></div>';
  }
  var scoreH='<div id="dv2-score" style="margin-bottom:1.3rem">'
    +'<div class="dv2-sec"><div class="dv2-sec-icon">&#11088;</div><div class="dv2-sec-title">'+ld.secScore+' '+g.title+'</div></div>'
    +'<div class="dv2-score-box"><div class="dv2-score-head">'
    +'<div class="dv2-score-circle"><span class="dv2-score-num">'+s100+'</span><span class="dv2-score-lbl">VaultGame</span></div>'
    +'<div class="dv2-score-bars">'+scoreBarsH+'</div></div>'
    +'<div style="font-size:.72rem;color:var(--text3);text-align:center">'+starStr(g.rating)+' '+g.rating.toFixed(1)+'/5.0 &middot; <span id="stat-score-dl">'+fmtN(g.downloads)+'</span> '+ld.dlcountLabel+'</div></div></div>';

  var relatedH='';
  if(related.length){
    relatedH='<div style="margin-top:1.4rem"><div class="dv2-sec"><div class="dv2-sec-icon">&#127918;</div><div class="dv2-sec-title">'+ld.secRelated+'</div></div>'
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
    seriesH='<div style="margin-bottom:1.2rem"><div class="dv2-sec"><div class="dv2-sec-icon">&#128279;</div><div class="dv2-sec-title">'+ld.secSeries+'</div></div><div class="dv2-series">'+sItemsH+'</div></div>';
  }

  // Download links — ẩn, scroll tới install rồi đếm ngược 10 giây mới hiện
  var dlinks=g.download_links||[];
  var dlLinksHtml='';
  if(dlinks.length){
    var hasGroup=dlinks.some(function(d){return d.group;});
    if(!hasGroup){
      for(var dli=0;dli<dlinks.length;dli++){
        dlLinksHtml+='<a href="'+dlinks[dli].url+'" class="dv2-dl-btn" target="_blank" rel="noopener" onclick="_trackDownload('+g.id+')">'+(dlinks[dli].icon||'&#11015;')+' '+ld.dlBtn+' — '+dlinks[dli].label+'</a>';
      }
    }else{
      var groups={},groupOrder=[];
      for(var dli=0;dli<dlinks.length;dli++){
        var d=dlinks[dli];var grpName=d.group||'Other';
        if(!groups[grpName]){groups[grpName]=[];groupOrder.push(grpName);}
        groups[grpName].push(d);
      }
      dlLinksHtml='<div class="dv2-dl-groups">';
      for(var gi=0;gi<groupOrder.length;gi++){
        var grp=groupOrder[gi];var grpLinks=groups[grp];
        dlLinksHtml+='<div class="dv2-dl-group"><div class="dv2-dl-group-label">'+grpLinks[0].icon+' '+grp+'</div><div class="dv2-dl-group-btns">';
        for(var gli=0;gli<grpLinks.length;gli++){
          dlLinksHtml+='<a href="'+grpLinks[gli].url+'" class="dv2-dl-part-btn" target="_blank" rel="noopener" onclick="_trackDownload('+g.id+')">&#11015; '+grpLinks[gli].label+'</a>';
        }
        dlLinksHtml+='</div></div>';
      }
      dlLinksHtml+='</div>';
    }
  }else{
    dlLinksHtml='<div style="opacity:.5;font-size:.8rem;text-align:center;padding:.5rem">&#9203; '+ld.dlFree+'...</div>';
  }

  // Countdown gate HTML
  var dlBtnsH='<div id="dv2-cd-wrap">'
    +'<div id="dv2-cd-hint" class="dv2-cd-hint">&#128071; '+ld.cdScrollHint+'</div>'
    +'<div id="dv2-cd-timer" class="dv2-cd-timer" style="display:none">'
    +'<div class="dv2-cd-bar-track"><div class="dv2-cd-bar-fill" id="dv2-cd-bar"></div></div>'
    +'<div class="dv2-cd-text"><span id="dv2-cd-num">10</span> '+ld.cdSeconds+'... '+ld.cdWaiting+'</div>'
    +'</div>'
    +'<div id="dv2-cd-links" style="display:none">'+dlLinksHtml+'</div>'
    +'</div>';

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
    sideRelH='<div class="dv2-sinfo"><div class="dv2-sinfo-title">'+ld.secOther+'</div><div class="dv2-related-list">'+sideItemsH+'</div></div>';
  }

  var tagsH='';
  for(var ti=0;ti<g.tags.length;ti++) tagsH+='<span class="dv2-tag">'+g.tags[ti]+'</span>';

  el.innerHTML=
    '<div class="dv2-bc"><div class="dv2-bc-inner">'
    +'<a onclick="go(\'home\')">'+ld.breadHome+'</a><span>&#8250;</span>'
    +'<a onclick="go(\'games\')">'+ld.breadGames+'</a><span>&#8250;</span>'
    +'<a onclick="go(\'genre\')">'+g.genre_label+'</a><span>&#8250;</span>'
    +'<span>'+g.title+'</span></div></div>'
    +'<div class="dv2-ptitle">'+ld.dlFree+' '+g.title+' — PC Download Full</div>'
    +'<div class="dv2-wrap">'
    +'<div class="dv2-main">'
    +ssH+seriesH
    +'<div class="dv2-sec" style="margin-bottom:.75rem"><div class="dv2-sec-icon">i</div><div class="dv2-sec-title">'+ld.secDetail+' '+g.title+'</div></div>'
    +igH+tocH+introH
    +'<div id="dv2-shots"></div>'
    +processH+installH+trailerH+srH+scoreH+relatedH
    +'<div class="cmt-wrap"><div class="cmt-sec"><div class="cmt-sec-icon">&#128172;</div><div class="cmt-sec-title">'+ld.intro+'</div></div><div id="cmt-section"><div class="cmt-empty">&#8987; '+ld.cdWaiting+'</div></div></div>'
    +'</div>'
    +'<div class="dv2-side">'
    +'<div class="dv2-dl-box"><div class="dv2-dl-inner">'
    +'<div class="dv2-dl-badge">&#10004; '+ld.dlFreeTag+'</div>'
    +'<div class="dv2-dl-title">'+g.title+'</div>'
    +'<div class="dv2-dl-ver">'+g.version+'</div>'
    +'<div class="dv2-dl-stats">'
    +'<div class="dv2-dl-stat"><span class="dv2-dl-stat-val">'+g.size+'</span><span class="dv2-dl-stat-key">'+ld.dlStatSize+'</span></div>'
    +'<div class="dv2-dl-stat"><span class="dv2-dl-stat-val">'+g.year+'</span><span class="dv2-dl-stat-key">'+ld.dlStatYear+'</span></div>'
    +'<div class="dv2-dl-stat"><span class="dv2-dl-stat-val" id="stat-dl-val">'+fmtN(g.downloads)+'</span><span class="dv2-dl-stat-key">'+ld.dlStatDl+'</span></div>'
    +'<div class="dv2-dl-stat"><span class="dv2-dl-stat-val" id="stat-views-val">—</span><span class="dv2-dl-stat-key">Lượt xem</span></div>'
    +'</div>'
    +dlBtnsH
    +'<div class="dv2-dl-free-note">'+ld.dlFreeNote+'</div>'
    +'<div class="dv2-dl-warn">'+ld.dlWarn+'</div>'
    +(g.viet?'<div class="dv2-dl-viet">'+ld.dlVietBadge+'</div>':'')
    +'</div></div>'
    +'<div class="dv2-sinfo">'
    +'<div class="dv2-sinfo-title">'+ld.secInfo+'</div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">Developer</span><span class="dv2-sinfo-v">'+(g.developer||'&mdash;')+'</span></div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">Publisher</span><span class="dv2-sinfo-v">'+(g.publisher||'&mdash;')+'</span></div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">'+ld.genre+'</span><span class="dv2-sinfo-v">'+g.genre_label+'</span></div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">'+ld.year+'</span><span class="dv2-sinfo-v">'+g.year+'</span></div>'
    +'<div class="dv2-sinfo-row"><span class="dv2-sinfo-k">'+ld.rating+'</span><span class="dv2-sinfo-v" style="color:var(--yellow)">&#9733; '+g.rating.toFixed(1)+' / 5.0</span></div>'
    +'<div class="dv2-sinfo-row" style="flex-direction:column;gap:.3rem;align-items:flex-start"><span class="dv2-sinfo-k">'+ld.tags+'</span><div class="dv2-tags">'+tagsH+'</div></div>'
    +'</div>'
    +sideRelH
    +'</div></div>';

  window._dv2Shots=shots; window._dv2Idx=0;

  // Gallery
  var shotsEl=document.getElementById('dv2-shots');
  if(shotsEl){
    var gallery=g.gallery||[];
    if(gallery.length){
      var galH='<div id="dv2-gallery" style="margin-bottom:1.3rem">'
        +'<div class="dv2-sec"><div class="dv2-sec-icon">&#128444;</div><div class="dv2-sec-title">'+ld.galTitle+' '+g.title+'</div></div>'
        +'<div class="dv2-gal-grid">';
      for(var gai=0;gai<gallery.length;gai++){
        galH+='<div class="dv2-gal-item" onclick="openLb(\''+gallery[gai]+'\')">'
          +'<img src="'+gallery[gai]+'" alt="Screenshot '+(gai+1)+'" loading="lazy" onerror="this.parentElement.style.display=\'none\'">'
          +'<div class="dv2-gal-overlay"><span>&#128269;</span></div>'
          +'</div>';
      }
      galH+='</div></div>';
      shotsEl.innerHTML=galH;
    }
  }

  // Scroll + countdown 10 giây
  window._dv2CdDone=false;
  window._dv2CdTimer=null;
  var _cdObs=null;
  function _dv2StartCd(){
    if(window._dv2CdDone)return;
    window._dv2CdDone=true;
    if(_cdObs){_cdObs.disconnect();_cdObs=null;}
    var hint=document.getElementById('dv2-cd-hint');
    var timerEl=document.getElementById('dv2-cd-timer');
    var linksEl=document.getElementById('dv2-cd-links');
    var numEl=document.getElementById('dv2-cd-num');
    var barEl=document.getElementById('dv2-cd-bar');
    if(!timerEl||!linksEl)return;
    if(hint)hint.style.display='none';
    timerEl.style.display='block';
    var sec=10;
    if(numEl)numEl.textContent=sec;
    if(barEl)barEl.style.width='100%';
    window._dv2CdTimer=setInterval(function(){
      sec--;
      if(numEl)numEl.textContent=sec;
      if(barEl)barEl.style.width=(sec/10*100)+'%';
      if(sec<=0){
        clearInterval(window._dv2CdTimer);
        timerEl.style.display='none';
        linksEl.style.display='block';
      }
    },1000);
  }
  // Quan sát khi #dv2-install vào viewport
  var installEl=document.getElementById('dv2-install')||document.getElementById('dv2-process');
  if(installEl&&'IntersectionObserver' in window){
    _cdObs=new IntersectionObserver(function(entries){
      if(entries[0].isIntersecting)_dv2StartCd();
    },{threshold:0.15});
    _cdObs.observe(installEl);
  }

  setTimeout(function(){ _cmtRender(g.id); }, 100);

  // Track view + load realtime stats
  _trackView(g.id);
  _loadGameStats(g.id);
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
  updateCanonical('/blog/' + post.slug);
  updateSEO(post.title + ' — VaultGame Blog', post.desc || '', post.thumbnail || '');
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
var _statsUnsub = null; // game stats realtime listener

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

// ══ 10. VIEW & DOWNLOAD TRACKING (Firestore) ══════════════

/**
 * Lấy db instance (tái dùng logic giống comment section)
 */
function _getDb() {
  return window._db || (typeof firebase !== 'undefined' && firebase.firestore ? firebase.firestore() : null);
}

/**
 * Tăng lượt xem khi vào trang game.
 * Dùng sessionStorage để tránh tăng liên tục khi refresh trong cùng phiên.
 */
function _trackView(gameId) {
  var sessionKey = 'vg_view_' + gameId;
  if (sessionStorage.getItem(sessionKey)) return; // đã xem trong phiên này
  sessionStorage.setItem(sessionKey, '1');

  var db = _getDb();
  if (!db) return;

  var ref = db.collection('game_stats').doc(String(gameId));
  db.runTransaction(function(tx) {
    return tx.get(ref).then(function(doc) {
      if (!doc.exists) {
        tx.set(ref, { gameId: gameId, views: 1, downloads: 0 });
      } else {
        tx.update(ref, { views: firebase.firestore.FieldValue.increment(1) });
      }
    });
  }).catch(function(err) { console.warn('trackView error:', err); });
}

/**
 * Tăng lượt tải khi click link download.
 * Dùng localStorage cooldown 60 giây / link để tránh spam click.
 */
function _trackDownload(gameId) {
  var coolKey = 'vg_dl_' + gameId;
  var lastTime = parseInt(localStorage.getItem(coolKey) || '0', 10);
  var now = Date.now();
  if (now - lastTime < 60000) return; // cooldown 60 giây
  localStorage.setItem(coolKey, String(now));

  var db = _getDb();
  if (!db) return;

  var ref = db.collection('game_stats').doc(String(gameId));
  db.runTransaction(function(tx) {
    return tx.get(ref).then(function(doc) {
      if (!doc.exists) {
        tx.set(ref, { gameId: gameId, views: 0, downloads: 1 });
      } else {
        tx.update(ref, { downloads: firebase.firestore.FieldValue.increment(1) });
      }
    });
  }).catch(function(err) { console.warn('trackDownload error:', err); });
}

/**
 * Lắng nghe realtime stats từ Firestore rồi cập nhật UI.
 * Hiển thị: tổng = base (trong data.js) + delta (Firestore).
 */
function _loadGameStats(gameId) {
  if (_statsUnsub) { try { _statsUnsub(); } catch(e){} _statsUnsub = null; }

  var db = _getDb();
  if (!db) return;

  var baseGame = GAMES.find(function(x){ return x.id === gameId; });
  var baseDl = baseGame ? (baseGame.downloads || 0) : 0;

  _statsUnsub = db.collection('game_stats').doc(String(gameId))
    .onSnapshot(function(doc) {
      var dlDelta = 0, views = 0;
      if (doc.exists) {
        var data = doc.data();
        dlDelta = data.downloads || 0;
        views   = data.views    || 0;
      }
      var totalDl = baseDl + dlDelta;

      // Cập nhật stat box bên phải
      var dlEl = document.getElementById('stat-dl-val');
      if (dlEl) dlEl.textContent = fmtN(totalDl);

      var viewEl = document.getElementById('stat-views-val');
      if (viewEl) viewEl.textContent = fmtN(views);

      // Cập nhật score section bên dưới
      var scoreEl = document.getElementById('stat-score-dl');
      if (scoreEl) scoreEl.textContent = fmtN(totalDl);

      // Cập nhật hero slideshow nếu game này đang hiển thị
      var heroInfoRow = document.getElementById('heroInfoRow');
      if (heroInfoRow) {
        var hiItems = heroInfoRow.querySelectorAll('.hi-item');
        // hi-item thứ 3 là Downloads
        if (hiItems.length >= 3) {
          var valEl = hiItems[2].querySelector('.hi-val');
          if (valEl) valEl.textContent = fmtN(totalDl);
        }
      }
    }, function(err) {
      console.warn('loadGameStats error:', err);
    });
}

// ══ PRIVACY POLICY ═══════════════════════════════════════
function renderPrivacy() {
  const el = document.getElementById('page-privacy');
  if (!el) return;
  const lang = _lang;

  const content = {
    vi: {
      sections: [
        { h: '1. Giới thiệu', p: `VaultGame ("chúng tôi", "trang web") cam kết bảo vệ quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin khi bạn truy cập <strong>vaultgame.qzz.io</strong>.` },
        { h: '2. Thông tin chúng tôi thu thập', p: `Chúng tôi <strong>không yêu cầu đăng ký tài khoản</strong> và không thu thập thông tin cá nhân nhạy cảm như tên, email hay số điện thoại. Tuy nhiên, khi bạn sử dụng trang web, một số dữ liệu kỹ thuật có thể được ghi lại tự động:<br><br>
        <ul>
          <li>Địa chỉ IP (ẩn danh hóa)</li>
          <li>Loại trình duyệt và hệ điều hành</li>
          <li>Trang bạn đã xem và thời gian truy cập</li>
          <li>Nguồn giới thiệu (referrer URL)</li>
        </ul>` },
        { h: '3. Cookie và công nghệ theo dõi', p: `Trang web sử dụng <strong>cookie</strong> để lưu tùy chọn của bạn (ngôn ngữ, theme sáng/tối). Chúng tôi có thể sử dụng các dịch vụ phân tích bên thứ ba như <strong>Google Analytics</strong> để hiểu cách người dùng tương tác với trang web. Google Analytics thu thập dữ liệu ẩn danh về hành vi duyệt web.<br><br>Ngoài ra, trang web có thể hiển thị quảng cáo qua <strong>Google AdSense</strong>. Google và các đối tác có thể sử dụng cookie để hiển thị quảng cáo phù hợp với sở thích của bạn. Bạn có thể tắt quảng cáo cá nhân hóa tại <a href="https://adssettings.google.com" target="_blank" rel="noopener">adssettings.google.com</a>.` },
        { h: '4. Cách chúng tôi sử dụng thông tin', p: `Dữ liệu thu thập được chỉ dùng để:<br><br>
        <ul>
          <li>Vận hành và cải thiện trang web</li>
          <li>Phân tích xu hướng sử dụng (ẩn danh)</li>
          <li>Hiển thị nội dung và quảng cáo phù hợp</li>
          <li>Ngăn chặn lạm dụng và bảo vệ an toàn trang web</li>
        </ul>
        Chúng tôi <strong>không bán</strong> thông tin của bạn cho bên thứ ba.` },
        { h: '5. Dịch vụ bên thứ ba', p: `Trang web có thể chứa liên kết đến các trang bên thứ ba (Gofile, Steam, v.v.). Chúng tôi không kiểm soát chính sách bảo mật của các trang này và khuyến khích bạn đọc chính sách của họ trước khi chia sẻ thông tin.` },
        { h: '6. Bảo mật dữ liệu', p: `Chúng tôi áp dụng các biện pháp kỹ thuật hợp lý để bảo vệ dữ liệu thu thập. Tuy nhiên, không có phương thức truyền dữ liệu qua Internet nào có thể được đảm bảo an toàn tuyệt đối.` },
        { h: '7. Quyền của bạn', p: `Bạn có quyền:<br><br>
        <ul>
          <li>Yêu cầu xóa dữ liệu liên quan đến bạn</li>
          <li>Từ chối cookie bằng cách thay đổi cài đặt trình duyệt</li>
          <li>Không đồng ý với quảng cáo cá nhân hóa của Google</li>
        </ul>` },
        { h: '8. Thay đổi chính sách', p: `Chúng tôi có thể cập nhật chính sách này theo thời gian. Mọi thay đổi sẽ được đăng tải trên trang này kèm ngày cập nhật. Việc tiếp tục sử dụng trang web đồng nghĩa với việc bạn chấp nhận chính sách mới.` },
        { h: '9. Liên hệ', p: `Nếu bạn có câu hỏi về chính sách bảo mật, vui lòng <a href="#" onclick="go('contact');return false;">liên hệ với chúng tôi</a>.` },
      ]
    },
    en: {
      sections: [
        { h: '1. Introduction', p: `VaultGame ("we", "the website") is committed to protecting your privacy. This policy explains how we collect, use and safeguard information when you visit <strong>vaultgame.qzz.io</strong>.` },
        { h: '2. Information We Collect', p: `We <strong>do not require account registration</strong> and do not collect sensitive personal data such as names, emails or phone numbers. However, some technical data may be recorded automatically:<br><br>
        <ul>
          <li>IP address (anonymised)</li>
          <li>Browser type and operating system</li>
          <li>Pages viewed and time of visit</li>
          <li>Referrer URL</li>
        </ul>` },
        { h: '3. Cookies & Tracking Technologies', p: `The website uses <strong>cookies</strong> to store your preferences (language, light/dark theme). We may use third-party analytics services such as <strong>Google Analytics</strong> to understand how users interact with the site. Google Analytics collects anonymised browsing data.<br><br>The website may also display ads via <strong>Google AdSense</strong>. Google and its partners may use cookies to show ads relevant to your interests. You can opt out of personalised ads at <a href="https://adssettings.google.com" target="_blank" rel="noopener">adssettings.google.com</a>.` },
        { h: '4. How We Use Information', p: `Collected data is used only to:<br><br>
        <ul>
          <li>Operate and improve the website</li>
          <li>Analyse usage trends (anonymously)</li>
          <li>Display relevant content and advertisements</li>
          <li>Prevent abuse and maintain website security</li>
        </ul>
        We <strong>do not sell</strong> your information to third parties.` },
        { h: '5. Third-Party Services', p: `The website may contain links to third-party sites (Gofile, Steam, etc.). We do not control the privacy practices of these sites and encourage you to read their policies before sharing information.` },
        { h: '6. Data Security', p: `We apply reasonable technical measures to protect collected data. However, no method of transmitting data over the Internet can be guaranteed to be completely secure.` },
        { h: '7. Your Rights', p: `You have the right to:<br><br>
        <ul>
          <li>Request deletion of data related to you</li>
          <li>Refuse cookies by adjusting your browser settings</li>
          <li>Opt out of Google personalised advertising</li>
        </ul>` },
        { h: '8. Policy Changes', p: `We may update this policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the website constitutes acceptance of the updated policy.` },
        { h: '9. Contact', p: `If you have questions about this privacy policy, please <a href="#" onclick="go('contact');return false;">contact us</a>.` },
      ]
    },
    es: {
      sections: [
        { h: '1. Introducción', p: `VaultGame ("nosotros", "el sitio web") se compromete a proteger tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos la información cuando visitas <strong>vaultgame.qzz.io</strong>.` },
        { h: '2. Información que recopilamos', p: `<strong>No requerimos registro de cuenta</strong> y no recopilamos datos personales sensibles. Sin embargo, algunos datos técnicos pueden registrarse automáticamente:<br><br>
        <ul>
          <li>Dirección IP (anonimizada)</li>
          <li>Tipo de navegador y sistema operativo</li>
          <li>Páginas vistas y hora de visita</li>
          <li>URL de referencia</li>
        </ul>` },
        { h: '3. Cookies y tecnologías de seguimiento', p: `El sitio usa <strong>cookies</strong> para guardar tus preferencias. Podemos usar <strong>Google Analytics</strong> y mostrar anuncios a través de <strong>Google AdSense</strong>. Puedes desactivar los anuncios personalizados en <a href="https://adssettings.google.com" target="_blank" rel="noopener">adssettings.google.com</a>.` },
        { h: '4. Uso de la información', p: `Los datos recopilados se usan solo para operar y mejorar el sitio, analizar tendencias y mostrar contenido relevante. <strong>No vendemos</strong> tu información a terceros.` },
        { h: '5. Servicios de terceros', p: `El sitio puede contener enlaces a terceros (Gofile, Steam, etc.). No controlamos sus políticas de privacidad.` },
        { h: '6. Seguridad', p: `Aplicamos medidas técnicas razonables para proteger los datos recopilados.` },
        { h: '7. Tus derechos', p: `Puedes solicitar la eliminación de tus datos, rechazar cookies desde tu navegador y desactivar la publicidad personalizada de Google.` },
        { h: '8. Cambios en la política', p: `Podemos actualizar esta política. Los cambios se publicarán en esta página. El uso continuado implica aceptación.` },
        { h: '9. Contacto', p: `Si tienes preguntas, <a href="#" onclick="go('contact');return false;">contáctanos</a>.` },
      ]
    }
  };

  const data = content[lang] || content.vi;
  const box = el.querySelector('.policy-box');
  if (!box) return;
  box.innerHTML = data.sections.map(s =>
    `<div class="policy-section"><h3 class="policy-h">${s.h}</h3><div class="policy-text">${s.p}</div></div>`
  ).join('');
}

// ══ TERMS OF SERVICE ═════════════════════════════════════
function renderTerms() {
  const el = document.getElementById('page-terms');
  if (!el) return;
  const lang = _lang;

  const content = {
    vi: {
      sections: [
        { h: '1. Chấp nhận điều khoản', p: `Bằng cách truy cập và sử dụng <strong>VaultGame</strong> (vaultgame.qzz.io), bạn đồng ý tuân thủ các điều khoản sử dụng này. Nếu bạn không đồng ý, vui lòng không sử dụng trang web.` },
        { h: '2. Mục đích của trang web', p: `VaultGame là trang web chia sẻ thông tin, hướng dẫn và đánh giá về các tựa game PC. Chúng tôi cung cấp liên kết tải về từ các nguồn bên thứ ba (như Gofile) vì mục đích thông tin và giáo dục.<br><br>Chúng tôi <strong>khuyến khích người dùng mua bản quyền chính thức</strong> từ nhà phát triển để ủng hộ ngành công nghiệp game.` },
        { h: '3. Quyền sở hữu trí tuệ', p: `Mọi tên game, logo, hình ảnh và thương hiệu xuất hiện trên trang web đều thuộc quyền sở hữu của các nhà phát triển và nhà phát hành tương ứng. VaultGame không sở hữu bất kỳ nội dung game nào được đề cập.` },
        { h: '4. Giới hạn trách nhiệm', p: `VaultGame cung cấp thông tin "nguyên trạng" và không chịu trách nhiệm về:<br><br>
        <ul>
          <li>Tính chính xác hay đầy đủ của thông tin</li>
          <li>Bất kỳ thiệt hại nào phát sinh từ việc tải hoặc cài đặt phần mềm từ các liên kết bên thứ ba</li>
          <li>Nội dung của các trang web bên thứ ba được liên kết</li>
          <li>Gián đoạn dịch vụ hoặc lỗi kỹ thuật</li>
        </ul>` },
        { h: '5. Hành vi bị cấm', p: `Bạn đồng ý không:<br><br>
        <ul>
          <li>Sử dụng trang web cho mục đích bất hợp pháp</li>
          <li>Cố gắng xâm nhập, phá hoại hoặc làm gián đoạn trang web</li>
          <li>Thu thập dữ liệu tự động (scraping) mà không có sự cho phép</li>
          <li>Đăng tải nội dung xúc phạm, vi phạm bản quyền hoặc có hại</li>
        </ul>` },
        { h: '6. Luật áp dụng', p: `Các điều khoản này được điều chỉnh theo pháp luật hiện hành. Mọi tranh chấp sẽ được giải quyết theo thủ tục pháp lý phù hợp.` },
        { h: '7. Thay đổi điều khoản', p: `Chúng tôi có thể cập nhật các điều khoản này bất cứ lúc nào. Thay đổi sẽ có hiệu lực ngay khi được đăng tải. Việc tiếp tục sử dụng trang web có nghĩa là bạn chấp nhận các điều khoản mới.` },
        { h: '8. Liên hệ', p: `Câu hỏi về điều khoản sử dụng, vui lòng <a href="#" onclick="go('contact');return false;">liên hệ với chúng tôi</a>.` },
      ]
    },
    en: {
      sections: [
        { h: '1. Acceptance of Terms', p: `By accessing and using <strong>VaultGame</strong> (vaultgame.qzz.io), you agree to be bound by these terms of service. If you disagree, please do not use the website.` },
        { h: '2. Purpose of the Website', p: `VaultGame is a website sharing information, guides and reviews about PC games. We provide download links from third-party sources for informational and educational purposes.<br><br>We <strong>encourage users to purchase official copies</strong> from developers to support the gaming industry.` },
        { h: '3. Intellectual Property', p: `All game names, logos, images and trademarks appearing on the website belong to their respective developers and publishers. VaultGame does not own any game content mentioned.` },
        { h: '4. Limitation of Liability', p: `VaultGame provides information "as is" and is not responsible for:<br><br>
        <ul>
          <li>The accuracy or completeness of information</li>
          <li>Any damage arising from downloading or installing software from third-party links</li>
          <li>The content of linked third-party websites</li>
          <li>Service interruptions or technical errors</li>
        </ul>` },
        { h: '5. Prohibited Conduct', p: `You agree not to:<br><br>
        <ul>
          <li>Use the website for illegal purposes</li>
          <li>Attempt to hack, damage or disrupt the website</li>
          <li>Scrape data without permission</li>
          <li>Post offensive, copyright-infringing or harmful content</li>
        </ul>` },
        { h: '6. Governing Law', p: `These terms are governed by applicable law. Any disputes will be resolved through appropriate legal procedures.` },
        { h: '7. Changes to Terms', p: `We may update these terms at any time. Changes take effect immediately upon posting. Continued use of the website means you accept the updated terms.` },
        { h: '8. Contact', p: `For questions about these terms, please <a href="#" onclick="go('contact');return false;">contact us</a>.` },
      ]
    },
    es: {
      sections: [
        { h: '1. Aceptación de términos', p: `Al acceder y usar <strong>VaultGame</strong> (vaultgame.qzz.io), aceptas estos términos de servicio.` },
        { h: '2. Propósito del sitio', p: `VaultGame comparte información, guías y reseñas de juegos PC. Proporcionamos enlaces de descarga de terceros con fines informativos. <strong>Recomendamos comprar copias oficiales</strong> para apoyar a los desarrolladores.` },
        { h: '3. Propiedad intelectual', p: `Todos los nombres de juegos, logos e imágenes pertenecen a sus respectivos propietarios. VaultGame no posee ningún contenido de juego mencionado.` },
        { h: '4. Limitación de responsabilidad', p: `VaultGame proporciona información "tal cual" y no se responsabiliza de daños derivados del uso del sitio o de enlaces de terceros.` },
        { h: '5. Conducta prohibida', p: `No debes usar el sitio para fines ilegales, intentar hackear o dañar el sitio, ni publicar contenido ofensivo o que infrinja derechos de autor.` },
        { h: '6. Ley aplicable', p: `Estos términos se rigen por la legislación aplicable.` },
        { h: '7. Cambios en los términos', p: `Podemos actualizar estos términos en cualquier momento. El uso continuado implica aceptación.` },
        { h: '8. Contacto', p: `Para preguntas sobre estos términos, <a href="#" onclick="go('contact');return false;">contáctanos</a>.` },
      ]
    }
  };

  const data = content[lang] || content.vi;
  const box = el.querySelector('.policy-box');
  if (!box) return;
  box.innerHTML = data.sections.map(s =>
    `<div class="policy-section"><h3 class="policy-h">${s.h}</h3><div class="policy-text">${s.p}</div></div>`
  ).join('');
}
