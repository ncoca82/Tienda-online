'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locale_seos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      language: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      group: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      key: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }, 
      subdomain: {
        type: Sequelize.STRING
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      keywords: {
        type: Sequelize.STRING
      },
      redirection: {
        type: Sequelize.BOOLEAN,
        default:0
      },
      menu: {
        type: Sequelize.BOOLEAN,
        default:1
      },
      subdomain: {
        allowNull: false,
        type: Sequelize.STRING
      },
      changeFrequency: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.DECIMAL
      },
      sitemap: {
        type: Sequelize.DECIMAL,
        default:1
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
    await queryInterface.dropTable('locale_seos');
  }
};