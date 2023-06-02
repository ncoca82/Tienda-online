'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    static associate(models) {
      // Define las asociaciones con otros modelos, si las hay
    }
  }

  CartDetail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Cart',
          key: 'id'
        },
        
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Product',
          key: 'id'
        }
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa el nombre del producto.'
          }
        }
      },
      basePrice: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa el precio base.'
          }
        }
      },
      taxPrice: {
        type: DataTypes.DECIMAL(6, 2)
      },
      unitOfMeasurement: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa la unidad de medida.'
          }
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, ingresa la cantidad.'
          }
        }
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'CartDetail',
      tableName: 'cart_details',
      timestamps: true,
      paranoid: true
    }
  );
  CartDetail.associate = function(models) {
    CartDetail.belongsTo(models.Cart, { as: 'cart', foreignKey: 'cartId' });
    CartDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' });
};

  return CartDetail;
};
