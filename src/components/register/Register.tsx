import {Link} from 'react-router-dom';
import st from './register.module.scss';

import skypeIcon from '../../assets/img/skype.png';

export const Register = () => {
    return (
        <>
            <h2 className={st['register__title']}>Регистрация</h2>
            <div className={st['register__inputs']}>
                <input type="number" className={st['register__region']}  placeholder='+7' readOnly/>
                <input type="number" className={st['register__phone']} placeholder='Номер телефона'/>
                <input type="password" className={st['register__pass']} placeholder='Password'/>
            </div>
            <div className={st['register__recovery']}>
                <input type="checkbox" className={st['register__keep-logged']} id='keepLogged'/>
                <label htmlFor="keepLogged" className={st['register__label']}>Оставаться в системе</label>
                <a href="#" className={st['register__recover']}>Забыли пароль?</a>
            </div>
            <div className={st['register__forwarding']}>
                <button className={st['register__register']}>Зарегистрироваться</button>
                <Link to='/auth' className={st['register__login']}>Войти</Link>
            </div>
            <div className={st['register__icons']}>
                <img src={skypeIcon} alt="skype" className="register__icon" />
                <img src={skypeIcon} alt="skype" className="register__icon" />
                <img src={skypeIcon} alt="skype" className="register__icon" />
            </div>
            <p className={st['register__privacy']}>
                Входя в систему или регистрируясь, вы соглашаетесь с <a href="#" className={st['register__security']}>политикой безопасности</a> и <a href="#" className={st['register__rules']}>правилами поведения</a> Skipper
            </p>
        </>
    );
};