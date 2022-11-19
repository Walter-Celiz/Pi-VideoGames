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

        case "GET_VIDEOGAME_NAME":
            return {
                ...state,
                allVideoGamesLoaded: action.payload,
            };

        case "FILTER_GENRE":
            const allVideoGames = state.allVideoGames;
            const genresFilter = action.payload === "all"
                ? allVideoGames
                : allVideoGames.filter(video =>
                    video.genres.includes(action.payload));
            return {
                ...state,
                allVideoGamesLoaded: genresFilter,
            };

        case "FILTER_CREATED":
            const allVideoGames2 = state.allVideoGames;
            const filterByCreated = action.payload === "created"
                ? allVideoGames2.filter((videoGame) => videoGame.created)
                : allVideoGames2.filter((videoGame) => !videoGame.created);
            return {
                ...state,
                allVideoGamesLoaded: action.payload === "all"
                    ? state.allVideoGames
                    : filterByCreated
            };

        case "ORDER_NAME":
            let sortName = action.payload === "ascAlph"
                ? state.allVideoGamesLoaded.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    //if it is 0 the result is the same
                    return 0;
                })
                : state.allVideoGamesLoaded.sort(function (a, b) {
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0;
                });
            return {
                ...state,
                allVideoGamesLoaded: sortName,
            };

        case "ORDER_RATING":
            let sortRating = action.payload === "ascRat"
                ? state.allVideoGamesLoaded.sort(function (a, b) {
                    if (a.rating > b.rating) return 1;
                    if (b.rating > a.rating) return -1;
                    return 0;
                })
                : state.allVideoGamesLoaded.sort(function (a, b) {
                    if (a.rating > b.rating) return -1;
                    if (b.rating > a.rating) return 1;
                    return 0;
                });
            return {
                ...state,
                allVideoGamesLoaded: sortRating,
            };

        default:
            return state;
    }
}

export default rootReducer;
