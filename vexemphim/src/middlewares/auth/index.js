'use strick';

const { decodeToken } = require("../../../services/auth");
const { getUserByID } = require("../../../services/quanLyNguoiDung");

const authenticate = async (req, res, next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ','');
         const data = decodeToken(token);       
         const user = await getUserByID(data.id);
         if(!user){
             res.status(400).send('invalid token');
         }
         req.user = user;       
        next();
    }
    catch(error){
        res.status(500).send('server error');
    }
};
const checkRole = (role) => (req, res, next) => {
        const user = req.user;
      
        if (user.loaiNguoiDung !== role) {
          return res.status(401).send('can not access');
        }
        next();
      };
module.exports ={
    authenticate,
    checkRole
}
