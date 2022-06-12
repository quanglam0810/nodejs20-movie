'use strick';
const {} = require('sequelize');
const { Op } = require("sequelize");
const {lichChieuPhim,phimInsert,phongChieu,gheXem,rapPhim,heThongRap,ctVe,vePhim,nguoiDung} = require("../../models");
// them ghe theo id lich chieu phim
const createListSeat = async (idLichChieuPhim,soLuongVe,giave)=>{
    try{
        const listSeat = [];
        for(let i =1 ;i<= soLuongVe ;i++){
            const loaiGhe = "don";
            let tenGhe = ("Ghe so"+":"+i);
            const trangThai = true;
            const newSeat = await gheXem.create({
                tenGhe,
                loaiGhe,
                giave,
                trangThai,
                idLichChieuPhim,
            });
            listSeat.push(newSeat);
        } 
        return listSeat;
    }
    catch(error){
        console.log(error);
        return null;
    }
};
// lay thong tin trang thai ghe
const getStatusSeat = async(idSeat,idLichChieu) =>{
    try{
        const statusSeat = await gheXem.findOne({
            where:{
                id: idSeat,
                [Op.and]:{idLichChieuPhim:idLichChieu},
            },
            attributes:['trangThai'],
        });
        return statusSeat;
    }catch(error){
        console.log(error);
        return null;
    }
};
// lay thong tin phong chieu theo id
const getRoomById = async (id)=>{
    try{
    const roomInfo = await phongChieu.findOne({
        where:{
            id,
        }
    });
    return roomInfo;
    }catch(error){
        console.log(error);
        return null;
    }
};
// lay thong tin phong chieu theo idphong chieu
const getShowTimeById = async(id)=>{
    try{
        const showTime = await lichChieuPhim.findOne({
            where:{
                id,
            }
        });
        return showTime;

    }catch(error){
        console.log(error);
        return null;
    }
};
// lay thong thong tin lich chieu theo idphong chieu
const getShowTimeByC = async(idPhongChieu)=>{
    try{
    const getTime = await lichChieuPhim.findOne({
        where:{
            idPhongChieu:idPhongChieu,
        },
        attributes:['ngayChieu','gioChieu'],
    });
    return getTime;
    }catch(error){
        console.log(error);
        return null;
    }
};
// lay ngay khoi chieu cua phim theo id phim
const getStartTime = async(idMovie)=>{
    try{
        const startTime = await phimInsert.findOne({
            where:{
                id:idMovie,
            },
            attributes:['ngayKhoiChieu'],
        });
        return startTime;
    }catch(error){
        console.log(error);
        return null;
    }
};
// tao lich chieu phim
const createShowTime = async(data)=>{
    try{
    const newShowTime = await lichChieuPhim.create(data);
    return newShowTime;
    }
    catch(error){
        console.log(error);
        return null;
    }
};
// lay thong tin he thong lich chieu
const getInfoShowTimeById = async (idLichChieu)=>{
    try{
        const info = heThongRap.findAll({
            where:{              
            },
            attributes:['tenHeThongRap'],
            include:{
                model:rapPhim,
                 where:{
                     },
                     attributes:['tenRapPhim','diaChi'],
                include:{
                    model:phongChieu,
                    where:{},
                    attributes:['tenPhong'],
                    include:{
                        model:lichChieuPhim,
                        where:{
                            id:idLichChieu,
                        },
                        attributes:['ngayChieu','gioChieu'],
                    },

                }
             }
        });
        return info;
    }
    catch(error){
        console.log(error);
        return null;
    }
};
//lay thong tin phim theo lich chieu
const getInfoMovie = async(id)=>{
    try{
        const infoMovie = phimInsert.findAll({
            where:{
                
            },
            attributes:['tenPhim','poster'],
            include:{
                model:lichChieuPhim,
                where:{
                    id,
                },
                attributes:[],
            }
        });
        return infoMovie;

    }catch(error){
        console.log(error);
        return null;
    }
};
//lay thong tin danh sach ghe theo ma lich chieu
const infoSeat = async(id)=>{
    try{
        const seat = gheXem.findAll({
            where:{
                idLichChieuPhim:id,
            },
            include:{
                model:ctVe,
                attributes:['idVe'],
                include:{
                    model: vePhim,
                    attributes:['idNguoiDung'],
                }
            }
        });
        return seat;
    }catch(e){
        console.log(e);
        return null;
    }
};
// them vePhim
const createTicket = async (idNguoiDung)=>{
    try{
    const newTicket = vePhim.create({
        idNguoiDung,
    });
    return newTicket;
    }catch(error){
        console.log(error);
        return null;
    }
};
//them chi tiet ve theo idve + update trang thai ghe
const createCtVe = async(idVe,idGhe)=>{
    try{
        const create = ctVe.create({
            idVe,
            idGhe,
        });
        await gheXem.update({trangThai:false},{
            where:{
              id:idGhe,            
            },
          });
        return create;  
    }catch(error){
        console.log(error)
    }
}
// lay thon tin phong ve theo id ghe 
const getDetailSeat = async(idGhe)=>{
    try{
    const detail = await gheXem.findOne({
        where:{
            id:idGhe,
        },
    });
    return detail;
    }catch(error){
        console.log(error);
        return null;
    }
};
//lay danh sach ve theo id nguoi dung
const getTicketById = async(id)=>{
    try{
        const listTicket = await vePhim.findAll({
            where:{
                idNguoiDung: id,
            },
            include:{
                model:ctVe,
                where:{},
                include:{
                    model:gheXem,
                    where:{},
                    include:{
                        model:lichChieuPhim,
                        where:{},              
                    }
                },
            }
        });
        return listTicket;
    }catch(error){
        console.log(error);
        return null;
    }
}
module.exports = {
    createShowTime,
    getShowTimeByC,
    createListSeat,
    getStatusSeat,
    getStartTime,
    getRoomById,
    getInfoShowTimeById,
    getInfoMovie,
    infoSeat,
    createTicket,
    createCtVe,
    getDetailSeat,
    getTicketById,
    getShowTimeById,
};