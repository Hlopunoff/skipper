import {FC} from 'react';

import st from './singleLessonStat.module.scss';

interface SingleLessonStatProps {
    title: string;
    lastMonth: number | string;
    lastThreeMonth: number | string;
    allTime: number | string;
}

export const SingleLessonStat: FC<SingleLessonStatProps> = ({title, lastMonth, lastThreeMonth, allTime}) => {
    return (
        <div className={st['table__item']}>
            <h3 className={st['item__title']}>{title}</h3>
            <div className={st['item__amount']} data-amount-last-month={17}>{lastMonth}</div>
            <div className={st['item__amount']} data-amount-last-3-month={48}>{lastThreeMonth}</div>
            <div className={st['item__amount']} data-amount-all-time={152}>{allTime}</div>
        </div>
    );
};