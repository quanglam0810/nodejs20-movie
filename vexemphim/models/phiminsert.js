'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phimInsert extends Model {
    toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.createdAt;
      delete  attributes.updatedAt;
      return attributes;

    };
    static associate({lichChieuPhim,phongChieu}) {
      this.hasMany(lichChieuPhim,{
        foreignKey:'idPhim',
      });
     // this.belongsToMany(phongChieu,{through:lichChieuPhim,foreignKey:'idPhim'});
    }
  }
  phimInsert.init({
    tenPhim: DataTypes.STRING,
    trailer: DataTypes.STRING,
    poster: DataTypes.STRING,
    moTa: DataTypes.STRING,
    ngayKhoiChieu: DataTypes.DATE,
    thoiLuong: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'phimInsert',
  });
  return phimInsert;
};