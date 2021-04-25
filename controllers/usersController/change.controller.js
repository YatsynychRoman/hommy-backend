const db = require('../../database/').getInstance()

module.exports = async (req, res) => {
  try {
    const { id } = req.params
    const obj = {}
    const UserModel = db.getModel('Users')
    for (const key in req.body) {
      if (req.body[key] && req.body.hasOwnProperty(key)) {
        obj[key] = req.body[key]
      }
    }
    UserModel.update(obj, { where: { id }, returning: true }).then((data) => {
      res.send(data[1][0])
    })
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
