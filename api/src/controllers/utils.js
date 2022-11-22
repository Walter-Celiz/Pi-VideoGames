const axios = require("axios");
require("dotenv").config();
const { KEY } = process.env;
const { VideoGame, Genre, Platfor } = require("../db");

const getApiVideoGames = async () => {
    try {
        let pages = 5;
        let totalVideoGames = [];
        let url = "";

        for (let i = 1; i <= pages; i++) {
            url = `https://api.rawg.io/api/games?key=${KEY}&page=${i}`;
            let apiCall = await axios.get(url);
            let videoGames = await apiCall.data.results.map((videoGame) => ({
                id: videoGame.id,
                name: videoGame.name,
                released: videoGame.released,
                background_image: videoGame.background_image,
                rating: videoGame.rating,
                platforms: videoGame.platforms.map(p => p.platform.name),
                description: videoGame.description,
                genres: videoGame.genres.map((genre) => genre.name)
            }));
            totalVideoGames = [...totalVideoGames, ...videoGames];
        }
        return totalVideoGames;
    } catch (error) {
        console.log(error + " #getApiVideoGames fail!!! 🔴🔴😥😭");
    }
};

const getDbVideoGames = async () => {
    try {
        let videoGames = await VideoGame.findAll({
            attributes: [
                "id",
                "name",
                "released",
                "background_image",
                "rating",
                "description",
                "created"
            ],
            include: [Genre, Platfor]
        });

        console.log(videoGames);
        return videoGames.map((videoGame) => ({
            id: videoGame.id,
            name: videoGame.name,
            released: videoGame.released,
            background_image: videoGame.background_image,
            rating: videoGame.rating,
            // platforms: videoGame.platforms.map(p => p.platform.name),
            description: videoGame.description,
            genres: videoGame.genres.map(g => g.name),
            created: videoGame.created,
        }));
    } catch (error) {
        console.log(error + " #getDbVideoGames fail!!! 🔴🔴😥😭");
    }
};

const getVideoGames = async () => {
    try {
        let [Api, DB] = await Promise.all([getApiVideoGames(), getDbVideoGames()]);
        return [...Api, ...DB];
    } catch (error) {
        console.log(error + " #getVideoGames fail!!! 🔴🔴😥😭");
    }
};

const getSpecificGame = async (req, res) => {
    // let id = req.params.id 
    let { id } = req.params
    try {
        if (id.includes('-')) {
            const gameDb = await VideoGame.findOne({
                where: { id },
                include: [Genre, Platfor],
            });
            return res.json(gameDb);
        } else {
            const gameApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            let { name, background_image, genres, description, released, rating, platforms } = gameApi.data;
            // genres = genres.map(g => g.name); // de la API me trae un array de objetos, mapeo solo el nombre del genero
            platforms = platforms.map(p => p.platform); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
            return res.json({
                id,
                name,
                background_image,
                genres,
                platforms,
                rating,
                released,
                description,
            })
        }
    } catch (error) {
        res.status(404).json({ error: 'Id not found 😕' });
    }
}

const getGenresApi = async () => {
    try {
        let apiCall = await axios.get(`https://api.rawg.io/api/genres?key=${KEY}`);
        let genresApi = await apiCall.data.results.map((genre) => {
            return {
                id: genre.id,
                name: genre.name,
            };
        });
        return genresApi;
    } catch (error) {
        console.log(error + " #getGenresApi fail!!! 🔴🔴😥😭");
    }
};

const getPlatformsApi = async () => {
    try {
        let apiCall = await axios.get(`https://api.rawg.io/api/platforms?key=${KEY}`);
        let platformsApi = await apiCall.data.results.map((platform) => {
            return {
                id: platform.id,
                name: platform.name,
            };
        });
        return platformsApi;
    } catch (error) {
        console.log(error + " #getPlatformsApi fail!!! 🔴🔴😥😭");
    }
};

module.exports = {
    getVideoGames,
    getSpecificGame,
    getGenresApi,
    getPlatformsApi
};
