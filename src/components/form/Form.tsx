import st from './form.module.scss';

export const Form = () => {
    return (
        <form action="POST" className={st['form']}>
            <div className={st['form__head']}>
                <div className={st['form__with-email']}>Email</div>
                <div className={st['form__with-phone']}>Номер телефона</div>
            </div>
        </form>
    );  
};  