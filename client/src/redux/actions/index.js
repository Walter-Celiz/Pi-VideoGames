// Nodes
import axios from "axios";

// Functions
export function getVideoGames() {
    return async function (dispatch) {
        try {
            let videoGames = await axios.get("http://localhost:3001/videogames");
            return dispatch({
                type: "GET_VIDEOGAMES",
                payload: videoGames.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getGenres() {
    return async function (dispatch) {
        try {
            let genres = await axios.get("http://localhost:3001/genres");
            return dispatch({
                type: "GET_GENRES",
                payload: genres.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getVideoGameName(name) {
    return async function (dispatch) {
        try {
            let videoGameName = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            return dispatch({
                type: "GET_VIDEOGAME_NAME",
                payload: videoGameName.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function getPlatforms() {
    return async function (dispatch) {
        try {
            let platforms = await axios.get("http://localhost:3001/platforms");
            return dispatch({
                type: "GET_PLATFORMS",
                payload: platforms.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function postVideoGame(body) {
    return async function (dispatch) {
        try {
            let videoGame = await axios.post(`http://localhost:3001/videogames/create`, body);
            return dispatch({
                type: "POST_VIDEOGAME",
                payload: videoGame.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function filterGenre(payload) {
    try {
        return {
            type: "FILTER_GENRE",
            payload,
        }
    } catch (error) {
        console.log(error);
    }
}

export function filterCreated(payload) {
    try {
        return {
            type: "FILTER_CREATED",
            payload,
        }
    } catch (error) {
        console.log(error);
    }
}

export function orderName(payload) {
    try {
        return {
            type: "ORDER_NAME",
            payload,
        }
    } catch (error) {
        console.log(error);
    }
}

export function orderRating(payload) {
    try {
        return {
            type: "ORDER_RATING",
            payload,
        }
    } catch (error) {
        console.log();
    }
}

