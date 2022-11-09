const { getVideoGames } = require("./utils")
const { VideoGame } = require('../db')

const getAllVideoGamesOrName = async (req, res) => {
    try {
        const allVideoGames = await getVideoGames();
        const { name } = req.query;
        if (name) {
            let videoGameName = await allVideoGames.filter((videoGame) =>
                videoGame.name.toLowerCase().includes(name.toLowerCase())
            );
            videoGameName.length
                ? res.status(200).send(videoGameName)
                : res.status(404).send(`Video game: ${name}, not found 🔴🔴😥😭`);
        } else {
            res.status(200).send(allVideoGames);
        }
    } catch (error) {
        res.status(404).send(error + " #getAllVideoGamesOrName fail!!! 🔴🔴😥😭");
    }
};

const getVideoGameById = async (req, res) => {
    try {
        const allVideoGames = await getVideoGames();
        const { id } = req.params;
        if (id) {
            let videoGameId = await allVideoGames.filter((videoGame) => videoGame.id == id);
            videoGameId.length
                ? res.status(200).send(videoGameId)
                : res.status(404).send("Video Game Not Found!!!  🔴🔴😥😭");
        }
    } catch (error) {
        res.status(404).send(error + " #getVideoGameById fail!!! 🔴🔴😥😭");
    }
};

const createVideoGame = async (req, res) => {
    try {
        const {
            name,
            released,
            background_image,
            rating,
            platforms,
            description,
            genres
        } = req.body;

        const newVideoGame = await VideoGame.create({
            name,
            released,
            background_image,
            rating,
            platforms,
            description,
            genres
        });

        newVideoGame.addGenre(genres);
        res.status(200).send(" Video Game created!!! 🟢🟢😁😁");
        // .then((recipe) => recipe.addDiet(diets))
        // .then(res.send("Recipe created!!! 🟢🟢😁😁"))
    } catch (error) {
        res.status(404).send(error + " #createVideoGame fail!!! 🔴🔴😥😭");
    }
};

module.exports = {
    getAllVideoGamesOrName,
    getVideoGameById,
    createVideoGame,
};
