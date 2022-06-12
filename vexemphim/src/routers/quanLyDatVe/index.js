'use strick';
const express = require('express');
const { getStartTime, getShowTimeByC ,getRoomById,createShowTime ,createListSeat,getTicketById,getShowTimeById,
    getInfoShowTimeById,getInfoMovie,infoSeat,createTicket,getStatusSeat,createCtVe,getDetailSeat}
    = require('../../../services/quanLyDatVe');
const { authenticate, checkRole } = require('../../middlewares/auth');
const quanLyDatVeRouter = express.Router();
//-- them lich chieu phim
quanLyDatVeRouter.post('/',[authenticate,checkRole('ADMIN')],async (req, res)=>{
    const {idPhim,idPhongChieu,maChieuPhim,soLuongVe,giave} = req.body; 
    let {ngayChieu,gioChieu} = req.body;
    if(!idPhim || !idPhongChieu || !maChieuPhim || !ngayChieu || ! gioChieu || !soLuongVe || !giave){
        return res.status(400).send('dữ liệu lịch chiếu phim không hợp lệ');
    }
    // check tra thoi gian chieu phim voi ngay khoi chieu
     const startTime = await getStartTime(idPhim);
     if(!startTime){
         return res.status(400).status(400).send('phim không tồn tại')
     }
     let ngayChieuConvert = new Date(ngayChieu);

         ngayChieuConvert = ngayChieuConvert.toString();

     let ngayKhoiChieu = startTime.ngayKhoiChieu.toString();

     if(ngayKhoiChieu > ngayChieuConvert){
          return res.status(400).send('phim chưa tới ngày khởi chiếu');
     }
     // check idphong co ton tai
     const checkRoom = await getRoomById(idPhongChieu);
     if(!checkRoom){
        return res.status(400).send('id phòng chiếu không tồn tại');
     }
     // check phong chieu co trung lich chieu hay khong
    const checkShowTimeC = await getShowTimeByC(idPhongChieu);
    if(checkShowTimeC){
        let dateST = checkShowTimeC.ngayChieu.toString();
        let time = checkShowTimeC.gioChieu.toString();
        if( dateST == ngayChieuConvert && time == gioChieu){
        return res.status(400).send('phòng chiếu đã có lịch chiếu phim vào khung giò này');
        }
    }
    // tao lich chieu moi
     const newShowTime = await createShowTime({
        maChieuPhim,
        ngayChieu,
        gioChieu,
        idPhongChieu,
        idPhim,
    });
    if(!newShowTime){
        return res.status(500).send("tạo lịch chiếu thất bại");
    }
   //tao danh sach ghe cho phong chieu
    const listSeat = await createListSeat(newShowTime.id,soLuongVe,giave);
    if(!listSeat){
        return res.status(500).send('Tạo danh sách ghế xem lỗi');
    }
    return res.status(200).send({newShowTime,listSeat});
});
//--- lay lich chieu phim theo id lich chieu
quanLyDatVeRouter.get('/lichChieuPhim/:id',async (req, res)=>{
    const {id} = req.params;
        const ShowTime =await getShowTimeById(id)
         if(!ShowTime){
            return res.status(400).send("mã lịch chiếu không tồn tại");
        }
        const thongTinRap = await getInfoShowTimeById(id);
        if(!thongTinRap){
            return res.status(500).send('lấy thông tin rạp thất bại');
        }
        const thongTinPhim = await getInfoMovie(id);
        if(!thongTinPhim){
            return res.status(500).send('lấy thông tin phim thất bại');
        }
        const thongTinGhe = await infoSeat(id);
        if(!thongTinGhe){
            return res.status(500).send('không lấy được thông tin ghế');
        }
        return  res.status(200).send({thongTinRap,thongTinPhim,thongTinGhe});

});
// dat ve phim
quanLyDatVeRouter.post('/datVe/',[authenticate,checkRole('USER')],async (req, res)=>{
    const {idGhe} = req.body;
    const {idLichChieuPhim} =req.body;
    const user = req.user;
    //create vePhim
    const newTicket = await createTicket(user.id);
    if(!newTicket)
    {
        return res.status(500).send('Đặt vé lỗi');
    }
    //them thong tin chi tiet ve
    const detailTickets =[];
    for(i in idGhe){
        //check trang thai ghe
    const checkSeat = await getStatusSeat(idGhe[i],idLichChieuPhim);
        if(!checkSeat){
            return res.status(400).send("ghế"+": "+idGhe[i]+" không tồn tại");
        }
        if(checkSeat.trangThai ==false){
            return res.status(400).send("ghế"+": "+idGhe[i]+" đã có người đặt");
        }
        //
        const detaiTicket = await createCtVe(newTicket.id,idGhe[i]);
        if(!detaiTicket){
            return res.status(500).send("thêm chi tiết vé lỗi");
        }
        // lay thong tin phong ghe theo  ghe da dat
        const detailRoom = await getDetailSeat(idGhe[i]);
        detailTickets.push({detaiTicket,detailRoom});
    } 
    //
    return res.status(200).send({user,detailTickets});
});
// lay thong tin ve da dat theo id nguoi dung
quanLyDatVeRouter.get('/lichSuDatVe/',[authenticate,checkRole('USER')],async (req, res)=>{
    const user = req.user;
    const listTicket = await getTicketById(user.id);
    if(!listTicket){
        return res.status(500).send("Lỗi không lấy được thông tin vé");
    }
    return res.status(200).send(listTicket);
});

module.exports = quanLyDatVeRouter;