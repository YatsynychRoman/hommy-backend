const db = require('../../database').getInstance()

module.exports = async (req, res) => {
  try {
    const { offset, limit } = req.query
    const HouseModel = db.getModel('Houses')
    HouseModel.findAll({ offset, limit }).then((data) => res.send(data))
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
