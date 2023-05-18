module.exports = function(sequelize, DataTypes) {
    const Locale_seo = sequelize.define('Locale_seo', {
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
                    msg: 'Por favor, rellena el campo "Language".'
                }
            }
          },
          
          group: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Language Alias".'
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
                    msg: 'Por favor, rellena el campo "url".'
                }
            }
          },
          title: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Title".'
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
            default:0
          },
          menu: {
            type: DataTypes.BOOLEAN,
            default:1
          },
          subdomain: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Subdomain".'
                }
            }
          },
          changeFrequency: {
            type: DataTypes.STRING
          },
          priority: {
            type: DataTypes.DECIMAL
          },
          sitemap: {
            type: DataTypes.DECIMAL,
            default:1
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

    Locale_seo.associate = function(models) {
    };

    return Locale_seo;
};