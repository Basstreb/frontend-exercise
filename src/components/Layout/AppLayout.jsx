import React, { useEffect, useState } from 'react'; import { Outlet } from "react-router-dom";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import SideBar from '../SideBar/Sidebar'
import MobileBar from '../MobileBar/MobileBar';
import useWindowDimensions from '../../utils/windowDimension';

const AppLayout = () => {
    const {width} = useWindowDimensions();

    return (
        <div style={{padding: width >= 1200 ? '50px 0px 0px 370px' : ''}}>
            {width >= 1200 && <SideBar />}
            <Outlet />
            {width < 1200 && <MobileBar />}
        </div>
    );
};
export default AppLayout;