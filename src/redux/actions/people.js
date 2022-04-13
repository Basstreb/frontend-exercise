import { GET_PEOPLE } from "../types/people";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getPeople = (payload) => ({
    type: GET_PEOPLE,
    payload
});

export const getPeopleApi = (pageToFetch, searchWord) => async (dispatch) => {
    try {
        await fetch(`${BASE_URL}people/?page=${pageToFetch}&search=${searchWord ? searchWord : ''}`)
            .then((response) => response.json())
            .then((people) => dispatch(getPeople(people)));
    } catch (error) {
        console.log(error);
    }
};