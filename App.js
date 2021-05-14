const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const middleware = require('./middleware')
const routes = require('./router')
const io = require('./supportChat')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(cors())
server.use(fileUpload({}))

server.use('/', routes.authRouter)
server.use('/users', middleware.checkAccess, routes.usersRouter)
server.use('/houses', routes.housesRouter)

server.all('*', (req, res) => res.status(404).end('Invalid path'))

io()
server.listen(3000, () => console.log('3000'))
