const router = require("express").Router()

const middleware = require("../../middleware");
const {add, showAll, showByID, remove, change, deletePhoto, addPhoto} = require('../../controllers/housesController')

router.post('/', middleware.checkAccess,add);
router.get('/:id', middleware.checkAccess,showByID);
router.get('/', showAll);
router.patch('/:id', middleware.checkAccess,change);
router.post('/deletePhoto', middleware.checkAccess,deletePhoto);
router.post('/addPhoto', middleware.checkFiles, middleware.checkAccess,addPhoto)
router.delete('/:id', middleware.checkAccess,remove);

module.exports = router;




