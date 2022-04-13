import { GET_PLANETS, GET_PLANETS_COUNT } from "../types/planets";

const initialState = {
    planets: [],
    planetsCount: 0,
}

export default function planetsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PLANETS:
            return {
                ...state,
                planets: action.payload
            }
        case GET_PLANETS_COUNT:
            return {
                ...state,
                planetsCount: action.payload
            }
        default:
            return state;
    }
};