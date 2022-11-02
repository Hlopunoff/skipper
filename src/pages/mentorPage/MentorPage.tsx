import { MentorCard } from '../../components/mentorCard/MentorCard';
import st from './mentorPage.module.scss';

export const MentorPage = () => {
    return (
        <section className={st['mentorPage']}>
            <div className="container">
                <div className={st['mentorPage__content']}>
                    <div className={st['mentorPage__info']}>
                        <MentorCard/>
                    </div>
                    <div className={st['mentorPage__cla']}></div>
                </div>
            </div>
        </section>
    );
};