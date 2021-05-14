const bcrypt = require('bcrypt')
const { User } = require('../../database')

const bucketUpload = require('../../utils/aws/s3BucketUploadUsers.util')

module.exports = async (req, res) => {
  try {
    const { name, surname, pass, mail } = req.body

    const userPhoto = req.files ? req.files.userPhoto : null

    if (!name || !surname || !pass || !mail) {
      return res.status(400).send('Something is missing')
    }

    const data = await User.findOne({
      where: {
        mail,
      },
    })
    if (data) return res.status(500).send('User Already exists')

    const hash = await bcrypt.hash(pass, 10)

    User.create(
      {
        name,
        surname,
        pass: hash,
        mail,
      },
      { returning: true }
    )
      .then((dataValues) => {
        bucketUpload('users', [[userPhoto]], dataValues.id, User)
        return res.status(200).send('Registration successful')
      })
      .catch((error) => {
        console.log(error)
        return res.status(400).send('Oops something went wrong! :(')
      })
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong!')
  }
}
