// ============================================================
// GENERATE-SITEMAP.JS
// Chạy: node generate-sitemap.js
// Tự động đọc data.js và tạo sitemap.xml mới
// ============================================================

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://vaultgame.qzz.io';
const TODAY = new Date().toISOString().split('T')[0];

// Đọc data.js
const dataContent = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8');

// Extract game slugs
const gameSection = dataContent.split('const BLOG_POSTS')[0];
const blogSection = dataContent.split('const BLOG_POSTS')[1] || '';

const gameSlugMatches = gameSection.match(/slug:\s*"([^"]+)"/g) || [];
const blogSlugMatches = blogSection.match(/slug:\s*"([^"]+)"/g) || [];

const gameSlugs = gameSlugMatches.map(m => m.match(/slug:\s*"([^"]+)"/)[1]);
const blogSlugs = blogSlugMatches
  .map(m => m.match(/slug:\s*"([^"]+)"/)[1])
  .filter(s => s !== 'ten-bai-viet-khong-dau'); // bỏ slug mẫu

// Trang tĩnh
const staticPages = [
  ['/',             '1.0', 'daily'],
  ['/games',        '0.9', 'daily'],
  ['/the-loai',     '0.8', 'weekly'],
  ['/viet-hoa',     '0.8', 'weekly'],
  ['/game-moi',     '0.8', 'daily'],
  ['/top-game',     '0.7', 'weekly'],
  ['/blog',         '0.9', 'daily'],
  ['/gioi-thieu',   '0.5', 'monthly'],
  ['/lien-he',      '0.5', 'monthly'],
  ['/bao-loi',      '0.4', 'monthly'],
  ['/chinh-sach',   '0.3', 'monthly'],
  ['/dieu-khoan',   '0.3', 'monthly'],
];

const allUrls = [
  ...staticPages.map(([p, pri, freq]) => ({ loc: DOMAIN + p, pri, freq })),
  ...gameSlugs.map(slug => ({ loc: `${DOMAIN}/game/${slug}`, pri: '0.8', freq: 'monthly' })),
  ...blogSlugs.map(slug => ({ loc: `${DOMAIN}/blog/${slug}`, pri: '0.7', freq: 'monthly' })),
];

const urlEntries = allUrls.map(({ loc, pri, freq }) =>
`  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${pri}</priority>
  </url>`
).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urlEntries}

</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf8');

console.log(`✅ sitemap.xml đã được cập nhật (${TODAY})`);
console.log(`   ${staticPages.length} trang tĩnh`);
console.log(`   ${gameSlugs.length} trang game: ${gameSlugs.join(', ')}`);
console.log(`   ${blogSlugs.length} bài blog: ${blogSlugs.join(', ')}`);
console.log(`\n📌 Tổng: ${allUrls.length} URLs`);
