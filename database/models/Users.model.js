module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        pass: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        mail: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        refreshToken: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        photoUrl: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true,
        },
        favouritesHousesIds: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            unique: false,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        region: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        instProfile: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        bio: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
        mobilePhone: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        },
    }, {
        tableName: 'Users',
        timestamps: false
    });
    return User;
