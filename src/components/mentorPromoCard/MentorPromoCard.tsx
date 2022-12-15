import {FC} from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import st from './mentorPromoCard.module.scss';
import mentorAvatarPlug from '../../assets/img/avatar_plug.jpg';

interface IMentorPromoProps {
    img?: string;
    name: string;
    specialty: string;
    description: string;
    rating: number;
    price: number;
    id: number;
}

export const MentorPromoCard:FC<IMentorPromoProps> = ({img, name, specialty, description, rating, price, id}) => {
    return (
        <Link to={`mentor/${id}`} className={st['card']}>
            <div className={st['card__img']}>
                <img src={img || mentorAvatarPlug} alt="фото ментора" />
            </div>
            <div className={st['card__info']}>
                <h5 className={st['card__username']}>{name}</h5>
                <span className={st['card__specialty']}>{specialty}</span>
                <p className={st['card__desc']}>{description}</p>
            </div>
            <div className={st['card__cla']}>
                <div className={st['card__rating']} style={rating <= 3 ? ({ backgroundColor: '#ED5F5F' }) : rating > 4 ? ({ backgroundColor: '#7FC936' }) : ({ backgroundColor: '#E7D53B'})}>{rating}</div>
                <div className={st['card__price']}>
                    <span className={st['card__priceAmount']}>${price}</span>
                    <span className={st['card__priceVariant']}>почасовая оплата</span>
                </div>
                <div className={st['card__btns']}>
                    <button className={st['card__addToFavBtn']}>
                        <FavoriteBorderOutlinedIcon sx={{marginRight: '4px', width: '12px', height: '12px'}}/>В избранное</button>
                    <button className={st['card__bookBtn']}>Забронировать</button>
                </div>
            </div>
        </Link>
    );
};