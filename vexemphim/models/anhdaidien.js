'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anhDaiDien extends Model {
    toJSON(){
      const attributes =Object.assign({}, this.get());
      delete attributes.createdAt;
      delete  attributes.updatedAt;
      return attributes;

    };
    static associate({nguoiDung}) {
      this.belongsTo(nguoiDung,{
        foreignKey:'idNguoiDung',
      });
    }
  }
  anhDaiDien.init({
    duongDan: DataTypes.STRING,
    trangThai: DataTypes.BOOLEAN,
    idNguoiDung: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'anhDaiDien',
  });
  return anhDaiDien;
};