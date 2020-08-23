const db = require('../../database').getInstance();
const bucketUpload = require('../../utils/aws/s3BucketUploadHouses.util')

module.exports = (req, res) => {
    const HouseModel = db.getModel('Houses');
    const {district, squares, street, houseNumber, apartNumber, price, userId} = req.body;
    const housePhotos = req.files.housePhoto

    if (!district || !squares || !price) {
        return res.status(400).send("Something is missing");
    }

    HouseModel.create({
        district,
        street,
        houseNumber,
        apartNumber,
        squares,
        price,
        userId,
    })
        .then((dataValues) => {
            bucketUpload("houses", [housePhotos], dataValues.id, HouseModel);
            return res.send()
        })
        .catch((error) => {
            console.log(error)
            return res.send("Oops something went wrong! :(");
        });
}