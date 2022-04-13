import React, { useState } from 'react'
import './SearchBar.scss'

const SearchBar = ({ setFilterWord }) => {

    const [filterWord, setFilterWordState] = useState('');

    return (
        <section className='SearchBarContainer'>
            <input className='SearchBarInput' type="text" placeholder="Search" onChange={(e) => setFilterWordState(e.target.value)} />
            <button type='submit' className='SearchBarButton' onClick={() => setFilterWord(filterWord)}>Search</button>
        </section>
    )
}

export default SearchBar