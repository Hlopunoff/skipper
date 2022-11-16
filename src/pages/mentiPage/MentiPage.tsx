import { CreateReview } from "../../components/createReview/CreateReview";
import { LessonsStats } from "../../components/lessonsStats/LessonsStats";
import { MenteeCard } from "../../components/menteeCard/MenteeCard";
import { MenteeInterests } from "../../components/menteeInterests/MenteeInterests";
import { ProfileReport } from "../../components/profileReport/ProfileReport";
import { Reviews } from "../../components/reviews/Reviews";

import st from './mentiPage.module.scss';

export const MentiPage = () => {
    return <section className="mentiPage">
        <div className="container">
            <div className={st['mentiPage__content']}>
                <MenteeCard/>
                <div className={st['mentiPage__info']}>
                    <MenteeInterests/>
                    <LessonsStats width="100%" padding="30px 42px 54px 26px" />
                    <Reviews />
                    <CreateReview/>
                </div>
                <ProfileReport />
            </div>
        </div>
    </section>
};