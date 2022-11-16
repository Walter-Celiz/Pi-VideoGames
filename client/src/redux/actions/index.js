// Nodes
import axios from "axios";

// Functions
export function getVideoGames() {
    return async function (dispatch) {
        let videoGames = await axios.get("http://localhost:3001/videogames");
        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: videoGames.data,
        });
    };
}

export function filterByGenres() {
    return async function (dispatch) {
        let genres = await axios.get("http://localhost:3001/genres");
        return dispatch({
            type: "FILTER_BY_GENRES",
            payload: genres.data,
        });
    };
}

export function filterByCreated(payload) {
    return {
        type: "FILTER_BY_CREATED",
        payload,
    };
}