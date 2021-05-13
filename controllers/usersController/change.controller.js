const db = require('../../database/').getInstance()

module.exports = async (req, res) => {
    try {
        const id = req.body.userId
        let obj = {};
        const UserModel = db.getModel('Users')
        for (let key in req.body) {
            if (req.body[key] && req.body.hasOwnProperty(key)) {
                obj[key] = req.body[key];
            }
        }
        UserModel.update(obj, { where: { id }, returning: true }).then(data => {
            res.send(data[1][0])
        })
    } catch (e) {
        console.log(e);
        res.status(400).send("Oops something went wrong!")
    }
}
