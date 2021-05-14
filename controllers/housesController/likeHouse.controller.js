const { Like } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { userId, houseId } = req.body
    const like = await Like.findOne({ where: { userId, houseId } })
    if (like) {
      await Like.destroy({ where: { id: like.id } })
    } else {
      await Like.create({
        userId,
        houseId,
      })
    }
    res.status(200).send()
  } catch (e) {
    res.status(500).send('Oops, something went wrong')
    console.log(e)
  }
}
