const db = require('../../database').getInstance()

module.exports = async (req, res) => {
  try {
    const HouseModel = db.getModel('Houses')

    const { userId } = req.body

    res.status(200).send(await HouseModel.findAll({ where: { userId } }))
  } catch (e) {
    console.log(e)
    res.status(500).send('Error')
  }
}
