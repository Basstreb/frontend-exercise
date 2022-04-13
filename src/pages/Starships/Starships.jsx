import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStarshipsApi, getStarshipsApiSorted, sortStarships } from '../../redux/actions/starships';
import { starshipsImgsExporter } from '../../utils/imgExporter';
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';
import Cards from '../../components/Cards/Cards';
import '../Pages.scss';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/Searchbar/SearchBar';
import Paginator from '../../components/Paginator/Paginator';

const Starships = () => {

    const [pageToFetch, setPageToFetch] = useState(1);
    const [filterWord, setFilterWord] = useState('');
    const [selector, setSelector] = useState('');
    const [sortAsc, setSortAsc] = useState(1);
    const starships = useSelector(state => state.starships.starships);
    const starshipsCount = useSelector(state => state.starships.starshipsCount);
    const sortedStarships = useSelector(state => state.starships.sortedStarships);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStarshipsApi(pageToFetch, filterWord));
        dispatch(getStarshipsApiSorted(pageToFetch, filterWord, selector, sortAsc));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterWord, selector, sortAsc]);

    const fetchNextPage = (page) => {
        dispatch(getStarshipsApi(page, filterWord));
        dispatch(getStarshipsApiSorted(page, filterWord, selector));
        setPageToFetch(page);
    }

    const fetchPreviousPage = (page) => {
        dispatch(getStarshipsApi(page, filterWord));
        dispatch(getStarshipsApiSorted(page, filterWord, selector));
        setPageToFetch(page);
    }


    return (
        <main className='MainContainer'>
            <h1>Starships</h1>
            <div className='FilterContainer'>
                <SearchBar setFilterWord={setFilterWord} />
                <select value={selector} onChange={(e) => setSelector(e.target.value)} className='Select'>
                    <option value="">No filters</option>
                    <option value="crew">Crew</option>
                    <option value="cargo_capacity">Cargo capacity</option>
                </select>
                {selector !== '' && (
                    sortAsc === -1 ? (
                        <button className='SortButton' onClick={() => setSortAsc(-sortAsc)}>
                            <FaSortAmountUpAlt />
                        </button>
                    ) : (
                        <button className='SortButton' onClick={() => setSortAsc(-sortAsc)}>
                            <FaSortAmountDownAlt />
                        </button>
                    ))}
            </div>
            {starships.length !== 0 ? (
                <>
                    <div className='Grid-container'>
                        {sortedStarships.length !== 0 ? (
                            sortedStarships.map((starship, index) => (
                                <Cards
                                    key={index}
                                    imgFilter={starshipsImgsExporter(starship.name)}
                                    name={starship.name}
                                    cargo_capacity={starship.cargo_capacity}
                                    crew={starship.crew} />
                            ))
                        ) : (
                            starships.map((starship, index) => (
                                <Cards
                                    key={index}
                                    imgFilter={starshipsImgsExporter(starship.name)}
                                    name={starship.name}
                                    cargo_capacity={starship.cargo_capacity}
                                    crew={starship.crew} />
                            ))
                        )}
                    </div>
                    <Paginator
                        pageToFetch={pageToFetch}
                        fetchPreviousPage={fetchPreviousPage}
                        count={starshipsCount}
                        fetchNextPage={fetchNextPage} />
                </>
            ) : (
                <Loading />
            )}
        </main>
    )
}

export default Starships