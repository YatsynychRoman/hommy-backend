const db = require('../../database').getInstance();

const bucketDelete = require('../../utils/aws/s3BucketDelete.util');

module.exports = async (req, res) => {
    try {
        const HouseModel = db.getModel('Houses');
        const newPhotos = await bucketDelete('houses', req.body.houseId, HouseModel, req.body.photoUrl);

        res.status(200).send(newPhotos);
    } catch (e) {
        res.status(500).send('Oops, something went wrong')
        console.log(e)
    }
}