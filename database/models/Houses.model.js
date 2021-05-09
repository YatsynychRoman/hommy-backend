module.exports = (sequelize, DataTypes) => {
  const User = sequelize.import('./Users.model')

  const House = sequelize.define(
    'Houses',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      longitude: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      latitude: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        unique: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      houseType: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        enum: ['plot', 'townhouse', 'cottage', 'quadrex', 'duplex'],
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      squares: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        unique: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        foreignKey: true,
      },
      photoUrl: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        unique: false,
        defaultValue: [],
      },
    },
    {
      tableName: 'Houses',
      timestamps: false,
    }
  )
  House.belongsTo(User, { foreignKey: 'userId' })
  return House
}
