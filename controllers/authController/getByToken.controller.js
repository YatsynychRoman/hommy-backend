const jwt = require('jsonwebtoken')
const { User } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { accessToken } = req.body
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY)
    const user = await User.findOne({ where: { id: decoded.id }, attributes: { exclude: ['pass'] } })

    return res.status(200).send({ user })
  } catch (e) {
    console.log(e)
    return res.status(400).send('Error')
  }
}
