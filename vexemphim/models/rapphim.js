'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rapPhim extends Model {
    toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.createdAt;
      delete  attributes.updatedAt;
      return attributes;

    };
    static associate({heThongRap,phongChieu}) {
      this.belongsTo(heThongRap,{
        foreignKey: 'id',
      });
      this.hasMany(phongChieu,{
        foreignKey: 'idRapPhim',
      });
    }
  }
  rapPhim.init({
    tenRapPhim: DataTypes.STRING,
    diaChi: DataTypes.STRING,
    logo: DataTypes.STRING,
    idHeThongRap: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rapPhim',
  });
  return rapPhim;
};