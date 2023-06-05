module.exports = function(sequelize, DataTypes) {
    const Cart = sequelize.define('Cart', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        customerId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Customer',
                key: 'id'
            },
        },
        fingerprintId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Fingerprint',
                key: 'id'
            },
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
        tableName: 'carts',
        timestamps: true,
        paranoid: true,
        indexes: []
    });

    Cart.associate = function(models) {
        Cart.belongsTo(models.Customers, { as: 'customer', foreignKey: 'customerId' });
        Cart.belongsTo(models.Fingerprints, { as: 'fingerprint', foreignKey: 'fingerprintId' });
    };

    return Cart;
};