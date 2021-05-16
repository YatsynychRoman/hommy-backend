const { House, Like } = require('../../database')

module.exports = async (req, res) => {
  const { offset, limit } = req.query
  const { userId } = req.body
  try {
    House.findAll({
      offset,
      limit,
      include: { model: Like, where: { userId } },
      order: [['id', 'asc']],
    }).then((data) => res.send(data))
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
