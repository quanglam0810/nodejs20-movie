'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nguoiDung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.matKhau;
      delete attributes.updatedAt;
      delete attributes.createdAt;
      return attributes;

    };

    static associate({anhDaiDien,vePhim}) {
      this.hasMany(anhDaiDien,{
        foreignKey: 'idNguoiDung',
        as:'avatar',
      });
      this.hasMany(vePhim,{
        foreignKey: 'idNguoiDung',
      });
    }
  }
  nguoiDung.init({
    taiKhoan: DataTypes.STRING,
    matKhau: DataTypes.STRING,
    email: DataTypes.STRING,
    dienThoai: DataTypes.STRING,
    ngaySinh: DataTypes.DATE,
    hoTen: DataTypes.STRING,
    loaiNguoiDung: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nguoiDung',
  });
  return nguoiDung;
};