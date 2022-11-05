import { Form } from '../../components/form/Form';
import { Logo } from '../../UI/logo/Logo';
import st from './registerPage.module.scss';

export const RegisterPage = () => {
    return (
        <section className={st['register']}>
            <div className={st['register__head']}>
                <Logo sx={{fontSize: '58px', lineHeight: '24px'}}/>
            </div>
            <Form/>
        </section>
    );
};