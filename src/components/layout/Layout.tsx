import {Outlet} from 'react-router-dom';
import {Header} from '../header/Header';
import {Navbar} from '../navbar/Navbar';
import { SideBar } from '../sideBar/SideBar';

import st from './layout.module.scss';

export const Layout = () => {

    return (
        <>
            <Header/>
            <main className={st['main']}>
                <Navbar />
                <Outlet />
            </main>
        </>
    );
};