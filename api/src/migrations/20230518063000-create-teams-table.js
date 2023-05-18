'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dateOfBirth: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      telephone: {
        type: Sequelize.INTEGER,
        unique: true
      },
      hiringDate: {
        type: Sequelize.DATE
      },
      job: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      companyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      imagesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }, 
      socialMediaId: {
        allowNull: false,
        type: Sequelize.INTEGER,

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
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};

