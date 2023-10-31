const data = Array(20)
  .fill(0)
  .map((_, i) => {
    return {
      description: [
        "Launched a new application",
        "Removed event from calendar",
        "Has joined your mailing list",
        "Created a new task list",
        "Added event to calendar",
        "Opened a new ticket",
        "Closed a ticket",
        "Paid pending invoice",
      ][Math.floor(Math.random() * 8)],
      size: [
        "Nhỏ (2-10 cm)",
        "Vừa (10-20 cm)",
        "Lớn (> 20 cm)"
      ][Math.floor(Math.random() * 3)],
      position: [
        "Cánh tay/Bắp tay",
        "Vai",
        "Cổ tay",
        "Bàn tay/Ngón tay",
        "Ngực",
        "Mạn sườn",
        "Mắt cá chân và bàn chân",
        "Bắp chân",
        "Đùi",
        "Cổ",
        "Lưng"
      ][Math.floor(Math.random() * 11)],
      tattooArtId: i,
      artist: {
        artistId: [Math.floor(Math.random() * 900)],
        artistName: [
          "Megan",
          "Jeffrey",
          "Amber",
          "Megan",
          "Melissa",
          "Danielle",
          "Roy",
          "Samantha",
        ][Math.floor(Math.random() * 8)]
      },
      style: {
        styleId: [Math.floor(Math.random() * 20)],
        styleName: [
          "Xăm 3D",
          "Trừu tượng",
          "Phát sáng (UV ink)",
          "Dải màu (Gradient)",
          "Graffiti",
          "Tả thực (Hyper realistic)",
          "Đảo nghịch màu (Inverted)",
          "Chữ đa chiều (Ambigram)",
          "Chữ viết (Lettering)",
          "Đường kẻ (Line)",
          "Phong cách Ý (Mambo)",
          "Hoa văn (Mandala)",
          "Mayan",
          "Tối giản (Minimalist)",
          "Chân dung (Portrait)",
          "Trích dẫn (Quote/Word)",
          "Negative Space",
          "Cổ điển Mỹ (Neo-Traditional)",
          "Old-school",
          "New School",
          "Ảo giác (Optical Illusion)",
          "Đường viền (Outline)",
          "Sọc (Pinstripe)",
          "Bể hình (Pixel)",
          "Đốm nhỏ (Pointilism)",
          "Đại chúng (Pop Art)",
          "Giải phẫu (Anatomical)",
          "Cơ học (Biomechanical)",
          "Đen và xám (Black and Grey)",
          "Đen (Blackwork / Blackout)",
          "Blast over",
          "Bóng đen (Silhouette)",
          "Ký hoạ (Sketch)",
          "Bắc Âu, Viking",
          "Vết cọ vẽ (Paint brush stroke)",
          "Điểm chấm (Dotwork)",
          "Hình học (Geometric)",
          "Nhiễu sóng (Glitch)",
          "Chicano",
          "Kính vỡ (Broken Glass)",
          "Kính màu",
          "Thổ dân (Tribal / Polynesian / Maori / Hawaiian)",
          "Màu nước (Watercolor)",
          "Mực trắng (White Ink)",
          "Chạm khắc gỗ (Wood Carving)",
        ][Math.floor(Math.random() * 45)],
        images: [
          {
            imageId: [Math.floor(Math.random() * 50)],
            imageName: [
              "Trắng đen",
              "Màu sắc",
              "Neon",
              "Dải màu (Gradient)",
              "Chữ",
              "Bộ xương",
              "Đầu lâu",
              "Anime",
              "Hoa lá",
              "Cây xương rồng",
              "Hoa hồng",
              "Cây đào",
              "Tre trúc",
              "Động vật",
              "Bướm",
              "Rồng",
              "Phượng",
              "Chim",
              "Rắn",
              "Mèo",
              "Chó",
              "Tàu ngầm",
              "Mỏ neo",
              "Sóng",
              "Núi",
              "Mặt trời",
              "Mặt trăng",
              "Ngôi sao",
              "Mưa",
              "Trái tim",
              "Hình học",
              "Đồng hồ",
              "Hoa văn",
              "Chân dung",
              "Mặt quỷ",
              "Con mắt",
              "Đường chân trời"
            ][Math.floor(Math.random() * 3)]
          }
        ]
      },
    };
  });

export default (req, res) => res.json(data);
