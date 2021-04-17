const db = require('../../database').getInstance()

const bucketUpload = require('../../utils/aws/s3BucketUploadUsers.util')
const bucketDelete = require('../../utils/aws/s3BucketDelete.util')

module.exports = async (req, res) => {
    try {
        const UserModel = db.getModel('Users');
        console.log()
        const { image } = req.files;
        await bucketDelete('users', req.body.userId, UserModel)
        const newPhoto = await bucketUpload("users", [[image]], req.body.userId, UserModel);
        return res.status(200).send(newPhoto);

    } catch (e) {
        res.status(400).send('Oops something went wrong')
    }
}