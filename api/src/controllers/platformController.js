const { Platforms } = require("../db")

const platformControllers = async (req, res) => {
    try {
        res.send(await Platforms.findAll())
    } catch (error) {
        return error
    }
}

module.exports = { platformControllers }