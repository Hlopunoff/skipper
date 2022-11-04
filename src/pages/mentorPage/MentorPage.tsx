import { MentorCard } from '../../components/mentorCard/MentorCard';
import { LessonsStats } from '../../components/lessonsStats/LessonsStats';
import { PriceList } from '../../components/priceList/PriceList';
import { MentorResume } from '../../components/mentorResume/MentorResume';
import { MentorReviews } from '../../components/mentorReviews/MentorReviews';

import st from './mentorPage.module.scss';


export const MentorPage = () => {
    return (
        <section className={st['mentorPage']}>
            <div className="container">
                <div className={st['mentorPage__content']}>
                    <div className={st['mentorPage__info']}>
                        <MentorCard/>
                        <LessonsStats width='100%' padding='30px 42px 0px 26px'/>
                        <PriceList/>
                        <MentorResume/>
                        <MentorReviews/>
                    </div>
                    <div className={st['mentorPage__cla']}></div>
                </div>
            </div>
        </section>
    );
};