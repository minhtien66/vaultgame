// ============================================================
// APP.JS — Routing, Rendering, Game Detail Page
// ============================================================

// ---- STATE ----
let currentPage = 'home';
let gamesGenreFilter = 'all';
let genrePageFilter  = null;

// ---- ROUTES ----
const ROUTES = {
  'home'  : { hash: '/',         pageId: 'page-home',   navId: 'nav-home'  },
  'games' : { hash: '/games',    pageId: 'page-games',  navId: 'nav-games' },
  'genre' : { hash: '/the-loai', pageId: 'page-genre',  navId: 'nav-genre' },
  'viet'  : { hash: '/viet-hoa', pageId: 'page-viet',   navId: 'nav-viet'  },
  'new'   : { hash: '/game-moi', pageId: 'page-new',    navId: 'nav-new'   },
  'top'   : { hash: '/top-game', pageId: 'page-top',    navId: 'nav-top'   },
  'detail': { hash: '/game/',    pageId: 'page-detail', navId: null        },
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
    history.pushState(null, '', '#/game/' + param);
    renderDetailPage(+param);
  } else {
    history.pushState(null, '', '#' + route.hash);
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

// ---- HASH ROUTING ----
function handleHash() {
  const hash = location.hash.replace('#', '') || '/';
  // Game detail route: /game/:id
  const detailMatch = hash.match(/^\/game\/(\d+)$/);
  if (detailMatch) { navigate('detail', +detailMatch[1]); return; }
  const found = Object.entries(ROUTES).find(([k, r]) => k !== 'detail' && r.hash === hash);
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
  <div class="game-card" data-id="${g.id}" style="animation-delay:${delay}s" onclick="navigate('detail',${g.id})">
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
        <button class="btn-dl-sm" onclick="event.stopPropagation(); navigate('detail',${g.id})">Xem →</button>
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
        <button class="btn-primary" onclick="navigate('detail',${featured.id})">⬇ Tải ngay — Miễn phí</button>
        <button class="btn-outline" onclick="navigate('detail',${featured.id})">Xem chi tiết →</button>
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

// ---- RENDER GAME DETAIL PAGE ----
function renderDetailPage(id) {
  const g = GAMES.find(x => x.id === id);
  if (!g) {
    document.getElementById('page-detail').innerHTML = `
      <div style="padding:8rem 2rem; text-align:center; color:var(--text3);">
        <div style="font-size:3rem;">😕</div>
        <h2 style="margin:.75rem 0 .5rem;">Không tìm thấy game</h2>
        <button class="btn-primary" onclick="navigate('games')" style="margin-top:1rem;">← Quay lại</button>
      </div>`;
    return;
  }

  // Related games: same genre, exclude current
  const related = GAMES.filter(x => x.genre === g.genre && x.id !== g.id).slice(0, 4);

  // Star bar render
  const ratingPct = (g.rating / 5 * 100).toFixed(0);

  document.getElementById('page-detail').innerHTML = `
  <!-- BREADCRUMB -->
  <div style="background:var(--surface); border-bottom:1px solid var(--border); padding:.75rem 2rem;">
    <div style="max-width:1100px; margin:0 auto; display:flex; align-items:center; gap:.5rem; font-size:.8rem; color:var(--text3);">
      <a onclick="navigate('home')" href="#/" style="color:var(--text3); cursor:pointer; transition:color .15s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text3)'">Trang chủ</a>
      <span>›</span>
      <a onclick="navigate('games')" href="#/games" style="color:var(--text3); cursor:pointer; transition:color .15s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text3)'">Tất cả game</a>
      <span>›</span>
      <span style="color:var(--text2);">${g.title}</span>
    </div>
  </div>

  <!-- HERO SECTION -->
  <div class="detail-hero">
    <div class="detail-hero-bg" style="background:radial-gradient(ellipse 70% 80% at 50% 0%, rgba(108,99,255,.15) 0%, transparent 70%);"></div>
    <div class="detail-container">
      <div class="detail-layout">

        <!-- LEFT: Cover art -->
        <div class="detail-cover">
          <div class="detail-cover-art">${g.emoji}</div>
          <div class="detail-cover-badges">
            ${g.badges.includes('hot') ? '<span class="badge badge-hot">🔥 Đang hot</span>' : ''}
            ${g.badges.includes('new') ? '<span class="badge badge-new">✨ Mới cập nhật</span>' : ''}
            ${g.viet ? '<span class="badge badge-viet">🇻🇳 Việt hóa</span>' : ''}
          </div>
          <!-- DOWNLOAD BOX -->
          <div class="dl-box">
            <div class="dl-box-title">Tải miễn phí</div>
            <div class="dl-size">📦 ${g.size}</div>
            <a href="${g.download}" class="btn-dl-big" download>
              ⬇ Tải xuống ngay
            </a>
            <div class="dl-note">✅ Miễn phí · Không quảng cáo · Tốc độ cao</div>
            ${g.viet ? '<div class="dl-viet">🇻🇳 Bản này đã có tiếng Việt</div>' : ''}
          </div>
        </div>

        <!-- RIGHT: Info -->
        <div class="detail-info">
          <div class="detail-genre-tag">${g.genre_label}</div>
          <h1 class="detail-title">${g.title}</h1>

          <!-- Rating row -->
          <div class="detail-rating-row">
            <div class="detail-stars">
              ${'★'.repeat(Math.floor(g.rating))}${g.rating % 1 >= .5 ? '½' : ''}
            </div>
            <span class="detail-rating-num">${g.rating.toFixed(1)}</span>
            <span class="detail-rating-bar">
              <span style="width:${ratingPct}%"></span>
            </span>
            <span class="detail-dl-count">⬇ ${fmtDl(g.downloads)} lượt tải</span>
          </div>

          <p class="detail-desc">${g.desc}</p>

          <!-- Specs grid -->
          <div class="detail-specs">
            <div class="spec-item">
              <div class="spec-label">Phiên bản</div>
              <div class="spec-val">${g.version}</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Năm phát hành</div>
              <div class="spec-val">${g.year}</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Dung lượng</div>
              <div class="spec-val">${g.size}</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Việt hóa</div>
              <div class="spec-val">${g.viet ? '✅ Có đầy đủ' : '❌ Chưa có'}</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Thể loại</div>
              <div class="spec-val">${g.genre_label}</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Tags</div>
              <div class="spec-val">${g.tags.join(', ')}</div>
            </div>
          </div>

          <!-- Cấu hình tối thiểu (mẫu) -->
          <div class="detail-req">
            <div class="detail-req-title">⚙️ Cấu hình tối thiểu</div>
            <div class="detail-req-grid">
              <div><span>OS</span> Windows 10 64-bit</div>
              <div><span>CPU</span> Intel Core i5 hoặc tương đương</div>
              <div><span>RAM</span> 8 GB</div>
              <div><span>GPU</span> NVIDIA GTX 970 / AMD RX 480</div>
              <div><span>Ổ cứng</span> ${g.size} trống</div>
              <div><span>DirectX</span> Version 11</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- RELATED GAMES -->
  ${related.length ? `
  <div class="detail-container" style="padding-top:2.5rem; padding-bottom:3rem;">
    <div class="section-header">
      <h2 class="section-title"><span class="icon">🎮</span> Game cùng thể loại</h2>
      <a class="section-more" onclick="navigate('genre')" href="#/the-loai">Xem thêm →</a>
    </div>
    <div class="game-grid wide">${related.map((r,i) => gameCard(r, i*.05)).join('')}</div>
  </div>` : ''}
  `;
}

function dlGame(id) {
  navigate('detail', id);
}

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
  <div class="search-result-item" onclick="closeSearch(); navigate('detail',${g.id})">
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
    closeSearch();
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
