const db = require('../../database').getInstance();
const bcrypt = require('bcrypt');

const createTokens = require('../../utils/tokens/generateTokens.util')

module.exports = async (req, res) => {
    const UserModel = db.getModel('Users')
    const {login, pass} = req.body;
    UserModel.findOne({
        where: {
            login
        }
    })
        .then(({dataValues: data}) => {
            bcrypt.compare(pass, data.pass, async (err, result) => {
                if (!result) return res.status(500).send("Error")
                const tokens = await createTokens(data.id)
                res.status(200).send({tokens, id: data.id, name: data.name, surname: data.surname, login: data.login, mail: data.mail, photoUrl: data.photoUrl, role: data.role, favouritesHousesIds: data.favouritesHousesIds})
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).send("Invalid username or password")
        })
}