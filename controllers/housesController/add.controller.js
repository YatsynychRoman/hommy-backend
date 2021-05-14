const { House } = require('../../database')
const bucketUpload = require('../../utils/aws/s3BucketUploadHouses.util')

module.exports = (req, res) => {
  const { squares, price, userId, location, description, houseType, phoneNumber } = req.body
  const housePhotos = req.files && req.files.housePhoto

  House.create({
    squares,
    price,
    userId,
    location,
    description,
    houseType,
    phoneNumber,
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
