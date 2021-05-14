const { User } = require('../../database')

module.exports = async (req, res) => {
  try {
    const id = req.body.userId
    const obj = {}
    for (const key in req.body) {
      if (req.body[key] && req.body.hasOwnProperty(key)) {
        obj[key] = req.body[key]
      }
    }
    User.update(obj, { where: { id }, returning: true }).then((data) => {
      res.send(data[1][0])
    })
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
