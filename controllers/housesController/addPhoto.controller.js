const { House } = require('../../database')
const bucketUpload = require('../../utils/aws/s3BucketUploadHouses.util')

module.exports = async (req, res) => {
  try {
    let housePhoto
    if (req.files.housePhoto.length > 1) {
      housePhoto = req.files.housePhoto
    } else {
      housePhoto = [req.files.housePhoto]
    }
    await bucketUpload('houses', [housePhoto], req.body.houseId, House)
    return res.status(200).send('success')
  } catch (e) {
    console.log(e)
    res.status(400).send('Oops something went wrong')
  }
}
