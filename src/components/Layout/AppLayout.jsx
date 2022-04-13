import { Outlet } from "react-router-dom";
import SideBar from '../SideBar/Sidebar'
import MobileBar from '../MobileBar/MobileBar';
import useWindowDimensions from '../../utils/windowDimension';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

const AppLayout = () => {
    const { width } = useWindowDimensions();

    return (
        <div style={{ padding: width >= 1200 ? '0px 0px 0px 280px' : '' }}>
            {width >= 1200 && <SideBar />}
            <Header />
            <Outlet />
            <Footer />
            {width < 1200 && <MobileBar />}
        </div>
    );
};
export default AppLayout;