'use strick';
const express = require('express');

const { getAllMovies, checkMovieExit, deleteMovieById, getMovieById,updateMovieById,
        getMovieByDate,
        getMoviePagination 
        } = require('../../../services/quanLyPhim');

const {countRecord} = require('../../../services/pagination');

const { createMovie } = require('../../../services/quanLyphim');

const { uploadPoster } = require('../../middlewares/upload');

const { SYSTEM } = require('../../config');

const { authenticate, checkRole } = require('../../middlewares/auth');

const quanLyPhimRouter = express.Router();
// lay danh sach phim
quanLyPhimRouter.get('/' , async (req, res)=>{  
    const movies = await getAllMovies();
    if(!movies){
       return res.status(500).send('không lấy được danh sách phim ');
    }
    return res.status(200).send(movies);
});
// lay danh sach phim phan trang
quanLyPhimRouter.get('/:page/:pageSize' , async (req, res)=>{ 
    let {page,pageSize} =req.params;
    //  so trang
    page = parseInt(page);
    // so ban ghi tren 1 trang
    pageSize = parseInt(pageSize);
    if(!page || !pageSize){
        return res.status(400).send('số trang hoặc số phần tử trên trang không hợp lệ');
    }
    let offSet;
    const data = await getAllMovies();
    // dem so ban ghi danh sach phim
    const totalMovie = await countRecord(data);
    offSet = (pageSize*page)-pageSize;
    // tinh so trang
    const totalPage = Math.ceil(totalMovie/pageSize);
    const item = await getMoviePagination(offSet,pageSize);
    if(!item){
        return res.status(500).send("không lấy được danh sách phim");
    }
    return res.send({totalMovie,totalPage,page,pageSize,item});
});
// lay danh sach phim theo ngay phan trang
quanLyPhimRouter.get('/layDanhSachPhimTheoNgay?' , async (req, res)=>{   
    const {tungay,denngay} = req.body;
    let {page,pageSize} =req.query;
    page = parseInt(page);
    pageSize = parseInt(pageSize);
    if(!page || !pageSize){
        return res.status(400).send('số trang hoặc số phần tử trên trang không hợp lệ');
    }
    let offSet = (pageSize*page)-pageSize;
    if(!tungay || !denngay){
        return res.status(400).send('Lỗi');
    }
    const listMovie = await getMovieByDate(tungay,denngay,offSet,pageSize);
    if(!listMovie){
        return res.status(500).send('không lấy được danh sách phim');
    }
    return res.status(200).send(listMovie);
});
// them phim
 quanLyPhimRouter.post('/',[authenticate,checkRole('ADMIN')], async(req, res) =>{
    const {tenPhim,trailer,moTa,ngayKhoiChieu,thoiLuong,poster} = req.body;
    
    if(!tenPhim || !tenPhim.trim()){
        return res.status(400).send('tên phim không hợp lệ');
    }
    if(!ngayKhoiChieu || ngayKhoiChieu > Date.now()){
        return res.status(400).send('Ngày khởi chiếu không hợp lệ');
    }
    if( thoiLuong<90 || thoiLuong >150){
        return res.status(400).send('Thời lượng phim không hợp lệ');
    }
    const movie = await createMovie({
        tenPhim,
        trailer,
        poster,
        moTa,
        ngayKhoiChieu,
        thoiLuong,
    });
    if(!movie){  
      return res.status(500).send('Lỗi, thêm phim không thành công');  
    }
    return res.status(200).send(movie);
 });
// xoa phim
 quanLyPhimRouter.delete('/:id' ,[authenticate,checkRole('ADMIN')], async (req, res)=>{  
    const {id} = req.params;
    const checkExit = await checkMovieExit(id);
    if(!checkExit){
       return res.status(400).send('idPhim '+' '+id+' '+' không tồn tại');
    }
    const item = await deleteMovieById(id);
    if(!item) {
       return res.status(500).send("Xóa phim không thành công !.");
    }
    return res.status(200).send("Phim đã được xóa thành công.");
});
// lay phim theo id
quanLyPhimRouter.get('/:id', async(req, res)=>{
    const {id} = req.params;
    const movie = await getMovieById(id);
    if(!movie){
       return res.status(400).send('id phim Không tồn tại.');
    }
    return res.status(200).send(movie);
});
// cap nhat phim
quanLyPhimRouter.put('/:id', [authenticate,checkRole('ADMIN')],async(req, res)=>{
    const {id} = req.params;

    const {tenPhim,trailer,poster,moTa,ngayKhoiChieu,thoiLuong} = req.body; 

    const checkExit = await checkMovieExit(id);
    if(!checkExit){
       return res.status(400).send('idPhim '+' '+id+' '+'không tồn tại');
    }
    const movieUpdated = await updateMovieById(id,{
        tenPhim,
        trailer,
        poster,
        moTa,
        ngayKhoiChieu,
        thoiLuong,
    });
    if(!movieUpdated){
        return res.status(500).send("Cập nhật phim không thành công");
    }
    return res.status(200).send("cập nhật phim thành công"+": "+id);
});
// them poster phim
quanLyPhimRouter.post('/poster', uploadPoster(),[authenticate,checkRole('ADMIN')],async(req, res)=>{
    const file = req.file;
    if(!file){
        return res.status(400).send('không nhận được hình ảnh');
    }
    const url = `${SYSTEM.DOMAIN}/${file.path}`;
    if(!url){
        return res.status(400).send('Tải ảnh lên không thành công');
    }
    return res.status(200).send(url);
});
// them phim upload poster
quanLyPhimRouter.post('/themPhimUploadPoster', uploadPoster(),[authenticate,checkRole('ADMIN')],async(req, res)=>{
    const file = req.file;
    const {tenPhim,trailer,moTa,ngayKhoiChieu,thoiLuong} = req.body;
    
    if(!tenPhim || !tenPhim.trim()){
        return res.status(400).send('tên phim không hợp lệ');
    }
    if(!ngayKhoiChieu || ngayKhoiChieu > Date.now()){
        return res.status(400).send('Ngày khởi chiếu không hợp lệ');
    }
    if(!file){
        return res.status(400).send('không nhận được hình ảnh');
    }
    const poster = `${SYSTEM.DOMAIN}/${file.path}`;
    if(!poster){
        return res.status(400).send('Tải ảnh lên không thành công');
    }
    const movie = await createMovie({
        tenPhim,
        trailer,
        poster,
        moTa,
        ngayKhoiChieu,
        thoiLuong,
    });
    if(!movie){  
      return res.status(500).send('Lỗi, không thêm phim không thành công');  
    }
    return res.status(200).send(movie);
 });
 // update phim upLoad poster
 quanLyPhimRouter.put('/poster/:id', uploadPoster(),[authenticate,checkRole('ADMIN')],async(req, res)=>{
    const {id} = req.params;

    const file = req.file;

    const {tenPhim,trailer,moTa,ngayKhoiChieu,thoiLuong} = req.body; 

    const checkExit = await checkMovieExit(id);
    if(!checkExit){
       return res.status(400).send('idPhim '+' '+id+' '+'không tồn tại');
    }
    if(!file){
        return res.status(400).send('không nhận được hình ảnh');
    }
    const poster = `${SYSTEM.DOMAIN}/${file.path}`;
    if(!poster){
        return res.status(400).send('Tải ảnh lên không thành công');
    }
    const movieUpdated = await updateMovieById(id,{
        tenPhim,
        trailer,
        poster,
        moTa,
        ngayKhoiChieu,
        thoiLuong,
    });
    if(!movieUpdated){
        return res.status(500).send('Cập nhật phim không thành công.');
    }
    res.status(200).send('Cập nhật phim thành công.'+": "+id);
});
 module.exports = quanLyPhimRouter;
