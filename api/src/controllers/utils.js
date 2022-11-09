const axios = require("axios");
require("dotenv").config();
const { KEY } = process.env;
const { VideoGame, Genre } = require("../db");

const getApiVideoGames = async () => {
    try {
        const pages = 5;
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
                platforms: videoGame.platforms.map((el) => el.platform.name),
                description: videoGame.description,
                genres: videoGame.genres
                    ? videoGame.genres.map((genre) => genre.name)
                    : "Undefined",
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
            include: {
                model: Genre,
                attributes: ["name"],
            },
        });
        return videoGames.map((videoGame) => ({
            id: videoGame.id,
            name: videoGame.name,
            released: videoGame.released,
            background_image: videoGame.background_image
                ? videoGame.background_image
                : "https://www.softzone.es/app/uploads-softzone.es/2020/03/Programaci%C3%B3n-Videojuegos.jpg",
            rating: videoGame.rating,
            platforms: videoGame.platforms,
            description: videoGame.description,
            genres: videoGame.genres
                ? videoGame.genres.map((genre) => genre.name)
                : "Undefined",
            created: videoGame.created,
        }));
    } catch (error) {
        console.log(error + " #getDbVideoGames fail!!! 🔴🔴😥😭");
    }
};

const getVideoGames = async () => {
    try {
        const [Api, DB] = await Promise.all([
            getApiVideoGames(),
            getDbVideoGames(),
        ]);
        return [...Api, ...DB];
    } catch (error) {
        console.log(error + " #getVideoGames fail!!! 🔴🔴😥😭");
    }
};

const getVideoGameIdApi = async (id) /* id */ => {
    try {
        const apiCall = await axios.get(
            `https://api.rawg.io/api/games/${id}?key=${KEY}`
        );
        const videoGameId = await apiCall.data.results.map((videoGame) => ({
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
        const apiCall = await axios.get(
            `https://api.rawg.io/api/genres?key=${KEY}`
        );
        const genresApi = await apiCall.data.results.map((genre) => {
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

module.exports = {
    getVideoGames,
    getVideoGameIdApi,
    getGenresApi,
};
