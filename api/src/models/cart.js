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
        indexes: [
            {
            unique: true,
            fields: ['customerId', 'fingerprintId']
    }]
    });

    Cart.associate = function(models) {
        Cart.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
        Cart.belongsTo(models.Fingerprint, { as: 'product', foreignKey: 'fingerprintId' });
    };

    return Cart;
};