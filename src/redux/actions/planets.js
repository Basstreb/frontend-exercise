import { GET_PLANETS, GET_PLANETS_COUNT } from "../types/planets";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getPlanets = (payload) => ({
    type: GET_PLANETS,
    payload
})

const getPlanetsCount = (payload) => ({
    type: GET_PLANETS_COUNT,
    payload
});

export const getPlanetsApi = (pageToFetch, searchWord) => (dispatch) => {
    try {
        fetch(`${BASE_URL}planets/?page=${pageToFetch}&search=${searchWord ? searchWord : ''}`)
            .then((response) => response.json())
            .then((planets) => {
                dispatch(getPlanets(planets.results));
                dispatch(getPlanetsCount(planets.count));
            });
    } catch (error) {
        console.log(error);
    }
};