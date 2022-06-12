'use strick';
const express = require('express');

const { createUser, getUserByAccount, getListUser, 
    getUserByID,storageAvatar,checkAccount,
    getUserPaging,
    searchUser,getUserByRole,updateUserById,
    deleteUserById,
    searchUserPaging
    } = require('../../../services/quanLyNguoiDung');

const {scriptPassword,comparePassword,genToken,decodeToken} = require('../../../services/auth');

const { authenticate, checkRole } = require('../../middlewares/auth');

const { uploadAvatar } = require('../../middlewares/upload');

const { SYSTEM } = require('../../config');

const {countRecord} = require('../../../services/pagination');

const quanLyNguoiDungRouter = express.Router();
// dang ki tai khoan
quanLyNguoiDungRouter.post('/dangKy' , async (req, res)=>{
    const {taiKhoan, matKhau, email, dienThoai, ngaySinh, hoTen} = req.body;
    if(!taiKhoan||!matKhau ||!hoTen){
        return res.status(400).send('taikhoan hoặc mật khẩu không được để trống');
    }
    const checkAlready = await checkAccount(taiKhoan);
    if(checkAlready == true)
    {
        return res.status(400).send('Tài khoản đã có người sử dụng');
    }
    const loaiNguoiDung = "USER";
    const matKhauMaHoa = scriptPassword(matKhau);
    const user = await createUser({
        taiKhoan,
        matKhau:matKhauMaHoa,
        dienThoai,
        email,
        ngaySinh, 
        loaiNguoiDung,
        hoTen
    });
    if(!user){
       return res.status(500).send('đăng kí tài khoản không thành công');
    }
    res.status(200).send(user);
});
// dang nhap
quanLyNguoiDungRouter.post('/dangNhap' , async (req, res)=>{
    const{taiKhoan, matKhau} = req.body;  
    const user = await getUserByAccount(taiKhoan);
    if (!user) {
        return res.status(400).send(`account: ${taiKhoan} không tồn tại`);
       }
    const isSuccess = comparePassword(matKhau, user.matKhau);
    if (!isSuccess) {
        return res.status(400).send(`Mật khẩu không đúng`);
       }         
    const token = genToken({ id: user.id });  
    if(!token){
        return res.status(500).send('can not gentoken');
        }        
    return res.status(200).send( {user,token});
});
// lay danh sach nguoi dung
quanLyNguoiDungRouter.get('/danhSachNguoiDung' , async (req, res)=>{
    const listUser = await getListUser();
    if(!listUser){           
        return res.status(400).send('lấy danh sách người dùng lỗi');
    }
    return res.send(listUser);
});
// lay danh sach nguoi dung phan trang
quanLyNguoiDungRouter.get('/danhSachNguoiDung/:page/:pageSize' , async (req, res)=>{
    let {page,pageSize} = req.params;
    page = parseInt(page);
    pageSize = parseInt(pageSize);
    let offSet;
    const data = await getListUser();
    // dem so ban ghi danh sach user
    const totalUser = await countRecord(data);
    offSet = (pageSize*page)-pageSize;
    //tinh so trang
    const totalPage = Math.ceil(totalUser/pageSize);
    const item = await getUserPaging(offSet,pageSize);
    if((Object.entries(item).length === 0)==true){
        return res.status(500).send('results emty');
    }
    return res.status(200).send({totalUser,totalPage,page,pageSize,item});
});
// tim kiem nguoi dung 
quanLyNguoiDungRouter.get('/timNguoiDung?' , async (req, res)=>{
    const tukhoa = req.query.tukhoa;
    if(!tukhoa.trim()||!tukhoa){
        res.status(400).send('Từ khóa tìm kiếm không hợp lệ');
    }
    const listUser = await searchUser(tukhoa);
    if(!listUser){
        return res.status(500).send('tìm kiếm người dùng thất bại');
    }
    if((Object.entries(listUser).length === 0)==true){
        return res.status(500).send('results emty');
    }
    console.log(listUser);
    return res.status(200).send({tukhoa,listUser});
});
// tim kiem nguoi dung phan trang
quanLyNguoiDungRouter.get('/timNguoiDungPhanTrang?' , async (req, res)=>{
    const tukhoa = req.query.tukhoa;
    let {page,pageSize} = req.query;
        page = parseInt(page);
        pageSize = parseInt(pageSize);
        let offSet;
    const data = await searchUser(tukhoa);
    // dem so ban ghi danh sach user
    const totalUser = await countRecord(data);
        offSet = (pageSize*page)-pageSize;
    //tinh so trang
    const totalPage = Math.ceil(totalUser/pageSize);
    if(!tukhoa.trim()||!tukhoa){
        res.status(400).send('Từ khóa tìm kiếm không hợp lệ');
    }
    const listUser = await searchUserPaging(tukhoa,offSet,pageSize);
    if(!listUser){
        return res.status(500).send('Lấy danh sách tìm kiếm lỗi');
    }
    if((Object.entries(listUser).length === 0)==true){
        return res.status(500).send('results emty');
    }
    console.log(listUser);
    return res.status(200).send({totalUser,totalPage,page,pageSize,listUser});
});
// lay thong tin nguoi dung theo id 
quanLyNguoiDungRouter.get('/layThongTinNguoiDung?' ,[authenticate,checkRole('ADMIN')], async (req, res)=>{
    const{id} = req.query;
    const infoUser = await getUserByID(id);
    if(!infoUser){           
        return res.status(400).send('Lấy thông tin người dùng lỗi !');
    }
    return res.status(200).send(infoUser);  
});
// upload avatar
quanLyNguoiDungRouter.post('/avatar',authenticate,uploadAvatar(), async (req, res)=>{
    const user = req.user;
    const file = req.file;
    if(!file){
        return res.send('không nhận được file ảnh');
    }
    const url = `${SYSTEM.DOMAIN}/${file.path}`;
    const avatar = await storageAvatar(url,user.id);
    if(!avatar){
        return res.status(200).send('lưu ảnh thất bại');
    }
    return res.status(200).send(avatar);   
});
// lay thong tin ca nhan
quanLyNguoiDungRouter.get('/layThongTinCaNhan' ,authenticate, async (req, res)=>{
    const user = req.user;
    const infoUser = await getUserByID(user.id);
    if(!infoUser){           
        return res.status(400).send('Lỗi, không lấy được thông tin người dùng');
    }
    return res.status(200).send(infoUser);  
});
// lay thong tin nguoi dung theo loai nguoi dung
quanLyNguoiDungRouter.get('/loaiNguoiDung?' ,[authenticate,checkRole('ADMIN')], async (req, res)=>{
    const role = req.query.role;
    const listUser = await getUserByRole(role);
    if(!listUser){           
        return res.status(400).send('Không lấy được danh sách người dùng'+' '+role);
    }
    return res.status(200).send(listUser);  
});
// cap nhat nguoi dung
quanLyNguoiDungRouter.put('/' ,authenticate, async (req, res)=>{
    const {id} = req.user;
    const {email,dienThoai,ngaySinh,hoTen} =req.body;
    const updateUser = await updateUserById(id,{
        email,
        dienThoai,
        ngaySinh,
        hoTen,
    });
    if(!updateUser){
        return res.status(500).send('Cập nhật thất bại');
    }
    return res.status(200).send('Cập nhật người dùng thành công');   
});
 // them nguoi dung
quanLyNguoiDungRouter.post('/' ,[authenticate,checkRole('ADMIN')], async (req, res)=>{
    const {taiKhoan, matKhau, email, dienThoai, ngaySinh, hoTen, loaiNguoiDung} = req.body;
    if(!taiKhoan||!matKhau ||!hoTen){
        return res.status(400).send('taikhoan or matkhau or hoten không được để trống');
    }
    const checkAlready = await checkAccount(taiKhoan);
    if(checkAlready == true){
        return res.status(400).send('tài khoản đã tồn tại');
    }
    const matKhauMaHoa = scriptPassword(matKhau);
    const user = await createUser({
        taiKhoan,
        matKhau:matKhauMaHoa,
        dienThoai,
        email,
        ngaySinh, 
        loaiNguoiDung,
        hoTen
    });
    if(!user){
       return res.status(500).send('Thêm người dùng thất bại');
    }
    return res.status(200).send(user);
});
// xoa nguoi dung theo id
quanLyNguoiDungRouter.delete('/:id',[authenticate,checkRole('ADMIN')], async (req, res)=>{
    const {id} = req.params;
    const checkUser = await getUserByID(id);
    if(!checkUser){
        return res.status(400).send('không tìm thấy người dùng');
    }
    const delUser = await deleteUserById(id);
    if(!delUser){
        return res.status(500).send('Xóa người dùng không thành công');
    }
    return res.status(200).send('Người dùng đã được xóa thành công');
});
module.exports = quanLyNguoiDungRouter;
