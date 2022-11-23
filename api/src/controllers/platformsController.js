// const { getPlatformsApi } = require("./utils")
const { getPlatformsApi } = require("./utils")

const getPlatforms = async () => {
    try {
        const platforms = await getPlatformsApi();
        const result = platforms
        return result
    } catch (error) {
        return error
    }
}

module.exports = {
    getPlatforms
}

