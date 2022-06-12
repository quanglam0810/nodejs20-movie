'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ctVes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idVe: {
        type: Sequelize.INTEGER,
        references: {
          model: 'vePhims',
          key: 'id',
        },
      },
      idGhe: {
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: 'gheXems',
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
    await queryInterface.dropTable('ctVes');
  }
};