'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phimInserts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenPhim: {
        allowNull: false,
        type: Sequelize.STRING
      },
      trailer: {
        allowNull: false,
        type: Sequelize.STRING
      },
      poster: {
        allowNull: false,
        type: Sequelize.STRING
      },
      moTa: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ngayKhoiChieu: {
        allowNull: false,
        type: Sequelize.DATE
      },
      thoiLuong: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phimInserts');
  }
};