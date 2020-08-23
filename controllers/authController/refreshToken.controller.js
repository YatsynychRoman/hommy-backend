const jwt = require('jsonwebtoken')
const db = require("../../database").getInstance()

const createTokens = require('../../utils/tokens/generateTokens.util')

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users')
        const decoded = await jwt.verify(req.headers.authorization, process.env.REFRESH_TOKEN_KEY)
        req.body.id = decoded.id;
        const data = await UserModel.findOne({
            where: {
                id: decoded.id,
                refreshToken: req.headers.authorization
            }
        })

        if (!data) return res.status(200).send("bad token")
        const {id: userId, accessToken, refreshToken} = await createTokens(decoded.id)

        res.status(200).send({id: userId, accessToken, refreshToken})

    } catch (e) {
        console.log(e)
        return res.status(200).send("bad token")
    }
}