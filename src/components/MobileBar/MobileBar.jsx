import { useState, useEffect } from 'react'
import { IoPlanet } from 'react-icons/io5'
import { FaPlaceOfWorship, FaTruck } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md'
import './MobileBar.scss'
import { Link } from 'react-router-dom';

const BottomNavBar = ({ navigate, location }) => {
    const [activeTabs, setActiveTabs] = useState(window.location.pathname.split('/')[1]);

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        setActiveTabs(curPath)
    }, [location, navigate]);

    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === '' ?
                    <Link to='/'><IoPlanet size='35' color='#daa80d' /></Link> :
                    <Link to='/'><IoPlanet size='35' color='#fff' /></Link>}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'starships' ?
                    <Link to='/starships'><FaPlaceOfWorship size='35' color='#daa80d' /></Link> :
                    <Link to='/starships'><FaPlaceOfWorship size='35' color='#fff' /></Link>}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'people' ?
                    <Link to='/people'><MdGroups size='35' color='#daa80d' /></Link> :
                    <Link to='/people'><MdGroups size='35' color='#fff' /></Link>}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'vehicles' ?
                    <Link to='/vehicles'><FaTruck size='35' color='#daa80d' /></Link> :
                    <Link to='/vehicles'><FaTruck size='35' color='#fff' /></Link>}
            </div>
        </div>
    )
}

export default BottomNavBar