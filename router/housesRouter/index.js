const router = require('express').Router()

const middleware = require('../../middleware')
const {
  add,
  showAll,
  showByID,
  remove,
  change,
  deletePhoto,
  addPhoto,
  owned,
  likeHouse,
} = require('../../controllers/housesController')
const { route } = require('../authRouter')

router.get('/', showAll)
router.get('/my-houses', middleware.checkAccess, owned)
router.post('/like', middleware.checkAccess, likeHouse)
router.get('/:id', middleware.checkAccess, showByID)
router.post('/', middleware.checkAccess, add)
router.post('/deletePhoto', middleware.checkAccess, deletePhoto)
router.post('/addPhoto', middleware.checkFiles, middleware.checkAccess, addPhoto)
router.patch('/:id', middleware.checkAccess, change)
router.delete('/:id', middleware.checkAccess, remove)

module.exports = router
