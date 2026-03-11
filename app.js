// ============================================================
// APP.JS — Routing, Rendering, Search, Modal
// ============================================================

// ---- STATE ----
let currentPage = 'home';
let gamesGenreFilter = 'all';
let genrePageFilter  = null;

// ---- ROUTES ----
const ROUTES = {
  'home'  : { hash: '/',         pageId: 'page-home',  navId: 'nav-home'  },
  'games' : { hash: '/games',    pageId: 'page-games', navId: 'nav-games' },
  'genre' : { hash: '/the-loai', pageId: 'page-genre', navId: 'nav-genre' },
  'viet'  : { hash: '/viet-hoa', pageId: 'page-viet',  navId: 'nav-viet'  },
  'new'   : { hash: '/game-moi', pageId: 'page-new',   navId: 'nav-new'   },
  'top'   : { hash: '/top-game', pageId: 'page-top',   navId: 'nav-top'   },
};

function navigate(page) {
  if (!ROUTES[page]) return;
  currentPage = page;

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  document.getElementById(ROUTES[page].pageId).classList.add('active');
  // Update nav active
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navEl = document.getElementById(ROUTES[page].navId);
  if (navEl) navEl.classList.add('active');
  // Update URL hash
  history.pushState(null, '', '#' + ROUTES[page].hash);
  // Render page content
  renderPage(page);
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

// ---- HASH ROUTING ----
function handleHash() {
  const hash = location.hash.replace('#', '') || '/';
  const found = Object.entries(ROUTES).find(([, r]) => r.hash === hash);
  navigate(found ? found[0] : 'home');
}
window.addEventListener('popstate', handleHash);

// ---- HELPERS ----
function stars(r) {
  const full = Math.floor(r);
  const half = r % 1 >= .5 ? 1 : 0;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return `<span style="color:#fbbf24; font-size:.75rem;">${s}</span> <span style="font-size:.75rem;">${r.toFixed(1)}</span>`;
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
  return `
  <div class="game-card" data-id="${g.id}" style="animation-delay:${delay}s" onclick="openModal(${g.id})">
    <div class="card-thumb">
      <span>${g.emoji}</span>
    </div>
    ${badgesHTML(g.badges, g.viet)}
    <div class="card-body">
      <div class="card-top">
        <div class="card-title">${g.title}</div>
        <div class="card-rating">${stars(g.rating)}</div>
      </div>
      <div class="card-tags">
        <span class="tag">${g.genre_label}</span>
        ${g.viet ? '<span class="tag viet">🇻🇳 Việt</span>' : ''}
      </div>
      <div class="card-desc">${g.desc}</div>
      <div class="card-footer">
        <div class="card-meta-info">
          <span class="card-size">${g.size}</span>
          <span class="card-year">${g.year}</span>
        </div>
        <button class="btn-dl-sm" onclick="event.stopPropagation(); dlGame(${g.id})">⬇ Tải</button>
      </div>
    </div>
  </div>`;
}

function topItem(g, rank) {
  const rankClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
  return `
  <div class="top-item" onclick="openModal(${g.id})">
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

  // Featured banner = highest rated
  const featured = [...GAMES].sort((a,b) => b.downloads - a.downloads)[0];
  document.getElementById('featuredBanner').innerHTML = `
  <div class="featured-banner">
    <div>
      <div class="featured-label">⭐ Game nổi bật</div>
      <div class="featured-title">${featured.title}</div>
      <div class="featured-desc">${featured.desc}</div>
      <div class="featured-meta">
        <span class="featured-meta-item">🗂️ ${featured.genre_label}</span>
        <span class="featured-meta-item">📦 ${featured.size}</span>
        <span class="featured-meta-item">⬇ ${fmtDl(featured.downloads)} lượt tải</span>
        ${featured.viet ? '<span class="featured-meta-item">🇻🇳 Có Việt hóa</span>' : ''}
      </div>
      <div class="featured-actions">
        <button class="btn-primary" onclick="dlGame(${featured.id})">⬇ Tải ngay — Miễn phí</button>
        <button class="btn-outline" onclick="openModal(${featured.id})">Chi tiết</button>
      </div>
    </div>
    <div class="featured-emoji">${featured.emoji}</div>
  </div>`;

  // Hot games (has 'hot' badge)
  const hot = GAMES.filter(g => g.badges.includes('hot')).slice(0, 8);
  document.getElementById('homeHot').innerHTML = hot.map((g,i) => gameCard(g, i*.04)).join('');

  // New games (has 'new' badge)
  const newest = GAMES.filter(g => g.badges.includes('new')).slice(0, 4);
  document.getElementById('homeNew').innerHTML = newest.map((g,i) => gameCard(g, i*.05)).join('');

  // Viet games
  const viet = GAMES.filter(g => g.viet).slice(0, 4);
  document.getElementById('homeViet').innerHTML = viet.map((g,i) => gameCard(g, i*.05)).join('');
}

// ---- RENDER GAMES PAGE ----
function renderGamesPage() {
  const q     = (document.getElementById('gamesSearch')?.value || '').toLowerCase().trim();
  const sort  = document.getElementById('gamesSort')?.value || 'new';

  let list = [...GAMES];
  if (gamesGenreFilter !== 'all') list = list.filter(g => g.genre === gamesGenreFilter);
  if (q) list = list.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.desc.toLowerCase().includes(q) ||
    g.genre_label.toLowerCase().includes(q) ||
    g.tags.some(t => t.toLowerCase().includes(q))
  );
  if (sort === 'name')   list.sort((a,b) => a.title.localeCompare(b.title, 'vi'));
  if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
  if (sort === 'size')   list.sort((a,b) => parseFloat(b.size) - parseFloat(a.size));
  if (sort === 'new')    list.sort((a,b) => b.year - a.year);

  const countEl = document.getElementById('gamesCount');
  if (countEl) countEl.innerHTML = `<strong>${list.length}</strong> game${list.length!==1?'':''}`;

  const grid = document.getElementById('gamesGrid');
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>Không tìm thấy game</h3><p>Thử từ khóa khác hoặc bỏ bộ lọc</p></div>`;
    return;
  }
  grid.innerHTML = list.map((g,i) => gameCard(g, i*.03)).join('');
}

function setGamesGenre(el, genre) {
  gamesGenreFilter = genre;
  document.querySelectorAll('#gamesChips .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderGamesPage();
}

// ---- RENDER GENRE PAGE ----
function renderGenrePage() {
  // Genre cards
  const cards = document.getElementById('genreCards');
  cards.innerHTML = GENRES.map(g => {
    const count = GAMES.filter(x => x.genre === g.id).length;
    return `
    <div class="genre-card ${genrePageFilter === g.id ? 'active' : ''}" onclick="selectGenre('${g.id}')">
      <div class="genre-icon">${g.icon}</div>
      <div class="genre-name">${g.name}</div>
      <div class="genre-count">${count} game</div>
    </div>`;
  }).join('');

  // Add "All"
  cards.innerHTML = `
    <div class="genre-card ${!genrePageFilter ? 'active' : ''}" onclick="selectGenre(null)">
      <div class="genre-icon">🎮</div>
      <div class="genre-name">Tất cả</div>
      <div class="genre-count">${GAMES.length} game</div>
    </div>` + cards.innerHTML;

  const header = document.getElementById('genreSectionHeader');
  const title  = document.getElementById('genreTitle');
  const grid   = document.getElementById('genreGrid');

  if (genrePageFilter) {
    const g = GENRES.find(x => x.id === genrePageFilter);
    header.style.display = 'flex';
    title.innerHTML = `<span class="icon">${g?.icon||'🎮'}</span> ${g?.name||''} <span style="color:var(--text3); font-weight:400; font-size:1rem;">(${GAMES.filter(x=>x.genre===genrePageFilter).length})</span>`;
    const list = GAMES.filter(x => x.genre === genrePageFilter);
    grid.innerHTML = list.map((g,i) => gameCard(g, i*.03)).join('');
  } else {
    header.style.display = 'none';
    grid.innerHTML = GAMES.map((g,i) => gameCard(g, i*.02)).join('');
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
  document.getElementById('vietGrid').innerHTML = list.map((g,i) => gameCard(g, i*.03)).join('');
}

// ---- RENDER GAME MỚI ----
function renderNewPage() {
  const sorted = [...GAMES].sort((a,b) => b.year - a.year);
  document.getElementById('newGrid').innerHTML = sorted.map((g,i) => gameCard(g, i*.03)).join('');
}

// ---- RENDER TOP ----
function renderTopPage() {
  const byRating = [...GAMES].sort((a,b) => b.rating - a.rating).slice(0,10);
  const byHot    = [...GAMES].sort((a,b) => b.downloads - a.downloads).slice(0,10);

  document.getElementById('topRating').innerHTML = byRating.map((g,i) => topItem(g, i+1)).join('');
  document.getElementById('topHot').innerHTML    = byHot.map((g,i) => topItem(g, i+1)).join('');
}

// ---- MODAL ----
function openModal(id) {
  const g = GAMES.find(x => x.id === id);
  if (!g) return;

  document.getElementById('modalContent').innerHTML = `
  <div class="modal-thumb">${g.emoji}</div>
  <div class="modal-body">
    <div class="modal-head">
      <div class="modal-title">${g.title}</div>
      <div class="modal-rating">★ ${g.rating.toFixed(1)}</div>
    </div>
    <div class="modal-tags">
      <span class="modal-tag accent">🗂️ ${g.genre_label}</span>
      ${g.viet ? '<span class="modal-tag red">🇻🇳 Đã Việt hóa</span>' : ''}
      ${g.badges.includes('hot') ? '<span class="modal-tag" style="border-color:#ff4466;color:#ff4466;">🔥 Nóng</span>' : ''}
      ${g.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
    </div>
    <div class="modal-desc">${g.desc}</div>
    <div class="modal-info-grid">
      <div class="info-cell"><div class="info-label">Phiên bản</div><div class="info-val">${g.version}</div></div>
      <div class="info-cell"><div class="info-label">Năm phát hành</div><div class="info-val">${g.year}</div></div>
      <div class="info-cell"><div class="info-label">Dung lượng</div><div class="info-val">${g.size}</div></div>
      <div class="info-cell"><div class="info-label">Lượt tải</div><div class="info-val">⬇ ${fmtDl(g.downloads)}</div></div>
      <div class="info-cell"><div class="info-label">Đánh giá</div><div class="info-val">${stars(g.rating)}</div></div>
      <div class="info-cell"><div class="info-label">Việt hóa</div><div class="info-val">${g.viet ? '✅ Có' : '❌ Chưa có'}</div></div>
    </div>
    <div class="modal-actions">
      <a href="${g.download}" class="btn-dl-main" download>⬇ Tải xuống — Miễn phí</a>
      <button class="btn-dl-secondary" onclick="closeModal()">Đóng</button>
    </div>
  </div>`;

  document.getElementById('gameModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('gameModal').classList.remove('open');
  document.body.style.overflow = '';
}

function dlGame(id) {
  const g = GAMES.find(x => x.id === id);
  if (!g) return;
  // In production: trigger real download
  openModal(id);
}

// Backdrop click
document.getElementById('gameModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
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
    container.innerHTML = `<div class="search-empty">Không tìm thấy game nào cho "<strong>${q}</strong>"</div>`;
    return;
  }

  container.innerHTML = results.map(g => `
  <div class="search-result-item" onclick="closeSearch(); openModal(${g.id})">
    <div class="search-result-icon">${g.emoji}</div>
    <div class="search-result-info">
      <div class="search-result-title">${g.title} ${g.viet ? '🇻🇳' : ''}</div>
      <div class="search-result-meta">${g.genre_label} · ${g.size} · ${g.year}</div>
    </div>
    <div style="font-size:.7rem; color:var(--text3);">★ ${g.rating}</div>
  </div>`).join('');
}

// ---- KEYBOARD SHORTCUTS ----
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault(); openSearch();
  }
  if (e.key === 'Escape') {
    closeModal(); closeSearch();
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
  handleHash();
});
