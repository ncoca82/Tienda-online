module.exports = function(sequelize, DataTypes) {
    const Company = sequelize.define('Company', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        fiscalName: {
            type: DataTypes.STRING(255),
        },
        comercialName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Nombre".'
                }
            }
        },
        nif: {
            type: DataTypes.STRING(255),
        },
        comercialAddress: {
            type: DataTypes.STRING(255),
        },
        postalCode: {
            type: DataTypes.STRING(255),
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Email".'
                }
            }
        },
        web: {
            type: DataTypes.STRING(255),
        },
        telephone: {
            type: DataTypes.STRING(255),
        },
        
    }, {
        sequelize,
        tableName: 'companies',
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

    Company.associate = function(models) {
    };

    return Company;
};