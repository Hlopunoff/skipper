import st from './profileReport.module.scss';

export const ProfileReport = () => {
    return (
        <div className={st['report']}>
            <a href="#" className={st['report__link']}>Заблокировать профиль</a>
            <a href="#" className={st['report__link']}>Пожаловаться</a>
        </div>
    )
};