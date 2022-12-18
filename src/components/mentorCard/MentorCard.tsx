import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks/redux';
import {getMentorInfo} from '../../store/slices/userSlice';
import {getMentor} from '../../store/slices/mentorSlice';

import { Rating } from '../../UI/rating/Rating';
import { LoaderCard } from '../loader/Loader';
import { Error } from '../error/Error';

import st from './mentorCard.module.scss';

import imgPlug from '../../assets/img/avatar_plug.jpg';
import heartImg from '../../assets/icons/heart.svg';

export const MentorCard = () => {
    const dispatch = useAppDispatch();
    const {mentorId} = useParams();
    const [currentTime, setCurrentTime] = useState([0, 0]);
    const {isLoading, isError, mentor} = useAppSelector(state => {
        return {
            isLoading: state.user.isLoading,
            isError: state.user.isError,
            mentor: {
                username: state.user.user!.mentor?.username,
                id: state.user.user!.mentor?.id,
                speciality: state.user.user!.mentor?.speciality,
                timezone: state.user.user!.mentor?.timezone,
                studentNumber: state.user.user!.mentor?.studentNumber,
                registerDate: state.user.user!.mentor?.registrationDate,
                description: state.user.user!.mentor?.description,
                lessonsAmount: state.user.user!.mentor?.stats?.allLessons,
                rating: state.user.user!.mentor?.rating,
                img: state.user.user!.mentor?.userPicture,
            }
        }
    });

    useEffect(() => {
        dispatch(getMentorInfo(mentorId));

        const setInitialUTCTime = setTimeout(() => {
            setCurrentTime([new Date().getUTCHours(), new Date().getUTCMinutes()]);
        }, 0);

        return () => clearTimeout(setInitialUTCTime);
    }, []);

    useEffect(() => {
        const getCurrentTime = setInterval(() => {
            setCurrentTime([new Date().getUTCHours(), new Date().getUTCMinutes()]);
        }, 20000);

        return () => clearInterval(getCurrentTime);
    }, []);

    const spinner = isLoading ? <LoaderCard/> : null;
    const err = isError ? <Error/> : null;
    const content  = !(isLoading || isError || !mentor) ? (
        <div className={st['mentorCard']}>
            <div className={st['mentorCard__head']}>
                <div className={st['mentorCard__left']}>
                    <div className={st['mentorCard__img-wrap']}>
                        <img src={imgPlug} alt="Фото ментора" className="mentorCard__img" />
                    </div>
                    <div className="mentorCard__info">
                        <h3 className={st['mentorCard__name']}>{mentor.username}</h3>
                        <span className={st['mentorCard__status']}><div className={st['indicator']}></div> Онлайн</span>
                        <p className={st['mentorCard__specialty']}>{mentor.speciality}</p>
                        <span className={st['mentorCard__timezone']}>Время пользователя {currentTime[0].toString().length <= 1 ? `0${currentTime[0]}` : currentTime[0]}:{currentTime[1].toString().length <= 1 ? `0${currentTime[1]}` : currentTime[1]} | GMT+{mentor.timezone ? mentor.timezone : '0'}</span>
                    </div>
                </div>
                <div className="mentorCard__right">
                    <div className={st['mentorCard__fav']}>
                        <img src={heartImg} alt="Добавить в понравившиеся" />
                    </div>
                    <Rating sx={{ justifyContent: 'flex-end' }} rating={mentor.rating}/>
                    <div className={st['mentorCard__amount']}>
                        <span className={st['students']}>{mentor.studentNumber ? mentor.studentNumber : '0'} студентов</span>
                        <span className={st['lessons']}>{mentor.lessonsAmount ? mentor.lessonsAmount : '0'} занятий</span>
                    </div>
                </div>
            </div>
            <div className={st['mentorCard__divider']}></div>
            <div className={st['mentorCard__about']}>
                <div className={st['head']}>
                    <h3 className={st['title']}>Обо мне</h3>
                    <span className={st['mentorCard__date-from']}>На Skipper с {mentor.registerDate ? mentor.registerDate : new Date().getFullYear()} года</span>
                </div>
                <p className={st['mentorCard__descr']}>{mentor.description}</p>
            </div>
        </div>
    ) : null;

    return (
        <>
            {spinner}
            {err}
            {content}
        </>
    );
};