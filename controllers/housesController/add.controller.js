const { House } = require('../../database')
const bucketUpload = require('../../utils/aws/s3BucketUploadHouses.util')

module.exports = (req, res) => {
  const {
    squares,
    price,
    userId,
    location,
    description,
    houseType,
    phoneNumber,
    waterSupply,
    warming,
    heating,
  } = req.body
  const housePhotos = req.files && req.files.housePhoto

  House.create({
    squares,
    price,
    userId,
    location,
    description,
    houseType,
    phoneNumber,
    waterSupply,
    warming,
    heating,
  })
    .then((dataValues) => {
      if (housePhotos) bucketUpload('houses', [[housePhotos]], dataValues.id, House)
      return res.send()
    })
    .catch((error) => {
      console.log(error)
      return res.status(500).send('Oops something went wrong! :(')
    })
}
