const express = require("express");
const cors = require("cors");
require('dotenv').config();

const fileUpload = require('express-fileupload')
const middleware = require("./middleware");
const server = express();
const routes = require("./router");
const db = require("./database").getInstance();
const io = require("./supportChat")

db.setModels();
server.use(express.json());
server.use(cors());
server.use(fileUpload({}));

server.use('/', routes.authRouter);
server.use('/users', middleware.checkAccess,routes.usersRouter);
server.use('/houses', routes.housesRouter);

server.all('*', (req, res) => {
    return res.status(500).end("Bad request");
});

io();
server.listen(3000, () => {
    console.log('3000');
});