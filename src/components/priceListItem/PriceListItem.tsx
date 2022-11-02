import {FC} from 'react';

import st from './priceListItem.module.scss';

interface PriceListItemProps {
    title: string;
    subtitle: string;
    price: number;
}

export const PriceListItem: FC<PriceListItemProps> = ({title, subtitle, price}) => {
    return (
        <div className={st['row']}>
            <div className="row__descr">
                <h3 className={st['row__title']}>{title}</h3>
                <span className={st['row__subtitle']}>{subtitle}</span>
            </div>
            <div className={st['row__price']}>{price} руб</div>
        </div>
    );
};