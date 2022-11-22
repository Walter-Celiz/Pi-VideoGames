const { getVideoGames } = require("./utils")
const { VideoGame } = require('../db')

const getAllVideoGamesOrName = async (req, res) => {
    try {
        let allVideoGames = await getVideoGames();
        let { name } = req.query;
        if (name) {
            let videoGameName = allVideoGames.filter((videoGame) =>
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
        let allVideoGames = await getVideoGames();
        let { id } = req.params;
        if (id) {
            let videoGameId = allVideoGames.filter((videoGame) => videoGame.id == id);
            videoGameId.length
                ? res.status(200).send(videoGameId)
                : res.status(404).send("Video Game Not Found!!!  🔴🔴😥😭");
        }
    } catch (error) {
        res.status(404).send(error + " #getVideoGameById fail!!! 🔴🔴😥😭");
    }
};

const postVideoGame = async (req, res) => {
    try {
        let {
            name,
            released,
            background_image,
            rating,
            platforms,
            description,
            genres
        } = req.body;

        let newVideoGame = await VideoGame.create({
            name,
            released,
            background_image,
            rating,
            platforms,
            description,
            genres
        });

        newVideoGame.addPlatfor(platforms);
        newVideoGame.addGenre(genres);
        res.status(200).send(" Video Game created!!! 🟢🟢😁😁");
    } catch (error) {
        res.status(404).send(error + " #postVideoGame fail!!! 🔴🔴😥😭");
    }
};

module.exports = {
    getAllVideoGamesOrName,
    getVideoGameById,
    postVideoGame,
};
