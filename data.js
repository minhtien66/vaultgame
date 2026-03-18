// ============================================================
// DATA.JS — Dữ liệu game
// ============================================================

const GAMES = [
  {
    id: 3,
    title: "Victoria 3 v1.12.4 Việt Hóa",
    slug: "victoria-3-v1124-viet-hoa",
    genre: "strategy",
    genre_label: "Chiến lược / Mô phỏng",
    desc_short: "Điều hành đất nước trong thời đại Victoria, quản lý kinh tế, chính trị và xã hội. Bản Việt hóa toàn bộ giao diện và sự kiện.",
    desc_full: `<p><strong>Victoria 3</strong> là tựa game đại chiến lược nổi tiếng của Paradox Interactive, đưa bạn vào vai người lãnh đạo của một quốc gia trong giai đoạn lịch sử đầy biến động từ 1836 đến 1936.</p>
    <p>Game tập trung vào quản lý kinh tế, chính trị và xã hội sâu sắc. Bạn sẽ phải cân bằng giữa các tầng lớp dân cư, phát triển công nghiệp, thương mại, và đối phó với các cuộc cách mạng, xung đột quốc tế.</p>
    <p>Phiên bản <strong>v1.12.4</strong> bao gồm các bản mở rộng và cập nhật mới nhất, được cộng đồng Việt hóa hoàn chỉnh – từ giao diện, mô tả công nghệ, cho đến các sự kiện lịch sử đều được dịch sang tiếng Việt.</p>`,
    install_guide: `<ol>
      <li>Tải game về và giải nén với mật khẩu nằm trong dấu [ ] ở tên file nén. Ví dụ: tên file "[vaultgame.com]_Victoria3.rar" → mật khẩu là: vaultgame.com</li>
      <li>Vào thư mục game sau khi giải nén</li>
      <li>Chạy file <strong>Victoria3.exe</strong> (có thể chạy với quyền Administrator nếu cần)</li>
      <li>Trong game, vào Settings → Language chọn "Tiếng Việt" (nếu chưa tự động)</li>
      <li>Bắt đầu trải nghiệm Victoria 3 bằng tiếng Việt!</li>
    </ol>`,
    size: "9.8 GB",
    version: "v1.12.4 (Việt Hóa)",
    year: 2022,
    developer: "Paradox Development Studio",
    publisher: "Paradox Interactive",
    rating: 4.6,
    downloads: 2100,
    emoji: "🏭",
    badges: ["new"],
    viet: true,
    download_links: [
      { label: "Gofile", url: "https://gofile.io/d/VICTORIA3DEMO", icon: "⬇️" },
    ],
    thumbnail: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/529340/header.jpg?t=1732030213",
    screenshots: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/529340/ss_5f3b9d52539a2bdd54c338d2c22bfb1bc5858af6.1920x1080.jpg?t=1732030213",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/529340/ss_6f54d3fc1927ce13a56d79f109ffd15459a44c51.1920x1080.jpg?t=1732030213",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/529340/ss_05b15a7dc561a37e3e3971c114e4d9e4e5d53d73.1920x1080.jpg?t=1732030213",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/529340/ss_bdcaec9ac49eb28d9cbdce262e73107a12fe5692.1920x1080.jpg?t=1732030213",
    ],
    trailer: "https://www.youtube.com/embed/M5T_0kz8JGs",
    tags: ["Đại chiến lược", "Mô phỏng", "Lịch sử", "Kinh tế", "Việt Hóa", "Paradox"],
    sys_req: {
      min: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-6600 / AMD Ryzen 3 1200",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 660 / AMD Radeon R9 380",
        storage: "10 GB",
        directx: "Version 12",
      },
      rec: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i7-8700 / AMD Ryzen 5 3600",
        ram: "16 GB",
        gpu: "NVIDIA GeForce GTX 1060 / AMD RX 580",
        storage: "10 GB SSD",
        directx: "Version 12",
      },
    },
  },
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
      { label: "Gofile", url: "https://gofile.io/d/4OYOvy", icon: "⬇️" },
    ],
    thumbnail: "https://hadoantv.com/wp-content/uploads/2025/10/download-eFootball-PES-2020-hadoan-tv.jpg",
    screenshots: [
      "https://hadoantv.com/wp-content/uploads/2025/10/download-eFootball-PES-2020-hadoan-tv.jpg",
      "https://img.konami.com/products_master/eu_publish/pes2020/eu/en/images/pes2020-hp-messi-ronaldinho-02.jpg",
      "https://www.gamereactor.eu/media/98/efootballpes2020_2959873b.jpg",
      "https://product.hstatic.net/200000992511/product/pes-2020-gameplay_3ea412c58c584274b298d5399d5fd16b_master.jpg",
    ],
    trailer: "https://www.youtube.com/embed/cHDfOQyabD0",
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

// ============================================================
// BLOG_POSTS — Dữ liệu bài viết Blog
// ============================================================
// ► CÁCH THÊM BÀI VIẾT MỚI:
//   1. Copy một object từ danh sách bên dưới
//   2. Dán lên ĐẦU mảng (bài mới nhất hiển thị trước)
//   3. Sửa các trường theo nội dung bài của bạn
//   4. Lưu file và reload web — bài sẽ hiện ngay
//
// ► CÁC TRƯỜNG BẮT BUỘC: id, slug, cat, title, desc, date, readTime, content
// ► CÁC TRƯỜNG TUỲ CHỌN: thumbnail (URL ảnh), gradient (màu nền nếu ko có ảnh)
//
// ► DANH SÁCH CAT (thể loại):
//   "news"    → 📰 Tin tức
//   "guide"   → 📖 Hướng dẫn
//   "review"  → ⭐ Đánh giá
//   "viet"    → 🇻🇳 Việt hóa
//   "dev"     → 💻 Phát triển game
//
// ► CONTENT hỗ trợ HTML đơn giản:
//   <h2>Tiêu đề lớn</h2>
//   <h3>Tiêu đề nhỏ</h3>
//   <p>Đoạn văn</p>
//   <ul><li>Mục 1</li><li>Mục 2</li></ul>
//   <ol><li>Bước 1</li><li>Bước 2</li></ol>
//   <strong>Chữ đậm</strong>
//   <blockquote><p>Trích dẫn nổi bật</p></blockquote>
//   <code>đoạn code</code>
// ============================================================

const BLOG_POSTS = [
  // ──────────────────────────────────────────────────────────
  // BÀI 1
  // ──────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "vaultgame-ra-mat",
    cat: "news",
    title: "VaultGame ra mắt — Kho game PC miễn phí lớn nhất Việt Nam",
    desc: "Chúng tôi chính thức ra mắt VaultGame với kho game ngày càng mở rộng, ưu tiên Việt hóa và hoàn toàn miễn phí cho cộng đồng game thủ Việt.",
    date: "01/01/2025",
    readTime: "3 phút đọc",
    thumbnail: "",  // Để trống nếu dùng gradient
    gradient: "linear-gradient(135deg,#0077b6,#00b4d8)",
    icon: "📰",
    content: `
      <p>Hôm nay chúng tôi chính thức ra mắt <strong>VaultGame</strong> — kho game PC miễn phí được xây dựng bởi cộng đồng game thủ Việt Nam.</p>

      <h2>VaultGame là gì?</h2>
      <p>VaultGame là nền tảng tổng hợp và chia sẻ game PC hoàn toàn miễn phí. Chúng tôi không thu phí, không có quảng cáo pop-up, không yêu cầu đăng ký tài khoản.</p>

      <h2>Điểm nổi bật khi ra mắt</h2>
      <ul>
        <li>Kho game với các tựa game chất lượng cao, cập nhật liên tục</li>
        <li>Ưu tiên các bản game đã được <strong>Việt hóa hoàn chỉnh</strong></li>
        <li>Link tải tốc độ cao qua Gofile — không giới hạn băng thông</li>
        <li>Hướng dẫn cài đặt chi tiết cho từng game</li>
        <li>Giao diện tối giản, thân thiện, hoạt động tốt trên mọi thiết bị</li>
      </ul>

      <blockquote><p>"Chúng tôi tin rằng mọi game thủ Việt Nam đều xứng đáng được trải nghiệm game tốt nhất bằng tiếng mẹ đẻ — hoàn toàn miễn phí."</p></blockquote>

      <h2>Kế hoạch tương lai</h2>
      <p>Chúng tôi sẽ tiếp tục mở rộng kho game, thêm nhiều tựa game Việt hóa, và xây dựng cộng đồng game thủ Việt Nam ngày càng lớn mạnh hơn.</p>
      <p>Hãy theo dõi VaultGame qua Telegram và Facebook để không bỏ lỡ game mới nhé!</p>
    `
  },

  // ──────────────────────────────────────────────────────────
  // BÀI 2
  // ──────────────────────────────────────────────────────────
  {
    id: 2,
    slug: "huong-dan-cai-dat-game-pc",
    cat: "guide",
    title: "Hướng dẫn cài đặt game PC từ A đến Z cho người mới bắt đầu",
    desc: "Hướng dẫn chi tiết từng bước cách tải, giải nén và cài đặt game PC — kể cả khi bạn chưa bao giờ làm việc này trước đây.",
    date: "05/01/2025",
    readTime: "8 phút đọc",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#7b2d8b,#c41e3a)",
    icon: "📖",
    content: `
      <p>Bài viết này sẽ hướng dẫn bạn toàn bộ quy trình tải và cài đặt game PC từ VaultGame — từ bước đầu tiên cho đến khi game chạy được.</p>

      <h2>Chuẩn bị trước khi bắt đầu</h2>
      <p>Trước tiên, bạn cần cài đặt một số phần mềm cần thiết:</p>
      <ul>
        <li><strong>WinRAR hoặc 7-Zip</strong> — để giải nén file .rar/.zip</li>
        <li><strong>DirectX & Visual C++ Redistributable</strong> — thư viện hệ thống cần thiết</li>
        <li><strong>Đủ dung lượng ổ cứng</strong> — kiểm tra dung lượng game trước khi tải</li>
      </ul>

      <h2>Bước 1: Tải game</h2>
      <p>Trên trang chi tiết game, bấm nút <strong>"Tải xuống"</strong>. Bạn sẽ được chuyển đến Gofile — bấm nút Download màu xanh lá để bắt đầu tải.</p>

      <h2>Bước 2: Giải nén</h2>
      <p>Sau khi tải xong, click chuột phải vào file .rar → <strong>Extract Here</strong> hoặc <strong>Extract to [tên folder]</strong>. Nếu file yêu cầu mật khẩu, mật khẩu thường nằm trong tên file hoặc mô tả trang tải.</p>

      <h2>Bước 3: Cài đặt</h2>
      <p>Mỗi game có cách cài khác nhau. Đọc kỹ <strong>Hướng dẫn cài đặt</strong> trên trang game VaultGame. Thông thường:</p>
      <ol>
        <li>Chạy file <code>Setup.exe</code> với quyền Administrator</li>
        <li>Chọn thư mục cài đặt và nhấn Next/Install</li>
        <li>Copy file crack (nếu có) vào thư mục game</li>
        <li>Chạy file <code>.exe</code> chính của game</li>
      </ol>

      <h2>Xử lý lỗi thường gặp</h2>
      <ul>
        <li><strong>Lỗi VCRUNTIME / DLL:</strong> Cài Visual C++ Redistributable All-in-One</li>
        <li><strong>Game không khởi động:</strong> Chạy với quyền Administrator, tắt antivirus tạm thời</li>
        <li><strong>Màn hình đen:</strong> Thử chạy ở chế độ Windowed hoặc cập nhật driver GPU</li>
      </ul>

      <blockquote><p>Nếu vẫn gặp lỗi sau khi thử các bước trên, hãy báo lỗi qua trang <strong>Báo Lỗi</strong> — chúng tôi sẽ hỗ trợ bạn!</p></blockquote>
    `
  },

  // ──────────────────────────────────────────────────────────
  // BÀI 3
  // ──────────────────────────────────────────────────────────
  {
    id: 3,
    slug: "top-10-game-viet-hoa-2025",
    cat: "viet",
    title: "Top 10 game PC được Việt hóa hay nhất năm 2025",
    desc: "Danh sách những tựa game được cộng đồng Việt hóa công phu nhất — từ bình luận tiếng Việt đến toàn bộ giao diện và cốt truyện.",
    date: "10/01/2025",
    readTime: "6 phút đọc",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#c41e3a,#ff6b35)",
    icon: "🇻🇳",
    content: `
      <p>Cộng đồng Việt hóa game Việt Nam ngày càng phát triển mạnh. Dưới đây là top 10 tựa game được Việt hóa hoàn chỉnh và chất lượng nhất năm 2025.</p>

      <h2>Tiêu chí đánh giá</h2>
      <ul>
        <li>Chất lượng bản dịch — tự nhiên, đúng ngữ cảnh</li>
        <li>Độ hoàn chỉnh — có Việt hóa toàn bộ UI, lời thoại, subtitles</li>
        <li>Bình luận tiếng Việt (với game thể thao)</li>
        <li>Được cộng đồng đánh giá cao</li>
      </ul>

      <h2>Top 10</h2>
      <ol>
        <li><strong>eFootball PES 2020</strong> — Bình luận tiếng Việt của BLV Phạm Hùng Tiến, UI hoàn chỉnh</li>
        <li><strong>Grand Theft Auto V</strong> — Việt hóa toàn bộ subtitles và radio</li>
        <li><strong>The Witcher 3</strong> — Bản dịch chất lượng cao, đúng văn phong</li>
        <li><strong>Red Dead Redemption 2</strong> — Subtitles và giao diện đầy đủ</li>
        <li><strong>Cyberpunk 2077</strong> — Việt hóa community bản 2.0</li>
        <li><strong>Dark Souls III</strong> — Toàn bộ lore và UI</li>
        <li><strong>Elden Ring</strong> — Bản dịch cập nhật liên tục</li>
        <li><strong>FIFA series</strong> — Bình luận tiếng Việt nhiều phiên bản</li>
        <li><strong>Stardew Valley</strong> — Việt hóa hoàn chỉnh, phù hợp mọi lứa tuổi</li>
        <li><strong>Undertale</strong> — Bản dịch sáng tạo, giữ nguyên tinh thần gốc</li>
      </ol>

      <blockquote><p>Bạn muốn thấy game nào trong danh sách? Gửi yêu cầu qua trang Liên hệ nhé!</p></blockquote>
    `
  },

  // ──────────────────────────────────────────────────────────
  // BÀI 4
  // ──────────────────────────────────────────────────────────
  {
    id: 4,
    slug: "review-pes-2020-viet-hoa",
    cat: "review",
    title: "Review eFootball PES 2020 Việt Hóa — Vẫn đỉnh sau 5 năm?",
    desc: "Chúng tôi thử lại PES 2020 bản Việt hóa với bình luận tiếng Việt của Phạm Hùng Tiến. Liệu gameplay huyền thoại này có còn đủ sức hút trong năm 2025?",
    date: "15/01/2025",
    readTime: "10 phút đọc",
    thumbnail: "https://hadoantv.com/wp-content/uploads/2025/10/download-eFootball-PES-2020-hadoan-tv.jpg",
    gradient: "linear-gradient(135deg,#f77f00,#ffd60a)",
    icon: "⚽",
    content: `
      <p>PES 2020 (eFootball PES 2020) ra mắt năm 2019 và được nhiều người coi là đỉnh cao của dòng game bóng đá Konami trước khi chuyển sang eFootball free-to-play gây tranh cãi. Năm 2025, bản Việt hóa với bình luận của BLV Phạm Hùng Tiến vẫn đang được tải về và chơi bởi hàng nghìn game thủ Việt.</p>

      <h2>Gameplay — Vẫn mượt mà sau 5 năm</h2>
      <p>Điểm mạnh nhất của PES 2020 chính là vật lý bóng. Cảm giác chạm bóng, các pha dribble và shoot đều cực kỳ tự nhiên. So với FIFA cùng thời điểm, PES 2020 vượt trội về:</p>
      <ul>
        <li>Vật lý bóng chân thực hơn nhiều</li>
        <li>AI đồng đội thông minh, biết hỗ trợ hợp lý</li>
        <li>Chế độ Master League sâu sắc, đầy chiều sâu chiến thuật</li>
        <li>Animation mượt mà, không bị lag frame</li>
      </ul>

      <h2>Bình luận tiếng Việt — Điểm cộng lớn</h2>
      <p>BLV Phạm Hùng Tiến đã thu âm hàng nghìn câu bình luận cho bản Việt hóa này. Giọng bình luận sôi động, đúng cảm xúc và khá đồng bộ với hành động trên sân.</p>

      <blockquote><p>"Nghe bình luận tiếng Việt mà cứ tưởng đang xem trực tiếp VTV6, cảm giác cực kỳ gần gũi!" — Người dùng VaultGame</p></blockquote>

      <h2>Hạn chế</h2>
      <ul>
        <li>Dung lượng lớn (36GB) — cần ổ cứng rộng</li>
        <li>License cầu thủ không đầy đủ (một số đội dùng tên giả)</li>
        <li>Không có cập nhật đội hình mới sau 2020</li>
      </ul>

      <h2>Điểm số tổng thể</h2>
      <p><strong>Gameplay:</strong> 9.5/10 | <strong>Bình luận VN:</strong> 8.5/10 | <strong>Đồ họa:</strong> 8/10 | <strong>Tổng thể: 4.7/5 ⭐</strong></p>
      <p>Nếu bạn chưa từng chơi PES 2020, đây vẫn là một trong những trải nghiệm bóng đá tốt nhất trên PC — đặc biệt với bản Việt hóa chất lượng cao này.</p>
    `
  },

  // ──────────────────────────────────────────────────────────
  // BÀI 5
  // ──────────────────────────────────────────────────────────
  {
    id: 5,
    slug: "indie-game-viet-nam-2025",
    cat: "dev",
    title: "Game Việt Nam 2025: Làn sóng indie game đang trỗi dậy",
    desc: "Những studio indie Việt Nam đang tạo ra những tựa game đặc sắc — từ game RPG lấy cảm hứng văn hóa Việt đến những trải nghiệm độc đáo.",
    date: "20/01/2025",
    readTime: "7 phút đọc",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#06d6a0,#0077b6)",
    icon: "💻",
    content: `
      <p>Trong vài năm gần đây, cộng đồng phát triển game indie Việt Nam đã có những bước tiến đáng kể. Từ những game mobile đơn giản, các studio Việt đã bắt đầu tạo ra những tựa game PC chất lượng cao, được cộng đồng quốc tế chú ý.</p>

      <h2>Những studio đáng chú ý</h2>
      <p>Nhiều studio indie Việt đang phát triển game dựa trên văn hóa và lịch sử Việt Nam — một hướng đi độc đáo và tiềm năng trong thị trường game quốc tế.</p>

      <h2>Xu hướng nổi bật năm 2025</h2>
      <ul>
        <li><strong>RPG lấy bối cảnh lịch sử Việt:</strong> Khai thác thần thoại và lịch sử phong phú của Việt Nam</li>
        <li><strong>Pixel Art đậm chất Á Đông:</strong> Phong cách nghệ thuật độc đáo kết hợp hiện đại</li>
        <li><strong>Game di động lên PC:</strong> Nhiều tựa game mobile thành công đang ra bản PC</li>
        <li><strong>Sử dụng Unreal Engine 5:</strong> Chất lượng đồ họa ngày càng cao</li>
      </ul>

      <h2>Thách thức và cơ hội</h2>
      <p>Thị trường game Việt Nam vẫn còn nhiều thách thức: nguồn vốn hạn chế, thiếu nhân lực chuyên môn cao, và cạnh tranh khốc liệt từ game nước ngoài. Tuy nhiên, với sự phát triển của các công cụ như Unity và Unreal Engine, cùng cộng đồng game thủ ngày càng lớn mạnh, tương lai của ngành game Việt Nam rất hứa hẹn.</p>

      <blockquote><p>Hãy ủng hộ game indie Việt bằng cách mua bản quyền chính thức — đó là cách tốt nhất để thúc đẩy nền công nghiệp game nội địa phát triển!</p></blockquote>
    `
  },
  // bài 6
  {
  id: 6,
  slug: "geo-political-simulator-2026-edition-la-gi",
  cat: "review",
  title: "Geo-Political Simulator 2026 Edition: Trải nghiệm làm tổng thống quyền lực nhất thế giới",
  desc: "Khám phá tựa game mô phỏng chính trị chân thực nhất, nơi bạn điều hành cả một quốc gia và định hình thế giới.",
  date: "17/03/2026",
  readTime: "6 phút đọc",
  thumbnail: "https://i.ibb.co/ZRw2hD4V/geo-political-simulator-2026-thumbnail.jpg",
  gradient: "linear-gradient(135deg,#0077b6,#00b4d8)",
  icon: "🌍",
  content: `
    <p><strong>Geo-Political Simulator 2026 Edition</strong> là một trong những tựa game mô phỏng chính trị sâu sắc và phức tạp nhất hiện nay. Nếu bạn từng muốn thử cảm giác trở thành tổng thống, thủ tướng hoặc nhà lãnh đạo quốc gia, đây chính là game dành cho bạn.</p>

    <h2>Gameplay: Điều hành cả một quốc gia</h2>
    <p>Trong game, bạn sẽ vào vai lãnh đạo của một quốc gia bất kỳ trên thế giới. Nhiệm vụ của bạn không chỉ đơn giản là ra quyết định, mà còn phải cân bằng hàng loạt yếu tố như kinh tế, chính trị, quân sự và xã hội.</p>

    <ul>
      <li>Ban hành luật và chính sách mới</li>
      <li>Quản lý ngân sách và thuế</li>
      <li>Đối phó với khủng hoảng (biểu tình, suy thoái kinh tế, chiến tranh)</li>
      <li>Thiết lập quan hệ ngoại giao với các quốc gia khác</li>
    </ul>

    <h2>Độ chân thực cực cao</h2>
    <p>Điểm mạnh lớn nhất của Geo-Political Simulator 2026 Edition là tính chân thực. Game sử dụng dữ liệu thực tế về các quốc gia, từ dân số, GDP cho đến quan hệ quốc tế.</p>

    <p>Mỗi quyết định bạn đưa ra đều có hậu quả rõ ràng. Ví dụ: tăng thuế có thể giúp ngân sách tăng, nhưng lại khiến người dân bất mãn và biểu tình.</p>

    <h2>Hệ thống AI thông minh</h2>
    <p>AI trong game được thiết kế để phản ứng như ngoài đời thật. Các quốc gia khác sẽ không “dễ dãi” mà sẽ phản ứng dựa trên lợi ích riêng của họ.</p>

    <ul>
      <li>Đàm phán hiệp định thương mại</li>
      <li>Đối đầu quân sự hoặc ngoại giao</li>
      <li>Tham gia các tổ chức quốc tế</li>
    </ul>

    <h2>Đồ họa & giao diện</h2>
    <p>Game không tập trung vào đồ họa hoành tráng mà thiên về giao diện quản lý. Tuy nhiên, bản 2026 đã cải thiện UI rõ rệt, giúp người chơi dễ theo dõi thông tin hơn.</p>

    <h2>Ai nên chơi game này?</h2>
    <p>Đây không phải là game giải trí nhanh. Nếu bạn thích:</p>

    <ul>
      <li>Chiến lược sâu</li>
      <li>Mô phỏng thực tế</li>
      <li>Quản lý và ra quyết định</li>
    </ul>

    <p>→ Thì đây là một tựa game cực kỳ đáng thử.</p>

    <h2>Kết luận</h2>
    <p><strong>Geo-Political Simulator 2026 Edition</strong> là một trải nghiệm độc đáo, nơi mỗi quyết định đều có trọng lượng. Dù có độ khó cao và hơi “kén người chơi”, nhưng nếu bạn kiên nhẫn, game sẽ mang lại cảm giác cực kỳ thỏa mãn khi điều hành thành công một quốc gia.</p>

    <p><em>Tip nhỏ:</em> Người mới nên chọn quốc gia dễ (như các nước phát triển) để làm quen trước khi thử sức với những quốc gia khó hơn.</p>
  `
},

  // ──────────────────────────────────────────────────────────
  // ► THÊM BÀI MỚI Ở ĐÂY — copy template bên dưới và dán lên trên
  // ──────────────────────────────────────────────────────────
  /*
  {
    id: 6,                          // ← Tăng số lên (luôn unique)
    slug: "ten-bai-viet-khong-dau", // ← URL của bài (không dấu, dùng dấu -)
    cat: "news",                    // ← news | guide | review | viet | dev
    title: "Tiêu đề bài viết",
    desc: "Mô tả ngắn hiển thị trên card (1-2 câu).",
    date: "01/03/2025",             // ← Ngày đăng DD/MM/YYYY
    readTime: "5 phút đọc",
    thumbnail: "",                  // ← URL ảnh thumbnail (để trống dùng gradient)
    gradient: "linear-gradient(135deg,#0077b6,#00b4d8)", // ← Màu nền nếu không có ảnh
    icon: "📰",                     // ← Emoji hiển thị khi không có thumbnail
    content: `
      <p>Nội dung bài viết...</p>

      <h2>Tiêu đề mục</h2>
      <p>Đoạn văn bản...</p>

      <ul>
        <li>Mục 1</li>
        <li>Mục 2</li>
      </ul>
    `
  },
  */
];
