import React from 'react'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { up } from '../../utils/roundUp';

const Paginator = ({ pageToFetch, fetchPreviousPage, count, fetchNextPage }) => {
    return (
        <div className='ButtonsContainer'>
            <button className='NextPreviousButtons' disabled={pageToFetch === 1} onClick={() => fetchPreviousPage(pageToFetch - 1)}><MdNavigateBefore style={{ color: '#fff' }} /></button>
            <div>{`Page ${pageToFetch} of ${up(parseFloat((count / 10).toFixed(1)), 0)} (${count} Total)`}</div>
            <button className='NextPreviousButtons' disabled={pageToFetch * 10 >= count} onClick={() => fetchNextPage(pageToFetch + 1)}><MdNavigateNext style={{ color: '#fff' }} /></button>
        </div>
    )
}

export default Paginator