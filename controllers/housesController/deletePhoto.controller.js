const bucketDelete = require('../../utils/aws/s3BucketDelete.util')
const { House } = require('../../database')

module.exports = async (req, res) => {
  try {
    const newPhotos = await bucketDelete('houses', req.body.houseId, House, req.body.photoUrl)

    res.status(200).send(newPhotos)
  } catch (e) {
    res.status(500).send('Oops, something went wrong')
    console.log(e)
  }
}
