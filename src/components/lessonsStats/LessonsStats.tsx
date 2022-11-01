import st from './lessonsStats.module.scss';

export const LessonsStats = () => {
    return (
        <div className={st['table']}>
            <div className={st['table__head']}>
                <h2 className={st['table__title']}>Статистика занятий</h2>
                <h3 className={st['col__title']}>Прошлый месяц</h3>
                <h3 className={st['col__title']}>Последние 3 месяца</h3>
                <h3 className={st['col__title']}>Все время</h3>
            </div>
            <div className={st['table__body']}>
                <div className={st['table__item']}>
                    <h3 className={st['item__title']}>Завершенные занятия</h3>
                    <div className={st['item__amount']} data-amount-last-month={17}>17</div>
                    <div className={st['item__amount']} data-amount-last-3-month={48}>48</div>
                    <div className={st['item__amount']} data-amount-all-time={152}>152</div>
                </div>
                <div className={st['table__item']}>
                    <h3 className={st['item__title']}>Посещаемость</h3>
                    <div className={st['item__amount']} data-amount-last-month={100}>100%</div>
                    <div className={st['item__amount']} data-amount-last-3-month={98}>98%</div>
                    <div className={st['item__amount']} data-amount-all-time={99}>99%</div>
                </div>
                <div className={st['table__item']}>
                    <h3 className={st['item__title']}>Отмененные занятия</h3>
                    <div className={st['item__amount']} data-amount-last-month={0}>0</div>
                    <div className={st['item__amount']} data-amount-last-3-month={1}>1</div>
                    <div className={st['item__amount']} data-amount-all-time={1}>1</div>
                </div>
            </div>
        </div>
    )
}