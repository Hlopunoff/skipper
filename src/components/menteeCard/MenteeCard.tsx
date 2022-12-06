import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import { useParams } from 'react-router-dom';
import { getMenteeInfo } from '../../store/slices/userSlice';

import { Rating } from '../../UI/rating/Rating';
import {LoaderCard} from '../loader/Loader';
import {Error} from '../error/Error';

import st from './menteeCard.module.scss';
import mentorImgPlug from '../../assets/img/avatar_plug.jpg';

export const MenteeCard = () => {
    const dispatch = useAppDispatch();
    const {menteeId} = useParams();
    const {isLoading, isError, mentee, accessToken, refreshToken} = useAppSelector(state => {
        return {
            isLoading: state.user.isLoading,
            isError: state.user.isError,
            mentee: state.user.user!.mentee,
            accessToken: state.user.user!.accessToken,
            refreshToken: state.user.user!.refreshToken,
        };
    });

    useEffect(() => {
        dispatch(getMenteeInfo({
            id: menteeId,
            accessToken,
            refreshToken,
        }));
    }, []);

    const loading = isLoading ? <LoaderCard/> : null;
    const error = isError ? <Error/>: null;
    const content = !(isLoading || isError || !mentee) ? (
        <>
            <div className={st['menteeCard__header']}>
                <div className={st['menteeCard__img-wrap']}>
                    <img src={mentee.userPicture || mentorImgPlug} alt="Фото ментора" className={st['menteeCard__img']} />
                </div>
                <div className={st['menteeCard__info']}>
                    <h2 className={st['menteeCard__name']}>{mentee.username}</h2>
                    <span className={st['menteeCard__status']}>Онлайн <div className={st['indicator']}></div></span>
                    <p className={st['menteeCard__specialty']}>{mentee.speciality}</p>
                    <Rating sx={{ justifyContent: 'flex-start' }} rating={4.8}/>
                </div>
            </div>
            <span className={st['menteeCard__date-from']}>На Skipper {mentee.registrationDate} года</span>
            <p className={st['menteeCard__descr']}>{mentee.description && mentee.description.length > 100 ? mentee.description.slice(0, 101) : mentee.description}</p>
        </>
    ) : null;

    return (
        <div className={st['menteeCard']}>
            {loading}
            {error}
            {content}
        </div>
    );
};