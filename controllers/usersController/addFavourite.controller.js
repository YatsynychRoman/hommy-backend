const db = require("../../database/").getInstance();
const sequelize = require('sequelize')

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users')
        const userId = req.body.userId;
        const houseId = req.body.houseId;
        const foundOne = await UserModel.findOne({where: {id: userId}})

        await foundOne.update(
            {'favouritesHouses': sequelize.fn('array_append', sequelize.col('favouritesHouses'), houseId)}
        ).then(res.status(200).send('Successfully added'))
    } catch (e) {
        console.log(e)
        res.status(401).send("Oops something went wrong")
    }
}