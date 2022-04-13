import { GET_VEHICLES, GET_VEHICLES_COUNT } from "../types/vehicles";

const initialState = {
    vehicles: [],
    vehiclesCount: 0,
}

export default function vehiclesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            }
        case GET_VEHICLES_COUNT:
            return {
                ...state,
                vehiclesCount: action.payload
            }
        default:
            return state;
    }
};