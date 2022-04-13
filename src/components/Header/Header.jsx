import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import logo_darkMode from '../../assets/Star_Wars_Logo_White.png'
import useWindowDimensions from '../../utils/windowDimension';
import './Header.scss';

const Header = () => {

    const { width } = useWindowDimensions();
    const navigate = useNavigate();

    return (
        <header className='Header'>
            {width < 1200 && (
                <div className='LogoContainer'>
                    <img src={logo_darkMode} onClick={() => navigate('/')} alt='Star Wars Logo' className='Logo' />
                </div>
            )}
            <div className='Text'>
                <h2>Imperial destroyers center</h2>

                <div>
                    <IoNotifications className='Icons' />
                    <FaUserAlt className='Icons' />
                </div>
            </div>
        </header>
    )
}

export default Header