import React, { useState } from 'react';

import { MentorCard } from '../../components/mentorCard/MentorCard';
import { LessonsStats } from '../../components/lessonsStats/LessonsStats';
import { PriceList } from '../../components/priceList/PriceList';
import { MentorResume } from '../../components/mentorResume/MentorResume';
import { Reviews } from '../../components/reviews/Reviews';
import { ProfileReport } from '../../components/profileReport/ProfileReport';
import { Consultation } from '../../components/consultation/Consultation';
import { Schedule } from '../../components/schedule/Schedule';
import { Modal } from '../../components/modal/Modal';
import { CreateReview } from '../../components/createReview/CreateReview';

import st from './mentorPage.module.scss';



export const MentorPage = () => {
    const [modalRef, setModalRef] = useState<React.RefObject<HTMLDivElement>>();

    return (
        <>
            <section className={st['mentorPage']}>
                <div className="container">
                    <div className={st['mentorPage__content']}>
                        <div className={st['mentorPage__info']}>
                            <MentorCard />
                            <LessonsStats width='100%' padding='30px 42px 0px 26px' relatedTo='mentor'/>
                            <PriceList />
                            <MentorResume />
                            <Reviews />
                            <CreateReview/>
                            <ProfileReport />
                        </div>
                        <div className={st['mentorPage__cla']}>
                            <Consultation modalRef={modalRef}/>
                            <Schedule />
                        </div>
                    </div>
                </div>
            </section>
            <Modal getModalRef={setModalRef}/>
        </>
    );
};