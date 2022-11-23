const axios = require("axios");
const { Genres } = require("../db");
const { KEY } = process.env;

const controllerGenres = async (req, res) => {
    try {
        let arrGenres = await Genres.findAll();

        if (!arrGenres.length) {
            let apiCall = await axios.get(`https://api.rawg.io/api/genres?key=${KEY}`)
            let genres = apiCall.data.results.map((e) => e.name)

            for (let i = 0; i < genres.length; i++) {
                await Genres.create({ name: genres[i] });
            }

            res.send(await Genres.findAll());
        } else {
            res.send(arrGenres);
        }

    } catch (error) {
        return error
    }
}

module.exports = { controllerGenres }
