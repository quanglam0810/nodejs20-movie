PORT 3000
http://localhost:3000/api/v1/
+quanLyNguoiDungRouter
// đăng kí tài khoản
quanLyNguoiDungRouter.post('/dangKy'

{{domain}}/quanLyNguoiDung/dangKy
// đăng nhập
quanLyNguoiDungRouter.post('/dangNhap'

{{domain}}/quanLyNguoiDung/dangNhap
//lấy danh sách người dùng
quanLyNguoiDungRouter.get('/danhSachNguoiDung'

{{domain}}/quanLyNguoiDung/danhSachNguoiDung/
//lấy thông tin người dùng theo id
quanLyNguoiDungRouter.get('/layThongTinNguoiDung?'

{{domain}}/quanLyNguoiDung/layThongTinNguoiDung?id=1
// upload avata
quanLyNguoiDungRouter.post('/avatar',authenticate,uploadAvatar(),

{{domain}}/quanLyNguoiDung/avatar
//lấy danh sách người dùng phân trang
quanLyNguoiDungRouter.get('/danhSachNguoiDung/:page/:pageSize' 

{{domain}}/quanLyNguoiDung/danhSachNguoiDung/1/4
//tìm kiếm người dùng
quanLyNguoiDungRouter.get('/timNguoiDung?'

{{domain}}/quanLyNguoiDung/timNguoiDung?tukhoa=ly
//tìm kiếm người dùng phân trang
quanLyNguoiDungRouter.get('/timNguoiDungPhanTrang?'

{{domain}}/quanLyNguoiDung/timNguoiDungPhanTrang?tukhoa=nguyen&page=1&pageSize=3
//lấy thông tin tài khoản
quanLyNguoiDungRouter.get('/layThongTinCaNhan' ,authenticate,

{{domain}}/quanLyNguoiDung/layThongTinCaNhan
//lấy danh sách người dùng theo loại người dùng
quanLyNguoiDungRouter.get('/loaiNguoiDung?' ,[authenticate,checkRole('ADMIN')],

{{domain}}/quanLyNguoiDung/loaiNguoiDung?role=ADMIN
//cập nhật thông tin người dùng
quanLyNguoiDungRouter.put('/' ,authenticate,

{{domain}}/quanLyNguoiDung/
// thêm người dùng
quanLyNguoiDungRouter.post('/' ,[authenticate,checkRole('ADMIN')],

{{domain}}/quanLyNguoiDung/
// xóa người dùng
quanLyNguoiDungRouter.delete('/:id',[authenticate,checkRole('ADMIN')],

{{domain}}/quanLyNguoiDung/

+ quanLyPhimRouter
// lay danh sach phim
quanLyPhimRouter.get('/'

{{domain}}/quanLyphim/
// lay danh sach phim phan trang
quanLyPhimRouter.get('/:page/:pageSize'

{{domain}}/quanLyphim/2/5
// lay danh sach phim theo ngay phan trang
quanLyPhimRouter.get('/layDanhSachPhimTheoNgay?'

{{domain}}/quanLyphim/layDanhSachPhimTheoNgay?page=1&pageSize=5
// them phim
 quanLyPhimRouter.post('/',[authenticate,checkRole('ADMIN')],

{{domain}}/quanLyphim/
// xoa phim
 quanLyPhimRouter.delete('/:id' ,[authenticate,checkRole('ADMIN')]

{{domain}}/quanLyphim/12
// lay phim theo id
quanLyPhimRouter.get('/:id',

{{domain}}/quanLyphim/11
// cap nhat phim
quanLyPhimRouter.put('/:id', [authenticate,checkRole('ADMIN')],

{{domain}}/quanLyphim/11
// them poster phim
quanLyPhimRouter.post('/poster', uploadPoster(),[authenticate,checkRole('ADMIN')],

{{domain}}/quanLyphim/poster
// them phim upload poster
quanLyPhimRouter.post('/themPhimUploadPoster', uploadPoster(),[authenticate,checkRole('ADMIN')]

{{domain}}/quanLyphim/themPhimUploadPoster
// update phim upLoad poster
 quanLyPhimRouter.put('/poster/:id', uploadPoster(),[authenticate,checkRole('ADMIN')],

{{domain}}/quanLyphim/Poster/11

+ quanLyRapRouter
// lay danh sach he thong rap
quanLyRapRouter.get('/',

{{domain}}/quanLyRap/
// lay thong tin he thong rap theo id
quanLyRapRouter.get('/:id',

{{domain}}/quanLyRap/1
// lay danh sach phong & cum rap theo id he thong rạp
quanLyRapRouter.get('/layThongTinCumRap/:id',

{{domain}}/quanLyRap/layThongTinCumRap/2
// lay thong tin rap theo mã rạp
quanLyRapRouter.get('/layThongTinPhongTheoRap/:id',

{{domain}}/quanLyRap/layThongTinPhongTheoRap/5
// lay thong tin lich chieu theo id he thong rap
quanLyRapRouter.get('/lichChieuHeThong/:id',

{{domain}}/quanLyRap/lichChieuHeThong/1
// lay thong tin lich chieu theo id phim
quanLyRapRouter.get('/lichChieuPhim/:id',

{{domain}}/quanLyRap/lichChieuPhim/1

+quanLyDatVeRouter
//-- them lich chieu phim
quanLyDatVeRouter.post('/',[authenticate,checkRole('ADMIN')],

{{domain}}/quanLyDatVe/
//--- lay lich chieu phim theo id lich chieu
quanLyDatVeRouter.get('/lichChieuPhim/:id',

{{domain}}/quanLyDatVe/lichChieuPhim/3
// dat ve phim
quanLyDatVeRouter.post('/datVe/',[authenticate,checkRole('USER')],

{{domain}}/quanLyDatVe/datVe/
// lay thong tin ve da dat theo id nguoi dung
quanLyDatVeRouter.get('/lichSuDatVe/',[authenticate,checkRole('USER')],
{{domain}}/quanLyDatVe/lichSuDatVe/


