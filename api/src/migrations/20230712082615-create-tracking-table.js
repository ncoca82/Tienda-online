'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tracking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ip: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      resource: {
        allowNull: false,
        type: Sequelize.STRING
      },
      method: {
        allowNull: false,
        type: Sequelize.STRING
      },
      statusCode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('tracking');
  }
};