const db = require('../../database').getInstance()

module.exports = (req, res) => {
  try {
    const { userId } = req.body
    const HouseModel = db.getModel('Houses')

    HouseModel.findAll({
      where: {
        userId,
      },
    }).then((data) => {
      res.send(data)
    })
  } catch (e) {
    console.log(e)
    res.status(404).send('Oops something went wrong!')
  }
}
