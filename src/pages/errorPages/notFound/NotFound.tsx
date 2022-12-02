import {Link} from 'react-router-dom';
import st from './notFound.module.scss';

export const NotFound = () => {
    return (
        <section className={st['error']}>
            <div className={st['error__content']}>
                <h2 className={st['error__statusCode']}>404</h2>
                <h3 className={st['error__message']}>Страница не найдена</h3>
                <p className={st['error__subText']}>Уупс! Страница, которую вы ищите, не существует. Возможно, она была перенесена или удалена.</p>
            </div>
            <Link to="/" className={st['error__btnBack']}>Вернуться на главную</Link>
        </section>
    );
};