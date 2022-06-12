'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phongChieu extends Model {
    toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.createdAt;
      delete  attributes.updatedAt;
      return attributes;
    };
    static associate({rapPhim,lichChieuPhim,phimInsert}) {
      this.belongsTo(rapPhim,{
        foreignKey: 'id',
      });
      this.hasMany(lichChieuPhim,{
        foreignKey:'idPhongChieu',
      });
     //this.belongsToMany(phimInsert,{through:lichChieuPhim,foreignKey:'idPhim'});
    }
  }
  phongChieu.init({
    tenPhong: DataTypes.STRING,
    loaiPhong: DataTypes.STRING,
    idRapPhim: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'phongChieu',
  });
  return phongChieu;
};