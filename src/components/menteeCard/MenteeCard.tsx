import { Rating } from '../../UI/rating/Rating';

import st from './menteeCard.module.scss';
import mentorImg from '../../assets/img/mentor_profile.png';

export const MenteeCard = () => {
    return (
        <div className={st['menteeCard']}>
            <div className={st['menteeCard__header']}>
                <div className={st['menteeCard__img-wrap']}>
                    <img src={mentorImg} alt="Фото ментора" className={st['menteeCard__img']} />
                </div>
                <div className={st['menteeCard__info']}>
                    <h2 className={st['menteeCard__name']}>Иван</h2>
                    <span className={st['menteeCard__status']}>Онлайн <div className={st['indicator']}></div></span>
                    <p className={st['menteeCard__specialty']}>Студент ЮУрГУ, “Таможенное дело”</p>
                    <Rating sx={{justifyContent: 'flex-start'}}/>
                </div>
            </div>
            <span className={st['menteeCard__date-from']}>На Skipper c 20 мая 2020 года</span>
            <p className={st['menteeCard__descr']}>Более 10 лет занимаюсь налогами, откатами и прочими бухгалтерскими штучками на производстве. Готов помочь с вопросами составления отчетности и прочих...</p>
        </div>
    );
};