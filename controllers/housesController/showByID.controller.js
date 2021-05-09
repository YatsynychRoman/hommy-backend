const db = require('../../database').getInstance()

module.exports = async (req, res) => {
  try {
    const { id } = req.params
    const { userId } = req.body

    const HouseModel = db.getModel('Houses')

    res.send(await HouseModel.findOne({ where: { id, userId } }))
  } catch (e) {
    console.log(e)
    res.status(500).send('Oops something went wrong!')
  }
}
