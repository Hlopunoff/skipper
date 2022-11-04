import st from './consultation.module.scss';

export const Consultation = () => {
    return (
        <div className={st['consultation']}>
            <div className={st['consultation__descr']}>
                <h2 className={st['consultation__title']}>Консультация</h2>
                <span className={st['consultation__price']}>от 1250 руб</span>
            </div>
            <div className={st['consultation__cla']}>
                <button className={st['consultation__book']}>Забронировать</button>
                <button className={st['consultation__contact']}>Связаться с ментором</button>
            </div>
        </div>
    );
};