const { where } = require('sequelize')
const { User, House } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { userId } = req.body
    res.status(200).send(
      await House.findAll({
        where: {
          userId,
        },
      })
    )
  } catch (e) {
    console.log(e)
    res.status(500).send('Error')
  }
}
