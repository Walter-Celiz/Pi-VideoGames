const axios = require("axios");
const { Videogames, Genres, Platforms } = require("../db");
const { KEY } = process.env;

function finder(arr, word) {
    if (word.length > 0) {
        for (let i = 0; i < word.length; i++) {
            arr = arr.filter(
                (e) => e.name[i]?.toUpperCase() === word[i].toUpperCase()
            );
        }
        return arr;
    }
}

let Cache = [];
let countGamesDb = "";
let gamesAPI = [];

/////-----ALL VIDEOJUEGOS-----/////
const getVideogames = async (req, res) => {
    try {
        let { name } = req.query;

        if (!Cache.length || (await Videogames.count()) !== countGamesDb) {
            countGamesDb = await Videogames.count();
            let gamesDB = await Videogames.findAll({
                attributes: ["id", "name", "background_image", "rating", "released", "created"],
                include: [
                    {
                        attributes: ["name"],
                        model: Genres,
                    },
                    {
                        attributes: ["name"],
                        model: Platforms,
                    },
                ],
            });

            gamesDB = gamesDB.map((e) => {
                return {
                    id: e.id,
                    name: e.name,
                    rating: e.rating,
                    release: e.released,
                    background_image: e.background_image,
                    genres: e.genres.map((genre) => genre.name),
                    platforms: e.platforms.map((plat) => plat.name),
                    created: e.created
                };
            });

            //PAGES
            let i = 1;
            if (!Cache.length) {
                while (i < 6) {
                    await axios
                        .get(`https://api.rawg.io/api/games?key=${KEY}&page=${i}`)
                        .then(async (res) => {
                            let results = res.data.results;
                            for (let j = 0; j < results.length; j++) {
                                for (let k = 0; k < results[j].platforms.length; k++) {
                                    await Platforms.findOrCreate({
                                        where: { name: results[j].platforms[k].platform.name },
                                    });
                                }
                                gamesAPI.push({
                                    id: results[j].id,
                                    name: results[j].name,
                                    rating: results[j].rating,
                                    released: results[j].released,
                                    background_image: results[j].background_image,
                                    genres: results[j].genres.map((e) => e.name),
                                    platforms: results[j].platforms.map((p) => p.platform.name),
                                });
                            }
                        });
                    i++;
                }
            }
            Cache = [...gamesDB, ...gamesAPI];
        }
        if (!name) {
            res.json([...Cache]);
        } else {
            res.send(finder(Cache, name));
        }
    } catch (error) {
        res.send(error);
    }
};

/////-----TRAER VIDEOJUEGOS POR ID-----/////
const getGameID = async (req, res) => {
    // const id = req.params.id 
    const { id } = req.params;
    try {
        if (id.includes("-")) {
            const gameDb = await Videogames.findOne({
                where: { id },
                include: [Genres, Platforms],
            });
            return res.json(gameDb);
        } else {
            const gameApi = await axios.get(
                `https://api.rawg.io/api/games/${id}?key=${KEY}`
            );
            let {
                name,
                background_image,
                genres,
                description,
                released,
                rating,
                platforms,
            } = gameApi.data;

            description = description.replace(/<[^>]*>?/g, "");
            platforms = platforms.map((p) => p.platform);

            return res.json({
                id,
                name,
                background_image,
                genres,
                platforms,
                rating,
                released,
                description,
            });
        }
    } catch (error) {
        res.status(404).json({ error: "Id not found 😕" });
    }
};

/////-----POST VIDEOGAME-----/////
const postGame = async (req, res) => {
    let {
        name,
        description,
        background_image,
        released,
        rating,
        genres,
        platforms,
    } = req.body;

    try {
        const gameCreated = await Videogames.create({
            name,
            description,
            background_image,
            released,
            rating,
        });

        const gameGenre = await Genres.findAll({
            where: {
                name: genres,
            },
        });
        const gamePlatform = await Platforms.findAll({
            where: {
                name: platforms,
            },
        });

        await gameCreated.addGenre(gameGenre);
        await gameCreated.addPlatform(gamePlatform);

        res.send(`Game Created, its id is ${gameCreated.id}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getVideogames,
    getGameID,
    postGame,
};
