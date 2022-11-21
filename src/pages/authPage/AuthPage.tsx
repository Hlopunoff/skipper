import { Form } from '../../components/form/Form';
import { Logo } from '../../UI/logo/Logo';
import st from './authPage.module.scss';

export const AuthPage = () => {
    return (
        <section className={st['register']}>
            <div className={st['register__head']}>
                <Logo sx={{fontSize: '58px', lineHeight: '24px'}} loc='header'/>
            </div>
            <Form/>
        </section>
    );
};