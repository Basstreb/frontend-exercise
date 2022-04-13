import { GET_PEOPLE, GET_PEOPLE_COUNT } from "../types/people";

const initialState = {
    people: [],
    peopleCount: 0,
}

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PEOPLE:
            return {
                ...state,
                people: action.payload
            }
        case GET_PEOPLE_COUNT:
            return {
                ...state,
                peopleCount: action.payload
            }
        default:
            return state;
    }
};