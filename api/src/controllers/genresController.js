const { getGenresApi } = require("./utils")
const { Genre } = require('../db')

const getGenres = async (req, res) => {
    try {
        let genresApi = await getGenresApi()
        for (const genre of genresApi) {
            await Genre.findOrCreate({
                where: {
                    name: genre.name
                }
            })
        }
        let genres = await Genre.findAll({
            attributes: ['id', 'name']
        })
        res.status(200).send(genres)
    } catch (error) {
        return error
    }
}

module.exports = {
    getGenres
}

