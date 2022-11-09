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
        // res.status(500).json({
        //     msg: error.message
        // })
    }
}

module.exports = {
    getAllGenres
}

//para cada uno de ellos, busca si existe, si no existe lo crea
//donde nombre sea el elemento que le paso
//luego busca all genres y devuelve todo lo que tenga dentro

/* 
1- entra a la api
2- extrae info de la api, la mapea
3- find or create dentro del modelo donde el nombre sea el elemento que estoy pasando en el for of
4- guarda todas las ocupaciones en el modelo
*/