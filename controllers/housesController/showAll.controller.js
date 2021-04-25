const db = require('../../database').getInstance()

module.exports = async (req, res) => {
  try {
    const HouseModel = db.getModel('Houses')
    HouseModel.findAll({}).then((data) => res.send(data))
    return res.status(200)
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
