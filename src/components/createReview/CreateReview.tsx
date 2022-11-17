import {useRef, useState} from 'react';
import Rating from '@mui/material/Rating';

import st from './createReview.module.scss';

export const CreateReview = () => {
    const fieldRef = useRef<HTMLTextAreaElement>(null);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState<number | null>(0);

    return (
        <div className={st['review']}>
            <h3 className={st['review__title']}>Оставить отзыв</h3>
            <Rating 
                sx={{marginTop: '20px', maxWidth: '113px'}}
                value={rating}
                onChange={(e, newValue) => setRating(newValue)}
                precision={0.2}/>
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