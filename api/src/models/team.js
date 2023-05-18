module.exports = function(sequelize, DataTypes) {
    const Team = sequelize.define('Team', {
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
      dateOfBirth: {
        allowNull: false,
        type: DataTypes.DATE
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.INTEGER,
        unique: true
      },
      hiringDate: {
        type: DataTypes.DATE
      },
      job: {
        allowNull: false,
        type: DataTypes.STRING,
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
        
    }, {
        sequelize,
        tableName: 'teams',
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

    Team.associate = function(models) {
    };

    return Team;
};