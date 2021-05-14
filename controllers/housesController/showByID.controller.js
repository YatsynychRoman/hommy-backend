const { House } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { id } = req.params
    const { userId } = req.body

    res.send(await House.findOne({ where: { id, userId } }))
  } catch (e) {
    console.log(e)
    res.status(500).send('Oops something went wrong!')
  }
}
