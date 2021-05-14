const jwt = require('jsonwebtoken')
const { House, Like } = require('../../database')

module.exports = async (req, res) => {
  const { offset, limit } = req.query
  try {
    if (!req.headers.authorization || req.headers.authorization !== 'undefined') {
      jwt.verify(req.headers.authorization, process.env.ACCESS_TOKEN_KEY, function (err, decoded) {
        const userId = decoded.id
        House.findAll({
          offset,
          limit,
          include: { model: Like, where: { userId }, required: false },
          order: [['id', 'asc']],
        }).then((data) => res.send(data))
      })
    } else {
      House.findAll({ offset, limit }).then((data) => res.send(data))
    }
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
