import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/redux';
import {registerUser} from '../../store/slices/userSlice';

import st from './register.module.scss';

import skypeIcon from '../../assets/img/skype.png';

export const Register = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const getInputNumbersValue = (input: HTMLInputElement) => input.value.replace(/\D/g, '');

    const fieldHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const target = e.target;
        if(field === 'phoneNumber') {
            let inputNumbersValue = getInputNumbersValue(target);
            let formattedInputValue = '';

            if (!inputNumbersValue) {
                setPhoneNumber("");
                return target.value = "";
            }

            if (inputNumbersValue[0] === '9') {
                if (inputNumbersValue.length > 0) {
                    formattedInputValue += `(${inputNumbersValue.substring(0, 3)}`;
                }
                if (inputNumbersValue.length >= 4) {
                    formattedInputValue += `) ${inputNumbersValue.substring(3, 6)}`;
                }
                if (inputNumbersValue.length >= 7) {
                    formattedInputValue += `-${inputNumbersValue.substring(6, 8)}`;
                }
                if (inputNumbersValue.length >= 9) {
                    formattedInputValue += `-${inputNumbersValue.substring(8, 10)}`;
                }
            } else {
                setPhoneNumber("");
                return target.value = "";
            }

            setPhoneNumber(formattedInputValue);
        } else {
            setPassword(target.value);
        }
    };

    return (
        <>
            <h2 className={st['register__title']}>Регистрация</h2>
            <div className={st['register__inputs']}>
                <input type="number" className={st['register__region']}  placeholder='+7' readOnly/>
                <input type="tel" className={st['register__phone']} placeholder='Номер телефона' maxLength={15} value={phoneNumber} onChange={(e) => {
                    fieldHandler(e, 'phoneNumber');
                }}/>
                <input type="password" className={st['register__pass']} placeholder='Password' value={password} onChange={(e) => {
                    fieldHandler(e, 'password');
                }}/>
            </div>
            <div className={st['register__recovery']}>
                <input type="checkbox" className={st['register__keep-logged']} id='keepLogged'/>
                <label htmlFor="keepLogged" className={st['register__label']}>Оставаться в системе</label>
                <a href="#" className={st['register__recover']}>Забыли пароль?</a>
            </div>
            <div className={st['register__forwarding']}>
                <button className={st['register__register']} type="submit" onClick={(e) => {
                    e.preventDefault();
                    dispatch(registerUser({phoneNumber: `+7${phoneNumber.replace(/\D/g, '')}`, password}))
                    .then(() => navigate('/auth/login-phone'));
                }}>Зарегистрироваться</button>
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