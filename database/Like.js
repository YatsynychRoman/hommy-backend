const Sequelize = require('sequelize')

class Like extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: false,
          foreignKey: true,
        },
        houseId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: false,
          foreignKey: true,
        },
      },
      {
        tableName: 'Like',
        timestamps: false,
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId' })
    this.belongsTo(models.House, { foreignKey: 'houseId' })
  }
}

module.exports = Like
