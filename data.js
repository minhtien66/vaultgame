// ============================================================
// DATA.JS — Dữ liệu game
// ============================================================

const GAMES = [
  {
    id: 2,
    title: "eFootball PES 2020 Việt Hóa + Bình Luận Tiếng Việt",
    slug: "efootball-pes-2020-viet-hoa",
    genre: "sports",
    genre_label: "Thể Thao / Bóng Đá",
    desc_short: "Trải nghiệm bóng đá đỉnh cao với bình luận tiếng Việt hoàn chỉnh, đội tuyển Việt Nam cập nhật, và lối chơi mượt mà được Việt hóa 100% bởi cộng đồng.",
    desc_full: `<p>eFootball PES 2020 (Pro Evolution Soccer 2020) là tựa game bóng đá huyền thoại của Konami, nay được cộng đồng game thủ Việt Nam Việt hóa hoàn chỉnh với bình luận tiếng Việt sống động.</p>
    <p>Phiên bản Việt hóa này bao gồm lời bình luận tiếng Việt được thu âm chuyên nghiệp, giao diện menu hoàn toàn tiếng Việt, và đội tuyển quốc gia Việt Nam với đội hình cập nhật. Gameplay mượt mà, vật lý bóng chân thực, và chế độ Master League hấp dẫn là những điểm nhấn của tựa game này.</p>
    <p>Được tối ưu hóa để chạy tốt trên cấu hình máy tính phổ thông tại Việt Nam, đây là lựa chọn hoàn hảo cho những ai yêu thích bóng đá muốn trải nghiệm bằng tiếng mẹ đẻ.</p>`,
    install_guide: `<ol>
<h3>HƯỚNG DẪN CÀI ĐẶT eFootball PES 2020</h3>
<li>Tải Game về và giải nén với mật khẩu nằm trong dấu [ ] ở tên của file nén Ví Dụ tên file nén là "[tamhongame.com]_RDR2.rar" => pass là: tamhongame.com</li>
<li>Vào "thư mục chứa game sau khi đã giải nén" Chạy file "PES2020.exe" để vào game</li>
<li>Chỉnh cài đặt game bằng file "Settings.exe"</li>
<li>Play game</li>

<h3>HƯỚNG DẪN CÀI Việt Hóa + Bình Luận Tiếng Việt</h3>
<li>Tải File Patch Việt Hóa + BLTV về và giải nén với mật khẩu nằm trong dấu [ ] ở tên của file nén Ví Dụ tên file nén là "[tamhongame.com]_RDR2.rar" => pass là: tamhongame.com</li>
<li>Vào thư mục "eFootball PES 2020 Patch Viet Hoa + BLTV" Copy 2 file "pes 20 viet hoa.cpk" và "Pham Hung Tien Offcial BLTV.cpk" bỏ vào trong "thư mục chứa game sau khi đã giải nén\download" (Có thể Copy 1 trong 2 file tùy nhu cầu của bạn)</li>
<li>Vẫn ở trong thư mục "eFootball PES 2020 Patch Viet Hoa + BLTV" => Vào tiếp thư mục "DpFileList_Generator" => Mở file "DpFileList Generator.exe" lên => Ở dòng CPK Path chọn đường dẫn tới "thư mục chứa game sau khi đã giải nén\download" => Ở dòng DpFileList chọn đường dẫn tới "thư mục chứa game sau khi đã giải nén\download" và Open vào file "DpFileList.bin" có trong này => Ở dòng DLC thì chọn "DLC v5.00" => Tiếp tục trong bảng mod ở dưới ta sẽ tích vào 2 ô (màu đen) là "Pham Hung Tien Offcial BLTV.cpk" và "pes 20 viet hoa.cpk" rồi nhấn vào nút "Take a break" đợi khoảng vài giây thì nhấn vào "Generate DpFileList.bin" => Sau khi thành công có thể tắt phần mềm đi</li>
<li>Vào "thư mục chứa game sau khi đã giải nén" Chạy file "PES2020.exe" để vào game</li>
<li>Trong game nhớ chọn ngôn ngữ là "English" để hiển thị Việt Hóa</li>
    </ol>`,
    size: "36.1 GB",
    version: "v1.06.00-VH",
    year: 2019,
    developer: "Konami",
    publisher: "Konami",
    rating: 4.7,
    downloads: 3800,
    emoji: "⚽",
    badges: ["hot", "new"],
    viet: true,
    download_links: [
      { label: "Gofile", url: "https://gofile.io/d/example", icon: "⬇️" },
    ],
    thumbnail: "https://hadoantv.com/wp-content/uploads/2025/10/download-eFootball-PES-2020-hadoan-tv.jpg",
    screenshots: [
      "https://hadoantv.com/wp-content/uploads/2025/10/download-eFootball-PES-2020-hadoan-tv.jpg",
      "https://img.konami.com/products_master/eu_publish/pes2020/eu/en/images/pes2020-hp-messi-ronaldinho-02.jpg",
      "https://www.gamereactor.eu/media/98/efootballpes2020_2959873b.jpg",
      "https://product.hstatic.net/200000992511/product/pes-2020-gameplay_3ea412c58c584274b298d5399d5fd16b_master.jpg",
    ],
    trailer: "https://www.youtube.com/embed/4-ZStCPtYVE",
    tags: ["Bóng Đá", "Thể Thao", "Việt Hóa", "Multiplayer", "PES"],
    sys_req: {
      min: {
        os: "Windows 7 SP1 64-bit",
        cpu: "Intel Core i5-3470 / AMD FX-4350",
        ram: "4 GB",
        gpu: "NVIDIA GTX 670 / AMD Radeon HD 7870",
        storage: "20 GB",
        directx: "Version 11",
      },
      rec: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i7-6700 / AMD Ryzen 5 1600",
        ram: "8 GB",
        gpu: "NVIDIA GTX 1060 / AMD RX 5500 XT",
        storage: "20 GB SSD",
        directx: "Version 12",
      },
    },
  },
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
      <li>Giải nén file .rar vừa tải về</li>
      <li>Chạy file <strong>Setup.exe</strong> với quyền Administrator</li>
      <li>Chọn thư mục cài đặt, bấm <strong>Next</strong> và chờ cài xong</li>
      <li>Copy file crack trong thư mục <strong>CODEX</strong> vào thư mục game</li>
      <li>Chạy <strong>GPS2026.exe</strong> để chơi</li>
    </ol>`,
    size: "6.5 GB",
    version: "v2.14-P2P",
    year: 2025,
    developer: "Eversim",
    publisher: "Eversim",
    rating: 4.5,
    downloads: 1200,
    emoji: "🌍",
    badges: ["hot", "new"],
    viet: false,
    // Link tải — thay bằng link Gofile thật
    download_links: [
      { label: "Gofile", url: "https://gofile.io/d/7iU3Fi", icon: "⬇️" },
    ],
    thumbnail: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4021780/414ca27a13435d96ec1f22d28cb81db7fe2ece77/header.jpg?t=1764264528",
    screenshots: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4021780/414ca27a13435d96ec1f22d28cb81db7fe2ece77/header.jpg?t=1764264528",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4021780/e7cc6361f338a81fa281ddba522f8060f82f782c/page_bg_raw.jpg?t=1764264528",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4021780/8b3076a8b6385185a572c81c33949c91fc192093/ss_8b3076a8b6385185a572c81c33949c91fc192093.1920x1080.jpg?t=1764264528",
    ],
    trailer: "https://www.youtube.com/embed/ZCqSM3-HH78",
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
  { id: "action",     icon: "🗡",   name: "Action",        desc: "Hành động nhanh, chiến đấu mượt" },
  { id: "rpg",        icon: "⚗️",  name: "RPG",           desc: "Nhập vai, cốt truyện, phát triển nhân vật" },
  { id: "strategy",   icon: "♟",   name: "Chiến thuật",   desc: "Suy nghĩ kỹ trước mỗi bước đi" },
  { id: "puzzle",     icon: "⬡",   name: "Đố trí",        desc: "Giải câu đố, động não" },
  { id: "shooter",    icon: "◎",   name: "Bắn súng",      desc: "FPS/TPS hành động" },
  { id: "adventure",  icon: "△",   name: "Phiêu lưu",    desc: "Khám phá thế giới rộng lớn" },
  { id: "simulation", icon: "◈",   name: "Mô phỏng",     desc: "Xây dựng, quản lý, nông trại" },
  { id: "horror",     icon: "◉",   name: "Kinh dị",       desc: "Rùng rợn, hồi hộp" },
  { id: "sports",     icon: "◭",   name: "Thể Thao",      desc: "Bóng đá, thể thao, đua xe" },
];
