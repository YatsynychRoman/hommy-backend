const jwt = require('jsonwebtoken')

module.exports = () => {
    try {
        jwt.verify(req.headers.authorization, process.env.ACCESS_TOKEN_KEY, function (err, decoded) {
            req.body.userId = decoded.id;
        });
    } catch (e) {
        res.status(400).send({isExpiry: true})
    }
}