'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phongChieus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenPhong: {
        allowNull: false,
        type: Sequelize.STRING
      },
      loaiPhong: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idRapPhim: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rapPhims',
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
    await queryInterface.dropTable('phongChieus');
  }
};