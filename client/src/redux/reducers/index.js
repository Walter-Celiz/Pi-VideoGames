// States
const initialState = {
    allVideoGames: [],
    allVideoGames2: [],
    allGenres: [],
};

// Functions
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_VIDEOGAMES":
            return {
                ...state,
                allVideoGames: action.payload,
            };

        case 'FILTER_BY_GENRES':
            return {
                ...state,
                allGenres: action.payload,
            }

        case "FILTER_BY_CREATED":
            const allVideoGames2 = state.allVideoGames;
            const filterByCreated =
                action.payload === "created"
                    ? allVideoGames2.filter((videoGame) => videoGame.created)
                    : allVideoGames2.filter((videoGame) => !videoGame.created);
            console.log(filterByCreated);
            return {
                ...state,
                allVideoGames: action.payload === "all" ? state.allVideoGames : filterByCreated,
            };

        default:
            return state;
    }
}

export default rootReducer;