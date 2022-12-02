import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';

import { Rating } from '../../UI/rating/Rating';
import {LoaderCard} from '../loader/Loader';
import {Error} from '../error/Error';

import st from './menteeCard.module.scss';
import mentorImgPlug from '../../assets/img/avatar_plug.jpg';

export const MenteeCard = () => {


    // const loading = isLoading ? <LoaderCard/> : null;
    // const error = isError ? <Error/>: null;
    // const content = !(isLoading || isError || !data) ? (
    //     <>
    //         <div className={st['menteeCard__header']}>
    //             <div className={st['menteeCard__img-wrap']}>
    //                 <img src={data.img || mentorImgPlug} alt="Фото ментора" className={st['menteeCard__img']} />
    //             </div>
    //             <div className={st['menteeCard__info']}>
    //                 <h2 className={st['menteeCard__name']}>{data.username}</h2>
    //                 <span className={st['menteeCard__status']}>Онлайн <div className={st['indicator']}></div></span>
    //                 <p className={st['menteeCard__specialty']}>{data.specialty}</p>
    //                 <Rating sx={{ justifyContent: 'flex-start' }} />
    //             </div>
    //         </div>
    //         <span className={st['menteeCard__date-from']}>На Skipper {data.registrationDate} года</span>
    //         <p className={st['menteeCard__descr']}>{data.description && data.description.length > 100 ? data.description.slice(0, 101) : data.description}</p>
    //     </>
    // ) : null;

    return (
        <div className={st['menteeCard']}>
            {/* {loading}
            {error}
            {content} */}
        </div>
    );
};