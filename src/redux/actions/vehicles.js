import { GET_VEHICLES } from "../types/vehicles";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getVehicles = (payload) => ({
    type: GET_VEHICLES,
    payload
});

export const getVehiclesApi = (pageToFetch, searchWord) => async (dispatch) => {
    try {
        await fetch(`${BASE_URL}vehicles/?page=${pageToFetch}&search=${searchWord ? searchWord : ''}`)
            .then((response) => response.json())
            .then((vehicles) => dispatch(getVehicles(vehicles)));
    } catch (error) {
        console.log(error);
    }
};