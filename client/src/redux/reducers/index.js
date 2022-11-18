// States
const initialState = {
    allVideoGames: [],
    allVideoGamesLoaded: [],
    allGenres: [],
};

// Functions
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_VIDEOGAMES":
            return {
                ...state,
                allVideoGamesLoaded: action.payload,
                allVideoGames: action.payload,
            };

        case "GET_GENRES":
            return {
                ...state,
                allGenres: action.payload,
            };

        case "FILTER_BY_GENRE":
            const allVideoGames = state.allVideoGames;
            const genresFilter = action.payload === "all"
                ? allVideoGames
                : allVideoGames.filter(video =>
                    video.genres.includes(action.payload));
            return {
                ...state,
                allVideoGamesLoaded: genresFilter,
            };

        case "FILTER_BY_CREATED":
            const allVideoGames2 = state.allVideoGames;
            const filterByCreated = action.payload === "created"
                ? allVideoGames2.filter((videoGame) => videoGame.created)
                : allVideoGames2.filter((videoGame) => !videoGame.created);
            console.log(filterByCreated);
            return {
                ...state,
                allVideoGamesLoaded: action.payload === "all"
                    ? state.allVideoGames
                    : filterByCreated
            };

        default:
            return state;
    }
}

export default rootReducer;

/* min 01:07:30 */