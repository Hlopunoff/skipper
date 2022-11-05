import {Outlet} from 'react-router-dom';
import {Header} from '../header/Header';
import {Navbar} from '../navbar/Navbar';

import st from './layout.module.scss';

export const Layout = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <Navbar/>
                <Outlet/>
            </main>
        </>
    );
};