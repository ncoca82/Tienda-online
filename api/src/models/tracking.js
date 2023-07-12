module.exports = function (sequelize, DataTypes) {

    const Tracking = sequelize.define('Tracking', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        resource: {
            type: DataTypes.STRING,
            allowNull: false
        },
        method: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statusCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        }, {
        sequelize,
        tableName: 'tracking',
        timestamps: true,
        paranoid: true,
        indexes: [
            {
            name: 'tracking_userId_index',
            using: 'BTREE',
            fields: [
                { name: 'userId' }
            ]
            }
        ]
        });

    Tracking.associate = function (models) {
        Tracking.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    };


    return Tracking;
};