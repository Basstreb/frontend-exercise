import { GET_STARSHIPS, GET_STARSHIPS_COUNT, SORT_STARSHIPS } from "../types/starships";


const initialState = {
    starships: [],
    starshipsCount: 0,
    sortedStarships: [],
}

export default function starshipsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STARSHIPS:
            return {
                ...state,
                starships: action.payload
            }
        case GET_STARSHIPS_COUNT:
            return {
                ...state,
                starshipsCount: action.payload
            }
        case SORT_STARSHIPS:
            return {
                ...state,
                sortedStarships: action.payload
            }
        default:
            return state;
    }
};