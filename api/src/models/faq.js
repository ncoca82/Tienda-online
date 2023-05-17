module.exports = function(sequelize, DataTypes) {
    const Faq = sequelize.define('Faq', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Name".'
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
            allowNull: false,
            type: DataTypes.TEXT,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Description".'
                }
            }
        },
        order: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue:0,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Order".'
                }
            }
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
        tableName: 'faqs',
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

    Faq.associate = function(models) {
    };

    return Faq;
};