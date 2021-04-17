const router = require("express").Router()

const middleware = require("../../middleware");
const { showAll, showByID, change, remove, showHouses, addFavourite, changeProfilePhoto } = require('../../controllers/usersController')


router.patch('/changeProfilePhoto', middleware.checkFiles, changeProfilePhoto);
//router.get('/', showAll);
router.get('/userHouses', showHouses);
router.get('/my-profile', middleware.checkAccess, showByID);
router.patch('/:id', change);
router.delete('/:id', remove);
router.post('/addFavourite', addFavourite);


module.exports = router