const router = require('express').Router()

const middleware = require('../../middleware')
const { showByID, change, remove, changeProfilePhoto } = require('../../controllers/usersController')

router.patch('/changeProfilePhoto', middleware.checkFiles, changeProfilePhoto)
router.get('/my-profile', middleware.checkAccess, showByID)
router.patch('/:id', change)
router.delete('/:id', remove)
router.patch('/changeProfilePhoto', middleware.checkFiles, changeProfilePhoto)
router.get('/my-profile', showByID)
router.patch('/my-profile', change)
router.delete('/:id', remove)

module.exports = router
