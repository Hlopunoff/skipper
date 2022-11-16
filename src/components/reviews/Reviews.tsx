import {FC} from 'react';

import st from './reviews.module.scss';

import userAvatar from '../../assets/img/header_profile.png';
import avatarPlug from '../../assets/img/avatar_plug.jpg';

interface IReviewProps {
    userName: string;
    userAvatar?: string;
    lessonsAmount: string;
    text: string;
}

export const Reviews = () => {
    return (
        <div className={st['mentorReview']}>
            <div className={st['table']}>
                <h2 className={st['table__title']}>Отзывы</h2>
                <div className={st['table__reviews']}>
                    <MentorReview userName='Азамат Имаев' lessonsAmount='4' text='Сергей действительно разбирается в своей области. Всем рекомендую и обязател' key={1}/>
                    <MentorReview userName='Азамат Имаев' lessonsAmount='4' text='Сергей действительно разбирается в своей области. Всем рекомендую и обязател' key={2}/>
                    <MentorReview userName='Азамат Имаев' lessonsAmount='4' text='Сергей действительно разбирается в своей области. Всем рекомендую и обязател' key={3}/>
                    <MentorReview userName='Азамат Имаев' lessonsAmount='4' text='Сергей действительно разбирается в своей области. Всем рекомендую и обязател' key={4}/>
                    <MentorReview userName='Азамат Имаев' lessonsAmount='4' text='Сергей действительно разбирается в своей области. Всем рекомендую и обязател' key={5}/>
                    <MentorReview userName='Азамат Имаев' lessonsAmount='4' text='Сергей действительно разбирается в своей области. Всем рекомендую и обязател' key={6}/>
                    <MentorReview userName='Азамат Имаев' lessonsAmount='4' text='Сергей действительно разбирается в своей области. Всем рекомендую и обязател' key={7}/>
                    <MentorReview userName='Азамат Имаев' lessonsAmount='4' text='Сергей действительно разбирается в своей области. Всем рекомендую и обязател' key={8}/>
                    <MentorReview userName='Азамат Имаев' lessonsAmount='4' text='Сергей действительно разбирается в своей области. Всем рекомендую и обязател' key={9}/>
                </div>
                <button className={st['table__view-more']}>Смотреть все отзывы</button>
            </div>
        </div>
    );
};

const MentorReview:FC<IReviewProps> = ({userName, userAvatar, lessonsAmount, text}) => {
    return (
        <div className={st['review']}>
            <div className={st['review__head']}>
                <div className={st['review__avatar-wrap']}>
                    <img src={userAvatar || avatarPlug} alt="Аватар пользователя" className={st['review__avatar']} />
                </div>
                <div className={st['review__info']}>
                    <span className={st['review__username']}>{userName}</span>
                    <span className={st['review__lessons-amount']}>{lessonsAmount} урока</span>
                </div>
            </div>
            <p className={st['review__text']}>{text.length > 100 ? `${text.slice(0, 100)}...` : text}</p>
        </div>
    );
};