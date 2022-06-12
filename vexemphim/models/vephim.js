'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vePhim extends Model {
    toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.createdAt;
      delete  attributes.updatedAt;
      return attributes;

    };
    static associate({nguoiDung, ctVe, gheXem}) {
      this.belongsTo(nguoiDung,{
        foreignKey: 'id',
      });
      this.hasMany(ctVe,{
        foreignKey: 'idVe',
      });
      this.belongsToMany(gheXem,{through:ctVe,foreignKey:'idGhe'});
    }
  }
  vePhim.init({
    idNguoiDung: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vePhim',
  });
  return vePhim;
};