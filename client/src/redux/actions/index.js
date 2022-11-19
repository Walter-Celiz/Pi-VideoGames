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
            const genres = await axios.get("http://localhost:3001/genres");
            return dispatch({
                type: "GET_GENRES",
                payload: genres.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function filterGenre(payload) {
    return {
        type: "FILTER_GENRE",
        payload,
    };
}

export function filterCreated(payload) {
    return {
        type: "FILTER_CREATED",
        payload,
    };
}

export function orderName(payload) {
    return {
        type: "ORDER_NAME",
        payload,
    };
}

export function orderRating(payload) {
    return {
        type: "ORDER_RATING",
        payload,
    };
}