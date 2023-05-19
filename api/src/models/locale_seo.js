module.exports = function(sequelize, DataTypes) {
  const LocaleSeo = sequelize.define('LocaleSeo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    language: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Please fill in the "Language" field.'
        }
      }
    },
    group: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Please fill in the "Language Alias" field.'
        }
      }
    },
    key: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    subdomain: {
      type: DataTypes.STRING
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Please fill in the "url" field.'
        }
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Please fill in the "Title" field.'
        }
      }
    },
    description: {
      type: DataTypes.STRING
    },
    keywords: {
      type: DataTypes.STRING
    },
    redirection: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    menu: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    changeFrequency: {
      type: DataTypes.STRING
    },
    priority: {
      type: DataTypes.DECIMAL
    },
    sitemap: {
      type: DataTypes.DECIMAL,
      defaultValue: 1
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
    tableName: 'locale_seos',
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

    LocaleSeo.associate = function(models) {
    };

    return LocaleSeo;
};
