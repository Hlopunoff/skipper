import {Link} from 'react-router-dom';
import st from './login.module.scss';

import skypeIcon from '../../assets/img/skype.png';

export const LoginWithEmail = () => {
    return (
        <>
            <div className={st['form__inputs']}>
                <input type="text" className={st['form__input']} placeholder="Email" />
                <input type="text" className={st['form__input']} placeholder="Password" />
            </div>
            <div className={st['form__recovery']}>
                <input type="checkbox" name="" id="keepLogged" className={st['form__keep-logged']} />
                <label htmlFor="keepLogged" className={st['form__label']}>Оставаться в системе</label>
                <a href="#" className={st['form__recover']}>Забыли пароль?</a>
            </div>
            <button type="submit" className={st['form__submit']}>Войти</button>
            <Link to="register" className={st['form__register']}>Зарегистрироваться</Link>
            <div className={st['form__icons']}>
                <img src={skypeIcon} alt="skype" className={st['form__icon']} />
                <img src={skypeIcon} alt="skype" className={st['form__icon']} />
                <img src={skypeIcon} alt="skype" className={st['form__icon']} />
            </div>
            <p className={st['form__privacy']}>Входя в систему или регистрируясь, вы соглашаетесь с <a href="#" className={st['form__security']}>политикой безопасности</a> и <a href="#" className={st['form__rules']}>правилами поведения</a> Skipper</p>
        </>
    );
};

export const LoginWithPhone = () => {
    return (
        <>
            <div className={st['login__inputs']}>
                <input type="text" placeholder='+7' className={st['login__region']} readOnly/>
                <input type="number" className={st['login__phone']} placeholder='Номер телефона'/>
                <input type="password" className={st['login__pass']} placeholder='Password'/>
            </div>
            <div className={st['login__recovery']}>
                <input type="checkbox" id="keepLogged" className={st['login__keep-logged']} />
                <label htmlFor="keepLogged" className={st['login__label']}>Оставаться в системе</label>
                <a href="#" className={st['login__recover']}>Забыли пароль?</a>
            </div>
            <button type="submit" className={st['login__submit']}>Войти</button>
            <Link to="register" className={st['login__register']}>зарегистрироваться</Link>
            <div className={st['login__icons']}>
                <img src={skypeIcon} alt="skype" className={st['login__icon']} />
                <img src={skypeIcon} alt="skype" className={st['login__icon']} />
                <img src={skypeIcon} alt="skype" className={st['login__icon']} />
            </div>
            <p className={st['login__privacy']}>Входя в систему или регистрируясь, вы соглашаетесь с <a href="#" className={st['login__security']}>политикой безопасности</a> и <a href="#" className={st['login__rules']}>правилами поведения</a> Skipper</p>
        </>
    );
};