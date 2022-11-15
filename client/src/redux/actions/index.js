import axios from "axios";

export function getVideoGames() {
    return async function (dispatch) {
        let response = await axios.get("http://localhost:3001/videogames");
        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: response.data,
        });
    };
}
