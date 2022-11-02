import {PriceListItem} from '../priceListItem/PriceListItem';

import st from './priceList.module.scss';

export const PriceList = () => {
    return (
        <div className={st['lessonsTable']}>
            <h2 className={st['lessonsTable__title']}>Занятия</h2>
            <div className={st['lessonsTable__content']}>
                <PriceListItem title='Теоритическая консультация' subtitle='Решение профильных вопросов в устной форме' price={1250}/>
                <PriceListItem title='Практическое решение текущих проблем' subtitle='Помощь в вопросах на примере заказчика' price={1370}/>
                <PriceListItem title='Решение “под ключ”' subtitle='Описание задачи с последующим офлайн-решением' price={1700}/>
            </div>
        </div>
    );
};