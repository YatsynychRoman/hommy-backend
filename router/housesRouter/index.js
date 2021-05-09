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
} = require('../../controllers/housesController')

router.get('/', showAll)
router.get('/:id', middleware.checkAccess, showByID)
router.get('/my-houses', middleware.checkAccess, owned)
router.post('/', middleware.checkAccess, add)
router.post('/deletePhoto', middleware.checkAccess, deletePhoto)
router.post('/addPhoto', middleware.checkFiles, middleware.checkAccess, addPhoto)
router.patch('/:id', middleware.checkAccess, change)
router.delete('/:id', middleware.checkAccess, remove)

module.exports = router
