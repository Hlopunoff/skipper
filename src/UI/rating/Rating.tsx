import {FC} from 'react';
import st from './rating.module.scss';
import starImg from '../../assets/icons/star.svg';

interface IRatingProps {
    rating: number | string | undefined;
    sx: {
        justifyContent: string;
    };
}

export const Rating:FC<IRatingProps> = ({sx, rating}) => {
    return (
        <div className={st['rating']} style={{...sx}}>
            <div className={st['icons']}>
                <img src={starImg} alt="star" />
                <img src={starImg} alt="star" />
                <img src={starImg} alt="star" />
                <img src={starImg} alt="star" />
                <img src={starImg} alt="star" />
            </div>
            <span className={st['rating__amount']}>{rating}</span>
        </div>
    );
};