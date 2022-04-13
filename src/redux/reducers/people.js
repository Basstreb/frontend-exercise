import { GET_PEOPLE } from "../types/people";

const initialState = {
    people: [],
    // filteredUsers: [],
    // filterWord: undefined,
}

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PEOPLE:
            return {
                ...state,
                people: action.payload
            }
        default:
            return state;
    }
};