'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lichChieuPhim extends Model {
    toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.createdAt;
      delete  attributes.updatedAt;
      return attributes;

    };
    static associate({phimInsert,phongChieu,gheXem}) {
      this.belongsTo(phongChieu,{
        foreignKey:'id',
      });
      this.belongsTo(phimInsert,{
        foreignKey:'id'
      });
      this.hasOne(phimInsert,{
        foreignKey:'id'
      });
      this.hasMany(gheXem,{
        foreignKey: 'idLichChieuPhim',
      });
    }
  }
  lichChieuPhim.init({
    maChieuPhim: DataTypes.STRING,
    ngayChieu: DataTypes.DATE,
    gioChieu: DataTypes.TIME,
    idPhongChieu: DataTypes.INTEGER,
    idPhim: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lichChieuPhim',
  });
  return lichChieuPhim;
};