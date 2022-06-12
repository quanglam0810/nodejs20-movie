'use strick';
const { Op } = require("sequelize");
const {phimInsert} = require("../../models");
///-- 
const getAllMovies = async ()=>{
    try{
        const movies = await phimInsert.findAll();
        return movies;
    }
    catch(error){
        console.log(error);
        return null;
    }
};
// lay phim phan trang
const getMoviePagination  = async(param1,param2) =>{
    try{
        const movie = await phimInsert.findAll({
            limit: param2,
           offset: param1,
        });
        return movie;
    }catch(error){
        console.log(error);
        return null;
    }
};
//--- them phim
const createMovie = async (movie) => {
    try{
        const newMovie = await phimInsert.create(movie);
        return newMovie;
        }catch (error){
       console.log({error});
        return null;
        }
};
//
const checkMovieExit = async (id)=>{
    try{
        const movie = await phimInsert.findOne({
            where:{
                id,
            },
        });
        if(!movie){
            return false;
        }
        return true;
    }
    catch(error)
    {
        return false;
    }
};
// delete movie by id
const deleteMovieById = async (id)=>{
    try{
        const movie = await phimInsert.destroy({
            where:{
                id,
            },
        });
        return movie;
    }
    catch(error){
        console.log(error);
        return null;
    }
};
// lay phim theo idphim
const getMovieById = async (id)=>{
    try{
        const movie = await phimInsert.findOne({
            where:{
                id,
            },
        });
        return movie;     
    }
    catch(error){
        console.log(error);
        return null;
    }
};
// cap nhat phim
const updateMovieById = async (id, data)=>{
    try{
        const movie = await phimInsert.update(data, {
            where:{
                id,
            }
        });      
        return movie;
    }
    catch(error){
        console.log(error);
        return null;
    }
};
// lay danh sach phim theo ngay
const getMovieByDate = async(date1,date2,offSet,size)=>{
    try{
        const listMovie = await phimInsert.findAll({
            where:{
                ngayKhoiChieu:{
                    [Op.gt]: date1,
                },
                [Op.and]:{ngayKhoiChieu:  {[Op.lt]: date2}  }  ,      
            },
            limit: size,
            offset:offSet,
        });
        return listMovie;
    }catch(error){
        console.log(error);
        return null;
    }
}
module.exports = {
    getAllMovies,
    createMovie,
    checkMovieExit,
    deleteMovieById,
    getMovieById,
    updateMovieById,
    getMoviePagination,
    getMovieByDate,
};
