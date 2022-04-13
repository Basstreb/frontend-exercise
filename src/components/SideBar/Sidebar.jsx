import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import default_logo from '../../assets/Star_Wars_Logo_Black.png'
import logo_darkMode from '../../assets/Star_Wars_Logo_White.png'
import { sideBarMenuItems } from '../../utils/menu';
import './sidebar.scss';

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const sidebarRef = useRef();
    const location = useLocation();

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sideBarMenuItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            <img src={logo_darkMode} onClick={() => navigate('/')} alt='Star Wars Logo' className='Logo' />
        </div>

        <nav ref={sidebarRef} className="sidebar__menu">
            <ul>
                {sideBarMenuItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <li className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    </div>;
};

export default Sidebar;
