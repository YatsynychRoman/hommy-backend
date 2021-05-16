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
  favourites,
} = require('../../controllers/housesController')

router.get('/', showAll)
router.get('/my-houses', middleware.checkAccess, owned)
router.get('/favourites', middleware.checkAccess, favourites)
router.get('/:id', middleware.checkAccess, showByID)
router.post('/like', middleware.checkAccess, likeHouse)
router.post('/', middleware.checkAccess, add)
router.post('/deletePhoto', middleware.checkAccess, deletePhoto)
router.post('/addPhoto', middleware.checkFiles, middleware.checkAccess, addPhoto)
router.patch('/:id', middleware.checkAccess, change)
router.delete('/:id', middleware.checkAccess, remove)

module.exports = router
