'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ctVe extends Model {
    toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.createdAt;
      delete  attributes.updatedAt;
      return attributes;

    };
     static associate({vePhim , gheXem, nguoiDung}) {
      this.belongsTo(gheXem,{
        foreignKey: 'idGhe',
      });
      this.belongsTo(vePhim,{
        foreignKey: 'idVe',
      })
      this.belongsTo(nguoiDung,{
        foreignKey:'id',
      })
    }
  }
  ctVe.init({
    idVe: DataTypes.INTEGER,
    idGhe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ctVe',
  });
  return ctVe;
};