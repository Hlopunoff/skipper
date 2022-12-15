import {useEffect} from 'react';
import { useAppSelector } from '../../hooks/redux';
import { MentorPromoCard } from '../mentorPromoCard/MentorPromoCard';


import st from './mentorsList.module.scss';

export const MentorsList = () => {
    const {content} = useAppSelector(state => state.filter.filter.body);

    useEffect(() => {
      console.log(content);
    }, [])
    

    return (
        <section className={st['mentorsList']}>
            {content.length ? content.map(mentor => {
                return <MentorPromoCard key={mentor.id} name={mentor.username} specialty={mentor.speciality} description={mentor.description} rating={mentor.rating} price={mentor.price} img={mentor.userPicture} id={mentor.id}/>
            }) : <h3>По данному запросу нет ни одного ментора</h3>}
        </section>
    );
};