import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getVehiclesApi } from '../../redux/actions/vehicles';
import { vehiclesImgsExporter } from '../../utils/imgExporter';
import Cards from '../../components/Cards/Cards';
import '../Pages.scss';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/Searchbar/SearchBar';
import Paginator from '../../components/Paginator/Paginator';

const Vehicles = () => {

    const [pageToFetch, setPageToFetch] = useState(1);
    const [filterWord, setFilterWord] = useState('');
    const vehicles = useSelector(state => state.vehicles.vehicles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVehiclesApi(1, filterWord));
        setPageToFetch(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterWord]);

    const fetchNextPage = (page) => {
        dispatch(getVehiclesApi(page, filterWord));
        setPageToFetch(page);
    }

    const fetchPreviousPage = (page) => {
        dispatch(getVehiclesApi(page, filterWord));
        setPageToFetch(page);
    }

    return (
        <main className='MainContainer'>
            <h1>Vehicles</h1>
            <SearchBar setFilterWord={setFilterWord} />
            {vehicles.length !== 0 ? (
                <>
                    <div className='Grid-container'>
                        {vehicles.results && (
                            vehicles.results.map((vehicle, index) => (
                                <Cards
                                    key={index}
                                    imgFilter={vehiclesImgsExporter(vehicle.name)}
                                    name={vehicle.name}
                                    max_atmosphering_speed={vehicle.max_atmosphering_speed}
                                    cost_in_credits={vehicle.cost_in_credits} />
                            ))
                        )}
                    </div>
                    <Paginator
                        pageToFetch={pageToFetch}
                        fetchPreviousPage={fetchPreviousPage}
                        count={vehicles.count}
                        fetchNextPage={fetchNextPage} />
                </>
            ) : (
                <Loading />
            )}
        </main>
    )
}

export default Vehicles;