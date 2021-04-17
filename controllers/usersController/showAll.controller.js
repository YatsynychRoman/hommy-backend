const db = require("../../database").getInstance()

module.exports = (req, res) => {
    console.log(1)
    try {
        const UserModel = db.getModel('Users')

        UserModel.findAll().then(data => res.send(data))
    } catch (e) {
        console.log(e);
        res.status(400).send("Oops something went wrong!")
    }
};