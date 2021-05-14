const jwt = require('jsonwebtoken')
const { User } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { accessToken } = req.body
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY)
    const user = await User.findOne({ where: { id: decoded.id }, attributes: { exclude: ['pass'] } })
    res.send(user)
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
