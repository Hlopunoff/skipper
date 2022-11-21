import {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';
import st from './logo.module.scss';

interface ILogoProps {
    sx?: {};
    loc: 'sidebar' | 'header';
}

export const Logo:FC<ILogoProps> = ({sx, loc}) => {
    const location = useLocation();

    return <Link to="/" className={st['logo']} style={{...sx, display: location.pathname === '/' && loc === 'header' ? 'none' : ''}}>Skipper</Link>
};