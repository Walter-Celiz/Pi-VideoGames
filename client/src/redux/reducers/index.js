// States
const initialState = {
    videoGames: [],
    videoGamesLoaded: [],
    genres: [],
    platforms: [],
    rating: [],
};

// Functions
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_VIDEOGAMES":
            return {
                ...state,
                videoGamesLoaded: action.payload,
                videoGames: action.payload,
            };

        case "GET_VIDEOGAME_NAME":
            return {
                ...state,
                videoGamesLoaded: action.payload,
            };

        case "GET_GENRES":
            return {
                ...state,
                genres: action.payload,
            };

        case "POST_VIDEOGAME":
            return {
                ...state,
            };

        case "FILTER_GENRE":
            const videoGames = state.videoGames;
            const genresFilter = action.payload === "all"
                ? videoGames
                : videoGames.filter(video =>
                    video.genres.includes(action.payload));
            return {
                ...state,
                videoGamesLoaded: genresFilter,
            };

        case "FILTER_CREATED":
            const allVideoGames2 = state.videoGames;
            const filterByCreated = action.payload === "created"
                ? allVideoGames2.filter((videoGame) => videoGame.created)
                : allVideoGames2.filter((videoGame) => !videoGame.created);
            return {
                ...state,
                videoGamesLoaded: action.payload === "all"
                    ? state.videoGames
                    : filterByCreated
            };

        case "ORDER_NAME":
            let sortName = action.payload === "ascAlph"
                ? state.videoGamesLoaded.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    //if it is 0 the result is the same
                    return 0;
                })
                : state.videoGamesLoaded.sort(function (a, b) {
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0;
                });
            return {
                ...state,
                videoGamesLoaded: sortName,
            };

        case "ORDER_RATING":
            let sortRating = action.payload === "ascRat"
                ? state.videoGamesLoaded.sort(function (a, b) {
                    if (a.rating > b.rating) return -1;
                    if (b.rating > a.rating) return 1;
                    return 0;
                })
                : state.videoGamesLoaded.sort(function (a, b) {
                    if (a.rating > b.rating) return 1;
                    if (b.rating > a.rating) return -1;
                    return 0;
                });
            return {
                ...state,
                videoGamesLoaded: sortRating,
            };

        default:
            return state;
    }
}

export default rootReducer;
