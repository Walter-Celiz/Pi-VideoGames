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
                platforms: videoGame.platforms.map((platform) => platform.name),
                description: videoGame.description,
                genres: videoGame.genres.map((genre) => genre.name),

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
            include: [{
                model: Genre,
                attributes: ["name"]
            },
            {
                model: Platfor,
                attributes: ["name"],
            }]
        });
        return videoGames.map((videoGame) => ({
            id: videoGame.id,
            name: videoGame.name,
            released: videoGame.released,
            background_image: videoGame.background_image,
            rating: videoGame.rating,
            platforms: videoGame.platforms.map((platform) => platform.name),
            description: videoGame.description,
            genres: videoGame.genres.map((genre) => genre.name),
            created: videoGame.created,
        }));
    } catch (error) {
        console.log(error + " #getDbVideoGames fail!!! 🔴🔴😥😭");
    }
};

const getVideoGames = async () => {
    try {
        let [Api, DB] = await Promise.all([
            getApiVideoGames(),
            getDbVideoGames(),
        ]);
        return [...Api, ...DB];
    } catch (error) {
        console.log(error + " #getVideoGames fail!!! 🔴🔴😥😭");
    }
};

const getSpecificGame = async (id) => {
    try {
        let apiCall = await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY}`);
        let videoGameId = await apiCall.data.results.map((videoGame) => ({
            name: videoGame.name,
            description: videoGame.description,
            released: videoGame.released,
            rating: videoGame.rating,
            platforms: videoGame.platforms.map((el) => el.platform.name),
            background_image: videoGame.background_image,
            genres: videoGame.genres.map((el) => el.name),
        }));
        return videoGameId;
    } catch (error) {
        console.log(error + " #getVideoGameApiId!!! 🔴🔴😥😭");
    }
};

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
