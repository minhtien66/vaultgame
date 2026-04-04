// ============================================================
// DATA.JS — Dữ liệu game
// ============================================================
 
const GAMES = [
  {
    id: 5,
    title: "PES 2026 SP Football Life 2026 + Việt Hóa + Real Faces",
    slug: "pes-2026-sp-football-life-2026-viet-hoa-real-faces",
    genre: "sports",
    genre_label: "Thể Thao / Bóng Đá",
    desc_short: "SP Football Life 2026 — bản cập nhật mùa giải 2025/2026 của series PES huyền thoại. Tích hợp sẵn Việt Hóa hoàn chỉnh và gói Real Faces chân thực.",
    desc_full: `
<h2>SP Football Life 2026 là gì?</h2>
<p>SP Football Life (SPFL) là dự án cộng đồng được tạo ra nhằm tiếp nối và cập nhật các chế độ chơi Career offline vốn xuất hiện trong series PES huyền thoại của Konami. Phiên bản FL26 được nâng cấp toàn diện cho mùa giải 2025/2026, mang lại trải nghiệm bóng đá offline chân thực và phong phú nhất từ trước đến nay.</p>

<h2>Tổng quan & nổi bật</h2>
<p>FL26 được cập nhật đội hình mùa giải 2025/26, bao gồm các đội thăng hạng thay thế đội xuống hạng và bổ sung nhiều đội bóng mới. Đồ họa, hiệu ứng âm thanh, vật lý bóng và lối chơi đều được nâng cấp đáng kể. Chế độ chỉnh sửa hoạt động đầy đủ với ba đội bóng hoàn toàn có thể tùy biến: Ceres Negros, Zalgiris Vilnius và Zamora FC.</p>

<h2>Gameplay & cơ chế</h2>
<p>Kế thừa toàn bộ nền tảng gameplay sâu sắc của series PES, FL26 mang đến hệ thống điều khiển mượt mà, AI thủ môn và hậu vệ được cải thiện đáng kể, vật lý bóng chân thực và hàng loạt chỉnh sửa nhỏ giúp trận đấu cảm giác tự nhiên hơn bao giờ hết. Chế độ Career offline với độ sâu chiến thuật cao là điểm mạnh không thể thay thế của tựa game này.</p>

<h2>Bình luận v8 hoàn toàn mới</h2>
<p>FL26 tích hợp hệ thống bình luận tiếng Anh v8 với nhiều tên cầu thủ mới và các đoạn hội thoại bình luận phong phú hơn. Đây là bước nâng cấp lớn so với các phiên bản trước, tạo cảm giác như đang xem một trận đấu thực sự trên truyền hình.</p>

<h2>Gói Real Faces — Khuôn mặt cầu thủ siêu chân thực</h2>
<p>Phiên bản này tích hợp sẵn gói khuôn mặt thật (Real Faces) được thiết kế riêng cho FL26. Hàng trăm cầu thủ nổi tiếng được tái hiện với khuôn mặt scan 3D cực kỳ chân thực, tăng đáng kể tính thẩm mỹ và sự cuốn hút khi chơi game. Gói khuôn mặt sẽ tiếp tục được cập nhật trong suốt năm 2026 và 2027.</p>

<h2>Bản Việt Hóa hoàn chỉnh</h2>
<p>Cộng đồng game thủ Việt Nam đã Việt hóa toàn bộ giao diện, menu và nội dung trong game. Bản Việt Hóa đã được tích hợp sẵn — không cần cài thêm bất kỳ bước nào. Chỉ cần chạy game là trải nghiệm ngay bằng tiếng Việt.</p>

<h2>Cập nhật liên tục</h2>
<p>Nhóm phát triển thực hiện quét định kỳ cơ sở dữ liệu để cập nhật đội hình và thuộc tính cầu thủ theo các diễn biến chuyển nhượng thực tế. Các đội tuyển quốc gia đã được cập nhật, đang chờ danh sách chính thức tham dự World Cup. Trò chơi sẽ hiển thị thông báo khi có phiên bản mới.</p>

<h2>Vì sao nên chọn PES 2026 SP Football Life?</h2>
<p>Trong khi eFootball hiện tại tập trung vào chế độ online, SPFL là lựa chọn hoàn hảo cho những ai yêu thích Career offline với độ sâu chiến thuật cao. Với đồ họa đẹp, gameplay mượt mà, khuôn mặt cầu thủ siêu chân thực và bản Việt Hóa hoàn chỉnh, đây là tựa game bóng đá PC tốt nhất hiện tại cho game thủ Việt Nam. Nếu muốn ủng hộ nhà phát triển gốc, hãy mua bản quyền tại <strong>pessmokepatch.com</strong>.</p>`,
    install_guide: `<h3>QUY TRÌNH CÀI ĐẶT PES 2026 SP FOOTBALL LIFE 2026</h3>
    <ol>
      <li>Tải tất cả Part về và giải nén — mật khẩu nằm trong dấu [ ] ở tên file nén (ví dụ: <strong>vaultgame.qzz.io</strong>)</li>
      <li>Vào thư mục game sau khi giải nén, copy thư mục <strong>"KONAMI"</strong> vào <code>C:\Users\%Tên User%\Documents</code> (xóa thư mục KONAMI cũ nếu có sẵn)</li>
      <li>Chạy file <strong>"FL 2026 start.exe"</strong> để khởi động game</li>
      <li>Chỉnh cài đặt đồ họa qua file <strong>"Settings.exe"</strong></li>
      <li>Việt Hóa + Real Faces đã tích hợp sẵn, không cần cài thêm — Play game!</li>
    </ol>
    <h3>CÀI PATCH VIỆT HÓA RIÊNG (nếu cần)</h3>
    <ol>
      <li>Tải Patch Việt Hóa về và giải nén (mật khẩu tương tự)</li>
      <li>Vào thư mục <strong>"SP Football Life 2026 Patch Viet Hoa"</strong></li>
      <li>Copy tất cả file vào thư mục chứa game, chọn Replace để ghi đè</li>
      <li>Khởi động game và tận hưởng!</li>
    </ol>
    <p><strong>Lưu ý quan trọng:</strong> Tắt Windows Defender / antivirus trước khi giải nén. Không đặt tên thư mục có ký tự tiếng Việt. Đặt tất cả Part vào cùng 1 thư mục và chỉ giải nén từ Part 1.</p>`,
    size: "56.8 GB",
    version: "FL26 (Mùa giải 2025/2026)",
    year: 2025,
    updated: "28/03/2026",
    developer: "SP Football Life Community",
    publisher: "Konami",
    rating: 4.7,
    downloads: 0,
    emoji: "⚽",
    badges: ["hot", "new", "viet"],
    viet: true,
    download_links: [
      { label: "Part 1", url: "https://vik1ngfile.site/f/CHGV3JvPuu", icon: "⬇️", group: "Mirror Link" },
      { label: "Part 2", url: "https://vik1ngfile.site/f/3xTV7BDF8A", icon: "⬇️", group: "Mirror Link" },
      { label: "Part 3", url: "https://vik1ngfile.site/f/QIBR6c65Pg", icon: "⬇️", group: "Mirror Link" },
      { label: "Part 4", url: "https://vik1ngfile.site/f/L2jSrfD7SM", icon: "⬇️", group: "Mirror Link" },
      { label: "Part 5", url: "https://vik1ngfile.site/f/JZXiWEkt6S", icon: "⬇️", group: "Mirror Link" },
    ],
    thumbnail: "https://tamhongame.net/storage/games/pes-2026-sp-football-life-2026-viet-hoa-real-faces/pes-2026-sp-football-life-2026-viet-hoa-real-faces-vertical_photo-zAowwKiTTnsF2A9MCyJJ.jpeg",
    screenshots: [
      "https://tamhongame.net/storage/games/pes-2026-sp-football-life-2026-viet-hoa-real-faces/pes-2026-sp-football-life-2026-viet-hoa-real-faces-screenshot-dR4yBRu2ACgfe6T9omfu.jpeg",
      "https://tamhongame.net/storage/games/pes-2026-sp-football-life-2026-viet-hoa-real-faces/pes-2026-sp-football-life-2026-viet-hoa-real-faces-screenshot-ys2NYmRPn6Uk5R0sPUdU.jpeg",
      "https://tamhongame.net/storage/games/pes-2026-sp-football-life-2026-viet-hoa-real-faces/pes-2026-sp-football-life-2026-viet-hoa-real-faces-screenshot-Zys21MwTp8GIYaPhfj9B.jpeg",
      "https://tamhongame.net/storage/games/pes-2026-sp-football-life-2026-viet-hoa-real-faces/pes-2026-sp-football-life-2026-viet-hoa-real-faces-screenshot-SzsGD109wpSvCmHleg0f.jpeg",
    ],
    gallery: [
      "https://tamhongame.net/storage/games/pes-2026-sp-football-life-2026-viet-hoa-real-faces/pes-2026-sp-football-life-2026-viet-hoa-real-faces-screenshot-dR4yBRu2ACgfe6T9omfu.jpeg",
      "https://tamhongame.net/storage/games/pes-2026-sp-football-life-2026-viet-hoa-real-faces/pes-2026-sp-football-life-2026-viet-hoa-real-faces-screenshot-ys2NYmRPn6Uk5R0sPUdU.jpeg",
      "https://tamhongame.net/storage/games/pes-2026-sp-football-life-2026-viet-hoa-real-faces/pes-2026-sp-football-life-2026-viet-hoa-real-faces-screenshot-Zys21MwTp8GIYaPhfj9B.jpeg",
      "https://tamhongame.net/storage/games/pes-2026-sp-football-life-2026-viet-hoa-real-faces/pes-2026-sp-football-life-2026-viet-hoa-real-faces-screenshot-SzsGD109wpSvCmHleg0f.jpeg",
    ],
    trailer: "https://www.youtube.com/embed/LgkC_QBpZgo",
    tags: ["Bóng Đá", "Thể Thao", "Việt Hóa", "PES", "PES 2026", "SP Football Life", "Real Faces", "Career Mode", "Offline"],
    sys_req: {
      min: {
        os: "Windows 7 64-bit",
        cpu: "Intel Core i5-3470 / AMD FX 4350",
        ram: "8 GB",
        gpu: "NVIDIA GTX 760 / AMD Radeon R9 270X (2 GB VRAM)",
        storage: "100 GB",
        directx: "DirectX 11",
      },
      rec: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i7-6700 / AMD Ryzen 5 2600",
        ram: "16 GB",
        gpu: "NVIDIA GTX 1060 / AMD RX 580 (4 GB VRAM)",
        storage: "120 GB SSD",
        directx: "DirectX 12",
      },
    },
    score: {
      story: 4.0,
      gameplay: 4.8,
      graphics: 4.6,
      audio: 4.5,
      overall: 4.7,
    },
  },
  {
    id: 4,
    title: "Euro Truck Simulator 2 Việt Hóa + Online Multiplayer",
    slug: "euro-truck-simulator-2-viet-hoa",
    genre: "simulation",
    genre_label: "Mô Phỏng / Lái Xe",
    desc_short: "Đánh giá chi tiết Euro Truck Simulator 2 — tựa game mô phỏng lái xe tải huyền thoại với bản Việt Hóa hoàn chỉnh và hỗ trợ chơi Online Multiplayer cùng bạn bè.",
    desc_full: `
<h2>Euro Truck Simulator 2 là gì?</h2>
<p>Euro Truck Simulator 2 (ETS2) là tựa game mô phỏng lái xe tải nổi tiếng thế giới của SCS Software, lần đầu ra mắt năm 2012 và đến nay vẫn là một trong những game mô phỏng được yêu thích nhất trên Steam với hơn 200.000 đánh giá tích cực. Tại Việt Nam, cộng đồng game thủ đã Việt hóa hoàn chỉnh giao diện và phụ đề tiếng Việt, giúp người chơi trong nước trải nghiệm tựa game này dễ dàng hơn bao giờ hết.</p>

<h2>Khám phá châu Âu sau tay lái</h2>
<p>Trong ETS2, bạn sẽ lái xe tải qua hơn 60 thành phố châu Âu — từ London (Anh), Paris (Pháp), Berlin (Đức), Rome (Ý), Warsaw (Ba Lan) đến hàng chục quốc gia châu Âu khác. Mỗi thành phố được tái hiện với kiến trúc đặc trưng, hệ thống đường xá chi tiết và các biển hiệu giao thông đúng chuẩn châu Âu.</p>
<p>Nhiệm vụ chính là vận chuyển hàng hóa đa dạng — từ hàng nông sản, vật liệu xây dựng đến hàng công nghiệp — với nhiều loại xe tải từ các thương hiệu danh tiếng như Volvo, Scania, MAN, Mercedes-Benz và DAF. Mỗi loại xe có đặc tính lái và thông số kỹ thuật riêng, tạo ra sự phong phú trong trải nghiệm.</p>

<h2>Xây dựng đế chế vận tải của riêng bạn</h2>
<p>ETS2 không chỉ là game lái xe đơn thuần — đây còn là game quản lý kinh doanh thú vị. Bắt đầu từ một tài xế làm thuê, bạn sẽ dần tích lũy tiền để mua xe tải đầu tiên, mở garage riêng, thuê thêm tài xế AI và mở rộng công ty vận tải xuyên châu Âu. Hệ thống kinh tế trong game rất logic: chi phí nhiên liệu, sửa chữa xe, lương nhân viên và lợi nhuận từ mỗi chuyến hàng đều được tính toán chi tiết.</p>

<h2>Chơi Online Multiplayer — Convoy cùng bạn bè</h2>
<p>Một trong những điểm hấp dẫn nhất của phiên bản này là hỗ trợ chơi Online Multiplayer. Bạn có thể tạo hoặc tham gia đoàn xe convoy cùng bạn bè, cùng nhau vận chuyển hàng hóa và khám phá châu Âu trên cùng một server. Trải nghiệm convoy 5-10 người trên cao tốc châu Âu về đêm là một trong những khoảnh khắc đáng nhớ nhất trong game.</p>

<h2>Bản Việt Hóa — Trải nghiệm game bằng tiếng mẹ đẻ</h2>
<p>Cộng đồng game thủ Việt Nam đã dày công Việt hóa toàn bộ giao diện game, từ menu chính, bản đồ, thông báo nhiệm vụ đến các thông số kỹ thuật của xe. Chỉ cần vào phần cài đặt ngôn ngữ trong game và chọn Tiếng Việt — bản dịch sẽ được áp dụng ngay lập tức mà không cần thao tác thêm.</p>

<h2>Tại sao nên trải nghiệm ETS2?</h2>
<p>Nếu bạn đang tìm kiếm một tựa game thư giãn sau những giờ làm việc căng thẳng, ETS2 là lựa chọn hoàn hảo. Cảm giác lái xe xuyên đêm trên những cung đường châu Âu với âm nhạc yêu thích, ngắm cảnh bình minh ló dạng sau dãy núi Alps — đó là điều mà ít game nào có thể mang lại. Đây cũng là một trong những game có cộng đồng mod lớn nhất thế giới, với hàng chục nghìn mod miễn phí từ bản đồ mở rộng, xe mới đến thay đổi thời tiết và đồ họa.</p>
<p>Nếu bạn muốn ủng hộ nhà phát triển, hãy mua bản quyền chính thức trên <strong>Steam</strong> — SCS Software thường xuyên có khuyến mãi giảm giá rất hấp dẫn.</p>`,
    install_guide: `<h3>HƯỚNG DẪN TRẢI NGHIỆM EURO TRUCK SIMULATOR 2 VIỆT HÓA</h3>
    <ol>
      <li>Tải file về và giải nén bằng WinRAR hoặc 7-Zip (mật khẩu nằm trong dấu [ ] ở tên file nén)</li>
      <li>Với Win 64bit: vào thư mục <code>Euro Truck Simulator 2\bin\win_x64</code>, chạy file <strong>eurotrucks2.exe</strong></li>
      <li>Với Win 32bit: vào thư mục <code>Euro Truck Simulator 2\bin\win_x86</code>, chạy file <strong>eurotrucks2.exe</strong></li>
      <li>Vào phần cài đặt trong game, chọn ngôn ngữ <strong>Tiếng Việt</strong></li>
      <li>Bản Việt Hóa đã được tích hợp sẵn — khởi động game và tận hưởng!</li>
    </ol>
    <h3>HƯỚNG DẪN CHƠI ONLINE MULTIPLAYER</h3>
    <ol>
      <li>Tải Steam fix online và giải nén (mật khẩu tương tự file game)</li>
      <li>Copy toàn bộ file trong thư mục vừa giải nén vào thư mục chứa game</li>
      <li>Mở Steam và đăng nhập tài khoản (để chạy nền)</li>
      <li>Chạy <strong>eurotrucks2.exe</strong> như hướng dẫn bên trên</li>
      <li><strong>Tạo phòng:</strong> ESC → Hộ tống → Tạo một đoàn xe → Xác nhận</li>
      <li><strong>Tham gia:</strong> ESC → Hộ tống → Kết nối với máy chủ của bạn bè</li>
    </ol>`,
    size: "32.3 GB",
    version: "Phiên bản mới nhất (Việt Hóa)",
    year: 2012,
    updated: "25/03/2026",
    developer: "SCS Software",
    publisher: "SCS Software",
    rating: 4.8,
    downloads: 0,
    emoji: "🚛",
    badges: ["hot", "new"],
    viet: true,
    download_links: [
      { label: "Part 1", url: "https://gofile.io/d/NuM1Cb", icon: "⬇️", group: "Mirror Link" },
      { label: "Part 2", url: "https://gofile.io/d/DdLZbG", icon: "⬇️", group: "Mirror Link" },
      { label: "Part 3", url: "https://gofile.io/d/XcMB4I", icon: "⬇️", group: "Mirror Link" },
      { label: "Steam Fix Online", url: "https://gofile.io/d/XUQ4iP", icon: "🔧", group: "Mirror Link" },
    ],
    thumbnail: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/227300/header.jpg",
    screenshots: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/227300/ss_bd8b2b2f6a1a595afab14f398de836e6010563c7.1920x1080.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_03.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_05.jpg",
    ],
    gallery: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/227300/ss_bd8b2b2f6a1a595afab14f398de836e6010563c7.1920x1080.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_01.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_02.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_03.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_04.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_05.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_06.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_07.jpg",
      "https://www.scssoft.com/assets/images/euro-truck-simulator-2/img_08.jpg",
    ],
    trailer: "https://www.youtube.com/embed/RHGAfgKMRiI",
    tags: ["Lái Xe", "Mô Phỏng", "Việt Hóa", "Multiplayer", "Online", "Châu Âu", "SCS Software"],
    sys_req: {
      min: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-6400 / AMD Ryzen 3 1200",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 660 / AMD Radeon RX 460 (2GB VRAM)",
        storage: "25 GB",
        directx: "Version 11",
      },
      rec: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i5-9600 / AMD Ryzen 5 3600",
        ram: "12 GB",
        gpu: "NVIDIA GeForce GTX 1660 / AMD Radeon RX 590 (2GB VRAM)",
        storage: "25 GB SSD",
        directx: "Version 11",
      },
    },
  },
  {
    id: 3,
    title: "Victoria 3",
    slug: "victoria-3",
    genre: "strategy",
    genre_label: "Chiến lược / Mô phỏng",
    desc_short: "Xây dựng đế chế của bạn trong thế kỷ 19 đầy biến động — quản lý kinh tế, xã hội, ngoại giao và chiến tranh trong tựa game chiến lược vĩ mô đỉnh cao của Paradox Interactive.",
    desc_full: `
<h2>Victoria 3 — Đỉnh cao của dòng game chiến lược vĩ mô</h2>
<p>Victoria 3 là tựa game chiến lược vĩ mô được phát triển bởi Paradox Development Studio và phát hành năm 2022. Đây là phần tiếp theo được mong chờ suốt hơn 10 năm của loạt game Victoria nổi tiếng, đưa người chơi trở về kỷ nguyên 1836–1936 — thời đại của Cách mạng Công nghiệp, chủ nghĩa thực dân và sự trỗi dậy của các cường quốc.</p>

<h2>Cốt truyện và bối cảnh</h2>
<p>Không có một "cốt truyện" cố định trong Victoria 3 — thay vào đó, chính lịch sử do bạn viết nên mới là cốt truyện thật sự. Bạn bắt đầu năm 1836, khi thế giới đang đứng trước ngưỡng cửa của cuộc Cách mạng Công nghiệp. Từ đây, mọi quyết định đều định hình lịch sử: liệu nước Anh có duy trì vị thế bá chủ thế giới? Liệu Việt Nam có thể kháng cự chủ nghĩa thực dân Pháp? Hay một quốc gia nhỏ bé ở châu Phi có thể vươn lên thành cường quốc toàn cầu?</p>

<h2>Đồ họa và âm thanh</h2>
<p>Victoria 3 có giao diện bản đồ thế giới chi tiết với nhiều lớp thông tin — từ chính trị, kinh tế, dân số đến địa hình và tài nguyên. Phong cách đồ họa nghiêng về bản đồ chiến lược thay vì hiệu ứng hình ảnh hoành tráng, phù hợp với tính chất của dòng game grand strategy. Âm nhạc được thiết kế theo từng thời kỳ lịch sử, tạo không khí cực kỳ ăn nhập.</p>

<h2>Gameplay và cơ chế độc đáo</h2>
<p>Điểm đặc sắc nhất của Victoria 3 là hệ thống kinh tế cực kỳ chi tiết. Mỗi quốc gia có hàng chục loại hàng hóa trong chuỗi cung ứng — bông → vải → quần áo; sắt → thép → đường sắt → tàu hỏa. Bạn phải xây dựng các tòa nhà sản xuất đúng thứ tự, đảm bảo chuỗi cung ứng liền mạch để nền kinh tế phát triển bền vững.</p>
<p>Hệ thống Pops (dân số) là cơ chế độc đáo nhất của Victoria: mỗi tầng lớp xã hội (nông dân, công nhân, tiểu tư sản, quý tộc...) có nhu cầu tiêu dùng, tư tưởng chính trị và mức độ hài lòng riêng. Nếu công nhân quá bất mãn, họ sẽ ủng hộ các phong trào cách mạng; nếu quý tộc mất đặc quyền, họ sẽ cản trở cải cách.</p>

<h2>Tại sao nên trải nghiệm Victoria 3?</h2>
<p>Nếu bạn yêu thích lịch sử và muốn "viết lại lịch sử" theo cách của mình, Victoria 3 là trải nghiệm không thể bỏ qua. Mỗi ván chơi là một câu chuyện hoàn toàn khác nhau — đôi khi bạn xây dựng đế chế công nghiệp hùng mạnh, đôi khi đưa một quốc gia nhỏ bé vươn lên sân khấu thế giới, đôi khi chứng kiến cuộc cách mạng xã hội lật đổ chính quyền do mình điều hành. Độ sâu của game gần như vô hạn và cộng đồng mod rất phong phú, đảm bảo trải nghiệm luôn mới mẻ sau hàng trăm giờ chơi.</p>
<p>Hãy ủng hộ Paradox Development Studio bằng cách mua bản quyền chính thức trên <strong>Steam</strong> nếu bạn thích tựa game này!</p>`,
    install_guide: `<ol>
      <li>Tải file về và giải nén bằng WinRAR hoặc 7-Zip (mật khẩu nằm trong dấu [ ] ở tên file nén)</li>
      <li>Mở thư mục sau khi giải nén</li>
      <li>Chạy <strong>victoria3.exe</strong> để bắt đầu trải nghiệm</li>
      <li><strong>Lưu ý:</strong> Tắt Windows Defender / phần mềm diệt virus tạm thời nếu gặp cảnh báo nhầm</li>
    </ol>`,
    size: "9.5 GB",
    version: "Phiên bản mới nhất",
    year: 2022,
    updated: "20/03/2026",
    developer: "Paradox Development Studio",
    publisher: "Paradox Interactive",
    rating: 4.4,
    downloads: 0,
    emoji: "🏭",
    badges: ["hot", "new"],
    viet: false,
    download_links: [
      { label: "Mirror Link", url: "https://gofile.io/d/jg1uxC", icon: "⬇️" },
    ],
    thumbnail: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/529340/capsule_616x353.jpg",
    screenshots: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/529340/capsule_616x353.jpg",
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/529340/4a1da4d1f072d157c25645ca8459c6573a0d5671/ss_4a1da4d1f072d157c25645ca8459c6573a0d5671.1920x1080.jpg?t=1773335146",
      "https://daominhha.net/wp-content/uploads/2022/10/download-mien-phi-VICTORIA-3-daominhha.net_.jpg",
      "https://daominhha.net/wp-content/uploads/2022/10/tai-full-game-VICTORIA-3-daominhha.jpg",
      "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/36daaad5-13d6-4aeb-b44e-cda172934142/Victoria+3+World.jpg",
    ],
    trailer: "https://www.youtube.com/embed/WOlfY-FsL9I",
    tags: ["Chiến lược", "Mô phỏng", "Lịch sử", "Grand Strategy", "Paradox", "Kinh tế", "Thế kỷ 19"],
    sys_req: {
      min: {
        os: "Windows 10 Home 64-bit",
        cpu: "Intel Core i5-6600K / AMD Ryzen 5 2600X",
        ram: "8 GB",
        gpu: "NVIDIA GeForce GTX 970 / AMD Radeon RX 470 (4GB VRAM)",
        storage: "10 GB",
        directx: "Version 11",
      },
      rec: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
        ram: "16 GB",
        gpu: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5700 (8GB VRAM)",
        storage: "10 GB SSD",
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
    desc_short: "Đánh giá Geo-Political Simulator 2026 — tựa game mô phỏng địa chính trị chân thực nhất, nơi bạn trải nghiệm vai trò lãnh đạo quốc gia với hệ thống kinh tế, ngoại giao và quân sự phức tạp.",
    desc_full: `
<h2>Geo-Political Simulator 2026 — Cầm quyền cả một quốc gia</h2>
<p>Geo-Political Simulator 2026 là tựa game mô phỏng chính trị - địa lý chân thực và phức tạp nhất hiện nay do Eversim phát triển. Trong game, bạn sẽ đảm nhận vai trò nguyên thủ quốc gia — Tổng thống, Thủ tướng hoặc Quốc vương — của bất kỳ quốc gia nào trong số hơn 175 quốc gia trên thế giới. Đây không phải game giải trí nhanh, mà là một trải nghiệm chiến lược sâu sắc cho những ai muốn hiểu cách thế giới thực sự vận hành.</p>

<h2>Cốt truyện — Lịch sử do bạn quyết định</h2>
<p>GPS 2026 không có cốt truyện theo kiểu truyền thống — câu chuyện chính là nhiệm kỳ lãnh đạo của bạn. Game tái hiện thế giới thực tế với dữ liệu kinh tế, dân số, địa lý và quan hệ ngoại giao được cập nhật đến năm 2026. Mọi quyết định đều có hậu quả cụ thể: ký kết hiệp ước thương mại, phát động xung đột quân sự, cải cách hệ thống thuế, đối phó với khủng hoảng khí hậu hay quản lý dư luận trong nước.</p>
<p>Bạn có thể chọn lãnh đạo Việt Nam và thực hiện những cải cách kinh tế táo bạo, thiết lập liên minh mới trong khu vực Đông Nam Á — hoặc chọn Mỹ, Trung Quốc, Nga và định hình lại trật tự thế giới theo ý mình.</p>

<h2>Đồ họa và giao diện</h2>
<p>Phiên bản 2026 có giao diện quản lý được cải tiến đáng kể so với các phiên bản trước. Bản đồ thế giới chi tiết với nhiều lớp thông tin có thể bật/tắt linh hoạt. Mặc dù không phải game tập trung vào đồ họa hình ảnh, GPS 2026 bù đắp bằng chiều sâu dữ liệu và tính minh bạch của các hệ thống — bạn luôn biết tại sao một quyết định lại dẫn đến hậu quả cụ thể.</p>

<h2>Gameplay và các cơ chế nổi bật</h2>
<p>Hệ thống game được chia thành nhiều mảng quản lý chính:</p>
<p><strong>Kinh tế:</strong> Quản lý ngân sách quốc gia, đặt mức thuế, đầu tư vào cơ sở hạ tầng, năng lượng, giáo dục và y tế. Mỗi quyết định chi tiêu ảnh hưởng trực tiếp đến GDP, tỷ lệ thất nghiệp và mức độ hài lòng của người dân.</p>
<p><strong>Ngoại giao:</strong> Đàm phán hiệp ước thương mại, tham gia hoặc rút khỏi các tổ chức quốc tế (LHQ, NATO, ASEAN...), thiết lập liên minh chiến lược và giải quyết tranh chấp lãnh thổ bằng con đường ngoại giao hoặc áp lực kinh tế.</p>
<p><strong>Quân sự:</strong> Xây dựng và hiện đại hóa lực lượng quân sự, điều phối hoạt động gìn giữ hòa bình quốc tế, hoặc triển khai lực lượng trong các cuộc xung đột khu vực.</p>
<p><strong>Chính trị nội địa:</strong> Duy trì tỷ lệ ủng hộ cao trong dân, cân bằng lợi ích giữa các nhóm xã hội, tổ chức bầu cử và đối phó với phe đối lập.</p>

<h2>Phiên bản 2026 — Những tính năng mới</h2>
<p>GPS 2026 bổ sung hàng loạt tính năng mới: AI ngoại giao nâng cao với phản ứng thực tế hơn từ các quốc gia khác; hệ thống biến đổi khí hậu với các sự kiện thiên tai ngày càng thường xuyên; khủng hoảng năng lượng toàn cầu đòi hỏi chiến lược chuyển đổi năng lượng tái tạo; và hàng trăm sự kiện lịch sử có thể xảy ra tùy theo quyết định của người chơi.</p>

<h2>Tại sao nên trải nghiệm GPS 2026?</h2>
<p>Nếu bạn yêu thích địa chính trị, kinh tế quốc tế hoặc đơn giản là tò mò về cách các quốc gia vận hành, GPS 2026 là cơ hội để "thực hành" những kiến thức đó trong môi trường mô phỏng an toàn. Game không có câu trả lời đúng duy nhất — có hàng nghìn cách để dẫn dắt một quốc gia, và mỗi lần chơi là một thử nghiệm chính sách hoàn toàn mới.</p>
<p>Hãy ủng hộ Eversim bằng cách mua bản quyền chính thức trên <strong>Steam</strong> nếu bạn thích tựa game này!</p>`,
    install_guide: `<ol>
      <li>Tải file về và giải nén bằng WinRAR hoặc 7-Zip</li>
      <li>Chạy file <strong>Setup.exe</strong> với quyền Administrator</li>
      <li>Chọn thư mục cài đặt, nhấn <strong>Next</strong> và chờ cài xong</li>
      <li>Sao chép các file hỗ trợ trong thư mục <strong>Support</strong> vào thư mục game</li>
      <li>Chạy <strong>GPS2026.exe</strong> để bắt đầu trải nghiệm</li>
    </ol>`,
    size: "6.5 GB",
    version: "Phiên bản mới nhất",
    year: 2025,
    updated: "18/03/2026",
    developer: "Eversim",
    publisher: "Eversim",
    rating: 4.5,
    downloads: 0,
    emoji: "🌍",
    badges: ["hot", "new"],
    viet: false,
    download_links: [
      { label: "Mirror Link", url: "https://gofile.io/d/7iU3Fi", icon: "⬇️" },
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
  {
    id: 2,
    title: "eFootball PES 2020 Việt Hóa + Bình Luận Tiếng Việt",
    slug: "efootball-pes-2020-viet-hoa",
    genre: "sports",
    genre_label: "Thể Thao / Bóng Đá",
    desc_short: "Đánh giá eFootball PES 2020 bản Việt Hóa — trải nghiệm bóng đá đỉnh cao với bình luận tiếng Việt hoàn chỉnh, đội tuyển Việt Nam cập nhật và lối chơi mượt mà huyền thoại của Konami.",
    desc_full: `
<h2>eFootball PES 2020 — Đỉnh cao bóng đá PC trước khi Konami đổi hướng</h2>
<p>eFootball PES 2020 (Pro Evolution Soccer 2020) được nhiều người coi là tựa game bóng đá hay nhất mà Konami từng tạo ra trước khi chuyển sang mô hình free-to-play với eFootball gây nhiều tranh cãi. Ra mắt năm 2019, PES 2020 vẫn đang được hàng nghìn game thủ Việt Nam chơi đến tận hôm nay — đặc biệt với bản Việt hóa chất lượng cao kèm bình luận tiếng Việt của BLV Phạm Hùng Tiến.</p>

<h2>Cốt truyện và chế độ chơi</h2>
<p>PES 2020 không có "cốt truyện" theo nghĩa truyền thống, nhưng chế độ <strong>Master League</strong> chính là nơi để người chơi viết nên hành trình của riêng mình. Bạn sẽ tiếp quản một câu lạc bộ đang gặp khó khăn, từng bước xây dựng đội hình, ký hợp đồng cầu thủ, thiết lập chiến thuật và dẫn dắt CLB từ giải hạng dưới lên đến đỉnh cao Champions League.</p>

<h2>Đồ họa và âm thanh</h2>
<p>PES 2020 sử dụng engine Fox Engine với chất lượng đồ họa ấn tượng. Khuôn mặt các siêu sao như Messi, Ronaldo, Neymar được quét 3D chi tiết đến từng sợi tóc. Animation di chuyển của cầu thủ cực kỳ tự nhiên — các pha dribble, va chạm cơ thể và phản ứng của thủ môn đều mượt mà hơn nhiều so với đối thủ cùng thời.</p>
<p>Điểm nhấn lớn nhất là <strong>bình luận tiếng Việt</strong> của BLV Phạm Hùng Tiến — với hàng nghìn câu được thu âm chuyên nghiệp, giọng bình luận sôi động đúng cảm xúc trận đấu.</p>

<h2>Gameplay — Vì sao PES 2020 vẫn là tiêu chuẩn vàng?</h2>
<p>Vật lý bóng của PES 2020 đến nay vẫn được đánh giá là chân thực nhất trong lịch sử game bóng đá. Mỗi đường chuyền, mỗi cú sút đều có trọng lượng riêng — không có cảm giác "cứng đơ" hay "trượt băng" như một số game bóng đá khác. AI đồng đội thông minh, biết di chuyển tạo không gian và hỗ trợ đúng lúc. Hệ thống "Magic Moments" — khả năng đặc biệt riêng của từng siêu sao — tái hiện rất chính xác phong cách chơi thực tế của họ.</p>

<h2>Bản Việt Hóa — Trọn vẹn từ menu đến sân cỏ</h2>
<p>Bản Việt hóa này bao gồm: giao diện menu hoàn toàn tiếng Việt, đội tuyển quốc gia Việt Nam với đội hình được cập nhật, và đặc biệt là bản patch bình luận tiếng Việt của BLV Phạm Hùng Tiến. Cộng đồng game thủ Việt Nam đã đầu tư rất nhiều công sức để mang lại trải nghiệm bóng đá hoàn chỉnh nhất bằng tiếng mẹ đẻ.</p>

<h2>Tại sao nên trải nghiệm PES 2020?</h2>
<p>Dù đã ra mắt hơn 5 năm, PES 2020 vẫn là lựa chọn hàng đầu cho những ai yêu bóng đá và muốn trải nghiệm gameplay mượt mà, chiều sâu chiến thuật và cảm giác bóng chân thực. Nếu bạn chưa từng thử PES 2020, đây là cơ hội tuyệt vời. Và nếu bạn muốn ủng hộ Konami, hãy tìm mua bản quyền trên <strong>Steam</strong>!</p>`,
    install_guide: `<ol>
<h3>HƯỚNG DẪN CÀI ĐẶT eFootball PES 2020</h3>
<li>Tải file về và giải nén (mật khẩu nằm trong dấu [ ] ở tên file nén, ví dụ: tên file "[vaultgame]_PES2020.rar" thì mật khẩu là <strong>vaultgame</strong>)</li>
<li>Vào thư mục sau khi giải nén, chạy file <strong>PES2020.exe</strong> để vào game</li>
<li>Điều chỉnh cài đặt đồ họa qua file <strong>Settings.exe</strong></li>
<li>Bắt đầu trải nghiệm</li>

<h3>HƯỚNG DẪN CÀI Việt Hóa + Bình Luận Tiếng Việt</h3>
<li>Tải file Patch Việt Hóa về và giải nén (mật khẩu tương tự file game)</li>
<li>Copy 2 file <code>pes 20 viet hoa.cpk</code> và <code>Pham Hung Tien Official BLTV.cpk</code> vào thư mục <code>[thư mục game]\download</code></li>
<li>Mở thư mục <code>DpFileList_Generator</code>, chạy <strong>DpFileList Generator.exe</strong></li>
<li>Ở dòng CPK Path: chọn đường dẫn tới <code>[thư mục game]\download</code></li>
<li>Ở dòng DpFileList: chọn đường dẫn tới <code>[thư mục game]\download</code> và chọn file <code>DpFileList.bin</code></li>
<li>Chọn DLC v5.00, tích vào 2 file .cpk trong bảng mod, nhấn <strong>Generate DpFileList.bin</strong></li>
<li>Khởi động game và chọn ngôn ngữ <strong>English</strong> để Việt Hóa hiển thị đúng</li>
    </ol>`,
    size: "36.1 GB",
    version: "Phiên bản đầy đủ (Việt Hóa)",
    year: 2019,
    updated: "14/03/2026",
    developer: "Konami",
    publisher: "Konami",
    rating: 4.7,
    downloads: 0,
    emoji: "⚽",
    badges: ["hot", "new"],
    viet: true,
    download_links: [
      { label: "Mirror Link", url: "https://gofile.io/d/4OYOvy", icon: "⬇️" },
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
// BLOG_POSTS
// ============================================================
const BLOG_POSTS = [
  {
    id: 1,
    slug: "vaultgame-ra-mat",
    cat: "news",
    title: "VaultGame ra mắt — Trang review game PC lớn nhất Việt Nam",
    desc: "Chúng tôi chính thức ra mắt VaultGame với kho review game ngày càng mở rộng, ưu tiên Việt hóa và hoàn toàn miễn phí cho cộng đồng game thủ Việt.",
    date: "01/01/2025",
    readTime: "3 phút đọc",
    thumbnail: "",
    gradient: "linear-gradient(135deg,#0077b6,#00b4d8)",
    icon: "📰",
    content: `
      <p>Hôm nay chúng tôi chính thức ra mắt <strong>VaultGame</strong> — trang review và giới thiệu game PC được xây dựng bởi cộng đồng game thủ Việt Nam.</p>

      <h2>VaultGame là gì?</h2>
      <p>VaultGame là nền tảng đánh giá, giới thiệu và hướng dẫn trải nghiệm game PC. Chúng tôi cung cấp thông tin chi tiết về từng tựa game, hướng dẫn cài đặt và cấu hình yêu cầu để người chơi có thể đưa ra quyết định đúng đắn trước khi trải nghiệm.</p>

      <h2>Điểm nổi bật khi ra mắt</h2>
      <ul>
        <li>Đánh giá chi tiết các tựa game chất lượng cao, cập nhật liên tục</li>
        <li>Ưu tiên các game đã được <strong>Việt hóa hoàn chỉnh</strong></li>
        <li>Hướng dẫn cài đặt và cấu hình yêu cầu cho từng game</li>
        <li>Giao diện tối giản, thân thiện, hoạt động tốt trên mọi thiết bị</li>
      </ul>

      <blockquote><p>"Chúng tôi tin rằng mọi game thủ Việt Nam đều xứng đáng được trải nghiệm game tốt nhất bằng tiếng mẹ đẻ."</p></blockquote>

      <h2>Kế hoạch tương lai</h2>
      <p>Chúng tôi sẽ tiếp tục mở rộng kho nội dung, thêm nhiều bài review game Việt hóa, và xây dựng cộng đồng game thủ Việt Nam ngày càng lớn mạnh hơn. Hãy theo dõi VaultGame để không bỏ lỡ các bài review game mới nhé!</p>
    `
  },
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
      <p>Bài viết này sẽ hướng dẫn bạn toàn bộ quy trình cài đặt game PC từ A đến Z.</p>

      <h2>Chuẩn bị trước khi bắt đầu</h2>
      <ul>
        <li><strong>WinRAR hoặc 7-Zip</strong> — để giải nén file .rar/.zip</li>
        <li><strong>DirectX & Visual C++ Redistributable</strong> — thư viện hệ thống cần thiết</li>
        <li><strong>Đủ dung lượng ổ cứng</strong> — kiểm tra dung lượng game trước khi tải</li>
      </ul>

      <h2>Bước 1: Tải game</h2>
      <p>Trên trang chi tiết game, cuộn xuống phần hướng dẫn để xem link tham khảo và nhấn tải file về máy.</p>

      <h2>Bước 2: Giải nén</h2>
      <p>Click chuột phải vào file .rar → <strong>Extract Here</strong>. Nếu file yêu cầu mật khẩu, mật khẩu thường nằm trong tên file.</p>

      <h2>Bước 3: Cài đặt</h2>
      <ol>
        <li>Chạy file <code>Setup.exe</code> với quyền Administrator</li>
        <li>Chọn thư mục cài đặt và nhấn Next/Install</li>
        <li>Sao chép các file hỗ trợ vào thư mục game theo hướng dẫn</li>
        <li>Chạy file <code>.exe</code> chính của game</li>
      </ol>

      <h2>Xử lý lỗi thường gặp</h2>
      <ul>
        <li><strong>Lỗi VCRUNTIME / DLL:</strong> Cài Visual C++ Redistributable All-in-One</li>
        <li><strong>Game không khởi động:</strong> Chạy với quyền Administrator, tắt antivirus tạm thời</li>
        <li><strong>Màn hình đen:</strong> Thử chạy ở chế độ Windowed hoặc cập nhật driver GPU</li>
      </ul>

      <blockquote><p>Nếu vẫn gặp lỗi, hãy báo qua trang <strong>Báo Lỗi</strong> — chúng tôi sẽ hỗ trợ bạn!</p></blockquote>
    `
  },
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
        <li><strong>eFootball PES 2020</strong> — Bình luận tiếng Việt đầy đủ, UI hoàn chỉnh</li>
        <li><strong>Grand Theft Auto V</strong> — Việt hóa toàn bộ subtitles</li>
        <li><strong>The Witcher 3</strong> — Bản dịch chất lượng cao</li>
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
      <p>PES 2020 ra mắt năm 2019 và được nhiều người coi là đỉnh cao của dòng game bóng đá Konami. Năm 2025, bản Việt hóa với bình luận của BLV Phạm Hùng Tiến vẫn đang được hàng nghìn game thủ Việt yêu thích.</p>

      <h2>Gameplay — Vẫn mượt mà sau 5 năm</h2>
      <ul>
        <li>Vật lý bóng chân thực hơn nhiều so với các đối thủ</li>
        <li>AI đồng đội thông minh, biết hỗ trợ hợp lý</li>
        <li>Chế độ Master League sâu sắc, đầy chiều sâu chiến thuật</li>
        <li>Animation mượt mà, không bị lag frame</li>
      </ul>

      <h2>Bình luận tiếng Việt — Điểm cộng lớn</h2>
      <p>BLV Phạm Hùng Tiến đã thu âm hàng nghìn câu bình luận chuyên nghiệp, sôi động và đúng cảm xúc trận đấu.</p>

      <blockquote><p>"Nghe bình luận tiếng Việt mà cứ tưởng đang xem trực tiếp VTV6!" — Người dùng VaultGame</p></blockquote>

      <h2>Điểm số tổng thể</h2>
      <p><strong>Gameplay:</strong> 9.5/10 | <strong>Bình luận VN:</strong> 8.5/10 | <strong>Đồ họa:</strong> 8/10 | <strong>Tổng thể: 4.7/5 ⭐</strong></p>
      <p>Hãy mua bản quyền trên <strong>Steam</strong> để ủng hộ Konami nếu bạn yêu thích tựa game này!</p>
    `
  },
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
      <p>Trong vài năm gần đây, cộng đồng phát triển game indie Việt Nam đã có những bước tiến đáng kể.</p>

      <h2>Xu hướng nổi bật năm 2025</h2>
      <ul>
        <li><strong>RPG lấy bối cảnh lịch sử Việt:</strong> Khai thác thần thoại và lịch sử phong phú</li>
        <li><strong>Pixel Art đậm chất Á Đông:</strong> Phong cách nghệ thuật độc đáo</li>
        <li><strong>Game di động lên PC:</strong> Nhiều tựa game mobile thành công ra bản PC</li>
        <li><strong>Sử dụng Unreal Engine 5:</strong> Chất lượng đồ họa ngày càng cao</li>
      </ul>

      <h2>Thách thức và cơ hội</h2>
      <p>Thị trường game Việt Nam vẫn còn nhiều thách thức: nguồn vốn hạn chế, thiếu nhân lực chuyên môn cao, và cạnh tranh khốc liệt từ game nước ngoài. Tuy nhiên với sự phát triển của Unity và Unreal Engine, tương lai rất hứa hẹn.</p>

      <blockquote><p>Hãy ủng hộ game indie Việt bằng cách mua bản quyền chính thức — đó là cách tốt nhất để thúc đẩy nền công nghiệp game nội địa!</p></blockquote>
    `
  },
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
    <p><strong>Geo-Political Simulator 2026 Edition</strong> là một trong những tựa game mô phỏng chính trị sâu sắc nhất hiện nay.</p>

    <h2>Gameplay: Điều hành cả một quốc gia</h2>
    <ul>
      <li>Ban hành luật và chính sách mới</li>
      <li>Quản lý ngân sách và thuế</li>
      <li>Đối phó với khủng hoảng kinh tế, xã hội</li>
      <li>Thiết lập quan hệ ngoại giao với các quốc gia khác</li>
    </ul>

    <h2>Độ chân thực cực cao</h2>
    <p>Game sử dụng dữ liệu thực tế về các quốc gia — dân số, GDP, quan hệ quốc tế. Mỗi quyết định đều có hậu quả rõ ràng và logic.</p>

    <h2>Kết luận</h2>
    <p><strong>GPS 2026</strong> là trải nghiệm độc đáo dành cho những ai yêu thích chiến lược sâu và địa chính trị. Hãy ủng hộ Eversim bằng cách mua bản quyền trên <strong>Steam</strong>!</p>
  `
  },
 {
    id: 7,
    slug: "vibe-coding-la-gi-ky-nguyen-lap-trinh-game-moi-2026",
    cat: "news",
    title: "Vibe-Coding: Cú hích chấn động ngành Game và kỷ nguyên sáng tạo mới 2026",
    desc: "Tìm hiểu về Vibe-Coding - xu hướng công nghệ đang làm thay đổi hoàn toàn cách các Studio nhỏ và cá nhân tạo ra những siêu phẩm game PC.",
    date: "25/03/2026",
    readTime: "10 phút đọc",
    thumbnail: "https://i.ibb.co/wFMMYFkH/Gemini-Generated-Image-69aq0l69aq0l69aq.png",
    gradient: "linear-gradient(135deg,#6d28d9,#4f46e5)",
    icon: "🚀",
    content: `
    <p>Trong những ngày gần đây của tháng 3/2026, cụm từ <strong>"Vibe-Coding"</strong> đang trở thành tâm điểm bàn tán trên khắp các diễn đàn công nghệ và gaming toàn cầu. Đây không chỉ là một thuật ngữ nhất thời, mà là một cuộc cách mạng thực sự trong cách chúng ta xây dựng thế giới ảo.</p>

    <h2>Vibe-Coding là gì?</h2>
    <p>Khác với lập trình truyền thống (Hard-coding) đòi hỏi bạn phải gõ từng dòng lệnh phức tạp, <strong>Vibe-Coding</strong> cho phép nhà phát triển sử dụng ngôn ngữ tự nhiên và "cảm xúc" (vibe) để ra lệnh cho AI. Bạn chỉ cần mô tả không gian, cơ chế vật lý và không khí của trò chơi, AI sẽ tự động chuyển hóa những ý tưởng đó thành mã nguồn thực thi trên các engine như Unity 6 hay Unreal Engine 5.5.</p>

    <h2>Tại sao ngành game PC lại sục sôi vì xu hướng này?</h2>
    <ul>
      <li><strong>Tốc độ phát triển thần tốc:</strong> Thay vì mất hàng tháng để xây dựng hệ thống thời tiết hay cơ chế lái xe, Vibe-coding giúp rút ngắn thời gian xuống còn vài giờ.</li>
      <li><strong>Xóa bỏ rào cản kỹ thuật:</strong> Những người yêu game nhưng không rành về code giờ đây có thể tự tay tạo ra những bản "Mod" hoặc game độc lập (Indie) mang đậm dấu ấn cá nhân.</li>
      <li><strong>Tối ưu hóa trải nghiệm:</strong> AI có khả năng tự động rà soát lỗi (debug) và tối ưu hiệu suất dựa trên mô tả về cấu hình phần cứng mục tiêu.</li>
    </ul>

    <h2>Tác động đến cộng đồng Gaming năm 2026</h2>
    <p>Với sự hỗ trợ của các mô hình ngôn ngữ lớn như Gemini Pro 2.0 hay GPT-5, các tựa game mô phỏng như <em>Euro Truck Simulator</em> hay <em>GPS 2026</em> đang được cộng đồng mở rộng thêm vô số nội dung mới thông qua Vibe-coding. Người chơi không còn phải đợi nhà phát hành ra DLC, họ có thể tự "Vibe" ra những bản mở rộng chất lượng cao ngay trên PC của mình.</p>

    <h2>Tương lai của các Studio nhỏ</h2>
    <p>Năm 2026 được dự báo sẽ là năm bùng nổ của các Studio "một thành viên". Nhờ Vibe-coding, một cá nhân có thể đảm đương khối lượng công việc của một đội ngũ 10 người trước đây. Điều này hứa hẹn sẽ mang đến những tựa game đầy sáng tạo, phá cách và thoát khỏi những khuôn mẫu cũ kỹ của các ông lớn AAA.</p>

    <h2>Kết luận</h2>
    <p>Vibe-Coding không thay thế con người, nó giải phóng sự sáng tạo khỏi những ràng buộc của cú pháp lập trình. Tại <strong>VaultGame</strong>, chúng tôi tin rằng đây là thời điểm vàng để các bạn bắt đầu tìm hiểu và tự tạo ra thế giới game của riêng mình. Hãy chuẩn bị sẵn sàng, vì tương lai của ngành game đang nằm trong tay chính những ý tưởng của bạn!</p>
    `
  },
 {
    id: 8,
    slug: "amd-ryzen-9-9950x3d2-quai-vat-cache-208mb-do-bo-game-pc",
    cat: "news",
    title: "AMD Ryzen 9 9950X3D2: 'Quái vật' Cache 208MB chính thức lộ diện, định nghĩa lại sức mạnh Game PC",
    desc: "Khám phá chi tiết về mẫu CPU Dual-Cache đầu tiên trên thế giới của AMD, hứa hẹn hiệu năng gaming hủy diệt vừa được xác nhận ra mắt trong tuần này.",
    date: "28/03/2026",
    readTime: "8 phút đọc",
    thumbnail: "https://i.ibb.co/mFDMWzPq/download-2.png",
    gradient: "linear-gradient(135deg,#ed1c24,#911014)",
    icon: "🔥",
    content: `
    <p>Giai đoạn cuối tháng 3/2026 đang chứng kiến một trong những cơn địa chấn lớn nhất năm của thị trường phần cứng máy tính. Không còn là tin đồn, AMD đã chính thức xác nhận sự tồn tại và ngày ra mắt cận kề của mẫu CPU được khao khát nhất: <strong>Ryzen 9 9950X3D2</strong>.</p>

    <p>Đây không chỉ là một bản cập nhật thông thường, mà là lời khẳng định vị thế độc tôn của AMD trong phân khúc CPU gaming cao cấp, khiến đối thủ Intel phải "toát mồ hôi" và cộng đồng game thủ PC sục sôi.</p>

    <h2>Cú sốc "Dual-Cache": Khi 104MB vẫn là chưa đủ</h2>
    <p>Điểm mấu chốt tạo nên sức mạnh "hủy diệt" của Ryzen 9 9950X3D2 chính là công nghệ 3D V-Cache thế hệ mới. Khác với các thế hệ trước (chỉ trang bị Cache 3D trên một cụm nhân CCD), phiên bản "D2" này sở hữu 3D V-Cache trên <strong>cả hai cụm nhân 8 lõi</strong>.</p>

    <ul>
      <li><strong>Tổng dung lượng Cache L3:</strong> Lên tới con số không tưởng <strong>192MB</strong> (96MB mỗi CCD).</li>
      <li><strong>Tổng Cache (L2+L3):</strong> Đạt mức kỷ lục <strong>208MB</strong> cho một CPU desktop phổ thông.</li>
    </ul>

    <p>Kiến trúc này giải quyết triệt để vấn đề độ trễ khi dữ liệu phải di chuyển giữa các CCD, biến 9950X3D2 thành một "kho chứa dữ liệu siêu tốc" ngay trên con chip.</p>

    <h2>Kẻ hủy diệt FPS trong game</h2>
    <p>Tại sao bộ nhớ Cache lại quan trọng đến vậy đối với game thủ? Hầu hết các tựa game hiện đại, đặc biệt là game thế giới mở (Open-world) hay game chiến thuật phức tạp, đều đòi hỏi truy xuất dữ liệu mô phỏng vật lý, AI và dựng hình liên tục. </p>

    <p>Với 208MB Cache, dữ liệu game gần như luôn "túc trực" sẵn cho nhân CPU xử lý, loại bỏ tình trạng thắt cổ chai dữ liệu. Theo dữ liệu rò rỉ, 9950X3D2 có thể tăng <strong>25-40% FPS</strong> so với phiên bản non-3D trong các tựa game nặng như <em>Cyberpunk 2077: Phantom Liberty (bản cập nhật 2026)</em> hay các game giả lập bay phức tạp.</p>

    <h2>Cơn ác mộng của Intel: Core Ultra 9 Plus bị hủy bỏ?</h2>
    <p>Động thái này của AMD diễn ra ngay sau khi có các thông tin không chính thức về việc Intel có thể hủy bỏ dòng Core Ultra 9 "Arrow Lake" phiên bản Plus cao cấp nhất để tập trung vào phân khúc phổ thông hơn. </p>

    <p>Sự xuất hiện của 9950X3D2 như một đòn giáng mạnh, tạo ra khoảng cách quá lớn về hiệu năng gaming mà các giải pháp kiến trúc hiện tại của Intel khó lòng khỏa lấp trong ngắn hạn.</p>

    <h2>Tác động đến thị trường PC và kịch bản tăng giá</h2>
    <p>Tuy nhiên, niềm vui của game thủ có thể không trọn vẹn. Ngay sau thông báo của AMD, các nhà sản xuất bộ nhớ (RAM) và bo mạch chủ lớn như MSI, ASUS đã đưa ra cảnh báo về việc <strong>giá linh kiện có thể tăng tới 30%</strong> trong quý tới.</p>

    <p>Nguyên nhân do tình trạng khan hiếm nguyên liệu sản xuất chip nhớ và nhu cầu quá cao từ các hệ thống AI. Việc sở hữu một combo Ryzen 9 9950X3D2 cùng RAM DDR6 cao cấp và bo mạch chủ X870E dự kiến sẽ ngốn một khoản ngân sách không nhỏ.</p>

    <h2>Kết luận</h2>
    <p>AMD Ryzen 9 9950X3D2 không chỉ là một con chip, nó là biểu tượng của kỷ nguyên sức mạnh phần cứng mới. Nó xóa nhòa ranh giới giữa máy trạm làm việc và cỗ máy chơi game tột đỉnh.</p>

    <p>Nếu bạn là một game thủ khắt khe nhất về FPS, hoặc một nhà sáng tạo nội dung cần sức mạnh đa nhân kết hợp độ trễ thấp, hãy bắt đầu "gom lúa" ngay từ bây giờ. Quái vật thực sự sắp được thả xích!</p>
    `
  },
 {
    id: 9,
    slug: "nghich-ly-phan-cung-2026-va-lan-song-game-doc-quyen-do-bo-pc",
    cat: "news",
    title: "Nghịch lý phần cứng 2026: CPU 'chạm trần' sức mạnh và làn sóng siêu phẩm đổ bộ PC",
    desc: "Tin nóng 01/04: Khi phần cứng máy tính bắt đầu bão hòa, các ông lớn như Nintendo và Sony đang có những bước đi không tưởng hướng về cộng đồng game thủ PC.",
    date: "01/04/2026",
    readTime: "7 phút đọc",
    thumbnail: "https://i.ibb.co/ZsLc8Gp/Gemini-Generated-Image-g9kr0ug9kr0ug9kr.png",
    gradient: "linear-gradient(135deg,#00dbde,#fc00ff)",
    icon: "⚡",
    content: `
    <p>Chào mừng các bạn đến với bản tin đặc biệt ngày 01/04/2026. Hôm nay, làng công nghệ không chỉ có những cú lừa vui nhộn mà còn chứng kiến những thay đổi mang tính bước ngoặt về chiến lược của các "ông lớn" trong ngành công nghiệp tỷ đô này.</p>

    <h2>Sự thật về việc phần cứng đang "chạm trần"</h2>
    <p>Theo các chuyên gia tại Tech4Gamers, chúng ta đang bước vào kỷ nguyên mà sức mạnh phần cứng bắt đầu bão hòa (Plateauing). Điều này có nghĩa là thay vì chạy đua nhồi nhét bóng bán dẫn, các nhà sản xuất như NVIDIA và AMD đang chuyển hướng sang tối ưu hóa AI. </p>
    <p>Tin đồn về dòng <strong>RTX 50-series "Flagship Limited"</strong> ra mắt vào quý 3 tới đang khiến giới mộ điệu đứng ngồi không yên. Tuy nhiên, tâm điểm hôm nay lại nằm ở phần mềm.</p>

    <h2>Nintendo Switch 2 và 'cú bắt tay' bất ngờ với PC?</h2>
    <p>Một trong những tin tức gây chấn động nhất sáng nay là thông tin về việc Nintendo có thể sẽ nới lỏng các rào cản độc quyền. Với việc siêu phẩm <strong>Pokémon Winds and Waves</strong> vừa được công bố cho Switch 2, nhiều nguồn tin rò rỉ cho biết một phiên bản "Launcher" đặc biệt của Nintendo đang được thử nghiệm trên nền tảng Windows để tận dụng sức mạnh của các dòng CPU Ryzen 9 thế hệ mới.</p>

    <h2>Những siêu phẩm không thể bỏ lỡ trong tháng 4/2026</h2>
    <p>Nếu bạn đang tìm kiếm thứ gì đó để "vắt kiệt" sức mạnh dàn máy của mình, hãy chuẩn bị cho danh sách đổ bộ trong vài ngày tới:</p>
    <ul>
      <li><strong>Pragmata (24/04):</strong> Siêu phẩm sci-fi từ Capcom cuối cùng cũng ấn định ngày ra mắt, hứa hẹn một cuộc cách mạng về đồ họa Ray-Tracing 2.0.</li>
      <li><strong>Diablo IV: Lord of Hatred (28/04):</strong> Bản mở rộng lớn nhất của Blizzard sẽ chính thức khai hỏa, mở rộng bản đồ Sanctuary lên gấp rưỡi.</li>
      <li><strong>Starfield (PS5 Version - 07/04):</strong> Một minh chứng cho việc thế giới game không còn ranh giới, khi các tựa game từng là độc quyền Xbox nay đã có mặt trên mọi nền tảng.</li>
    </ul>

    <h2>Lời khuyên cho game thủ trong ngày "Cá tháng Tư"</h2>
    <p>Dù có rất nhiều tin nóng, nhưng hãy tỉnh táo! Trong ngày 1/4, ranh giới giữa một bản cập nhật thực sự và một trò đùa từ các nhà phát triển là rất mong manh. Tuy nhiên, có một sự thật không thể chối cãi: <strong>Tháng 4/2026 sẽ là tháng bùng nổ nhất của làng Game PC từ đầu năm đến nay.</strong></p>

    <p>Hãy theo dõi chúng tôi để cập nhật những cấu hình PC tối ưu nhất cho loạt siêu phẩm sắp tới nhé!</p>
    `
  },
];
