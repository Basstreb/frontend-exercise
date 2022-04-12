import { FaTruck } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { IoPlanet } from 'react-icons/io5';

export const sideBarMenuItems = [
    {
        display: 'Planets',
        icon: <IoPlanet />,
        to: '/',
        section: ''
    },
    {
        display: 'Starships',
        icon: <FaPlaceOfWorship />,
        to: '/starships',
        section: 'starships'
    },
    {
        display: 'People',
        icon: <MdGroups />,
        to: '/people',
        section: 'people'
    },
    {
        display: 'Vehicles',
        icon: <FaTruck />,
        to: '/vehicles',
        section: 'vehicles'
    },
]