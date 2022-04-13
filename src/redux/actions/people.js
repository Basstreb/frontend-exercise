import { GET_PEOPLE, GET_PEOPLE_COUNT } from "../types/people";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getPeople = (payload) => ({
    type: GET_PEOPLE,
    payload
});

const getPeopleCount = (payload) => ({
    type: GET_PEOPLE_COUNT,
    payload
});

export const getPeopleApi = (pageToFetch, searchWord) => async (dispatch) => {
    try {
        await fetch(`${BASE_URL}people/?page=${pageToFetch}&search=${searchWord ? searchWord : ''}`)
            .then((response) => response.json())
            .then((people) => {
                dispatch(getPeople(people.results));
                dispatch(getPeopleCount(people.count));
            });
    } catch (error) {
        console.log(error);
    }
};