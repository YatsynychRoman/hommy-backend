module.exports = (sequelize, DataTypes) => {
    const User = sequelize.import('./Users.model')

    const House = sequelize.define('Houses', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        houseNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        apartNumber: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        price: {
            type: DataTypes.NUMERIC,
            allowNull: false,
            unique: false
        },
        squares: {
            type: DataTypes.NUMERIC,
            allowNull: false,
            unique: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            foreignKey: true
        },
        photoUrl: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
            unique: false
        }
    }, {
        tableName: 'Houses',
        timestamps: false
    });
    House.belongsTo(User, {foreignKey: 'userId'})
    return House;
}