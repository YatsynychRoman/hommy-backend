const router = require('express').Router()

const middleware = require('../../middleware')
const { login, register, refreshToken, getByToken } = require('../../controllers/authController')
const { dummydata } = require('../../controllers/testdata/generateData')
router.get('/dummydata', dummydata)
router.post('/login', login)
router.post('/register', middleware.checkFiles, register)
router.post('/rtoken', refreshToken)
router.post('/getByToken', getByToken)
router.get('/checkToken', middleware.checkAccess)

module.exports = router
