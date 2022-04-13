import { GET_STARSHIPS, GET_STARSHIPS_COUNT, SORT_STARSHIPS } from "../types/starships";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getStarships = (payload) => ({
    type: GET_STARSHIPS,
    payload
});

export const getStarshipsCount = (payload) => ({
    type: GET_STARSHIPS_COUNT,
    payload
});

export const sortStarships = (payload) => ({
    type: SORT_STARSHIPS,
    payload
});

export const getStarshipsApi = (pageToFetch, searchWord) => async (dispatch) => {
    try {
        await fetch(`${BASE_URL}starships/?page=${pageToFetch}&search=${searchWord ? searchWord : ''}`)
            .then((response) => response.json())
            .then((starships) => {
                dispatch(getStarships(starships.results));
                dispatch(getStarshipsCount(starships.count))
            });
    } catch (error) {
        console.log(error);
    }
};

export const getStarshipsApiSorted = (pageToFetch, searchWord, selector, order) => async (dispatch) => {
    try {
        await fetch(`${BASE_URL}starships/?page=${pageToFetch}&search=${searchWord ? searchWord : ''}`)
            .then((response) => response.json())
            .then((starships) => {
                switch (selector) {
                    case "crew":
                        if (order === 1) {
                            const sortedStarshipsCrew = [...starships.results].sort(function (a, b) {
                                if (parseInt(a.crew) > parseInt(b.crew)) {
                                    return 1;
                                }
                                if (parseInt(a.crew) < parseInt(b.crew)) {
                                    return -1;
                                }
                                // a must be equal to b
                                return 0;
                            });
                            dispatch(sortStarships(sortedStarshipsCrew));
                        } else {
                            const sortedStarshipsCrew = [...starships.results].sort(function (a, b) {
                                if (parseInt(a.crew) < parseInt(b.crew)) {
                                    return 1;
                                }
                                if (parseInt(a.crew) > parseInt(b.crew)) {
                                    return -1;
                                }
                                // a must be equal to b
                                return 0;
                            });
                            dispatch(sortStarships(sortedStarshipsCrew));
                        }
                        break;
                    case "cargo_capacity":
                        if (order === 1) {
                            const sortedStarshipsCargo = [...starships.results].sort(function (a, b) {
                                if (parseInt(a.cargo_capacity) > parseInt(b.cargo_capacity)) {
                                    return 1;
                                }
                                if (parseInt(a.cargo_capacity) < parseInt(b.cargo_capacity)) {
                                    return -1;
                                }
                                // a must be equal to b
                                return 0;
                            });
                            dispatch(sortStarships(sortedStarshipsCargo));

                        } else {
                            const sortedStarshipsCargo = [...starships.results].sort(function (a, b) {
                                if (parseInt(a.cargo_capacity) < parseInt(b.cargo_capacity)) {
                                    return 1;
                                }
                                if (parseInt(a.cargo_capacity) > parseInt(b.cargo_capacity)) {
                                    return -1;
                                }
                                // a must be equal to b
                                return 0;
                            });
                            dispatch(sortStarships(sortedStarshipsCargo));
                        }
                        break;
                    default:
                        dispatch(sortStarships([]));
                        break;
                }
            });
    } catch (error) {
        console.log(error);
    }
}