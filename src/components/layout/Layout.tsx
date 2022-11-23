import {Outlet, useLocation} from 'react-router-dom';
import {Header} from '../header/Header';
import {Navbar} from '../navbar/Navbar';
import { SideBar } from '../sideBar/SideBar';

import st from './layout.module.scss';

export const Layout = () => {
    const location = useLocation();

    if(location.pathname === '/') {
        return (
            <div className={st['main__wrap']}>
                <SideBar/>
                <main className={st['main']}>
                    <Header sx={{maxWidth: '1160px'}}/>
                    {/* <Navbar/> */}
                    <Outlet/>
                </main>
            </div>
        );
    }

    return (
        <>
            <Header/>
            <main>
                <Navbar />
                <Outlet />
            </main>
        </>
    );
};