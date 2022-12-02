import st from './error.module.scss';
import errorGif from '../../assets/icons/error_gif.gif';

export const Error = () => {
    return (
        <div className={st['error']}>
            <img src={errorGif} alt={st['error__img']} className="error__img" />
        </div>
    );
};