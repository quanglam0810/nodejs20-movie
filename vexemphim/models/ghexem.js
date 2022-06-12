'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gheXem extends Model {
    toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.createdAt;
      delete  attributes.updatedAt;
      return attributes;

    };
     static associate({lichChieuPhim, ctVe, vePhim}) {
      this.belongsTo(lichChieuPhim,{
        foreignKey: 'idLichChieuPhim',
      });
      this.hasMany(ctVe,{
        foreignKey: 'idGhe',
      });
      this.belongsToMany(vePhim,{through:ctVe,foreignKey:'idGhe'});
    }
  }
  gheXem.init({
    tenGhe: DataTypes.STRING,
    loaiGhe: DataTypes.STRING,
    giave: DataTypes.INTEGER,
    trangThai: DataTypes.BOOLEAN,
    idLichChieuPhim: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gheXem',
  });
  return gheXem;
};