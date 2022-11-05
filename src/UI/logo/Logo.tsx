import {FC} from 'react';
import st from './logo.module.scss';

interface ILogoProps {
    sx: {}
}

export const Logo:FC<ILogoProps> = ({sx}) => {
    return <h1 className={st['logo']} style={{...sx}}>Skipper</h1>
};