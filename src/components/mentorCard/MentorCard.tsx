import { Rating } from '../../UI/rating/Rating';

import st from './mentorCard.module.scss';

import mentorImg from '../../assets/img/mentor_profile.png';
import heartImg from '../../assets/icons/heart.svg';

export const MentorCard = () => {
    return (
        <div className={st['mentorCard']}>
            <div className={st['mentorCard__head']}>
                <div className={st['mentorCard__left']}>
                    <div className={st['mentorCard__img-wrap']}>
                        <img src={mentorImg} alt="Фото ментора" className="mentorCard__img" />
                    </div>
                    <div className="mentorCard__info">
                        <h3 className={st['mentorCard__name']}>Сергей Веснушкин</h3>
                        <span className={st['mentorCard__status']}><div className={st['indicator']}></div> Онлайн</span>
                        <p className={st['mentorCard__specialty']}>Специалист налогового делопроизводства</p>
                        <span className={st['mentorCard__timezone']}>Время пользователя 07:45 | GMT+4</span>
                    </div>
                </div>
                <div className="mentorCard__right">
                    <div className={st['mentorCard__fav']}>
                        <img src={heartImg} alt="Добавить в понравившиеся" />
                    </div>
                    <Rating sx={{justifyContent: 'flex-end'}}/>
                    <div className={st['mentorCard__amount']}>
                        <span className={st['students']}>46 студентов</span>
                        <span className={st['lessons']}>248 занятий</span>
                    </div>
                </div>
            </div>
            <div className={st['mentorCard__divider']}></div>
            <div className={st['mentorCard__about']}>
                <div className={st['head']}>
                    <h3 className={st['title']}>Обо мне</h3>
                    <span className={st['mentorCard__date-from']}>На Skipper с 20 мая 2020 года</span>
                </div>
                <p className={st['mentorCard__descr']}>Более 10 лет занимаюсь налогами, откатами и прочими бухгалтерскими штучками на производстве. Готов помочь с вопросами составления отчетности и прочих бухгалтериских делишек. Также неплохо готовлю и говорю на иврите.Более 10 лет занимаюсь налогами, откатами и прочими бухгалтерскими штучками на производстве. Готов помочь с вопросами составления отчетности и прочих бухгалтериских делишек. Также неплохо готовлю и говорю на иврите.</p>
            </div>
        </div>
    );
};