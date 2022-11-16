import {FC} from 'react';
import st from './rating.module.scss';
import starImg from '../../assets/icons/star.svg';

interface IRatingProps {
    sx: {
        justifyContent: string;
    };
}

export const Rating:FC<IRatingProps> = ({sx}) => {
    return (
        <div className={st['rating']} style={{...sx}}>
            <div className={st['icons']}>
                <img src={starImg} alt="star" />
                <img src={starImg} alt="star" />
                <img src={starImg} alt="star" />
                <img src={starImg} alt="star" />
                <img src={starImg} alt="star" />
            </div>
            <span className={st['rating__amount']}>4.8</span>
        </div>
    );
};