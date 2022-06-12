'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gheXems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenGhe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      loaiGhe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      giave: {
        type: Sequelize.INTEGER
      },
      trangThai: {
        type: Sequelize.BOOLEAN
      },
      idLichChieuPhim: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lichChieuPhims',
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
    await queryInterface.dropTable('gheXems');
  }
};