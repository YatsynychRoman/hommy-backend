const db = require('../../database').getInstance()

module.exports = async (req, res) => {
  try {
    const HouseModel = db.getModel('Houses')
    const { id } = req.params

    await HouseModel.destroy({ where: { id } })
    res.status(200).send('Deleted')
  } catch (e) {
    console.log(e)
    res.status(400).send('Error')
  }
}
