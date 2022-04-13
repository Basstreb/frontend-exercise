import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { starshipsImgsExporter } from '../../utils/imgExporter';
import Cards from '../../components/Cards/Cards';
import '../Pages.scss';
import { getPeopleApi } from '../../redux/actions/people';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/Searchbar/SearchBar';
import Paginator from '../../components/Paginator/Paginator';

const Starships = () => {

    const [pageToFetch, setPageToFetch] = useState(1);
    const [filterWord, setFilterWord] = useState('');
    const people = useSelector(state => state.people.people);
    const peopleCount = useSelector(state => state.people.peopleCount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPeopleApi(1, filterWord));
        setPageToFetch(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterWord]);

    const fetchNextPage = (page) => {
        dispatch(getPeopleApi(page, filterWord));
        setPageToFetch(page);
    }

    const fetchPreviousPage = (page) => {
        dispatch(getPeopleApi(page, filterWord));
        setPageToFetch(page);
    }

    return (
        <main className='MainContainer'>
            <h1>People</h1>
            <SearchBar setFilterWord={setFilterWord} />
            {people?.length !== 0 ? (
                <>
                    <div className='Grid-container'>
                        {people && (
                            people?.map((people, index) => (
                                <Cards
                                    key={index}
                                    imgFilter={starshipsImgsExporter(people.name)}
                                    name={people.name}
                                    gender={people.gender}
                                    birth_year={people.birth_year} />
                            ))
                        )}
                    </div>
                    <Paginator
                        pageToFetch={pageToFetch}
                        fetchPreviousPage={fetchPreviousPage}
                        count={peopleCount}
                        fetchNextPage={fetchNextPage} />
                </>
            ) : (
                <Loading />
            )}
        </main>
    )
}

export default Starships