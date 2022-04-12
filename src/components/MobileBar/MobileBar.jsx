import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { RiHomeSmile2Line, RiHomeSmile2Fill, RiUser5Fill, RiSearchEyeFill } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line } from 'react-icons/ri'
import { IoPlanet } from 'react-icons/io5'
import { FaPlaceOfWorship, FaTruck } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md'

import './MobileBar.scss'

const BottomNavBar = props => {
    const navigate = useNavigate()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                navigate('/')
                break;
            case 'search':
                navigate('/starships')
                break;
            case 'favourites':
                navigate('/people')
                break;
            case 'account':
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
                {activeTabs === 'search' ?
                    <FaPlaceOfWorship
                        size='35'
                        color='#daa80d'
                        onClick={() => setActiveTabs('search')}
                    /> :
                    <FaPlaceOfWorship
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('search')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'favourites' ?
                    <MdGroups
                        size='35'
                        color='#daa80d'
                        onClick={() => setActiveTabs('favourites')}
                    /> :
                    <MdGroups
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('favourites')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'account' ?
                    <FaTruck
                        size='35'
                        color='#daa80d'
                        onClick={() => setActiveTabs('account')}
                    /> :
                    <FaTruck
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('account')}
                    />}
            </div>
        </div>
    )
}

export default BottomNavBar