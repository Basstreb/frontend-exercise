import { GET_VEHICLES } from "../types/vehicles";


const initialState = {
    vehicles: [],
    // filteredUsers: [],
    // filterWord: undefined,
}

export default function vehiclesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            }
        default:
            return state;
    }
};