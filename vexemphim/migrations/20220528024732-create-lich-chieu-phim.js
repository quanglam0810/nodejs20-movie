'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lichChieuPhims', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maChieuPhim: {
        allowNull: false,
        type: Sequelize.STRING,
        unique:true
      },
      ngayChieu: {
        allowNull: false,
        type: Sequelize.DATE
      },
      gioChieu: {
        allowNull: false,
        type: Sequelize.TIME
      },
      idPhongChieu: {
        type: Sequelize.INTEGER,
        references: {
          model: 'phongChieus',
          key: 'id',
        },
      },
      idPhim: {
        type: Sequelize.INTEGER,
        references: {
          model: 'phimInserts',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lichChieuPhims');
  }
};