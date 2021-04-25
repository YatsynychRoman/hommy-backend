const db = require('../../database').getInstance()

module.exports = async (req, res) => {
  try {
    const UserModel = db.getModel('Users')
    const { id } = req.params

    UserModel.destroy({ where: { id } })
      .then(() => res.status(200))
      .catch((error) => res.status(400).send(error))
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
