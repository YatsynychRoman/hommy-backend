const db = require("../../database").getInstance()

module.exports = (req, res) => {
    try {
        const UserModel = db.getModel('Users')
        const {id} = req.params;

        UserModel.findByPk(id)
            .then(data => {
                console.log(data)
                res.send(data)
            })
    } catch (e) {
        console.log(e);
        res.status(400).send("Oops something went wrong!")
    }
};