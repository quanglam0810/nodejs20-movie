'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('anhDaiDiens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      duongDan: {
        type: Sequelize.STRING
      },
      trangThai: {
        type: Sequelize.BOOLEAN
      },
      idNguoiDung: {
        type: Sequelize.INTEGER,
        references: {
          model: 'nguoiDungs',
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
    await queryInterface.dropTable('anhDaiDiens');
  }
};