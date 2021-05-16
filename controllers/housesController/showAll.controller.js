const { Op } = require('sequelize')
const jwt = require('jsonwebtoken')
const { House, Like } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { offset, limit, city, houseType, waterSupply, heating, warming } = req.query

    const where = {}

    if (city) where.location = { [Op.like]: `%${city}%` }
    if (houseType) where.houseType = { [Op.in]: houseType.split(',') }
    if (waterSupply) where.waterSupply = waterSupply
    if (heating) where.heating = heating
    if (warming) where.warming = warming

    const query = {
      where,
      offset,
      limit,
      order: [['id', 'asc']],
    }

    if (!req.headers.authorization || req.headers.authorization !== 'undefined') {
      jwt.verify(req.headers.authorization, process.env.ACCESS_TOKEN_KEY, function (err, decoded) {
        const userId = decoded.id

        query.include = { model: Like, where: { userId }, required: false }

        House.findAll(query).then((data) => res.send(data))
      })
    } else {
      House.findAll(query).then((data) => res.send(data))
    }
  } catch (e) {
    console.log(e)
    res.status(500).send('Oops something went wrong!')
  }
}
