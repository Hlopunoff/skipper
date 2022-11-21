import {useLocation} from 'react-router-dom';
import { Logo } from '../../UI/logo/Logo';

import st from './sideBar.module.scss';

export const SideBar = () => {
    const location = useLocation();

    return (
        <aside className={st['sideBar']} style={location.pathname !== '/' ? ({display: 'none'}) : undefined}>
            <Logo/>
            dawdwa
        </aside>
    );
};