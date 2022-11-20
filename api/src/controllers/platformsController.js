const { getPlatformsApi } = require("./utils")
const { Platfor } = require('../db')

const getPlatforms = async (req, res) => {
    try {
        let platformsApi = await getPlatformsApi()
        for (const platform of platformsApi) {
            await Platfor.findOrCreate({
                where: {
                    name: platform.name
                }
            })
        }

        let platform = await Platfor.findAll({
            attributes: ['id', 'name']
        })
        res.status(200).send(platform)
    } catch (error) {
        return error
    }
}

module.exports = {
    getPlatforms
}

