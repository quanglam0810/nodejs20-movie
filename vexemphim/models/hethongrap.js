'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class heThongRap extends Model {
    toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.createdAt;
      delete  attributes.updatedAt;
      return attributes;

    };
    static associate({rapPhim,phongChieu}) {
        this.hasMany(rapPhim,{
        foreignKey: 'idHeThongRap',
      });
      //this.belongsToMany(phongChieu,{through: rapPhim});
    }
  }
  heThongRap.init({
    tenHeThongRap: DataTypes.STRING,
    biDanh: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'heThongRap',
  });
  return heThongRap;
};