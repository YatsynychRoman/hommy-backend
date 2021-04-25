module.exports = (req, res, next) => {
  try {
    console.log('Upload Photo')
    if (req.files) {
      const files = req.files[Object.keys(req.files)[0]]

      if (Array.isArray(files)) {
        files.map((file) => {
          if (file.mimetype.split('/')[0] !== 'image') return res.status(400).send('Wrong file type')
        })
      } else if (files.mimetype.split('/')[0] !== 'image') return res.status(400).send('Wrong file type')
      if (files.length > 10) return res.status(400).send('Too much files')
    }
    next()
  } catch (e) {
    return res.status(400).send(e.message)
  }
}
