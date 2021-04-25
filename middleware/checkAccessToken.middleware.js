const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  console.log('Access')
  try {
    jwt.verify(req.headers.authorization, process.env.ACCESS_TOKEN_KEY, function (err, decoded) {
      req.body.userId = decoded.id
    })
    console.log('Verified')
    next()
  } catch (e) {
    return res.status(400).send({ isExpired: true })
  }
}
