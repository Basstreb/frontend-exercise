import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPlanet } from 'react-icons/io5'
import { FaPlaceOfWorship, FaTruck } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md'

import './MobileBar.scss'

const currentPath = () => {
    switch (window.location.pathname) {
        case '/':
            return 'home'
        case '/starships':
            return 'starships'
        case '/people':
            return 'people'
        case '/vehicles':
            return 'vehicles'
        default:
            break;
    }
}

const BottomNavBar = props => {
    const navigate = useNavigate();
    const [activeTabs, setActiveTabs] = useState(currentPath())

    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                navigate('/')
                break;
            case 'starships':
                navigate('/starships')
                break;
            case 'people':
                navigate('/people')
                break;
            case 'vehicles':
                navigate('/vehicles')
                break;
            default:
                navigate('/')
                break;
        }
    }, [activeTabs, navigate])

    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === 'home' ?
                    <IoPlanet
                        size='35'
                        color='#daa80d'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <IoPlanet
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'starships' ?
                    <FaPlaceOfWorship
                        size='35'
                        color='#daa80d'
                        onClick={() => setActiveTabs('starships')}
                    /> :
                    <FaPlaceOfWorship
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('starships')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'people' ?
                    <MdGroups
                        size='35'
                        color='#daa80d'
                        onClick={() => setActiveTabs('people')}
                    /> :
                    <MdGroups
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('people')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'vehicles' ?
                    <FaTruck
                        size='35'
                        color='#daa80d'
                        onClick={() => setActiveTabs('vehicles')}
                    /> :
                    <FaTruck
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('vehicles')}
                    />}
            </div>
        </div>
    )
}

export default BottomNavBar