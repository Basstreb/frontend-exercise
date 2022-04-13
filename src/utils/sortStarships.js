
export const sortStarships = (e, dispatch, starships) => {
    switch (e.target.value) {
        case "":
            dispatch(sortStarships([]));
            break;
        case "crew":
            const sortedStarshipsCrew = [...starships].sort(function (a, b) {
                console.log(typeof parseInt(a.crew));
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
            break;
        case "cargo_capacity":
            const sortedStarshipsCargo = [...starships].sort(function (a, b) {
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
            break;
        default:
            dispatch(sortStarships([]));
            break;
    }
}