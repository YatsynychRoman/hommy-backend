const Sequelize = require('sequelize')

class House extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        longitude: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
        },
        latitude: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
        },
        location: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: false,
        },
        price: {
          type: Sequelize.NUMERIC,
          allowNull: false,
          unique: false,
        },
        phoneNumber: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
        },
        houseType: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: false,
          enum: ['Plot', 'Townhouse', 'Cottage', 'Quadrex', 'Duplex'],
        },
        waterSupply: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          enum: ['Centralized', 'Individual'],
        },
        heating: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          enum: ['A Gas Boiler', 'Solid fuel Boiler'],
        },
        warming: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          enum: ['Thermoblock', 'Basalt Wool', 'Styrofoam'],
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
        },
        squares: {
          type: Sequelize.NUMERIC,
          allowNull: false,
          unique: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: true, // change to false
          unique: false,
          foreignKey: true,
        },
        photoUrl: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: true,
          unique: false,
          defaultValue: [],
        },
      },
      {
        tableName: 'House',
        timestamps: false,
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId' })
    this.hasMany(models.Like, { foreignKey: 'houseId' })
  }
}

module.exports = House
