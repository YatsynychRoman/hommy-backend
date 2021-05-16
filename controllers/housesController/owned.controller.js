const { Op } = require('sequelize')
const { House, Like } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { userId } = req.body
    const { offset, limit, city, houseType, waterSupply, heating, warming } = req.query

    const where = { userId }

    if (city) where.location = { [Op.like]: `%${city}%` }
    if (houseType) where.houseType = { [Op.in]: houseType.split(',') }
    if (waterSupply) where.waterSupply = waterSupply
    if (heating) where.heating = heating
    if (warming) where.warming = warming

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
