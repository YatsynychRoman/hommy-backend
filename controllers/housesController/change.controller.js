const db = require("../../database").getInstance()

module.exports = async (req, res) => {
    try {
        const HouseModel = db.getModel('Houses')
        const {id} = req.params
        let obj = {}

        for (let key in req.body) {
            if (req.body[key] && req.body.hasOwnProperty(key)) {
                obj[key] = req.body[key];
            }
        }
        HouseModel.update(obj, {where: {id}}).then(data => res.send(data))
    } catch (e) {
        console.log(e)
        res.status(400).send("Error")
    }
}
