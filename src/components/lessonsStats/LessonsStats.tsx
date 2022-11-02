import { SingleLessonStat } from '../singleLessonStat/SingleLessonStat';
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
                <SingleLessonStat title='Завершенные занятия' lastMonth={17} lastThreeMonth={48} allTime={152} key={1}/>
                <SingleLessonStat title='Посещаемость' lastMonth={'100%'} lastThreeMonth={'48%'} allTime={'152%'} key={2}/>
                <SingleLessonStat title='Отмененные занятия' lastMonth={0} lastThreeMonth={1} allTime={1} key={3}/>
            </div>
        </div>
    )
}