import { Outlet, NavLink, useLocation } from 'react-router-dom';

import st from './form.module.scss';

export const Form = () => {
    const location = useLocation();

    return (
        <form action="POST" className={st['form']}>
            <div className={st['form__head']} style={location.pathname === '/auth/register' ? ({display: 'none'}) : undefined}>
                <NavLink
                    to="/auth"
                    className={st['form__with']}
                    style={({ isActive }) => isActive ? ({ background: 'rgba(255,255,255, .5)', boxShadow: 'inset 0px 0px 2px rgba(0,0,0,.32)' }) : undefined}>Email</NavLink>
                <NavLink
                    to="login-phone"
                    className={st['form__with']}
                    style={({ isActive }) => isActive ? ({ background: 'rgba(255,255,255, .5)', boxShadow: 'inset 0px 0px 2px rgba(0,0,0,.32)' }) : undefined}>Номер телефона</NavLink>
            </div>
            <div className={st['form__body']}>
               <Outlet/>
            </div>
        </form>
    );  
};  