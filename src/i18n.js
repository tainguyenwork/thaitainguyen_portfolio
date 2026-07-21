const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      expertise: "Expertise",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      subtitle: "Technical Designer | Garment Technology Graduate",
      desc: "Transforming fashion concepts into production-ready garments through Technical Design, Pattern Development, and 3D Garment Visualization.",
      viewProjects: "View Projects",
      downloadResume: "Download Resume"
    },
    about: {
      meta: "01 / Profile",
      title: "About Me",
      p1: "I am a <strong>Technical Designer</strong> and <strong>Garment Technology Graduate</strong> passionate about transforming creative concepts into production-ready garments. By combining technical pattern development with modern 3D garment simulation, I create accurate digital prototypes and detailed technical documentation that support efficient manufacturing and consistent garment quality.",
      p2: "My expertise includes pattern making, Tech Pack development, pattern grading, and 3D garment visualization using industry-standard software. I strive to improve product development workflows, optimize material utilization, and ensure designs transition smoothly from concept to production."
    },
    expertise: {
      meta: "02 / Skills & Core Expertise",
      title: "Areas of Expertise",
      techDesign: "Technical Design",
      techPack: "Tech Pack Development",
      bom: "Bill of Materials (BOM)",
      measurement: "Measurement Specification",
      patternDev: "Pattern Development",
      patternMaking: "Pattern Making",
      sizeGrading: "Size Grading & Fit",
      garmentDev: "3D Garment Dev",
      virtualFitting: "CLO3D Virtual Fitting",
      materialSim: "Material Simulation",
      digitalRender: "Digital Rendering",
      software: "Software Suite"
    },
    projects: {
      meta: "03 / Selected Works",
      title: "Featured Projects",
      desc: "Showcasing digital-first craftsmanship in technical construction, pattern grading, and 3D simulation.",
      viewProject: "View Project",
      p1_title: "Evening Gown Design",
      p1_desc: "Digital pattern construction and virtual fit assessment of a formal evening gown. Optimizing drape physics and seam tension in 3D.",
      p2_title: "Jacket Design",
      p2_desc: "Technical design development for a protective outerwear jacket. Specifying layered lining, pocket coordinates, and BOM sheet.",
      p3_title: "Summer T-Shirt",
      p3_desc: "Casual summer t-shirt fit testing and automated size grading. Perfecting neckband height and drop-shoulder dimensions for bulk production."
    },
    experience: {
      meta: "04 / Journey",
      title: "Experience & Education",
      date1: "2025 - Present",
      jobTitle: "Technical Design Intern",
      company: "Apparel Production & Dev Co.",
      jobDesc: "Assisting in pattern construction and grading. Translating design flats into high-fidelity 3D models using CLO3D, generating fit logs, and building comprehensive Tech Packs (POM, BOM) for production runs.",
      date2: "2022 - 2026",
      eduTitle: "Garment Technology",
      university: "Faculty of Mechanical Engineering — HCMUT (VNU-HCM)",
      eduDesc: "Graduation Thesis: Developed a multifunctional womenswear collection inspired by Đông Sơn motifs, integrating Technical Design, Pattern Development, and CLO3D simulation."
    },
    contact: {
      meta: "05 / Collaboration",
      title: "Let's Build Better Garments Together.",
      btn: "Contact Me",
      connect: "Connect elsewhere"
    },
    footer: {
      rights: "© 2026 TTN. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    projectPage: {
      back: "Back to Work",
      related: "Explore More Work",
      next: "Next Project",
      prev: "Previous Project"
    },
    pDetail: {
      overview: "Project Overview",
      objectives: "Core Objectives",
      workflow: "Workflow & Process",
      gallery: "Design Gallery",
      techDetails: "Technical Details",
      challenges: "Challenges & Solutions",
      outcome: "Final Outcome",
      lessons: "Lessons Learned",
      role: "Role",
      duration: "Duration",
      category: "Category",
      software: "Software"
    },
    project1: {
      title: "Evening Gown Design",
      summary: "A comprehensive exploration of high-end evening wear, focusing on complex pattern development, intricate draping, and flawless 3D simulation to ensure perfect fit and elegant movement.",
      overviewDesc: "The objective of this project was to engineer a complex evening gown that balances avant-garde aesthetics with structural feasibility. The design required meticulous pattern grading and advanced 3D simulation to evaluate the drape of heavy silk and tulle without physical prototyping. Our goal was to create a production-ready tech pack that eliminates ambiguity during the manufacturing phase.",
      obj1: "Pattern Development",
      obj2: "Fit Optimization",
      obj3: "Tech Pack Creation",
      obj4: "Production Readiness",
      wf1_title: "1. Research & Concept",
      wf1_desc: "Analyzing fabric properties and structural requirements for evening wear silhouettes.",
      wf2_title: "2. Pattern Drafting",
      wf2_desc: "Creating initial block patterns in Gerber Accumark with precision dart manipulations.",
      wf3_title: "3. CLO3D Simulation",
      wf3_desc: "Virtual sewing and simulation to test physical fabric drape without material waste.",
      wf4_title: "4. Tech Pack Creation",
      wf4_desc: "Generating comprehensive POMs, BOMs, and construction diagrams for factory handoff.",
      challengeTitle: "Challenge: Fabric Tension on Bias",
      challengeDesc: "The silk charmeuse stretched unpredictably along the bias during 3D simulation, causing the hemline to drop unevenly and creating unwanted tension across the bust darts.",
      solutionTitle: "Solution: Pattern Restructuring",
      solutionDesc: "Adjusted the fabric physical properties in CLO3D to accurately reflect silk's shear resistance. Added invisible stay-tape to the digital pattern's neckline and armholes to stabilize the bias seams before rendering the final fit.",
      out1: "Production-ready Pattern DXF",
      out2: "Comprehensive Tech Pack",
      out3: "Zero-Waste Digital Prototyping",
      out4: "Flawless 3D Fit Verification",
      lessonsDesc: "This project reinforced the importance of understanding physical fabric mechanics before translating them into digital environments. Successfully simulating bias-cut garments required deep adjustments to the default physics properties in CLO3D, emphasizing that digital tools are only as effective as the technical designer's understanding of real-world materials."
    },
    project2: {
      title: "Jacket Design",
      summary: "A high-performance technical outerwear design project focused on modular utility, complex hardware integration, and ergonomic fit for active urban environments.",
      overviewDesc: "The goal of this project was to engineer a futuristic, modular streetwear jacket that offers high mobility while integrating custom utility attachments. The structural challenge lay in balancing a heavy, protective silhouette with lightweight material properties and ensuring that real-world seam lines would perform flawlessly under active tension.",
      obj1: "Ergonomic Drafting",
      obj2: "Hardware Integration",
      obj3: "BOM & Trim Dev",
      obj4: "Production Scaling",
      wf1_title: "1. Reference & Hardware Sourcing",
      wf1_desc: "Studying military gear, technical fabrics, and mapping attachment points for buckles and zippers.",
      wf2_title: "2. Pattern Block Construction",
      wf2_desc: "Developing complex raglan sleeves and ergonomic knee articulations to support range of motion.",
      wf3_title: "3. 3D Assembly & Stress Testing",
      wf3_desc: "Simulating the garment in CLO3D to verify tension maps and eliminate physical friction zones.",
      wf4_title: "4. Documentation & Trim Specs",
      wf4_desc: "Finalizing the Bill of Materials (BOM), stitching details, and hardware placement for factory hand-off.",
      challengeTitle: "Challenge: Sleeve Articulation Binding",
      challengeDesc: "Initial 3D simulations revealed excessive strain maps around the elbow joint when the avatar was posed in an active stance, indicating the stiff 3-layer fabric would restrict wearer mobility.",
      solutionTitle: "Solution: Dart Re-engineering",
      solutionDesc: "Redrafted the two-piece sleeve by introducing structural darts at the inner elbow and adding a 5% ease allowance to the outer curve. Re-simulation confirmed a 40% reduction in fabric tension during movement.",
      out1: "Factory-ready BOM & Trim List",
      out2: "Ergonomic Pattern Layout",
      out3: "Zero-Waste Virtual Sampling",
      out4: "Verified Water-tight Construction",
      lessonsDesc: "Developing technical outerwear requires a deep synergy between pattern drafting and trim specification. This project demonstrated that accurately modeling hardware weights and seam-tape rigidity in 3D is critical; failing to account for these elements digitally can result in unexpected stiffness in the physical garment."
    },
    project3: {
      title: "Summer T-Shirt",
      summary: "A comprehensive study on structural color-blocking and activewear paneling, engineered for maximum breathability and athletic performance in warm climates.",
      overviewDesc: "The objective of this project was to explore advanced retro-inspired color-blocking techniques for a summer activewear collection. By mapping contrasting seams along the body's natural biomechanical lines, the design aims to minimize friction points while achieving a bold, structural aesthetic. The challenge was ensuring that lightweight, stretchy knits maintain their shape without puckering at complex intersecting seams.",
      obj1: "Structural Paneling",
      obj2: "Stretch & Recovery",
      obj3: "Seam Minimization",
      obj4: "Tech Pack Delivery",
      wf1_title: "1. Reference & Line Mapping",
      wf1_desc: "Studying vintage 80s sportswear and sketching biomechanical lines directly onto a 3D avatar.",
      wf2_title: "2. Pattern Slashing & Spreading",
      wf2_desc: "Dividing a basic knit block into multiple color panels while maintaining overall garment measurements.",
      wf3_title: "3. Virtual Simulation",
      wf3_desc: "Applying physical properties of cotton-spandex jersey in CLO3D to test seam puckering and stretch limitations.",
      wf4_title: "4. Grading & Factory Specs",
      wf4_desc: "Creating precise graded rules for intersecting panels and detailing flatlock stitching requirements.",
      challengeTitle: "Challenge: Seam Puckering",
      challengeDesc: "Combining multiple knit panels introduced a high risk of seam puckering and tension warping along curved joints, specifically around the shoulder and chest intersections during movement.",
      solutionTitle: "Solution: Tension Balancing",
      solutionDesc: "Adjusted pattern notch placements to ensure even fabric distribution. Specified differential feed settings for the overlock machines in the Tech Pack and simulated the relaxed state in CLO3D to verify a smooth drape.",
      out1: "Fully Graded Colorblock Templates",
      out2: "Accurate 3D Fit Validations",
      out3: "Complete Manufacturing Tech Pack",
      out4: "CMYK/RGB Color Fastness Specs",
      lessonsDesc: "Designing complex knits requires a profound understanding of stretch directionality. This case study highlighted the necessity of specifying differential machine feeds and tension settings directly in the Tech Pack, proving that successful design is inseparable from manufacturing knowledge."
    }
  },
  vn: {
    nav: {
      home: "Trang Chủ",
      about: "Giới Thiệu",
      expertise: "Chuyên Môn",
      projects: "Dự Án",
      experience: "Kinh Nghiệm",
      contact: "Liên Hệ"
    },
    hero: {
      subtitle: "Nhà Thiết Kế Kỹ Thuật | Cử Nhân Công Nghệ May",
      desc: "Biến ý tưởng thời trang thành sản phẩm may mặc sẵn sàng đưa vào sản xuất thông qua Thiết Kế Kỹ Thuật, Phát Triển Rập và Mô Phỏng 3D.",
      viewProjects: "Xem Dự Án",
      downloadResume: "Tải Hồ Sơ"
    },
    about: {
      meta: "01 / Hồ Sơ",
      title: "Về Tôi",
      p1: "Tôi là một <strong>Nhà Thiết Kế Kỹ Thuật</strong> và <strong>Cử Nhân Công Nghệ May</strong>, đam mê việc hiện thực hóa các ý tưởng sáng tạo thành trang phục có thể đưa vào sản xuất. Kết hợp giữa kỹ thuật phát triển rập và mô phỏng 3D hiện đại, tôi tạo ra các nguyên mẫu kỹ thuật số chính xác và tài liệu kỹ thuật chi tiết giúp tối ưu hiệu suất sản xuất và đảm bảo chất lượng đồng đều.",
      p2: "Chuyên môn của tôi bao gồm thiết kế rập, phát triển Tech Pack, nhảy size và mô phỏng trang phục 3D sử dụng phần mềm chuẩn công nghiệp. Tôi luôn hướng đến việc cải thiện quy trình phát triển sản phẩm, tối ưu nguyên phụ liệu và đảm bảo thiết kế được chuyển giao suôn sẻ từ ý tưởng đến thành phẩm."
    },
    expertise: {
      meta: "02 / Kỹ Năng & Chuyên Môn Cốt Lõi",
      title: "Lĩnh Vực Chuyên Môn",
      techDesign: "Thiết Kế Kỹ Thuật",
      techPack: "Phát Triển Tech Pack",
      bom: "Bảng Định Mức (BOM)",
      measurement: "Bảng Thông Số Kích Thước",
      patternDev: "Phát Triển Rập",
      patternMaking: "Thiết Kế Rập",
      sizeGrading: "Nhảy Size & Phom Dáng",
      garmentDev: "Mô Phỏng 3D",
      virtualFitting: "Khớp Phom Ảo CLO3D",
      materialSim: "Mô Phỏng Chất Liệu",
      digitalRender: "Kết Xuất Số (Render)",
      software: "Phần Mềm Ứng Dụng"
    },
    projects: {
      meta: "03 / Tác Phẩm Tiêu Biểu",
      title: "Dự Án Nổi Bật",
      desc: "Trình diễn các kỹ thuật cắt may, nhảy size và mô phỏng 3D dưới góc độ kỹ thuật số.",
      viewProject: "Xem Dự Án",
      p1_title: "Thiết Kế Đầm Dạ Hội",
      p1_desc: "Thiết kế rập kỹ thuật số và đánh giá phom dáng ảo cho đầm dạ hội. Tối ưu độ rủ và lực căng đường may trên không gian 3D.",
      p2_title: "Thiết Kế Áo Jacket",
      p2_desc: "Phát triển thiết kế kỹ thuật cho áo khoác ngoài. Chi tiết hóa lớp lót, toạ độ túi và bảng định mức BOM.",
      p3_title: "Áo Thun Mùa Hè",
      p3_desc: "Đánh giá phom dáng và nhảy size tự động cho áo thun mùa hè. Hoàn thiện độ cao viền cổ và kích thước hạ vai cho sản xuất hàng loạt."
    },
    experience: {
      meta: "04 / Hành Trình",
      title: "Kinh Nghiệm & Học Vấn",
      date1: "2025 - Hiện Tại",
      jobTitle: "Thực Tập Sinh Thiết Kế Kỹ Thuật",
      company: "Công Ty Phát Triển & Sản Xuất May Mặc",
      jobDesc: "Hỗ trợ thiết kế và nhảy size rập. Chuyển đổi bản vẽ phác thảo thành mô hình 3D chân thực bằng CLO3D, tạo nhật ký phom dáng và xây dựng Tech Pack hoàn chỉnh (POM, BOM) phục vụ sản xuất.",
      date2: "2022 - 2026",
      eduTitle: "Công Nghệ Dệt May",
      university: "Khoa Cơ Khí - Trường Đại học Bách khoa - ĐHQG-HCM",
      eduDesc: "Đồ án tốt nghiệp: Phát triển bộ sưu tập thời trang nữ đa năng lấy cảm hứng từ hoa văn Đông Sơn, kết hợp Thiết Kế Kỹ Thuật, Phát Triển Rập và mô phỏng CLO3D."
    },
    contact: {
      meta: "05 / Hợp Tác",
      title: "Cùng Nhau Tạo Nên Những Trang Phục Hoàn Hảo.",
      btn: "Liên Hệ Với Tôi",
      connect: "Kết nối qua nền tảng khác"
    },
    footer: {
      rights: "© 2026 TTN. Mọi quyền được bảo lưu.",
      privacy: "Chính Sách Bảo Mật",
      terms: "Điều Khoản Dịch Vụ"
    },
    projectPage: {
      back: "Quay Lại",
      related: "Dự Án Khác",
      next: "Dự Án Tiếp Theo",
      prev: "Dự Án Trước"
    },
    pDetail: {
      overview: "Tổng Quan Dự Án",
      objectives: "Mục Tiêu Cốt Lõi",
      workflow: "Quy Trình Thực Hiện",
      gallery: "Thư Viện Thiết Kế",
      techDetails: "Thông Số Kỹ Thuật",
      challenges: "Thách Thức & Giải Pháp",
      outcome: "Kết Quả Đạt Được",
      lessons: "Bài Học Rút Ra",
      role: "Vai Trò",
      duration: "Thời Gian",
      category: "Phân Loại",
      software: "Phần Mềm"
    },
    project1: {
      title: "Thiết Kế Đầm Dạ Hội",
      summary: "Nghiên cứu toàn diện về trang phục dạ hội cao cấp, tập trung vào phát triển rập phức tạp, dựng phom rủ tinh tế và mô phỏng 3D chuẩn xác nhằm đảm bảo sự vừa vặn và chuyển động thanh lịch.",
      overviewDesc: "Mục tiêu của dự án là thiết kế một chiếc đầm dạ hội phức tạp dung hòa giữa tính thẩm mỹ ấn tượng và tính khả thi về mặt cấu trúc. Thiết kế đòi hỏi phải nhảy size rập tỉ mỉ và mô phỏng 3D nâng cao để đánh giá độ rủ của lụa nặng và lưới tulle mà không cần may mẫu thử vật lý. Mục tiêu là tạo bộ Tech Pack hoàn chỉnh sẵn sàng cho sản xuất hàng loạt.",
      obj1: "Phát Triển Rập",
      obj2: "Tối Ưu Phom Dáng",
      obj3: "Xây Dựng Tech Pack",
      obj4: "Sẵn Sàng Sản Xuất",
      wf1_title: "1. Nghiên Cứu & Ý Tưởng",
      wf1_desc: "Phân tích đặc tính vải và yêu cầu cấu trúc cho phom dáng trang phục dạ hội.",
      wf2_title: "2. Thiết Kế Rập Mẫu",
      wf2_desc: "Tạo các rập cơ bản trên phần mềm Gerber Accumark với kỹ thuật xử lý ly chính xác.",
      wf3_title: "3. Mô Phỏng CLO3D",
      wf3_desc: "May ảo và mô phỏng để kiểm tra độ rủ thực tế của vải mà không lãng phí nguyên liệu.",
      wf4_title: "4. Lập Tech Pack",
      wf4_desc: "Tạo bảng thông số POM, định mức BOM và bản vẽ cấu trúc hoàn chỉnh để bàn giao xưởng.",
      challengeTitle: "Thách Thức: Lực Căng Vải Xéo (Bias)",
      challengeDesc: "Vải lụa Charmeuse bị dãn không đều theo đường cắt xéo khi mô phỏng 3D, khiến gấu đầm bị lệch và tạo lực căng không mong muốn ở vùng ngực.",
      solutionTitle: "Giải Pháp: Tái Cấu Trúc Rập",
      solutionDesc: "Điều chỉnh đặc tính vật lý của vải trong CLO3D để phản ánh chính xác độ kháng trượt của lụa. Thêm băng keo định hình ẩn vào vòng cổ và vòng nách rập số để ổn định đường may xéo.",
      out1: "File Rập DXF Sẵn Sàng Sản Xuất",
      out2: "Bộ Tech Pack Chi Tiết Hoàn Chỉnh",
      out3: "Mẫu Thử Kỹ Thuật Số Không Lãng Phí Vải",
      out4: "Kiểm Tra Độ Vừa Vặn 3D Hoàn Hảo",
      lessonsDesc: "Dự án củng cố tầm quan trọng của việc hiểu rõ cơ lý tính của vải trước khi đưa vào môi trường kỹ thuật số. Việc mô phỏng thành công trang phục cắt xéo đòi hỏi sự điều chỉnh sâu các thuộc tính vật lý trong CLO3D."
    },
    project2: {
      title: "Thiết Kế Áo Jacket",
      summary: "Dự án thiết kế áo khoác kỹ thuật cao cấp tập trung vào tính mô-đun đa năng, tích hợp phụ liệu kim loại phức tạp và phom dáng chuẩn tối ưu vận động.",
      overviewDesc: "Mục tiêu là tạo ra một chiếc áo khoác streetwear phong cách tương lai, vừa có khả năng di chuyển linh hoạt vừa tích hợp các phụ kiện tiện ích tùy chỉnh. Thách thức nằm ở việc cân bằng giữa kiểu dáng bảo vệ dày dặn với chất liệu nhẹ.",
      obj1: "Thiết Kế Nhân Trắc Học",
      obj2: "Tích Hợp Phụ Kiện",
      obj3: "Phát Triển BOM & Trims",
      obj4: "Mở Rộng Sản Xuất",
      wf1_title: "1. Tham Khảo & Tìm Phụ Liệu",
      wf1_desc: "Nghiên cứu đồ trang bị quân sự, vải kỹ thuật và xác định toạ độ gắn khóa, khóa kéo.",
      wf2_title: "2. Dựng Phom Rập Cơ Bản",
      wf2_desc: "Phát triển tay raglan phức tạp và các đường gấp khuỷu tay hỗ trợ biên độ vận động.",
      wf3_title: "3. Lắp Ráp 3D & Kiểm Tra Lực Căng",
      wf3_desc: "Mô phỏng trang phục trong CLO3D để xác nhận bản đồ lực căng và loại bỏ vùng ma sát.",
      wf4_title: "4. Tài Liệu & Thông Số Trims",
      wf4_desc: "Hoàn thiện bảng BOM, chi tiết đường may và vị trí phụ kiện để bàn giao sản xuất.",
      challengeTitle: "Thách Thức: Bó Căng Khủy Tay",
      challengeDesc: "Mô phỏng 3D ban đầu cho thấy bản đồ lực căng quá tải xung quanh khớp khuỷu tay khi avatar cử động, cho biết chất liệu 3 lớp cứng sẽ cản trở sự linh hoạt.",
      solutionTitle: "Giải Pháp: Thiết Kế Lại Ly Cấu Trúc",
      solutionDesc: "Dựng lại rập tay 2 mảnh bằng cách thêm ly cấu trúc ở khuỷu tay trong và cộng 5% độ cử động cho đường cong ngoài. Mô phỏng lại giúp giảm 40% lực căng vải.",
      out1: "Bảng Định Mức BOM & Phụ Liệu Chuẩn Xưởng",
      out2: "Sơ Đồ Rập Chuẩn Nhân Trắc Học",
      out3: "May Mẫu Ảo Không Rác Thải",
      out4: "Cấu Trúc Chống Nước Đã Kiểm Chứng",
      lessonsDesc: "Phát triển áo khoác kỹ thuật đòi hỏi sự kết hợp chặt chẽ giữa thiết kế rập và thông số phụ liệu. Dự án chứng minh việc mô phỏng chính xác trọng lượng phụ kiện và độ cứng của băng keo ép seam trong 3D là rất quan trọng."
    },
    project3: {
      title: "Áo Thun Mùa Hè",
      summary: "Nghiên cứu toàn diện về phối màu cấu trúc và mảng phối thể thao, được thiết kế để tối đa hóa độ thoáng khí và hiệu suất vận động trong thời tiết ấm áp.",
      overviewDesc: "Mục tiêu dự án là khám phá kỹ thuật phối màu phong cách retro nâng cao cho bộ sưu tập thể thao mùa hè. Bằng cách định vị các đường may tương phản dọc theo các đường sinh học tự nhiên của cơ thể, thiết kế giảm thiểu điểm ma sát.",
      obj1: "Mảng Phối Cấu Trúc",
      obj2: "Độ Co Co-Giãn & Phục Hồi",
      obj3: "Tối Giảm Đường May",
      obj4: "Bàn Giao Tech Pack",
      wf1_title: "1. Tham Khảo & Vẽ Đường Phối",
      wf1_desc: "Nghiên cứu đồ thể thao thập niên 80 và phác thảo các đường sinh học trực tiếp lên avatar 3D.",
      wf2_title: "2. Tách & Mở Rập Mảng Phối",
      wf2_desc: "Chia rập thun cơ bản thành nhiều mảng màu trong khi vẫn giữ nguyên thông số tổng thể.",
      wf3_title: "3. Mô Phỏng Ảo",
      wf3_desc: "Áp dụng thuộc tính vật lý của vải thun Cotton-Spandex trong CLO3D để kiểm tra độ nhăn đường may.",
      wf4_title: "4. Nhảy Size & Thông Số Xưởng",
      wf4_desc: "Tạo quy tắc nhảy size chính xác cho các mảng giao nhau và chi tiết hóa yêu cầu may đánh bông.",
      challengeTitle: "Thách Thức: Nhăn Nhúm Đường May",
      challengeDesc: "Kết hợp nhiều mảng vải thun tạo ra nguy cơ nhăn nhúm đường may và biến dạng lực căng tại các điểm giao nhau ở vai và ngực khi cử động.",
      solutionTitle: "Giải Pháp: Cân Bằng Lực Căng",
      solutionDesc: "Điều chỉnh vị trí bấm rập để phân bổ vải đều. Quy định thông số răng cưa (differential feed) cho máy đánh bông trong Tech Pack.",
      out1: "Bộ Rập Mảng Phối Đã Nhảy Size Hoàn Chỉnh",
      out2: "Đánh Giá Phom Dáng 3D Chính Xác",
      out3: "Tech Pack Sản Xuất Đầy Đủ",
      out4: "Thông Số Độ Bền Màu CMYK/RGB",
      lessonsDesc: "Thiết kế đồ thun phức tạp đòi hỏi sự hiểu biết sâu sắc về hướng co giãn của vải. Dự án nhấn mạnh tầm quan trọng của việc quy định thông số vi sai máy may trực tiếp trong Tech Pack."
    }
  }
};

let currentLang = localStorage.getItem('language') || 'en';

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(el => {
    const keyString = el.getAttribute('data-i18n');
    const keys = keyString.split('.');
    let value = translations[currentLang];
    
    // Traverse the translations object using the key string
    for (let key of keys) {
      if (value) {
        value = value[key];
      }
    }
    
    if (value) {
      // Check if element has an SVG icon inside (like buttons or outcome items)
      const svg = el.querySelector('svg');
      if (svg) {
        Array.from(el.childNodes).forEach(child => {
          if (child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
            child.textContent = ' ' + value.trim() + ' ';
          }
        });
      } else {
         if(value.includes('<strong>') || value.includes('<br>')) {
           el.innerHTML = value;
         } else {
           el.textContent = value;
         }
      }
    }
  });

  document.documentElement.setAttribute('lang', currentLang);
  
  const langBtns = document.querySelectorAll('.lang-toggle');
  langBtns.forEach(btn => {
    btn.textContent = currentLang === 'en' ? 'EN' : 'VN';
  });
}

function initLanguageToggle() {
  const langBtns = document.querySelectorAll('.lang-toggle');
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'vn' : 'en';
      localStorage.setItem('language', currentLang);
      applyTranslations();
    });
  });
}

function init() {
  initLanguageToggle();
  applyTranslations();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
