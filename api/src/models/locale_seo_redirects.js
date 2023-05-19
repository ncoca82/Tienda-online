module.exports = function(sequelize, DataTypes) {
    const LocaleSeo = sequelize.define('LocaleSeoRedirect', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      localeSeoId: {
        type: DataTypes.INTEGER
      },
      language: {
        type: DataTypes.STRING
      },
      group : {
        type: DataTypes.STRING
      },
      key: {
        type: DataTypes.STRING
      },
      subdomain : {
        type: DataTypes.STRING,
      },
      oldUrl : {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'locale_seo_redirects',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
        {
          name: "email",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "email" },
          ]
        },
      ]
    });
  
      LocaleSeoRedirect.associate = function(models) {
      };
  
      return LocaleSeoRedirect;
  };
  