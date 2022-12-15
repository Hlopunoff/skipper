import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/redux';
import {authUser} from '../../store/slices/userSlice';

import st from './login.module.scss';

import skypeIcon from '../../assets/img/skype.png';

export const LoginWithEmail = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fieldHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const target = e.target;
        if(field === 'email') {
            setEmail(target.value);
        } else {
            setPassword(target.value);
        }
    };

    return (
        <>
            <div className={st['form__inputs']}>
                <input type="text" className={st['form__input']} placeholder="Email" value={email} onChange={(e) => fieldHandler(e, 'email')}/>
                <input type="password" className={st['form__input']} placeholder="Password" value={password} onChange={(e) => fieldHandler(e, 'password')}/>
            </div>
            <div className={st['form__recovery']}>
                <input type="checkbox" name="" id="keepLogged" className={st['form__keep-logged']} />
                <label htmlFor="keepLogged" className={st['form__label']}>Оставаться в системе</label>
                <a href="#" className={st['form__recover']}>Забыли пароль?</a>
            </div>
            <button type="submit" className={st['form__submit']} onClick={(e) => {
                e.preventDefault();
                dispatch(authUser({email: email, password}));
            }}>Войти</button>
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
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const fieldHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const target = e.target;
        if (field === 'phoneNumber') {
            setPhoneNumber(target.value);
        } else {
            setPassword(target.value);
        }
    };

    return (
        <>
            <div className={st['login__inputs']}>
                <input type="text" placeholder='+7' className={st['login__region']} readOnly/>
                <input type="number" className={st['login__phone']} placeholder='Номер телефона' value={phoneNumber} maxLength={10} onChange={(e) => fieldHandler(e, 'phoneNumber')}/>
                <input type="password" className={st['login__pass']} placeholder='Password' value={password} onChange={(e) => fieldHandler(e, 'password')}/>
            </div>
            <div className={st['login__recovery']}>
                <input type="checkbox" id="keepLogged" className={st['login__keep-logged']} />
                <label htmlFor="keepLogged" className={st['login__label']}>Оставаться в системе</label>
                <a href="#" className={st['login__recover']}>Забыли пароль?</a>
            </div>
            <button type="submit" className={st['login__submit']} onClick={(e) => {
                e.preventDefault();
                dispatch(authUser({phoneNumber: `+7${phoneNumber}`, password}))
                .then(() => navigate('/'));
            }}>Войти</button>
            <Link to="/auth/register" className={st['login__register']}>зарегистрироваться</Link>
            <div className={st['login__icons']}>
                <img src={skypeIcon} alt="skype" className={st['login__icon']} />
                <img src={skypeIcon} alt="skype" className={st['login__icon']} />
                <img src={skypeIcon} alt="skype" className={st['login__icon']} />
            </div>
            <p className={st['login__privacy']}>Входя в систему или регистрируясь, вы соглашаетесь с <a href="#" className={st['login__security']}>политикой безопасности</a> и <a href="#" className={st['login__rules']}>правилами поведения</a> Skipper</p>
        </>
    );
};