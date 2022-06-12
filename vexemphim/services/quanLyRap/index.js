'use strick';
const {Op} = require('sequelize');
const {heThongRap,rapPhim,phongChieu,lichChieuPhim,phimInsert} = require("../../models");
// lay danh sach he thong rap
const getAllSystemCinema = async ()=>{
    try{
        const cinemas = await heThongRap.findAll();
        return cinemas;
    }catch(error)
    {
        console.log(error);
        return null;
    }
};
// lay thong tin he thong rap theo id
const getSystemCinemaById = async (idHeThong)=>{
    try{
        const cinema = await heThongRap.findOne({
            where:{
                id:idHeThong,
            },
        });
        return cinema;
    }catch(error){
        console.log('error');
        return null;
    }
};
// lay thong tin rap theo id rap
const getCinemaById = async (id)=>{
    try{
        const cinema = await rapPhim.findOne({
            where:{
                id:id,
            },
        });
        return cinema;
    }catch(error){
        console.log('error');
        return null;
    }
};
// lay thong tin phong chieu, rap chieu theo id he thong rap
const getCinemaFlexById = async(id)=>{
    try{
        const cinemaFlexs = await heThongRap.findAll({
            where:{
                id,
            },
            include:
            {
            model: rapPhim,       
            include:{
                model:phongChieu,
            },
            },                       
        });
        return cinemaFlexs;
    }catch(error){
        console.log(error);
        return null;
    }
};
// lay thong phong chieu cua rap chieu theo id rap chieu
const getCinemaRoomById = async (id)=>{
    try{
        const listRoom = await rapPhim.findAll({
            where :{                
                id,
            },
            include:{
                model: phongChieu,
                where:{
                    idRapPhim : id,
                }
            }
        });
        return listRoom;

    }catch(error){
        console.log(error);
        return null;
    }
};
//-- lay thong tin lich chieu phim theo ma he thong
const getListMovieTime = async (idHeThong)=>{
    try{
        const listMovieTime = await heThongRap.findAll({
            where:{
                id:idHeThong,
            },
            include: {
                model:rapPhim,
                where:{
                    idHeThongRap:idHeThong,
                },
                include:{
                    model:phongChieu,
                    where:{
                    },
                     include:{
                        model: lichChieuPhim, 
                        where:{
                        },             
                     },                                             
                },
            },
        });
        return listMovieTime;
    }catch(error){
        console.log(error);
        return null;
    }
};
// lay thong tin phim, lich chieu phim , rap chieu, phong chieu theo id lich chieu
const getShowTimeByIdMovie = async(idPhim)=>{
    try{
        const movieInfo = await phimInsert.findAll({
            where: {
                id:idPhim,
            },
        });
        const cinemaInfo = await heThongRap.findAll({
            where:{              
            },
            include:{
                model:rapPhim,
                where:{
                },
                include:{
                    model:phongChieu,
                    where:{

                    },
                    include:{
                        model: lichChieuPhim,
                        where:{
                            idPhim:idPhim,
                        },
                    }
                }
            }
        });
        const list ={movieInfo,cinemaInfo};
        return list;
    }catch(error){
        console.log(error)
            return null;    
    }
};
module.exports = {
    getAllSystemCinema,
    getCinemaById,
    getCinemaFlexById,
    getCinemaRoomById,
    getListMovieTime,
    getShowTimeByIdMovie,
    getSystemCinemaById,
}