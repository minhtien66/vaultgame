// ============================================================
// APP.JS — VaultGame
// ============================================================

let curPage = 'home';
let genreFilter = 'all';
let genrePageFilter = null;

const ROUTES = {
  home:   { path: '/',         el: 'page-home',   nav: 'nl-home'  },
  games:  { path: '/games',    el: 'page-games',  nav: 'nl-games' },
  genre:  { path: '/the-loai', el: 'page-genre',  nav: 'nl-genre' },
  viet:   { path: '/viet-hoa', el: 'page-viet',   nav: 'nl-viet'  },
  new:    { path: '/game-moi', el: 'page-new',     nav: 'nl-new'   },
  top:    { path: '/top-game', el: 'page-top',     nav: 'nl-top'   },
  detail: { path: '/game/',    el: 'page-detail',  nav: null       },
};

function go(page, param) {
  curPage = page;
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // remove active nav
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const r = ROUTES[page];
  if (!r) return;

  const el = document.getElementById(r.el);
  if (el) el.classList.add('active');
  if (r.nav) {
    const navEl = document.getElementById(r.nav);
    if (navEl) navEl.classList.add('active');
  }

  if (page === 'detail' && param) {
    history.pushState(null, '', '/game/' + param);
    renderDetail(+param);
  } else {
    history.pushState(null, '', r.path);
    switch(page) {
      case 'home':  renderHome(); break;
      case 'games': renderGames(); break;
      case 'genre': renderGenrePage(); break;
      case 'viet':  renderViet(); break;
      case 'new':   renderNew(); break;
      case 'top':   renderTop(); break;
    }
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handlePath() {
  const p = location.pathname;
  const m = p.match(/^\/game\/(\d+)$/);
  if (m) { go('detail', +m[1]); return; }
  const found = Object.entries(ROUTES).find(([k, r]) => k !== 'detail' && r.path === p);
  go(found ? found[0] : 'home');
}
window.addEventListener('popstate', handlePath);

// ── HELPERS ──────────────────────────────────────
function starStr(r) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(r)) s += '★';
    else if (i === Math.ceil(r) && r % 1 >= .5) s += '½';
    else s += '☆';
  }
  return s;
}
function fmtN(n) { return n >= 1000 ? (n/1000).toFixed(1)+'k' : n; }
function badgeHtml(badges, viet) {
  let h = '';
  if (badges.includes('hot')) h += '<span class="badge badge-hot">HOT</span>';
  if (badges.includes('new')) h += '<span class="badge badge-new">MỚI</span>';
  if (viet) h += '<span class="badge badge-viet">VIỆT HÓA</span>';
  return h ? `<div class="gcard-badges">${h}</div>` : '';
}

function gcard(g, delay=0) {
  const img = g.thumbnail
    ? `<img src="${g.thumbnail}" alt="${g.title}" loading="lazy" onerror="this.style.display='none'">`
    : '';
  return `
<div class="gcard" style="animation-delay:${delay}s" onclick="go('detail',${g.id})">
  <div class="gcard-thumb">
    ${img}
    <span class="gcard-emoji">${g.emoji}</span>
    <div class="gcard-grad"></div>
  </div>
  ${badgeHtml(g.badges, g.viet)}
  <div class="gcard-score">★ ${g.rating.toFixed(1)}</div>
  <div class="gcard-body">
    <div class="gcard-genre">${g.genre_label}</div>
    <div class="gcard-title">${g.title}</div>
    <div class="gcard-desc">${g.desc_short}</div>
    <div class="gcard-foot">
      <span class="gcard-size">📦 ${g.size}</span>
      <button class="gcard-btn" onclick="event.stopPropagation();go('detail',${g.id})">Chi tiết →</button>
    </div>
  </div>
</div>`;
}

function topRow(g, rank) {
  const cls = rank===1?'g1':rank===2?'g2':rank===3?'g3':'';
  const icon = rank<=3 ? ['🥇','🥈','🥉'][rank-1] : '#'+rank;
  return `
<div class="top-item" onclick="go('detail',${g.id})">
  <div class="top-rank ${cls}">${icon}</div>
  <div class="top-emoji">${g.emoji}</div>
  <div class="top-info"><div class="top-title">${g.title}</div><div class="top-meta">${g.genre_label} · ${g.year}</div></div>
  <div class="top-dl">⬇ ${fmtN(g.downloads)}</div>
</div>`;
}

// ── HOME ──────────────────────────────────────────
function renderHome() {
  const total = GAMES.length;
  const vietN = GAMES.filter(g => g.viet).length;
  document.getElementById('navCount').textContent = total + ' games';
  document.getElementById('stripTotal').textContent = total + ' game';
  document.getElementById('stripViet').textContent = vietN + ' Việt hóa';

  // Hero spotlight — featured game
  const feat = [...GAMES].sort((a,b) => b.downloads - a.downloads)[0];
  if (feat) {
    if (feat.thumbnail) document.getElementById('heroBg').style.backgroundImage = `url(${feat.thumbnail})`;
    document.getElementById('heroTitle').textContent = feat.title;
    document.getElementById('heroMeta').innerHTML =
      (feat.badges.includes('hot') ? '<span class="hbadge hot">HOT</span>' : '') +
      (feat.badges.includes('new') ? '<span class="hbadge new">MỚI</span>' : '') +
      (feat.viet ? '<span class="hbadge viet">VIỆT HÓA</span>' : '') +
      `<span class="hero-rating">★ ${feat.rating.toFixed(1)}</span>`;
    document.getElementById('heroDesc').textContent = feat.desc_short;
    document.getElementById('heroInfoRow').innerHTML = `
      <div class="hi-item"><span class="hi-val">${feat.size}</span><span class="hi-key">Dung lượng</span></div>
      <div class="hi-item"><span class="hi-val">${feat.version}</span><span class="hi-key">Phiên bản</span></div>
      <div class="hi-item"><span class="hi-val">${fmtN(feat.downloads)}</span><span class="hi-key">Lượt tải</span></div>`;
    document.getElementById('heroBtns').innerHTML = `
      <button class="btn btn-primary" onclick="go('detail',${feat.id})">⬇ Tải ngay — Miễn phí</button>
      <button class="btn btn-ghost" onclick="go('detail',${feat.id})">Xem chi tiết →</button>`;
    document.getElementById('heroImg').innerHTML = feat.thumbnail
      ? `<img src="${feat.thumbnail}" alt="${feat.title}" onerror="this.style.display='none'">`
      : `<div class="hero-img-fb">${feat.emoji}</div>`;

    // dots
    const dotsEl = document.getElementById('heroDots');
    dotsEl.innerHTML = GAMES.slice(0,5).map((g,i) =>
      `<div class="hdot ${i===0?'active':''}" onclick="switchHero(${g.id},this)"></div>`
    ).join('');
  }

  const hot = GAMES.filter(g => g.badges.includes('hot'));
  const newG = GAMES.filter(g => g.badges.includes('new'));
  document.getElementById('homeHot').innerHTML = (hot.length ? hot : GAMES).slice(0,8).map((g,i) => gcard(g,i*.04)).join('') || emptyHtml('Chưa có game nổi bật');
  document.getElementById('homeNew').innerHTML = (newG.length ? newG : GAMES).slice(0,4).map((g,i) => gcard(g,i*.05)).join('') || emptyHtml('Chưa có game mới');
}

function switchHero(id, dotEl) {
  const g = GAMES.find(x => x.id === id);
  if (!g) return;
  if (g.thumbnail) document.getElementById('heroBg').style.backgroundImage = `url(${g.thumbnail})`;
  document.getElementById('heroTitle').textContent = g.title;
  document.getElementById('heroDesc').textContent = g.desc_short;
  document.getElementById('heroBtns').innerHTML = `
    <button class="btn btn-primary" onclick="go('detail',${g.id})">⬇ Tải ngay — Miễn phí</button>
    <button class="btn btn-ghost" onclick="go('detail',${g.id})">Xem chi tiết →</button>`;
  document.getElementById('heroImg').innerHTML = g.thumbnail
    ? `<img src="${g.thumbnail}" alt="${g.title}" onerror="this.style.display='none'">`
    : `<div class="hero-img-fb">${g.emoji}</div>`;
  document.querySelectorAll('.hdot').forEach(d => d.classList.remove('active'));
  dotEl.classList.add('active');
}

// ── GAMES PAGE ────────────────────────────────────
function renderGames() {
  const q = (document.getElementById('gSearch')?.value || '').toLowerCase().trim();
  const sort = document.getElementById('gSort')?.value || 'new';
  let list = [...GAMES];
  if (genreFilter !== 'all') list = list.filter(g => g.genre === genreFilter);
  if (q) list = list.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.desc_short.toLowerCase().includes(q) ||
    g.genre_label.toLowerCase().includes(q) ||
    g.tags.some(t => t.toLowerCase().includes(q))
  );
  if (sort === 'name')   list.sort((a,b) => a.title.localeCompare(b.title,'vi'));
  if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
  if (sort === 'dl')     list.sort((a,b) => b.downloads - a.downloads);
  if (sort === 'new')    list.sort((a,b) => b.year - a.year);

  const c = document.getElementById('gCount');
  if (c) c.innerHTML = `Tìm thấy <strong>${list.length}</strong> game`;
  const grid = document.getElementById('gGrid');
  if (!grid) return;
  grid.innerHTML = list.length
    ? list.map((g,i) => gcard(g,i*.025)).join('')
    : emptyHtml('Không tìm thấy game nào', 'Thử từ khóa khác hoặc bỏ bộ lọc');
}

function setGenreFilter(el, g) {
  genreFilter = g;
  document.querySelectorAll('#gChips .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderGames();
}

// ── GENRE PAGE ────────────────────────────────────
function renderGenrePage() {
  const grid = document.getElementById('genreGrid');
  let html = `<div class="gc ${!genrePageFilter?'active':''}" onclick="selectGenre(null)"><div class="gc-icon">🎮</div><div class="gc-name">Tất cả</div><div class="gc-count">${GAMES.length} game</div></div>`;
  html += GENRES.map(g => {
    const cnt = GAMES.filter(x => x.genre === g.id).length;
    return `<div class="gc ${genrePageFilter===g.id?'active':''}" onclick="selectGenre('${g.id}')"><div class="gc-icon">${g.icon}</div><div class="gc-name">${g.name}</div><div class="gc-count">${cnt} game</div></div>`;
  }).join('');
  grid.innerHTML = html;

  const head = document.getElementById('genreHead');
  const label = document.getElementById('genreLabel');
  const games = document.getElementById('genreGames');

  if (genrePageFilter) {
    const gObj = GENRES.find(x => x.id === genrePageFilter);
    head.style.display = 'flex';
    label.innerHTML = `${gObj?.icon||'🎮'} ${gObj?.name||''} <span style="color:var(--text3);font-weight:400;font-size:.9rem;font-family:var(--body)">(${GAMES.filter(x=>x.genre===genrePageFilter).length})</span>`;
    games.innerHTML = GAMES.filter(x => x.genre === genrePageFilter).map((g,i) => gcard(g,i*.03)).join('') || emptyHtml('Thể loại này chưa có game');
  } else {
    head.style.display = 'none';
    games.innerHTML = GAMES.map((g,i) => gcard(g,i*.02)).join('');
  }
}
function selectGenre(id) { genrePageFilter = id; renderGenrePage(); }

// ── VIET ──────────────────────────────────────────
function renderViet() {
  const list = GAMES.filter(g => g.viet);
  document.getElementById('vietCount').innerHTML = `<strong>${list.length}</strong> game đã được Việt hóa`;
  document.getElementById('vietGrid').innerHTML = list.length
    ? list.map((g,i) => gcard(g,i*.03)).join('')
    : emptyHtml('Chưa có game Việt hóa', 'Sắp cập nhật...');
}

// ── NEW ───────────────────────────────────────────
function renderNew() {
  document.getElementById('newGrid').innerHTML = [...GAMES].sort((a,b)=>b.year-a.year).map((g,i)=>gcard(g,i*.03)).join('') || emptyHtml('Chưa có game mới');
}

// ── TOP ───────────────────────────────────────────
function renderTop() {
  document.getElementById('topRating').innerHTML = [...GAMES].sort((a,b)=>b.rating-a.rating).slice(0,10).map((g,i)=>topRow(g,i+1)).join('');
  document.getElementById('topDl').innerHTML = [...GAMES].sort((a,b)=>b.downloads-a.downloads).slice(0,10).map((g,i)=>topRow(g,i+1)).join('');
}

// ── DETAIL ────────────────────────────────────────
function renderDetail(id) {
  const g = GAMES.find(x => x.id === id);
  const el = document.getElementById('page-detail');

  if (!g) {
    el.innerHTML = `<div style="padding:8rem 2rem;text-align:center;color:var(--text3)"><div style="font-size:3rem">😕</div><h2 style="margin:.75rem 0 .5rem;font-family:var(--display)">Không tìm thấy game</h2><button class="btn btn-primary" onclick="go('games')" style="margin-top:1rem">← Quay lại</button></div>`;
    return;
  }

  const shots = g.screenshots || (g.thumbnail ? [g.thumbnail] : []);
  const mainShot = shots[0] || '';
  const related = GAMES.filter(x => x.genre === g.genre && x.id !== g.id).slice(0, 4);

  const galleryHtml = shots.length ? `
<div class="gallery">
  <div class="dt">Ảnh chụp màn hình</div>
  <div class="gal-main" onclick="openLb('${mainShot}')">
    <img id="galMain" src="${mainShot}" alt="${g.title}" onerror="this.style.display='none'">
  </div>
  ${shots.length > 1 ? `<div class="gal-thumbs">${shots.map((s,i)=>`<div class="gal-thumb ${i===0?'active':''}" onclick="switchGal(this,'${s}')"><img src="${s}" alt="" onerror="this.parentElement.style.display='none'"></div>`).join('')}</div>` : ''}
</div>` : '';

  const trailerHtml = g.trailer ? `
<div class="d-trailer">
  <div class="dt">Trailer</div>
  <div class="trailer-wrap"><iframe src="${g.trailer}" allowfullscreen allow="autoplay;encrypted-media"></iframe></div>
</div>` : '';

  const srHtml = g.sys_req ? `
<div>
  <div class="dt">Cấu hình yêu cầu</div>
  <div class="sr-tabs">
    <button class="sr-tab active" id="srt-min" onclick="switchSr('min')">Tối thiểu</button>
    <button class="sr-tab" id="srt-rec" onclick="switchSr('rec')">Khuyến nghị</button>
  </div>
  <div id="sr-min" class="sr-table">${srRows(g.sys_req.min)}</div>
  <div id="sr-rec" class="sr-table" style="display:none">${srRows(g.sys_req.rec)}</div>
</div>` : '';

  const installHtml = g.install_guide ? `
<div>
  <div class="dt">Hướng dẫn cài đặt</div>
  <div class="install-box">${g.install_guide}</div>
</div>` : '';

  const dlLinks = (g.download_links || []).map(l =>
    `<a href="${l.url}" class="btn btn-dl" target="_blank" rel="noopener">${l.icon} Tải xuống — ${l.label}</a>`
  ).join('');

  el.innerHTML = `
<div class="bc"><div class="bc-inner">
  <a onclick="go('home')">Trang chủ</a><span>›</span>
  <a onclick="go('games')">Tất cả game</a><span>›</span>
  <span>${g.title}</span>
</div></div>

<div class="detail-wrap">
  <div class="d-hero">
    ${mainShot ? `<img src="${mainShot}" alt="${g.title}" onerror="this.style.display='none'">` : `<div class="d-hero-fb">${g.emoji}</div>`}
    <div class="d-hero-ov"></div>
    <div class="d-hero-bottom">
      <div class="d-hero-title">${g.title}</div>
    </div>
  </div>

  <div class="d-layout">
    <div class="d-left">
      <div class="d-meta">
        <span class="d-genre">${g.genre_label}</span>
        <span class="d-stars">${starStr(g.rating)}</span>
        <span class="d-rnum">${g.rating.toFixed(1)}</span>
        ${badgeHtml(g.badges, g.viet)}
        <span class="d-dlcount">⬇ ${fmtN(g.downloads)} lượt tải</span>
      </div>

      <div style="margin-bottom:1.5rem">
        <div class="dt">Giới thiệu game</div>
        <div class="d-desc">${g.desc_full || `<p>${g.desc_short}</p>`}</div>
      </div>

      ${galleryHtml}
      ${trailerHtml}

      <div style="margin-bottom:1.5rem">
        <div class="dt">Thông tin game</div>
        <div class="d-specs">
          <div class="spec-box"><div class="spec-k">Phiên bản</div><div class="spec-v">${g.version}</div></div>
          <div class="spec-box"><div class="spec-k">Năm phát hành</div><div class="spec-v">${g.year}</div></div>
          <div class="spec-box"><div class="spec-k">Dung lượng</div><div class="spec-v">${g.size}</div></div>
          <div class="spec-box"><div class="spec-k">Thể loại</div><div class="spec-v">${g.genre_label}</div></div>
          <div class="spec-box"><div class="spec-k">Nhà phát triển</div><div class="spec-v">${g.developer||'—'}</div></div>
          <div class="spec-box"><div class="spec-k">Việt hóa</div><div class="spec-v">${g.viet?'✅ Có':'❌ Chưa có'}</div></div>
        </div>
      </div>

      ${srHtml}
      ${installHtml}

      ${related.length ? `<div style="margin-top:1.5rem"><div class="dt">Game cùng thể loại</div><div class="game-grid lg">${related.map((r,i)=>gcard(r,i*.05)).join('')}</div></div>` : ''}
    </div>

    <div class="d-right">
      <div class="dl-box">
        <div class="dl-head">
          <div class="dl-label">Tải miễn phí</div>
          <div class="dl-name">${g.title}</div>
          <div class="dl-ver">${g.version}</div>
          <div class="dl-rows">
            <div class="dl-row"><span class="dl-rk">Dung lượng</span><span class="dl-rv">${g.size}</span></div>
            <div class="dl-row"><span class="dl-rk">Năm</span><span class="dl-rv">${g.year}</span></div>
            <div class="dl-row"><span class="dl-rk">Lượt tải</span><span class="dl-rv">${fmtN(g.downloads)}</span></div>
          </div>
        </div>
        <div class="dl-body">
          <div class="dl-size-big">
            <span class="dl-size-num">${g.size}</span>
            <span class="dl-size-lbl">Dung lượng tải về</span>
          </div>
          ${dlLinks}
          <div class="dl-free">✅ Hoàn toàn miễn phí</div>
          <div class="dl-note">Không quảng cáo · Không đăng ký · Tốc độ cao</div>
          ${g.viet ? '<div class="dl-viet">🇻🇳 Bản này đã có tiếng Việt</div>' : ''}
        </div>
      </div>

      <div class="info-box">
        <div class="info-box-t">Thông tin chi tiết</div>
        <div class="info-r"><span class="info-k">Developer</span><span class="info-v">${g.developer||'—'}</span></div>
        <div class="info-r"><span class="info-k">Publisher</span><span class="info-v">${g.publisher||'—'}</span></div>
        <div class="info-r"><span class="info-k">Thể loại</span><span class="info-v">${g.genre_label}</span></div>
        <div class="info-r"><span class="info-k">Năm</span><span class="info-v">${g.year}</span></div>
        <div class="info-r"><span class="info-k">Đánh giá</span><span class="info-v" style="color:var(--yellow)">★ ${g.rating.toFixed(1)} / 5.0</span></div>
        <div class="info-r" style="flex-direction:column;gap:.4rem;align-items:flex-start">
          <span class="info-k">Tags</span>
          <div class="info-tags">${g.tags.map(t=>`<span class="itag">${t}</span>`).join('')}</div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

function srRows(req) {
  const lbl = {os:'OS',cpu:'CPU',ram:'RAM',gpu:'GPU',storage:'Ổ cứng',directx:'DirectX'};
  return Object.entries(req).map(([k,v]) => `<div class="sr-row"><div class="sr-k">${lbl[k]||k}</div><div class="sr-v">${v}</div></div>`).join('');
}
function switchSr(t) {
  document.getElementById('sr-min').style.display = t==='min'?'block':'none';
  document.getElementById('sr-rec').style.display = t==='rec'?'block':'none';
  document.getElementById('srt-min').classList.toggle('active',t==='min');
  document.getElementById('srt-rec').classList.toggle('active',t==='rec');
}

// ── GALLERY ───────────────────────────────────────
function switchGal(el, src) {
  const m = document.getElementById('galMain');
  if (m) { m.src = src; m.onclick = () => openLb(src); }
  document.querySelectorAll('.gal-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ── LIGHTBOX ──────────────────────────────────────
function openLb(src) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  document.getElementById('lb').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lb').addEventListener('click', function(e) { if (e.target===this) closeLb(); });

// ── SEARCH ────────────────────────────────────────
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('sInput').focus(), 50);
  document.body.style.overflow = 'hidden';
  renderSearch();
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('sInput').value = '';
  document.body.style.overflow = '';
}
document.getElementById('searchOverlay').addEventListener('click', function(e) { if (e.target===this) closeSearch(); });

function renderSearch() {
  const q = document.getElementById('sInput').value.toLowerCase().trim();
  const c = document.getElementById('sList');
  if (!q) { c.innerHTML = `<div class="s-empty">Nhập tên game để tìm kiếm...</div>`; return; }
  const res = GAMES.filter(g =>
    g.title.toLowerCase().includes(q) ||
    g.genre_label.toLowerCase().includes(q) ||
    g.tags.some(t => t.toLowerCase().includes(q))
  ).slice(0, 8);
  c.innerHTML = res.length
    ? res.map(g => `<div class="s-item" onclick="closeSearch();go('detail',${g.id})"><div class="s-icon">${g.emoji}</div><div class="s-info"><div class="s-title">${g.title} ${g.viet?'🇻🇳':''}</div><div class="s-meta">${g.genre_label} · ${g.size} · ${g.year}</div></div><div style="font-size:.65rem;color:var(--text3)">★${g.rating}</div></div>`).join('')
    : `<div class="s-empty">Không tìm thấy "<strong>${q}</strong>"</div>`;
}

// ── KEYBOARD ──────────────────────────────────────
document.addEventListener('keydown', e => {
  if ((e.metaKey||e.ctrlKey) && e.key==='k') { e.preventDefault(); openSearch(); }
  if (e.key==='Escape') { closeSearch(); closeLb(); document.getElementById('drawer').classList.remove('open'); }
});

// ── DRAWER ────────────────────────────────────────
function toggleDrawer() { document.getElementById('drawer').classList.toggle('open'); }

// ── EMPTY HTML ────────────────────────────────────
function emptyHtml(title='Chưa có dữ liệu', sub='') {
  return `<div class="empty" style="grid-column:1/-1"><div class="empty-icon">🎮</div><h3>${title}</h3>${sub?`<p>${sub}</p>`:''}</div>`;
}

// ── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navCount').textContent = GAMES.length + ' games';
  handlePath();
});
