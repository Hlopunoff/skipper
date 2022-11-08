import {FC} from 'react';
import {Link} from 'react-router-dom';
import st from './logo.module.scss';

interface ILogoProps {
    sx: {}
}

export const Logo:FC<ILogoProps> = ({sx}) => {
    return <Link to="/" className={st['logo']} style={{...sx}}>Skipper</Link>
};