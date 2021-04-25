const db = require('../../database').getInstance()
const bcrypt = require('bcrypt')

const bucketUpload = require('../../utils/aws/s3BucketUploadUsers.util')
const mailer = require('../../utils/mailers/mailer.util')

module.exports = async (req, res) => {
  try {
    const UserModel = db.getModel('Users')
    const { name, surname, pass, mail } = req.body

    const userPhoto = req.files ? req.files.userPhoto : null

    if (!name || !surname || !pass || !mail) {
      return res.status(400).send('Something is missing')
    }

    const data = await UserModel.findOne({
      where: {
        mail,
      },
    })
    if (data) return res.status(500).send('User Already exists')

    const hash = await bcrypt.hash(pass, 10)

    UserModel.create(
      {
        name,
        surname,
        pass: hash,
        mail,
      },
      { returning: true }
    )
      .then((dataValues) => {
        bucketUpload('users', [[userPhoto]], dataValues.id, UserModel)
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
