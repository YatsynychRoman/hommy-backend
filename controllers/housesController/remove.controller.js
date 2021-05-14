const { House } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { id } = req.params

    await House.destroy({ where: { id } })
    res.status(200).send('Deleted')
  } catch (e) {
    console.log(e)
    res.status(400).send('Error')
  }
}
