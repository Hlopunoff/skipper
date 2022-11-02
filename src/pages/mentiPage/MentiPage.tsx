import { LessonsStats } from "../../components/lessonsStats/LessonsStats";
import { MentorCardShort } from "../../components/mentorCardShort/MentorCardShort";
import { ProfileReport } from "../../components/profileReport/ProfileReport";

import st from './mentiPage.module.scss';

export const MentiPage = () => {
    return <section className="mentiPage">
        <div className="container">
            <div className={st['mentiPage__content']}>
                <MentorCardShort/>
                <LessonsStats width="72%" padding="30px 42px 54px 26px"/>
                <ProfileReport/>
            </div>
        </div>
    </section>
};