import {useRef, useState} from 'react';

import st from './createReview.module.scss';
import ratingIcon from '../../assets/icons/star.svg';

export const CreateReview = () => {
    const fieldRef = useRef<HTMLTextAreaElement>(null);
    const [review, setReview] = useState('');

    return (
        <div className={st['review']}>
            <h3 className={st['review__title']}>Оставить отзыв</h3>
            <div className={st['review__ratings']}>
                <div className={`icon-star ${st['review__rating']}`}></div>
                <div className={`icon-star ${st['review__rating']}`}></div>
                <div className={`icon-star ${st['review__rating']}`}></div>
                <div className={`icon-star ${st['review__rating']}`}></div>
                <div className={`icon-star ${st['review__rating']}`}></div>
            </div>
            <div className={st['review__field-wrap']}>
                <textarea 
                    maxLength={400} 
                    className={st['review__field']} 
                    placeholder='Расскажите о ваших впечатлениях о занятии!' 
                    ref={fieldRef} 
                    value={review}
                    onChange={(e) => setReview(e.target.value)}></textarea>
                <div className={st['words-counter']}>{review.length} / {fieldRef.current && fieldRef.current.maxLength.toString()}</div>
            </div>
            <button className={st['review__send']}>Отправить</button>
        </div>
    );
};