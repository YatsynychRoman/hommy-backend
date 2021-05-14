const { User } = require('../../database')
const bucketUpload = require('../../utils/aws/s3BucketUploadUsers.util')
const bucketDelete = require('../../utils/aws/s3BucketDelete.util')

module.exports = async (req, res) => {
  try {
    const { image } = req.files
    await bucketDelete('users', req.body.userId, User)
    const newPhoto = await bucketUpload('users', [[image]], req.body.userId, User)
    return res.status(200).send(newPhoto)
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong')
  }
}
