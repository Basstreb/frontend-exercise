import React, { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { sideBarMenuItems } from '../../utils/menu';
import default_logo from '../../assets/Star_Wars_Logo_Black.png'
import logo_darkMode from '../../assets/Star_Wars_Logo_White.png'
import './SideBarMenu.scss';
const SideBarMenu = () => {

    return (
        <div className='SideBarMenu expanded'>

            <img src={logo_darkMode} alt='Star Wars Logo' className='Logo' />

            {sideBarMenuItems.map((item, index) => (
                <div key={index} className='MenuItem'>
                    <a href={item.to} style={{ display: 'flex' }} className='Anchors'>
                        <div className='IconsMenu'>
                            {item.icon}
                        </div>
                        <div className='TextMenu'>
                            {item.display}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default SideBarMenu