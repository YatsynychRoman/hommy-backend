const {v4: uuidv4} = require('uuid');

const s3 = require('../../aws')

module.exports = (type, [files], id, model) => {
    try {
        const userPhoto = files[0]
        const uploadParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${type}/${uuidv4()}.${userPhoto.name.split('.')[1]}`,
            Body: userPhoto.data,
            ACL: "public-read"
        }
        s3.upload(uploadParams, async (err, data) => {
            if (err) return console.log(err);
            await model.update({photoUrl: data.Location}, {where: {id}})
            return data.Location
        })
    } catch (e) {
        console.log(e);
    }
}
