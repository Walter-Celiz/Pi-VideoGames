const { getGenresApi } = require("./utils")
const { Genre } = require('../db')

const getAllGenres = async (req, res) => {
    try {
        const genres = await getGenresApi()
        for (const genre of genres) {
            await Genre.findOrCreate({
                where: {
                    name: genre.name
                }
            })
        }
        const allGenres = await Genre.findAll({
            attributes: ['id', 'name']
        })
        res.status(200).send(allGenres)
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllGenres
}

