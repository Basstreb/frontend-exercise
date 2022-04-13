import React from 'react'
import './Loading.scss'

const Loading = () => {
    return (
        <div className='loadingContainer'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading