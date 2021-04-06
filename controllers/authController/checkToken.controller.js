const jwt = require('jsonwebtoken')

module.exports = () => {
    try {
        jwt.verify(req.headers.authorization, process.env.ACCESS_TOKEN_KEY, function (err, decoded) {
            req.body.userId = decoded.id;
        });
        res.status(200).send({isExpired: false})
    } catch (e) {
        res.status(200).send({isExpired: true})
    }
}