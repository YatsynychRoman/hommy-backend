const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        jwt.verify(req.headers.authorization, process.env.ACCESS_TOKEN_KEY, function (err, decoded) {
            req.body.userId = decoded.id;
        });
        next();
    } catch (e) {
        return res.status(200).send({isExpired: true});
    }
}