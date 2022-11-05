import { Outlet, NavLink } from 'react-router-dom';

import st from './form.module.scss';

export const Form = () => {
    return (
        <form action="POST" className={st['form']}>
            <div className={st['form__head']}>
                <NavLink 
                    to="/auth" 
                    className={st['form__with']} 
                    style={({isActive}) => isActive ? ({background: 'rgba(255,255,255, .5)', boxShadow: 'inset 0px 0px 2px rgba(0,0,0,.32)'}): ({})}>Email</NavLink>
                <NavLink 
                    to="login-phone" 
                    className={st['form__with']}
                    style={({isActive}) => isActive ? ({background: 'rgba(255,255,255, .5)', boxShadow: 'inset 0px 0px 2px rgba(0,0,0,.32)'}): ({})}>Номер телефона</NavLink>
            </div>
            <div className={st['form__body']}>
               <Outlet/>
            </div>
        </form>
    );  
};  