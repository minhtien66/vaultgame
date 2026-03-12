// ============================================================
// DATA.JS — Dữ liệu game
// ============================================================

const GAMES = [
  {
    id: 1,
    title: "Geo-Political Simulator 2026",
    slug: "geo-political-simulator-2026",
    genre: "strategy",
    genre_label: "Chiến lược / Mô phỏng",
    desc_short: "Trở thành lãnh đạo của bất kỳ quốc gia nào trên thế giới, quản lý kinh tế, ngoại giao, quân sự và chính trị trong thời đại hiện đại.",
    desc_full: `<p>Geo-Political Simulator 2026 là tựa game mô phỏng chính trị - địa lý chân thực nhất hiện nay. Bạn sẽ đảm nhận vai trò nguyên thủ quốc gia (Tổng thống, Thủ tướng, Quốc vương...) của bất kỳ quốc gia nào trong số hơn 175 quốc gia trên thế giới.</p>
    <p>Game tái hiện thế giới thực tế với dữ liệu kinh tế, dân số, địa lý và chính trị cập nhật đến năm 2026. Mọi quyết định của bạn đều có hậu quả thực sự — từ việc ký kết hiệp ước thương mại, phát động chiến tranh, quản lý ngân sách quốc gia đến đối phó với thiên tai và khủng hoảng.</p>
    <p>Phiên bản 2026 bổ sung nhiều tính năng mới: AI ngoại giao nâng cao, hệ thống biến đổi khí hậu, khủng hoảng năng lượng toàn cầu và nhiều sự kiện lịch sử có thể thay đổi.</p>`,
    install_guide: `<ol>
      <li>Giải nén file .zip vừa tải về</li>
      <li>Chọn thư mục cài đặt</li>
      <li>Chạy <strong>Launcher.exe</strong> để chơi</li>
    </ol>`,
    size: "6.5 GB",
    version: "v2.14-P2P",
    year: 2025,
    developer: "Eversim",
    publisher: "Eversim",
    rating: 4.5,
    downloads: 1200,
    emoji: "",
    badges: ["hot", "new"],
    viet: false,
    // Link tải — thay bằng link Gofile thật
    download_links: [ 
      { label: "Gofile", url: "https://gofile.io/d/7iU3Fi", icon: "⬇️" },
    ],
    thumbnail: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4021780/414ca27a13435d96ec1f22d28cb81db7fe2ece77/header.jpg?t=1764264528",
    screenshots: [
      "https://tamhongame.net/storage/games/geo-political-simulator-2026-edition/geo-political-simulator-2026-edition-screenshot-lVbRcozmHsDHXUcePklI.jpeg",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4021780/8b3076a8b6385185a572c81c33949c91fc192093/ss_8b3076a8b6385185a572c81c33949c91fc192093.1920x1080.jpg?t=1764264528",
      "https://cdn.genbadigital.io/common/6e7db9f2-e44d-4cc2-afa0-2f999041fe31/66a622c6-c01a-498c-bf5c-ccac7560e9d9/t150_citybattle.jpg",
    ],
    trailer: "https://www.youtube.com/watch?v=BzS1ONXLpH4",
    tags: ["Chiến lược", "Mô phỏng", "Chính trị", "Thế giới mở"],
    sys_req: {
      min: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-4460 / AMD FX-6300",
        ram: "8 GB",
        gpu: "NVIDIA GTX 760 / AMD Radeon R9 380",
        storage: "5 GB",
        directx: "Version 11",
      },
      rec: {
        os: "Windows 11 64-bit",
        cpu: "Intel Core i7-8700 / AMD Ryzen 5 3600",
        ram: "16 GB",
        gpu: "NVIDIA GTX 1060 / AMD RX 580",
        storage: "5 GB SSD",
        directx: "Version 12",
      },
    },
  },
];

const GENRES = [
  { id: "action",     icon: "⚔️",  name: "Action",        desc: "Hành động nhanh, chiến đấu mượt" },
  { id: "rpg",        icon: "🧙",  name: "RPG",           desc: "Nhập vai, cốt truyện, phát triển nhân vật" },
  { id: "strategy",   icon: "♟️",  name: "Chiến thuật",   desc: "Suy nghĩ kỹ trước mỗi bước đi" },
  { id: "puzzle",     icon: "🧩",  name: "Đố trí",        desc: "Giải câu đố, động não" },
  { id: "shooter",    icon: "🔫",  name: "Bắn súng",      desc: "FPS/TPS hành động" },
  { id: "adventure",  icon: "🗺️",  name: "Phiêu lưu",    desc: "Khám phá thế giới rộng lớn" },
  { id: "simulation", icon: "🏗️",  name: "Mô phỏng",     desc: "Xây dựng, quản lý, nông trại" },
  { id: "horror",     icon: "👻",  name: "Kinh dị",       desc: "Rùng rợn, hồi hộp" },
];
