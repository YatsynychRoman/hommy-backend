const { User } = require('../../database')

module.exports = async (req, res) => {
  try {
    const { id } = req.params

    User.destroy({ where: { id } })
      .then(() => res.status(200))
      .catch((error) => res.status(400).send(error))
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
