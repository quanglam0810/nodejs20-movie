'use strick';
const {Op} = require('sequelize');
const {nguoiDung} = require("../../models");
const {anhDaiDien} = require("../../models");


const createUser = async (user) => {
    try{
        const newUser = await nguoiDung.create(user);
         return newUser;
      }catch(error){
        console.log({error});
        return null;
      }
};

const getUserByAccount = async (taiKhoan) => {
    try {
      const user = await nguoiDung.findOne({
        where: {
         taiKhoan,
        },
      });
       return user;
     }catch (error) {
        console.log({ error });
       return null;
    }
};

const getUserPaging = async(offSet,pageSize)=>{
  try{
    const listUser = await nguoiDung.findAll({
      limit: pageSize,
      offset: offSet,
    });
    return listUser;
  }catch(error){
    console.log(error);
    return null;
  }
};

const searchUser = async(tukhoa)=>{
    try{
      const listUser = await nguoiDung.findAll({
        where:{
          hoTen:{[Op.like]:'%'+tukhoa+'%'},
        },
      });
      return listUser;
    }catch(error){
      console.log(error);
      return null;
    }
};

const searchUserPaging = async(tukhoa,offSet,pageSize)=>{
  try{
    const listUser = await nguoiDung.findAll({
      where:{
        hoTen:{[Op.like]:'%'+tukhoa+'%'},
      },
      limit: pageSize,
      offset:offSet,
    });
    return listUser;
  }catch(error){
    console.log(error);
    return null;
  }
};

const checkAccount = async (taiKhoan) =>{
    try{
      const user = await nguoiDung.findOne({
        where:{
          taiKhoan,
        },
      });
      if(user){
        return true;
      }
        return false;
    }catch(error){
      console.log(error);
        return null;
    }
};

const getListUser = async () =>{
    try {
        const listUser = await nguoiDung.findAll();
        return listUser;
    }catch(error){
        console.log(error);
        return null;
    }
};

const getUserByID = async (id) => {
    try {
      const user = await nguoiDung.findOne({
        where: {
          id,
        },
      });
       return user;
    }catch(error) {
      console.log({ error });
      return null;
    }
};

const storageAvatar = async (duongDan,idNguoiDung) =>{
    try{
      const avatar = await anhDaiDien.create({
        duongDan,
        trangThai:true,
        idNguoiDung,
      });
      await anhDaiDien.update({trangThai:false},{
        where:{
          idNguoiDung,
          id: {
            [Op.not]: avatar.id,
          },
        },
      });
        return avatar;
    }catch(error){
        console.log(error);
        return null;
    }
};

const getUserByRole = async (role)=>{
    try{
      const listUser = await nguoiDung.findAll({
        where:{
          loaiNguoiDung:role,
        }
      });
      return listUser;
   }catch(error){
    console.log(error);
    return null;
   }
};

const updateUserById = async(id,data)=>{
  try{
    const upUser = await nguoiDung.update(data,{
      where:{
        id:id,
      }
    })
    return upUser;
  }catch(error){
    console.log(error);
    return null;
  }
};

const deleteUserById = async(id)=>{
  try{
    const delUser = await nguoiDung.destroy({
      where:{
        id:id,
      }
    });
    return delUser;

  }catch(error){
    console.log(error);
    return null;
  }
};

module.exports = {
    createUser,
    getUserByAccount,
    getListUser,
    getUserByID,
    storageAvatar,
    checkAccount,
    getUserPaging,
    searchUser,
    searchUserPaging,
    getUserByRole,
    updateUserById,
    deleteUserById,
};