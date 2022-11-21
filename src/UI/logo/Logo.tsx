import {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';
import st from './logo.module.scss';

interface ILogoProps {
    sx?: {}
}

export const Logo:FC<ILogoProps> = ({sx}) => {
    const location = useLocation();

    return <Link to="/" className={st['logo']} style={{...sx, display: location.pathname === '/' ? 'none' : ''}}>Skipper</Link>
};