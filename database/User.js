const Sequelize = require('sequelize')

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
        },
        surname: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
        },
        pass: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: false,
        },
        mail: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        refreshToken: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: true,
        },
        photoUrl: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: true,
        },
        country: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: true,
        },
        city: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: true,
        },
        region: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: true,
        },
        instProfile: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: true,
        },
        bio: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: true,
        },
        mobilePhone: {
          type: Sequelize.STRING,
          unique: false,
          allowNull: true,
        },
      },
      {
        tableName: 'User',
        timestamps: false,
        sequelize,
      }
    )
  }

  static associate(models) {
    this.hasMany(models.House, { foreignKey: 'userId' })

    this.hasMany(models.Like, { foreignKey: 'userId' })
  }
}

module.exports = User
