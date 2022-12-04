import {useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks/redux';
import {getMentor} from '../../store/slices/userSlice';

import { Rating } from '../../UI/rating/Rating';
import { LoaderCard } from '../loader/Loader';
import { Error } from '../error/Error';

import st from './mentorCard.module.scss';

import mentorImg from '../../assets/img/mentor_profile.png';
import heartImg from '../../assets/icons/heart.svg';

export const MentorCard = () => {
    const dispatch = useAppDispatch();
    const {mentorId} = useParams();
    const {isLoading, isError, mentor} = useAppSelector(state => {
        return {
            isLoading: state.user.isLoading,
            isError: state.user.isError,
            mentor: {
                username: state.user.user.mentor?.username,
                id: state.user.user.mentor?.id,
                speciality: state.user.user.mentor?.speciality,
                timezone: state.user.user.mentor?.timezone,
                studentNumber: state.user.user.mentor?.studentNumber,
                registerDate: state.user.user.mentor?.registrationDate,
                description: state.user.user.mentor?.description,
                lessonsAmount: state.user.user.mentor?.stats?.allLessons,
                rating: state.user.user.mentor?.rating,
            }
        }
    });

    useEffect(() => {
        dispatch(getMentor(mentorId));
    }, []);

    const spinner = isLoading ? <LoaderCard/> : null;
    const err = isError ? <Error/> : null;
    // const redirect = !mentor.id ? <Navigate to="/*"/> : null;
    const content  = !(isLoading || isError || !mentor) ? (
        <div className={st['mentorCard']}>
            <div className={st['mentorCard__head']}>
                <div className={st['mentorCard__left']}>
                    <div className={st['mentorCard__img-wrap']}>
                        <img src={mentorImg} alt="Фото ментора" className="mentorCard__img" />
                    </div>
                    <div className="mentorCard__info">
                        <h3 className={st['mentorCard__name']}>{mentor.username}</h3>
                        <span className={st['mentorCard__status']}><div className={st['indicator']}></div> Онлайн</span>
                        <p className={st['mentorCard__specialty']}>{mentor.speciality}</p>
                        <span className={st['mentorCard__timezone']}>Время пользователя {mentor.timezone} | GMT+4</span>
                    </div>
                </div>
                <div className="mentorCard__right">
                    <div className={st['mentorCard__fav']}>
                        <img src={heartImg} alt="Добавить в понравившиеся" />
                    </div>
                    <Rating sx={{ justifyContent: 'flex-end' }} rating={mentor.rating}/>
                    <div className={st['mentorCard__amount']}>
                        <span className={st['students']}>{mentor.studentNumber} студентов</span>
                        <span className={st['lessons']}>{mentor.lessonsAmount} занятий</span>
                    </div>
                </div>
            </div>
            <div className={st['mentorCard__divider']}></div>
            <div className={st['mentorCard__about']}>
                <div className={st['head']}>
                    <h3 className={st['title']}>Обо мне</h3>
                    <span className={st['mentorCard__date-from']}>На Skipper с {mentor.registerDate} года</span>
                </div>
                <p className={st['mentorCard__descr']}>{mentor.description}</p>
            </div>
        </div>
    ) : null;

    return (
        <>
            {spinner}
            {err}
            {/* {redirect} */}
            {content}
        </>
    );
};