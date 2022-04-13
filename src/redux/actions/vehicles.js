import { GET_VEHICLES, GET_VEHICLES_COUNT } from "../types/vehicles";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getVehicles = (payload) => ({
    type: GET_VEHICLES,
    payload
});

const getVehicleCount = (payload) => ({
    type: GET_VEHICLES_COUNT,
    payload
});

export const getVehiclesApi = (pageToFetch, searchWord) => async (dispatch) => {
    try {
        await fetch(`${BASE_URL}vehicles/?page=${pageToFetch}&search=${searchWord ? searchWord : ''}`)
            .then((response) => response.json())
            .then((vehicles) => {
                dispatch(getVehicles(vehicles.results));
                dispatch(getVehicleCount(vehicles.count));
            });
    } catch (error) {
        console.log(error);
    }
};