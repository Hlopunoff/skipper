import st from './mentorCardShort.module.scss';

import mentorImg from '../../assets/img/mentor_profile.png';

export const MentorCardShort = () => {
    return (
        <div className={st['mentorCard']}>
            <div className={st['mentorCard__header']}>
                <div className={st['mentorCard__img-wrap']}>
                    <img src={mentorImg} alt="Фото ментора" className={st['mentorCard__img']} />
                </div>
                <div className="mentorCard__info">
                    <h2 className={st['mentorCard__name']}>Сергей</h2>
                    <span className={st['mentorCard__status']}>Онлайн <div className={st['indicator']}></div></span>
                    <p className={st['mentorCard__specialty']}>Специалист налогового делопроизводства</p>
                </div>
            </div>
            <p className={st['mentorCard__descr']}>Более 10 лет занимаюсь налогами, откатами и прочими бухгалтерскими штучками на производстве. Готов помочь с вопросами составления отчетности и прочих...</p>
            <div className={st['mentorCard__cla']}>
                <button className={`${st['mentorCard__btn']} ${st['mentorCard__btn_disabled']}`} disabled>Написать сообщение</button>
                <button className={`${st['mentorCard__btn']}`}>Профиль ментора</button>
            </div>
        </div>
    );
};