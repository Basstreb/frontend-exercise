import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import { getPlanetsApi } from '../../redux/actions/planets';
import { planetsImgsExporter } from '../../utils/imgExporter';
import '../Pages.scss';
import SearchBar from '../../components/Searchbar/SearchBar';
import Loading from '../../components/Loading/Loading';
import Paginator from '../../components/Paginator/Paginator';

const Planets = () => {

  const [pageToFetch, setPageToFetch] = useState(1);
  const [filterWord, setFilterWord] = useState('');
  const planets = useSelector(state => state?.planets?.planets);
  const planetsCount = useSelector(state => state?.planets?.planetsCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanetsApi(pageToFetch, filterWord));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterWord]);

  const fetchNextPage = (page) => {
    dispatch(getPlanetsApi(page, filterWord));
    setPageToFetch(page);
  }

  const fetchPreviousPage = (page) => {
    dispatch(getPlanetsApi(page, filterWord));
    setPageToFetch(page);
  }

  return (
    <main className='MainContainer'>
      <h1>Planets</h1>
      <SearchBar setFilterWord={setFilterWord} />
      {planets?.length !== 0 ? (
        <>
          <div className='Grid-container'>
            {planets && (
              planets?.map((planet, index) => (
                <Cards
                  key={index}
                  imgFilter={planetsImgsExporter(planet.name)}
                  name={planet.name}
                  terrain={planet.terrain}
                  population={planet.population} />
              ))
            )}
          </div>
          <Paginator
            pageToFetch={pageToFetch}
            fetchPreviousPage={fetchPreviousPage}
            count={planetsCount}
            fetchNextPage={fetchNextPage} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  )
}

export default Planets