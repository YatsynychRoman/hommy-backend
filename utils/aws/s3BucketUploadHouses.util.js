const { v4: uuidv4 } = require('uuid')

const s3 = require('../../aws')

module.exports = async (type, [files], id, model) => {
  try {
    files.map(async (item) => {
      const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${type}/${uuidv4()}.${item.name.split('.')[1]}`,
        Body: item.data,
        ACL: 'public-read',
      }

      await s3.upload(uploadParams, async (err, data) => {
        if (err) return console.log(err)
        const foundOne = await model.findOne({ where: { id } })
        foundOne.photoUrl.pop()
        foundOne.photoUrl.push(data.Location)
        await foundOne.update({ photoUrl: foundOne.photoUrl })
      })
    })
  } catch (e) {
    console.log('error')
    console.log(e)
  }
}
