'use strick';
const express = require('express');

const {getSystemCinemaById,getAllSystemCinema,
    getCinemaById,getCinemaFlexById,
    getCinemaRoomById,getListMovieTime,
    getShowTimeByIdMovie
    } = require('../../../services/quanLyRap');

const {checkMovieExit} = require('../../../services/quanLyPhim');

const quanLyRapRouter = express.Router();
// lay danh sach he thong rap
quanLyRapRouter.get('/', async (req, res)=>{
    const listSystemCinema = await getAllSystemCinema();
    if(!listSystemCinema){
        return res.status(500).send("Lấy danh sách hệ thống rạp thất bại");
    }
    return res.status(200).send(listSystemCinema);
});
// lay thong tin he thong rap theo id
quanLyRapRouter.get('/:id', async (req, res)=>{
    const{id} = req.params;
    const  systemCinema = await getSystemCinemaById(id);
    if(!systemCinema){
        return res.status(500).send("Lấy thông tin hệ thống rạp thất bại");
    }
    return res.status(200).send(systemCinema);
});
// lay danh sach phong & cum rap theo id he thong rạp
quanLyRapRouter.get('/layThongTinCumRap/:id', async (req, res)=>{
    const{id} = req.params;
    const cinemaSys = await getSystemCinemaById(id);
    if(!cinemaSys){
        return res.status(400).send("Mã rạp không tồn tại");
    }
    const  cinemaFlex = await getCinemaFlexById(id);
    if(!cinemaFlex){
        return res.status(500).send("lấy thông tin rạp không thành công");
    }
    return res.status(200).send(cinemaFlex);
});
// lay thong tin rap theo mã rạp
quanLyRapRouter.get('/layThongTinPhongTheoRap/:id', async (req, res)=>{
    const{id} = req.params;
    const cinema = await getCinemaById(id);
    if(!cinema){
        return res.status(400).send('Mã rạp không tồn tại');
    }
    const  infoCinema = await getCinemaRoomById(id);
    if(!infoCinema){
        return res.status(500).send("không lấy được thông tin rạp");
    }
    return res.status(200).send(infoCinema);
});
// lay thong tin lich chieu theo id he thong rap
quanLyRapRouter.get('/lichChieuHeThong/:id', async(req, res)=>{
    const {id} = req.params;
    const cinema = await getCinemaById(id);
    if(!cinema){
        return res.status(400).send('Mã rạp không tồn tại');
    }
    const showTime = await getListMovieTime(id);
    if(!showTime){
        return res.status(500).send('lấy thông tin lịch chiếu phim thất bại');
    } 
    // check null
    if((Object.entries(showTime).length === 0)==true){
        return res.status(500).send('hệ thống rạp chưa có lịch chiếu phim nào');
    }
    return res.status(200).send(showTime);

});
// lay thong tin lich chieu theo id phim
quanLyRapRouter.get('/lichChieuPhim/:id', async(req, res)=>{
    const {id} = req.params;
    const checkMovie = await checkMovieExit(id);
    if(!checkMovie){
        return res.status(400).send('id phim không tồn tại');
    }
    const listShowTime = await getShowTimeByIdMovie(id);
    if(!listShowTime){
        return res.status(400).send('lấy danh sách phòng chiếu lỗi');
    }
    // check null
    if((Object.entries(listShowTime.cinemaInfo).length === 0)==true){
        return res.status(500).send('phim chưa có lịch chiếu nào');
    }
    return res.status(200).send(listShowTime);
});

module.exports = quanLyRapRouter;