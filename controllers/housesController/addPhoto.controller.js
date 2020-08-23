const db = require('../../database').getInstance()

const bucketUpload = require('../../utils/aws/s3BucketUploadHouses.util')

module.exports = async (req, res) => {
    try {
        const HouseModel = db.getModel('Houses')
        let housePhoto;

        req.files.housePhoto.length > 1 ? housePhoto = req.files.housePhoto : housePhoto = [req.files.housePhoto]
        await bucketUpload("houses", [housePhoto], req.body.houseId, HouseModel)
        return res.status(200).send('success')
    } catch (e) {
        console.log(e);
        res.status(400).send('Oops something went wrong')
    }
}