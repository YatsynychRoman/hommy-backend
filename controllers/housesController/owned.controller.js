const { Op } = require('sequelize')
const { House, Like } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { userId } = req.body
    const { offset, limit, city } = req.query

    const where = { userId }

    if (city) where.city = { [Op.like]: `%${city}%` }

    res.status(200).send(
      await House.findAll({
        where,
        order: [['id', 'asc']],
        offset,
        limit,
        include: { model: Like, where: { userId }, required: false },
      })
    )
  } catch (e) {
    console.log(e)
    res.status(500).send('Error')
  }
}
