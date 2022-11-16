import {FC} from 'react';

import st from './menteeInterests.module.scss';

interface IInterestProps {
    name: string;
    color: string;
}

export const MenteeInterests = () => {
    return (
        <div className={st['interests']}>
            <h3 className={st['interests__title']}>Интересы</h3>
            <div className={st['interests__list']}>
                <MenteeInterest name='JavaScript' color='#7A267B' key={1}/>
                <MenteeInterest name='Python' color='#1200C1' key={2}/>
                <MenteeInterest name='AngularJS' color='#E9D312' key={3}/>
            </div>
        </div>
    );  
};

const MenteeInterest:FC<IInterestProps> = ({name, color}) => {
    return (
        <div className={st['interests__item']} style={{color, border: `1px solid ${color}`}}>#{name}</div>
    );
};