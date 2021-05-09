const db = require('../../database').getInstance()
const bucketUpload = require('../../utils/aws/s3BucketUploadHouses.util')

module.exports = async (req, res) => {
  try {
    const HouseModel = db.getModel('Houses')

    const { id } = req.params
    const { userId } = req.body
    const housePhotos = req.files && req.files.housePhoto

    const obj = {}

    for (const key in req.body) {
      if (req.body[key] && req.body.hasOwnProperty(key)) {
        obj[key] = req.body[key]
      }
    }

    HouseModel.update(obj, { where: { id, userId } }).then(async () => {
      if (housePhotos) await bucketUpload('houses', [[housePhotos]], id, HouseModel)
      res.status(200).send('OK')
    })
  } catch (e) {
    console.log(e)
    res.status(500).send('Error')
  }
}
