-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 12, 2022 lúc 08:43 AM
-- Phiên bản máy phục vụ: 10.1.38-MariaDB
-- Phiên bản PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `datvephim`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `anhdaidiens`
--

CREATE TABLE `anhdaidiens` (
  `id` int(11) NOT NULL,
  `duongDan` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `trangThai` tinyint(1) DEFAULT NULL,
  `idNguoiDung` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `anhdaidiens`
--

INSERT INTO `anhdaidiens` (`id`, `duongDan`, `trangThai`, `idNguoiDung`, `createdAt`, `updatedAt`) VALUES
(6, 'localhost:3000/public\\images\\avatars\\1653542444668.jpg', 0, 1, '2022-05-26 05:20:44', '2022-05-26 06:41:45'),
(9, 'localhost:3000/public\\images\\avatars\\1653543621840.jpg', 1, 1, '2022-05-26 05:40:21', '2022-05-26 05:40:21'),
(10, 'localhost:3000/public\\images\\avatars\\1653546975502.jpg', 0, 1, '2022-05-26 06:36:15', '2022-05-26 06:41:45'),
(11, 'localhost:3000/public\\images\\avatars\\1653547305209.jpg', 1, 1, '2022-05-26 06:41:45', '2022-05-26 06:41:45'),
(12, 'localhost:3000/public\\images\\avatars\\1654185882796.jpg', 0, 2, '2022-06-02 16:04:42', '2022-06-12 05:26:59'),
(13, 'localhost:3000/public\\images\\avatars\\1655011619923.jpg', 1, 2, '2022-06-12 05:26:59', '2022-06-12 05:26:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ctves`
--

CREATE TABLE `ctves` (
  `id` int(11) NOT NULL,
  `idVe` int(11) DEFAULT NULL,
  `idGhe` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `ctves`
--

INSERT INTO `ctves` (`id`, `idVe`, `idGhe`, `createdAt`, `updatedAt`) VALUES
(1, 1, 21, '2022-06-12 05:31:42', '2022-06-12 05:31:42'),
(2, 1, 22, '2022-06-12 05:31:42', '2022-06-12 05:31:42');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ghexems`
--

CREATE TABLE `ghexems` (
  `id` int(11) NOT NULL,
  `tenGhe` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `loaiGhe` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `giave` int(11) DEFAULT NULL,
  `trangThai` tinyint(1) DEFAULT NULL,
  `idLichChieuPhim` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `ghexems`
--

INSERT INTO `ghexems` (`id`, `tenGhe`, `loaiGhe`, `giave`, `trangThai`, `idLichChieuPhim`, `createdAt`, `updatedAt`) VALUES
(1, 'Ghe so:1', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(2, 'Ghe so:2', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(3, 'Ghe so:3', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(4, 'Ghe so:4', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(5, 'Ghe so:5', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(6, 'Ghe so:6', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(7, 'Ghe so:7', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(8, 'Ghe so:8', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(9, 'Ghe so:9', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(10, 'Ghe so:10', 'don', 75000, 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(11, 'Ghe so:1', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(12, 'Ghe so:2', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(13, 'Ghe so:3', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(14, 'Ghe so:4', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(15, 'Ghe so:5', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(16, 'Ghe so:6', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(17, 'Ghe so:7', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(18, 'Ghe so:8', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(19, 'Ghe so:9', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(20, 'Ghe so:10', 'don', 75000, 1, 2, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(21, 'Ghe so:1', 'don', 75000, 0, 3, '2022-06-12 05:29:56', '2022-06-12 05:31:42'),
(22, 'Ghe so:2', 'don', 75000, 0, 3, '2022-06-12 05:29:56', '2022-06-12 05:31:42'),
(23, 'Ghe so:3', 'don', 75000, 1, 3, '2022-06-12 05:29:56', '2022-06-12 05:29:56'),
(24, 'Ghe so:4', 'don', 75000, 1, 3, '2022-06-12 05:29:56', '2022-06-12 05:29:56'),
(25, 'Ghe so:5', 'don', 75000, 1, 3, '2022-06-12 05:29:56', '2022-06-12 05:29:56'),
(26, 'Ghe so:6', 'don', 75000, 1, 3, '2022-06-12 05:29:56', '2022-06-12 05:29:56'),
(27, 'Ghe so:7', 'don', 75000, 1, 3, '2022-06-12 05:29:56', '2022-06-12 05:29:56'),
(28, 'Ghe so:8', 'don', 75000, 1, 3, '2022-06-12 05:29:56', '2022-06-12 05:29:56'),
(29, 'Ghe so:9', 'don', 75000, 1, 3, '2022-06-12 05:29:56', '2022-06-12 05:29:56'),
(30, 'Ghe so:10', 'don', 75000, 1, 3, '2022-06-12 05:29:56', '2022-06-12 05:29:56');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hethongraps`
--

CREATE TABLE `hethongraps` (
  `id` int(11) NOT NULL,
  `tenHeThongRap` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `biDanh` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `hethongraps`
--

INSERT INTO `hethongraps` (`id`, `tenHeThongRap`, `biDanh`, `logo`, `createdAt`, `updatedAt`) VALUES
(1, 'BHSTAR', 'BHS', 'bhstar.jpg', '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(2, 'LOTTER', 'LTC', 'lottecinema.jpg', '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(3, 'VINCOM', 'VAG', 'vincom.jpg', '2022-02-02 00:00:00', '2022-02-02 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lichchieuphims`
--

CREATE TABLE `lichchieuphims` (
  `id` int(11) NOT NULL,
  `maChieuPhim` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `ngayChieu` datetime NOT NULL,
  `gioChieu` time NOT NULL,
  `idPhongChieu` int(11) DEFAULT NULL,
  `idPhim` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `lichchieuphims`
--

INSERT INTO `lichchieuphims` (`id`, `maChieuPhim`, `ngayChieu`, `gioChieu`, `idPhongChieu`, `idPhim`, `createdAt`, `updatedAt`) VALUES
(1, 'BH-110', '2022-01-15 00:00:00', '19:10:00', 1, 1, '2022-06-12 05:28:51', '2022-06-12 05:28:51'),
(2, 'BH-110', '2021-01-05 00:00:00', '19:10:00', 2, 4, '2022-06-12 05:29:42', '2022-06-12 05:29:42'),
(3, 'BH-110', '2021-01-05 00:00:00', '19:10:00', 5, 3, '2022-06-12 05:29:56', '2022-06-12 05:29:56');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidungs`
--

CREATE TABLE `nguoidungs` (
  `id` int(11) NOT NULL,
  `taiKhoan` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `matKhau` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `dienThoai` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ngaySinh` datetime DEFAULT NULL,
  `hoTen` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `loaiNguoiDung` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidungs`
--

INSERT INTO `nguoidungs` (`id`, `taiKhoan`, `matKhau`, `email`, `dienThoai`, `ngaySinh`, `hoTen`, `loaiNguoiDung`, `createdAt`, `updatedAt`) VALUES
(1, 'nguoidung1', '$2a$10$6L9zw5/DspvWQvb7NqTTV.k98WyF8aNJ6Jtgyd921OR.ScSkgHYgG', 'diuco@gmail.com', '0985034354', '1990-08-26 00:00:00', 'Nguyen Van a', 'USER', '2022-05-24 15:19:53', '2022-06-08 13:06:06'),
(2, 'quantri1', '$2a$10$pHQWCiK2NnCryuyn68v4YuoY/2l08B81MlF1is/QPqT4aq7vjcT7S', 'diuco@gmail.com', '0985034354', '1990-08-26 00:00:00', 'Nguyen Van Quan', 'ADMIN', '2022-05-24 15:48:08', '2022-06-12 05:27:49'),
(3, 'nguoidung2', '$2a$10$tpJtZ8yTEWwnVDqm5.T6E.37lb9fER6I8wwcML3VNiUYZ.snaMZMC', 'quanglampro@gmail.com', '0985034354', '2002-08-26 00:00:00', 'ly tam hoan', 'USER', '2022-06-02 14:32:04', '2022-06-02 14:32:04'),
(5, 'nguoidung3', '$2a$10$8Xm3KfajZqeKlOJ.nh1U6O2dZe1rABAGwD7UDyi.V6aaKY9sjQTlO', 'quanglampro@gmail.com', '0985034354', '2002-08-26 00:00:00', 'ly tam hoan', 'USER', '2022-06-06 16:04:46', '2022-06-06 16:04:46'),
(8, 'nguoidung5', '$2a$10$EXJHn84/ji.w22uujUt0geE833S.uMs2rv4sLwpzEndqrtKwGdM52', 'quanglampro@gmail.com', '0985034354', '2002-08-26 00:00:00', 'ly tam hoang', 'USER', '2022-06-12 05:25:45', '2022-06-12 05:25:45'),
(9, 'nguoidung6', '$2a$10$bhUS7UAgraSBoYE5pWGwhu8JoQ1OZRb9iXXNDp7YG4Pl8wgOUs/SG', 'quanglampro@gmail.com', '0985034354', '2002-08-26 00:00:00', 'nguyen van hoang', 'USER', '2022-06-12 05:28:18', '2022-06-12 05:28:18');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phiminserts`
--

CREATE TABLE `phiminserts` (
  `id` int(11) NOT NULL,
  `tenPhim` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `trailer` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `poster` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `moTa` text COLLATE utf8_vietnamese_ci NOT NULL,
  `ngayKhoiChieu` datetime NOT NULL,
  `thoiLuong` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `phiminserts`
--

INSERT INTO `phiminserts` (`id`, `tenPhim`, `trailer`, `poster`, `moTa`, `ngayKhoiChieu`, `thoiLuong`, `createdAt`, `updatedAt`) VALUES
(1, 'PHÙ THỦY TỐI THƯỢNG 3', 'https://www.youtube.com/watch?v=aWzlQ2N6qqg', 'posterphim.jpg', 'Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.', '2022-05-09 00:00:00', 120, NULL, '2022-05-23 15:58:12'),
(2, 'NGHỀ SIÊU DỄ', 'https://www.youtube.com/watch?v=IOwvN-aoBpM', 'posterphim.jpg', 'Ông Thái là một cảnh sát về hưu nhưng không chịu an phận thủ thường, hàng ngày vẫn đi tìm bắt tội phạm vặt trong xóm cho đỡ nhớ nghề. Một ngày kia, Hoàng - tên trùm ma túy mới ra tù bỗng dưng chuyển đến xóm ông và mở một văn phòng bất động sản. Nghi ngờ đây là nơi làm ăn phi pháp, ông Thái quyết định âm thầm điều tra. Ông mua lại tiệm cơm tấm đối diện trụ sở của Hoàng để làm nơi theo dõi, đồng thời thu nạp Thu - Phú - Vinh - Mèo, đám thanh niên “bất hảo” trong xóm về quán hỗ trợ buôn bán để rảnh tay \\\"phá án\\\". Trớ trêu thay, tiệm cơm bất ngờ nổi tiếng và ăn nên làm ra, khiến cho \\\"chuyên án đặc biệt\\\" của ông đứng trước nguy cơ đổ bể.', '2022-04-29 00:00:00', 120, '2022-05-23 06:03:04', '2022-05-23 06:03:04'),
(3, 'CẢNH SÁT VŨ TRỤ LIGHTYEAR2', 'https://www.youtube.com/watch?v=wHBBoUtJHhA', 'http://movie0706.cybersoft.edu.vn/hinhanh/canh-sat-vu-tru-lightyear_gp01.jpg', 'Bộ phim kể về chuyến hành trình hành động kết hợp khoa học viễn tưởng nhằm giới thiệu câu chuyện về nguồn gốc của nhân vật Buzz Lightyear — người anh hùng đã truyền cảm hứng sáng tạo ra đồ chơi. “Lightyear” sẽ theo chân Cảnh Sát Vũ Trụ huyền thoại trong cuộc hành trình bước ra ngoài không gian cùng với một nhóm chiến binh đầy tham vọng và người bạn đồng hành là chú mèo máy Sox', '2022-07-09 00:00:00', 120, '2022-05-23 06:50:53', '2022-05-23 06:50:53'),
(4, 'DORAEMON: NOBITA VÀ CUỘC CHIẾN VŨ TRỤ TÍ HON 2021', 'https://www.youtube.com/watch?v=bALKXsKhEEs', 'http://movie0706.cybersoft.edu.vn/hinhanh/doraemon-nobita-va-cuoc-chien-vu-tru-ti-hon-2021_gp01.jpg', 'Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi, vốn là Tổng thống của hành tinh Pirika, chạy trốn tới Trái Đất để thoát khỏi những kẻ nổi loạn nơi quê nhà. Doraemon, Nobita và hội bạn thân dùng bảo bối đèn pin thu nhỏ biến đổi theo kích cỡ giống Papi để chơi cùng cậu bé. Thế nhưng, một tàu chiến không gian tấn công cả nhóm. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác. Doraemon và các bạn lên đường đến hành tinh Pirika, sát cánh bên người bạn của mình.', '2022-05-14 00:00:00', 120, '2022-05-23 06:50:54', '2022-05-23 06:50:54'),
(5, 'THOR: TÌNH YÊU VÀ SẤM SÉT', 'https://www.youtube.com/watch?v=WizuvIYbAeM', 'http://movie0706.cybersoft.edu.vn/hinhanh/thor-tinh-yeu-va-sam-set_gp01.jpg', 'Vốn từng là một chiến binh hùng mạnh của Asgard, trải qua vô số trận chiến lớn nhỏ nhưng sau sự kiện trong Avengers: Endgame (2019) cùng vô số mất mát, Thần Sấm không còn muốn theo đuổi con đường siêu anh hùng. Từ đây, anh lên đường tìm ra ý nghĩa của cuộc sống và nhìn nhận lại bản thân mình.', '2022-05-09 00:00:00', 120, '2022-05-23 06:50:55', '2022-05-23 06:50:55'),
(6, 'AVATAR: DÒNG CHẢY CỦA NƯỚC 2022', 'https://www.youtube.com/watch?v=oeRG9A6bDdY', 'http://movie0706.cybersoft.edu.vn/hinhanh/avatar-dong-chay-cua-nuoc_gp01.jpg', 'Câu chuyện của “Avatar: Dòng Chảy Của Nước” lấy bối cảnh 10 năm sau những sự kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai) cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora.', '2022-06-09 00:00:00', 120, '2022-05-23 06:50:56', '2022-05-23 06:50:56'),
(7, 'MÈO ĐI HIA: ĐIỀU ƯỚC CUỐI CÙNG', 'https://www.youtube.com/watch?v=ixFHgfKr39Y', 'http://movie0706.cybersoft.edu.vn/hinhanh/meo-di-hia-dieu-uoc-cuoi-cung_gp01.jpg', 'Phần nối tiếp của Puss in Boots đã ra mắt từ 11 năm trước. Chú mèo đi hia sẽ chính thức trở lại màn ảnh lớn trong 1 chuyến phiêu lưu mới, vui nhộn hơn và cũng gay cấn hơn khi đã trót “tiêu xài” 8 trong số 9 cái mạng của mình.', '2022-02-09 00:00:00', 120, '2022-05-23 06:50:57', '2022-05-23 06:50:57'),
(8, 'TĂNG TỐC.. VỀ PHÍA EM', 'https://www.youtube.com/watch?v=_DfdCFaBEp0', 'http://movie0706.cybersoft.edu.vn/hinhanh/tang-toc-ve-phia-em_gp01.jpg', 'Kao (Nat Kitcharit) là một nhà vô địch thế giới môn xếp ly tốc độ (Speed Stack). Tuy thành công và nổi tiếng nhưng Kao lại chỉ như một đứa trẻ to xác suốt ngày chỉ ăn, ngủ và tập luyện. Mọi vấn đề xung quanh anh đều một tay Jay (Yaya) bạn gái anh quán xuyến. Đến một ngày khi Jay quyết định chia tay thì Kao như bị mất tất cả. Anh phải bắt đầu học những kỹ năng sống cơ bản để có thể tự sống một mình và chăm sóc bản thân. Song song đó những đối thủ mới cũng xuất hiện và đe dọa đến vị trí quán quân của Kao.', '2022-01-09 00:00:00', 120, '2022-05-23 07:21:24', '2022-05-23 07:21:24'),
(9, 'NHÍM SONIC 2', 'https://www.youtube.com/watch?v=G1Mrk6pFqVI', 'http://movie0706.cybersoft.edu.vn/hinhanh/nhim-sonic-2_gp01.jpg', 'Khi Robotnik tìm cách quay trở về Trái Đất thành công, ông ta có một đồng minh mới là Knuckles hùng mạnh, liệu Sonic và người bạn ới Tails có thể ngăn chặn được âm mưu điên rồi để cứu lấy thế giới?', '2021-01-12 00:00:00', 120, '2022-05-23 07:22:29', '2022-05-23 07:22:29'),
(10, 'ĐÊM TỐI RỰC RỠ', 'https://www.youtube.com/watch?v=tgL4qAcLy4Y', 'http://movie0706.cybersoft.edu.vn/hinhanh/dem-toi-ruc-ro_gp01.jpg', 'Khi người ông qua đời, cả gia đình của Xuân Thanh (Nhã Uyên) tề tựu để đưa tiễn. Đám tang diễn ra hoành tráng, xôm tụ và đầy màu sắc. Bỗng dưng một đám người kéo đến đòi nợ trong sự ngỡ ngàng của tất cả. Những bí mật bị phanh phui, bi kịch chồng bi kịch, như một hệ luỵ tổn thương của nạn bạo hành gia đình đầy ám ảnh.', '2022-01-09 00:00:00', 120, '2022-05-23 07:22:35', '2022-05-23 07:22:35'),
(11, 'MÈO ĐI HIA: ĐIỀU ƯỚC CUỐI CÙNG U2', 'https://www.youtube.com/watch?v=ixFHgfKr39Y', 'localhost:3000/public\\images\\poster\\1655012796272.jpg', 'UPDATED', '2022-08-02 00:00:00', 120, '2022-06-09 16:26:56', '2022-06-12 05:46:36'),
(13, 'Loki Thần Lừa 2', 'https://www.youtube.com/watch?v=nW948Va-l10', 'localhost:3000/public\\images\\poster\\1655009822703.jpg', 'Loki marvel sản xuất', '2022-08-02 00:00:00', 120, '2022-06-12 04:57:02', '2022-06-12 04:57:02'),
(14, 'Loki Thần Lừa 44', 'https://www.youtube.com/watch?v=nW948Va-l10', 'localhost:3000/public\\images\\poster\\1655009965411.jpg', 'Loki marvel sản xuất', '2022-08-02 00:00:00', 120, '2022-06-12 04:59:25', '2022-06-12 04:59:25'),
(15, 'Loki Thần Lừa 44', 'https://www.youtube.com/watch?v=nW948Va-l10', 'localhost:3000/public\\images\\poster\\1655011518570.jpg', 'Loki marvel sản xuất', '2022-08-02 00:00:00', 120, '2022-06-12 05:25:18', '2022-06-12 05:25:18'),
(16, 'EM VÀ TRỊNH 2', 'https://www.youtube.com/watch?v=IosqnBOkk2I', 'http://movie0706.cybersoft.edu.vn/hinhanh/em-va-trinh_gp01.jpg', 'Sau những teaser đầu tiên hé lộ về các nàng thơ, ekip phim vừa tung ra trailer của “EM VÀ TRỊNH” cho thấy rõ hơn về một thời tuổi trẻ oanh liệt của Trịnh Công Sơn, từ chàng trai thư sinh yêu chủ nghĩa lãng mạn đến khi trở thành người nhạc sĩ phản chiến yêu hòa bình.  EM VÀ TRỊNH tái hiện một mùa hè tuổi trẻ rực lửa của Trịnh Công Sơn. Mùa hè đó có các nàng thơ, có âm nhạc, có tình yêu tuổi trẻ, có những chuyến đi phiêu du trên khắp mọi miền tổ quốc và có cả bom đạn, khói lửa, lý tưởng.', '2022-06-06 00:00:00', 120, '2022-06-12 05:37:15', '2022-06-12 05:37:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phongchieus`
--

CREATE TABLE `phongchieus` (
  `id` int(11) NOT NULL,
  `tenPhong` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `loaiPhong` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `idRapPhim` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `phongchieus`
--

INSERT INTO `phongchieus` (`id`, `tenPhong`, `loaiPhong`, `idRapPhim`, `createdAt`, `updatedAt`) VALUES
(1, 'Phong 01', '2d', 1, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(2, 'Phong 02', '2d', 1, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(3, 'phong 03', '3d', 1, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(4, 'phong 01', '3d', 2, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(5, 'phong 02', '3d', 2, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(6, 'phong 01', '2d', 3, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(7, 'phong 02', '2d', 3, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(8, 'phong 01', '2d', 4, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(9, 'phong 02', '2d', 4, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(10, 'phong 01', '2d', 5, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(11, 'phong 02', '2d', 5, '2022-02-02 00:00:00', '2022-02-02 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rapphims`
--

CREATE TABLE `rapphims` (
  `id` int(11) NOT NULL,
  `tenRapPhim` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `diaChi` varchar(255) COLLATE utf8_vietnamese_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `idHeThongRap` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `rapphims`
--

INSERT INTO `rapphims` (`id`, `tenRapPhim`, `diaChi`, `logo`, `idHeThongRap`, `createdAt`, `updatedAt`) VALUES
(1, 'Bhstar Go Vap', '12, Phan van tri, q.go vap', 'bhgovap.jpg', 1, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(2, 'Bhstar quan 12', '154, le van khuong, p thoi an, q 12', 'bhquan12.jpg', 1, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(3, 'Lotter Cinema Go Vap', '12 le van tho, p 10, q go vap', 'lottegovap.jpg', 2, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(4, 'lotte cinema Quan 1', '49 le duan p.ben thanh, q1', 'lottebenthanh.jpg', 2, '2022-02-02 00:00:00', '2022-02-02 00:00:00'),
(5, 'Vincom Ben Nghe', '13 paster p.ben nghe q1', 'avg ben nghe', 3, '2022-02-02 00:00:00', '2022-02-02 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220522164647-create-phim-insert.js'),
('20220522165617-create-phim-insert.js'),
('20220522170748-create-phim-insert.js'),
('20220523161533-create-nguoi-dung.js'),
('20220523164341-create-he-thong-rap.js'),
('20220524151805-create-nguoi-dung.js'),
('20220526015109-create-avatar.js'),
('20220526022320-create-avatar.js'),
('20220526022537-create-avatar.js'),
('20220526023728-create-avatar.js'),
('20220526024952-create-anh-dai-dien.js'),
('20220528023330-create-rap-phim.js'),
('20220528023645-create-phong-chieu.js'),
('20220528023825-create-ve-phim.js'),
('20220528024205-create-chi-tiet-ve.js'),
('20220528024427-create-ghe.js'),
('20220528024732-create-lich-chieu-phim.js'),
('20220528104605-create-ghe-xem.js'),
('20220528104806-create-ct-ve.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vephims`
--

CREATE TABLE `vephims` (
  `id` int(11) NOT NULL,
  `idNguoiDung` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `vephims`
--

INSERT INTO `vephims` (`id`, `idNguoiDung`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2022-06-12 05:31:42', '2022-06-12 05:31:42');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `anhdaidiens`
--
ALTER TABLE `anhdaidiens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idNguoiDung` (`idNguoiDung`);

--
-- Chỉ mục cho bảng `ctves`
--
ALTER TABLE `ctves`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idGhe` (`idGhe`),
  ADD KEY `idVe` (`idVe`);

--
-- Chỉ mục cho bảng `ghexems`
--
ALTER TABLE `ghexems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idLichChieuPhim` (`idLichChieuPhim`);

--
-- Chỉ mục cho bảng `hethongraps`
--
ALTER TABLE `hethongraps`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `lichchieuphims`
--
ALTER TABLE `lichchieuphims`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPhongChieu` (`idPhongChieu`),
  ADD KEY `idPhim` (`idPhim`);

--
-- Chỉ mục cho bảng `nguoidungs`
--
ALTER TABLE `nguoidungs`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `phiminserts`
--
ALTER TABLE `phiminserts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `phongchieus`
--
ALTER TABLE `phongchieus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idRapPhim` (`idRapPhim`);

--
-- Chỉ mục cho bảng `rapphims`
--
ALTER TABLE `rapphims`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idHeThongRap` (`idHeThongRap`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `vephims`
--
ALTER TABLE `vephims`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idNguoiDung` (`idNguoiDung`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `anhdaidiens`
--
ALTER TABLE `anhdaidiens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `ctves`
--
ALTER TABLE `ctves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `ghexems`
--
ALTER TABLE `ghexems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `hethongraps`
--
ALTER TABLE `hethongraps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `lichchieuphims`
--
ALTER TABLE `lichchieuphims`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `nguoidungs`
--
ALTER TABLE `nguoidungs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `phiminserts`
--
ALTER TABLE `phiminserts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `phongchieus`
--
ALTER TABLE `phongchieus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `rapphims`
--
ALTER TABLE `rapphims`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `vephims`
--
ALTER TABLE `vephims`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `anhdaidiens`
--
ALTER TABLE `anhdaidiens`
  ADD CONSTRAINT `anhdaidiens_ibfk_1` FOREIGN KEY (`idNguoiDung`) REFERENCES `nguoidungs` (`id`);

--
-- Các ràng buộc cho bảng `ctves`
--
ALTER TABLE `ctves`
  ADD CONSTRAINT `ctves_ibfk_1` FOREIGN KEY (`idVe`) REFERENCES `vephims` (`id`),
  ADD CONSTRAINT `ctves_ibfk_2` FOREIGN KEY (`idGhe`) REFERENCES `ghexems` (`id`);

--
-- Các ràng buộc cho bảng `ghexems`
--
ALTER TABLE `ghexems`
  ADD CONSTRAINT `ghexems_ibfk_1` FOREIGN KEY (`idLichChieuPhim`) REFERENCES `lichchieuphims` (`id`);

--
-- Các ràng buộc cho bảng `lichchieuphims`
--
ALTER TABLE `lichchieuphims`
  ADD CONSTRAINT `lichchieuphims_ibfk_1` FOREIGN KEY (`idPhongChieu`) REFERENCES `phongchieus` (`id`),
  ADD CONSTRAINT `lichchieuphims_ibfk_2` FOREIGN KEY (`idPhim`) REFERENCES `phiminserts` (`id`);

--
-- Các ràng buộc cho bảng `phongchieus`
--
ALTER TABLE `phongchieus`
  ADD CONSTRAINT `phongchieus_ibfk_1` FOREIGN KEY (`idRapPhim`) REFERENCES `rapphims` (`id`);

--
-- Các ràng buộc cho bảng `rapphims`
--
ALTER TABLE `rapphims`
  ADD CONSTRAINT `rapphims_ibfk_1` FOREIGN KEY (`idHeThongRap`) REFERENCES `hethongraps` (`id`);

--
-- Các ràng buộc cho bảng `vephims`
--
ALTER TABLE `vephims`
  ADD CONSTRAINT `vephims_ibfk_1` FOREIGN KEY (`idNguoiDung`) REFERENCES `nguoidungs` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
