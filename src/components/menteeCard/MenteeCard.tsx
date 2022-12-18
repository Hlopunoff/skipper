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
                    <h2 className={st['menteeCard__name']}>{mentee?.username.startsWith('+7') ? `${mentee.username.slice(0, 2)} (${mentee.username.slice(2, 5)}) ${mentee.username.slice(5, 8)}-${mentee.username.slice(8, 10)}-${mentee.username.slice(10)}` : mentee?.username}</h2>
                    <span className={st['menteeCard__status']}>Онлайн <div className={st['indicator']}></div></span>
                    <p className={st['menteeCard__specialty']}>{mentee.speciality ? mentee.speciality : 'Данный пользователь еще не уточнил свою специальность'}</p>
                </div>
            </div>
            <span className={st['menteeCard__date-from']}>На Skipper {mentee.registrationDate} года</span>
            <p className={st['menteeCard__descr']}>{mentee.description ? mentee.description.length > 100 ? `${mentee.description.slice(0, 101)}...` : mentee.description : 'Данный пользователь пока что не разместил о себе никакой дополнительной информации.'}</p>
            <span className={st['menteeCard__userTime']}>Время пользователя {new Date().getHours().toString().length <= 1 ? '0' + new Date().getHours().toString() : new Date().getHours().toString()}:{new Date().getMinutes().toString().length <= 1 ? '0' + new Date().getMinutes().toString() : new Date().getMinutes().toString()} | GMT {mentee.timezone ? `+${mentee.timezone}` : new Date().toString().split('GMT')[1].substring(0, 3).replace('0', '')}</span>
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