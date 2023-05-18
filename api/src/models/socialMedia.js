module.exports = function(sequelize, DataTypes) {
    const SocialMedia = sequelize.define('SocialMedia', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          name: {
            allowNull: false,
            type: DataTypes.STRING
          },
          url: {
            allowNull: false,
            type: DataTypes.STRING
          },
          companyId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'companies',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          imagesId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'images',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          socialMediaId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'companies',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          teamId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'companies',
                key: 'id'
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
    
    
          },
    
        
    }, {
        sequelize,
        tableName: 'social_medias',
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

    SocialMedia.associate = function(models) {
    };

    return SocialMedia;
};