const s3 = require('../../aws')

module.exports = async (type, id, model, photoUrl) => {
  try {
    const foundOne = await model.findOne({ where: { id } })
    let newPhotos
    if (type === 'houses') newPhotos = foundOne.photoUrl.filter((item) => item !== photoUrl)
    else newPhotos = null
    if (type === 'users') photoUrl = foundOne.photoUrl

    if (!photoUrl) return

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${type}/${photoUrl.split('/')[4]}`,
    }
    s3.deleteObject(params, (err) => err && console.log('err', err))
    await foundOne.update({ photoUrl: newPhotos })
    return newPhotos
  } catch (e) {
    console.log(e)
  }
}
