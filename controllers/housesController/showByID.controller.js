const db = require('../../database').getInstance()

module.exports = async (req, res) => {
  try {
    const { id } = req.params
    const HouseModel = db.getModel('Houses')
    const data = await HouseModel.findByPk(id)

    res.send(data)
  } catch (e) {
    console.log(e)
    res.status(500).send('Oops something went wrong!')
  }
}
