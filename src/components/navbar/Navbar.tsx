import {NavLink, useLocation} from 'react-router-dom';
import st from './navbar.module.scss';

const pathNamesData: any = {
    '/': 'Главная',
    'mentee': 'Профиль',
    'mentor': 'Профиль',
    'settings': 'Настройки',
};

export const Navbar = () => {
    const location = useLocation();
    const pathNames: string[] = [location.pathname[0], ...location.pathname.split('/')].filter(item => item && !+item);

    return (
        <nav className={st['navbar']}>
            <div className="container">
                <div className={st['navbar__sections']}>
                    {pathNames.map((name, i) => {
                        return (<>
                            <NavLink 
                                to={name} 
                                key={name} 
                                className='navbar__section'
                                style={({isActive}) => isActive ? {borderBottom: '2px solid #7E72F2'} : {border: 'none'}}
                                >{pathNamesData[name]}</NavLink>
                            <span key={i} className={st['navbar__divider']}></span>
                            </>);
                    })}
                </div>
            </div>
        </nav>
    );
};