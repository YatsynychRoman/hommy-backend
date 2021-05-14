const bcrypt = require('bcrypt')
const { User } = require('../../database')

const createTokens = require('../../utils/tokens/generateTokens.util')

module.exports = async (req, res) => {
  const { mail, pass } = req.body
  User.findOne({
    where: {
      mail,
    },
  })
    .then(({ dataValues: data }) => {
      bcrypt.compare(pass, data.pass, async (err, result) => {
        if (!result) return res.status(500).send('Error')
        const tokens = await createTokens(data.id)
        res.status(200).send({
          tokens,
          id: data.id,
          name: data.name,
          surname: data.surname,
          login: data.login,
          mail: data.mail,
          photoUrl: data.photoUrl,
          role: data.role,
          favouritesHousesIds: data.favouritesHousesIds,
        })
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).send('Invalid username or password')
    })
}
