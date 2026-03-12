// ============================================================
// APP.JS
// ============================================================

let currentPage = 'home';
let gamesGenreFilter = 'all';
let genrePageFilter  = null;
let currentSysreqTab = 'min';

const ROUTES = {
  'home'  : { path: '/',         pageId: 'page-home',   navId: 'nav-home'  },
  'games' : { path: '/games',    pageId: 'page-games',  navId: 'nav-games' },
  'genre' : { path: '/the-loai', pageId: 'page-genre',  navId: 'nav-genre' },
  'viet'  : { path: '/viet-hoa', pageId: 'page-viet',   navId: 'nav-viet'  },
  'new'   : { path: '/game-moi', pageId: 'page-new',    navId: 'nav-new'   },
  'top'   : { path: '/top-game', pageId: 'page-top',    navId: 'nav-top'   },
  'detail': { path: '/game/',    pageId: 'page-detail', navId: null        },
};

function navigate(page, param) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const route = ROUTES[page];
  if (!route) return;
  document.getElementById(route.pageId).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  if (route.navId) document.getElementById(route.navId)?.classList.add('active');
  if (page === 'detail' && param) {
    history.pushState(null, '', '/game/' + param);
    renderDetailPage(+param);
  } else {
    history.pushState(null, '', route.path);
    renderPage(page);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPage(page) {
  switch(page) {
    case 'home':   renderHome(); break;
    case 'games':  renderGamesPage(); break;
    case 'genre':  renderGenrePage(); break;
    case 'viet':   renderVietPage(); break;
    case 'new':    renderNewPage(); break;
    case 'top':    renderTopPage(); break;
  }
}

function handlePath() {
  const path = location.pathname;
  const detailMatch = path.match(/^\/game\/(\d+)$/);
  if (detailMatch) { navigate('detail', +detailMatch[1]); return; }
  const found = Object.entries(ROUTES).find(([k, r]) => k !== 'detail' && r.path === path);
  navigate(found ? found[0] : 'home');
}
window.addEventListener('popstate', handlePath);

// ---- HELPERS ----
function stars(r) {
  const full = Math.floor(r);
  let s = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) s += '★';
    else if (i === full && r % 1 >= .5) s += '½';
    else s += '☆';
  }
  return s;
}

function fmtDl(n) {
  if (n >= 1000) return (n/1000).toFixed(1) + 'k';
  return n;
}

function badgesHTML(badges, viet) {
  let html = '';
  if (badges.includes('hot'))  html += '<span class="badge badge-hot">🔥 Nóng</span>';
  if (badges.includes('new'))  html += '<span class="badge badge-new">✨ Mới</span>';
  if (viet)                    html += '<span class="badge badge-viet">🇻🇳 Việt hóa</span>';
  return html ? `<div class="card-badges">${html}</div>` : '';
}

function gameCard(g, delay = 0) {
  const thumb = g.thumbnail
    ? `<img src="${g.thumbnail}" alt="${g.title}" loading="lazy" onerror="this.style.display='none'">`
    : '';
  return `
  <div class="game-card" data-id="${g.id}" style="animation-delay:${delay}s" onclick="navigate('detail',${g.id})">
    <div class="card-thumb">${thumb}<span style="position:relative;z-index:1">${g.emoji}</span></div>
    ${badgesHTML(g.badges, g.viet)}
    <div class="card-body">
      <div class="card-top">
        <div class="card-title">${g.title}</div>
        <div class="card-rating">⭐ ${g.rating.toFixed(1)}</div>
      </div>
      <div class="card-tags">
        <span class="tag">${g.genre_label}</span>
        ${g.viet ? '<span class="tag viet">🇻🇳 Việt</span>' : ''}
      </div>
      <div class="card-desc">${g.desc_short}</div>
      <div class="card-footer">
        <div class="card-meta-info">
          <span class="card-size">${g.size}</span>
          <span class="card-year">${g.year}</span>
        </div>
        <button class="btn-dl-sm" onclick="event.stopPropagation();navigate('detail',${g.id})">Xem →</button>
      </div>
    </div>
  </div>`;
}

function topItem(g, rank) {
  const rankClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
  return `
  <div class="top-item" onclick="navigate('detail',${g.id})">
    <div class="top-rank ${rankClass}">${rank <= 3 ? ['🥇','🥈','🥉'][rank-1] : '#'+rank}</div>
    <div class="top-icon">${g.emoji}</div>
    <div class="top-info">
      <div class="top-title">${g.title}</div>
      <div class="top-meta">${g.genre_label} · ${g.year}</div>
    </div>
    <div class="top-dl">⬇ ${fmtDl(g.downloads)}</div>
  </div>`;
}

// ---- RENDER HOME ----
function renderHome() {
  document.getElementById('heroTotal').textContent = GAMES.length;
  document.getElementById('heroViet').textContent = GAMES.filter(g => g.viet).length;

  const featured = [...GAMES].sort((a,b) => b.downloads - a.downloads)[0];
  const featuredImg = featured.thumbnail
    ? `<img src="${featured.thumbnail}" alt="${featured.title}" onerror="this.style.display='none'">`
    : `<div class="featured-img-fallback">${featured.emoji}</div>`;

  document.getElementById('featuredBanner').innerHTML = `
  <div class="featured-banner">
    <div class="featured-content">
      <div class="featured-label">⭐ Game nổi bật</div>
      <div class="featured-title">${featured.title}</div>
      <div class="featured-desc">${featured.desc_short}</div>
      <div class="featured-meta">
        <span class="featured-meta-item">🗂️ ${featured.genre_label}</span>
        <span class="featured-meta-item">📦 ${featured.size}</span>
        <span class="featured-meta-item">⬇ ${fmtDl(featured.downloads)} lượt tải</span>
        ${featured.viet ? '<span class="featured-meta-item">🇻🇳 Có Việt hóa</span>' : ''}
      </div>
      <div class="featured-actions">
        <button class="btn-primary" onclick="navigate('detail',${featured.id})">⬇ Tải ngay — Miễn phí</button>
        <button class="btn-outline" onclick="navigate('detail',${featured.id})">Xem chi tiết →</button>
      </div>
    </div>
    <div class="featured-img">${featuredImg}</div>
  </div>`;

  const hot = GAMES.filter(g => g.badges.includes('hot'));
  const newGames = GAMES.filter(g => g.badges.includes('new'));

  document.getElementById('homeHot').innerHTML = (hot.length ? hot : GAMES).slice(0,8).map((g,i) => gameCard(g,i*.04)).join('');
  document.getElementById('homeNew').innerHTML = (newGames.length ? newGames : GAMES).slice(0,4).map((g,i) => gameCard(g,i*.05)).join('');
}

// ---- RENDER GAMES PAGE ----
function renderGamesPage() {
  const q    = (document.getElementById('gamesSearch')?.value || '').toLowerCase().trim();
  const sort = document.getElementById('gamesSort')?.value || 'new';
  let list = [...GAMES];
  if (gamesGenreFilter !== 'all') list = list.filter(g => g.genre === gamesGenreFilter);
  if (q) list = list.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.desc_short.toLowerCase().includes(q) ||
    g.genre_label.toLowerCase().includes(q) ||
    g.tags.some(t => t.toLowerCase().includes(q))
  );
  if (sort === 'name')      list.sort((a,b) => a.title.localeCompare(b.title, 'vi'));
  if (sort === 'rating')    list.sort((a,b) => b.rating - a.rating);
  if (sort === 'downloads') list.sort((a,b) => b.downloads - a.downloads);
  if (sort === 'new')       list.sort((a,b) => b.year - a.year);

  const countEl = document.getElementById('gamesCount');
  if (countEl) countEl.innerHTML = `Tìm thấy <strong>${list.length}</strong> game`;
  const grid = document.getElementById('gamesGrid');
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>Không tìm thấy game</h3><p>Thử từ khóa khác hoặc bỏ bộ lọc</p></div>`;
    return;
  }
  grid.innerHTML = list.map((g,i) => gameCard(g,i*.03)).join('');
}

function setGamesGenre(el, genre) {
  gamesGenreFilter = genre;
  document.querySelectorAll('#gamesChips .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderGamesPage();
}

// ---- RENDER GENRE PAGE ----
function renderGenrePage() {
  const cards = document.getElementById('genreCards');
  let html = `<div class="genre-card ${!genrePageFilter ? 'active' : ''}" onclick="selectGenre(null)"><div class="genre-icon">🎮</div><div class="genre-name">Tất cả</div><div class="genre-count">${GAMES.length} game</div></div>`;
  html += GENRES.map(g => {
    const count = GAMES.filter(x => x.genre === g.id).length;
    return `<div class="genre-card ${genrePageFilter === g.id ? 'active' : ''}" onclick="selectGenre('${g.id}')"><div class="genre-icon">${g.icon}</div><div class="genre-name">${g.name}</div><div class="genre-count">${count} game</div></div>`;
  }).join('');
  cards.innerHTML = html;

  const header = document.getElementById('genreSectionHeader');
  const title  = document.getElementById('genreTitle');
  const grid   = document.getElementById('genreGrid');

  if (genrePageFilter) {
    const g = GENRES.find(x => x.id === genrePageFilter);
    header.style.display = 'flex';
    title.innerHTML = `${g?.icon||'🎮'} ${g?.name||''} <span style="color:var(--text3);font-weight:400;font-size:1rem;">(${GAMES.filter(x=>x.genre===genrePageFilter).length})</span>`;
    grid.innerHTML = GAMES.filter(x => x.genre === genrePageFilter).map((g,i) => gameCard(g,i*.03)).join('');
  } else {
    header.style.display = 'none';
    grid.innerHTML = GAMES.map((g,i) => gameCard(g,i*.02)).join('');
  }
}

function selectGenre(id) {
  genrePageFilter = id;
  renderGenrePage();
}

// ---- RENDER VIỆT HÓA ----
function renderVietPage() {
  const list = GAMES.filter(g => g.viet);
  document.getElementById('vietCount').innerHTML = `<strong>${list.length}</strong> game đã được Việt hóa`;
  document.getElementById('vietGrid').innerHTML = list.length
    ? list.map((g,i) => gameCard(g,i*.03)).join('')
    : `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🇻🇳</div><h3>Chưa có game Việt hóa</h3><p>Sắp cập nhật...</p></div>`;
}

// ---- RENDER GAME MỚI ----
function renderNewPage() {
  document.getElementById('newGrid').innerHTML = [...GAMES].sort((a,b) => b.year - a.year).map((g,i) => gameCard(g,i*.03)).join('');
}

// ---- RENDER TOP ----
function renderTopPage() {
  document.getElementById('topRating').innerHTML = [...GAMES].sort((a,b) => b.rating - a.rating).slice(0,10).map((g,i) => topItem(g,i+1)).join('');
  document.getElementById('topHot').innerHTML    = [...GAMES].sort((a,b) => b.downloads - a.downloads).slice(0,10).map((g,i) => topItem(g,i+1)).join('');
}

// ---- RENDER DETAIL PAGE ----
function renderDetailPage(id) {
  const g = GAMES.find(x => x.id === id);
  const container = document.getElementById('page-detail');

  if (!g) {
    container.innerHTML = `<div style="padding:8rem 2rem;text-align:center;color:var(--text3);"><div style="font-size:3rem;">😕</div><h2 style="margin:.75rem 0 .5rem;">Không tìm thấy game</h2><button class="btn-primary" onclick="navigate('games')" style="margin-top:1rem;">← Quay lại</button></div>`;
    return;
  }

  const related = GAMES.filter(x => x.genre === g.genre && x.id !== g.id).slice(0, 4);
  const ratingPct = (g.rating / 5 * 100).toFixed(0);
  const screenshots = g.screenshots || (g.thumbnail ? [g.thumbnail] : []);
  const mainImg = screenshots[0] || '';

  // Screenshot gallery HTML
  const galleryHTML = screenshots.length > 0 ? `
  <div class="screenshot-gallery">
    <div class="detail-section-title">🖼️ Ảnh chụp màn hình</div>
    <div class="gallery-main" onclick="openLightbox('${mainImg}')">
      <img id="galleryMain" src="${mainImg}" alt="${g.title}" onerror="this.style.display='none'">
    </div>
    ${screenshots.length > 1 ? `
    <div class="gallery-thumbs">
      ${screenshots.map((s,i) => `
        <div class="gallery-thumb ${i===0?'active':''}" onclick="switchGallery(this,'${s}')">
          <img src="${s}" alt="Screenshot ${i+1}" onerror="this.parentElement.style.display='none'">
        </div>`).join('')}
    </div>` : ''}
  </div>` : '';

  // Trailer HTML
  const trailerHTML = g.trailer ? `
  <div class="detail-trailer">
    <div class="detail-section-title">🎬 Trailer</div>
    <div class="trailer-frame">
      <iframe src="${g.trailer}" allowfullscreen allow="autoplay; encrypted-media"></iframe>
    </div>
  </div>` : '';

  // System requirements
  const sysreqHTML = g.sys_req ? `
  <div style="margin-bottom:2rem;">
    <div class="detail-section-title">⚙️ Cấu hình yêu cầu</div>
    <div class="sysreq-tabs">
      <button class="sysreq-tab active" id="tab-min" onclick="switchSysreq('min')">Tối thiểu</button>
      <button class="sysreq-tab" id="tab-rec" onclick="switchSysreq('rec')">Khuyến nghị</button>
    </div>
    <div id="sysreq-min" class="sysreq-table">
      ${renderSysreqRows(g.sys_req.min)}
    </div>
    <div id="sysreq-rec" class="sysreq-table" style="display:none;">
      ${renderSysreqRows(g.sys_req.rec)}
    </div>
  </div>` : '';

  // Install guide
  const installHTML = g.install_guide ? `
  <div style="margin-bottom:2rem;">
    <div class="detail-section-title">📋 Hướng dẫn cài đặt</div>
    <div class="install-guide">${g.install_guide}</div>
  </div>` : '';

  // Download links
  const dlLinks = (g.download_links || []).map(l =>
    `<a href="${l.url}" class="btn-dl-main" target="_blank" rel="noopener">${l.icon} Tải xuống — ${l.label}</a>`
  ).join('');

  container.innerHTML = `
  <!-- Breadcrumb -->
  <div class="detail-breadcrumb">
    <div class="detail-breadcrumb-inner">
      <a onclick="navigate('home')" href="/">Trang chủ</a>
      <span>›</span>
      <a onclick="navigate('games')" href="/games">Tất cả game</a>
      <span>›</span>
      <span>${g.title}</span>
    </div>
  </div>

  <div class="detail-wrap">

    <!-- Hero banner -->
    <div class="detail-hero-banner">
      ${mainImg ? `<img src="${mainImg}" alt="${g.title}" onerror="this.style.display='none'">` : ''}
      <div class="detail-hero-banner-fallback">${!mainImg ? g.emoji : ''}</div>
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-title-overlay">
        <h1>${g.title}</h1>
      </div>
    </div>

    <!-- Main layout -->
    <div class="detail-main">

      <!-- LEFT -->
      <div class="detail-left">

        <!-- Meta row -->
        <div class="detail-meta-row">
          <span class="detail-genre-badge">${g.genre_label}</span>
          <span class="detail-rating-stars">${stars(g.rating)}</span>
          <span class="detail-rating-num">${g.rating.toFixed(1)}</span>
          <div class="detail-badges">${badgesHTML(g.badges, g.viet)}</div>
          <span class="detail-dl-stat">⬇ ${fmtDl(g.downloads)} lượt tải</span>
        </div>

        <!-- Description -->
        <div style="margin-bottom:2rem;">
          <div class="detail-section-title">📖 Giới thiệu</div>
          <div class="detail-desc">${g.desc_full || g.desc_short}</div>
        </div>

        <!-- Screenshots -->
        ${galleryHTML}

        <!-- Trailer -->
        ${trailerHTML}

        <!-- Specs -->
        <div style="margin-bottom:2rem;">
          <div class="detail-section-title">📦 Thông tin game</div>
          <div class="detail-specs-grid">
            <div class="spec-item"><div class="spec-label">Phiên bản</div><div class="spec-val">${g.version}</div></div>
            <div class="spec-item"><div class="spec-label">Năm phát hành</div><div class="spec-val">${g.year}</div></div>
            <div class="spec-item"><div class="spec-label">Dung lượng</div><div class="spec-val">${g.size}</div></div>
            <div class="spec-item"><div class="spec-label">Thể loại</div><div class="spec-val">${g.genre_label}</div></div>
            <div class="spec-item"><div class="spec-label">Nhà phát triển</div><div class="spec-val">${g.developer || 'Đang cập nhật'}</div></div>
            <div class="spec-item"><div class="spec-label">Việt hóa</div><div class="spec-val">${g.viet ? '✅ Có đầy đủ' : '❌ Chưa có'}</div></div>
          </div>
        </div>

        <!-- System Requirements -->
        ${sysreqHTML}

        <!-- Install Guide -->
        ${installHTML}

        <!-- Related -->
        ${related.length ? `
        <div class="related-section">
          <div class="detail-section-title">🎮 Game cùng thể loại</div>
          <div class="game-grid wide">${related.map((r,i) => gameCard(r,i*.05)).join('')}</div>
        </div>` : ''}

      </div><!-- end left -->

      <!-- RIGHT SIDEBAR -->
      <div class="detail-right">

        <!-- Download card -->
        <div class="dl-card">
          <div class="dl-card-header">
            <div class="dl-card-title">⬇ Tải miễn phí</div>
            <div class="dl-game-name">${g.title}</div>
            <div class="dl-version">${g.version}</div>
            <div class="dl-meta-list">
              <div class="dl-meta-item"><span class="dl-meta-key">Dung lượng</span><span class="dl-meta-val">${g.size}</span></div>
              <div class="dl-meta-item"><span class="dl-meta-key">Năm</span><span class="dl-meta-val">${g.year}</span></div>
              <div class="dl-meta-item"><span class="dl-meta-key">Lượt tải</span><span class="dl-meta-val">${fmtDl(g.downloads)}</span></div>
            </div>
          </div>
          <div class="dl-card-body">
            <div class="dl-size-display">
              <span class="dl-size-num">${g.size}</span>
              <span class="dl-size-label">Dung lượng tải</span>
            </div>
            ${dlLinks}
            <div class="dl-free-badge">✅ Hoàn toàn miễn phí</div>
            <div class="dl-note">Không quảng cáo · Không đăng ký · Tốc độ cao</div>
            ${g.viet ? '<div class="dl-viet-note">🇻🇳 Bản này đã có tiếng Việt</div>' : ''}
          </div>
        </div>

        <!-- Info card -->
        <div class="info-card">
          <div class="info-card-title">📌 Thông tin chi tiết</div>
          <div class="info-row"><span class="info-key">Nhà phát triển</span><span class="info-val">${g.developer || '—'}</span></div>
          <div class="info-row"><span class="info-key">Nhà phát hành</span><span class="info-val">${g.publisher || '—'}</span></div>
          <div class="info-row"><span class="info-key">Thể loại</span><span class="info-val">${g.genre_label}</span></div>
          <div class="info-row"><span class="info-key">Năm</span><span class="info-val">${g.year}</span></div>
          <div class="info-row"><span class="info-key">Đánh giá</span><span class="info-val" style="color:var(--yellow)">★ ${g.rating.toFixed(1)} / 5.0</span></div>
          <div class="info-row" style="flex-direction:column;gap:.5rem;align-items:flex-start;">
            <span class="info-key">Tags</span>
            <div class="info-tags">${g.tags.map(t => `<span class="info-tag">${t}</span>`).join('')}</div>
          </div>
        </div>

      </div><!-- end right -->

    </div><!-- end main -->
  </div><!-- end wrap -->
  `;
}

function renderSysreqRows(req) {
  const labels = { os: 'OS', cpu: 'CPU', ram: 'RAM', gpu: 'GPU', storage: 'Ổ cứng', directx: 'DirectX' };
  return Object.entries(req).map(([k, v]) =>
    `<div class="sysreq-row"><div class="sysreq-key">${labels[k]||k}</div><div class="sysreq-val">${v}</div></div>`
  ).join('');
}

function switchSysreq(tab) {
  currentSysreqTab = tab;
  document.getElementById('sysreq-min').style.display = tab === 'min' ? 'block' : 'none';
  document.getElementById('sysreq-rec').style.display = tab === 'rec' ? 'block' : 'none';
  document.getElementById('tab-min').classList.toggle('active', tab === 'min');
  document.getElementById('tab-rec').classList.toggle('active', tab === 'rec');
}

// ---- GALLERY ----
function switchGallery(el, src) {
  document.getElementById('galleryMain').src = src;
  document.getElementById('galleryMain').onclick = () => openLightbox(src);
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ---- LIGHTBOX ----
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

// ---- SEARCH ----
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchModalInput').focus(), 50);
  document.body.style.overflow = 'hidden';
  renderSearchResults();
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchModalInput').value = '';
  document.body.style.overflow = '';
}
document.getElementById('searchOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeSearch();
});
function renderSearchResults() {
  const q = document.getElementById('searchModalInput').value.toLowerCase().trim();
  const container = document.getElementById('searchResults');
  if (!q) {
    container.innerHTML = `<div class="search-empty">Nhập tên game, thể loại... để tìm kiếm</div>`;
    return;
  }
  const results = GAMES.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.genre_label.toLowerCase().includes(q) ||
    g.tags.some(t => t.toLowerCase().includes(q))
  ).slice(0, 8);
  if (!results.length) {
    container.innerHTML = `<div class="search-empty">Không tìm thấy "<strong>${q}</strong>"</div>`;
    return;
  }
  container.innerHTML = results.map(g => `
  <div class="search-result-item" onclick="closeSearch();navigate('detail',${g.id})">
    <div class="search-result-icon">${g.emoji}</div>
    <div class="search-result-info">
      <div class="search-result-title">${g.title} ${g.viet ? '🇻🇳' : ''}</div>
      <div class="search-result-meta">${g.genre_label} · ${g.size} · ${g.year}</div>
    </div>
    <div style="font-size:.7rem;color:var(--text3);">★ ${g.rating}</div>
  </div>`).join('');
}

// ---- KEYBOARD ----
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') {
    closeSearch();
    closeLightbox();
    document.getElementById('navDrawer').classList.remove('open');
  }
});

// ---- MOBILE DRAWER ----
function toggleDrawer() {
  document.getElementById('navDrawer').classList.toggle('open');
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navCount').textContent = GAMES.length + ' games';
  handlePath();
});
