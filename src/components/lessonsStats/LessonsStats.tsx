import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useParams} from 'react-router-dom';
import { getMenteeInfo, getMentorInfo } from '../../store/slices/userSlice';

import { SingleLessonStat } from '../singleLessonStat/SingleLessonStat';
import { Error } from '../error/Error';
import st from './lessonsStats.module.scss';

interface LessonsStatsProps {
    width: string;
    padding: string;
    relatedTo: 'mentee' | 'mentor';
}

export const LessonsStats: FC<LessonsStatsProps> = ({width, padding, relatedTo}) => {
    const dispatch = useAppDispatch();
    const {menteeId, mentorId} = useParams();
    const {isLoading, isError, accessToken, refreshToken, stats} = useAppSelector(state => {
        return {
            isLoading: state.user.isLoading,
            isError: state.user.isError,
            accessToken: state.user.user!.accessToken,
            refreshToken: state.user.user!.refreshToken,
            stats: relatedTo === 'mentee' ? state.user.user!.mentee?.stats : state.user.user!.mentor?.stats,
        };
    });

    useEffect(() => {
        if(relatedTo === 'mentee') {
            dispatch(getMenteeInfo({id: menteeId, accessToken, refreshToken})) // get mentee stats
        } else {
            dispatch(getMentorInfo(mentorId)) // get mentor stats
        }
    }, []);

    const spinner = isLoading ? <h2>Loading</h2> : null;
    const error = isError ? <Error/> : null;
    const content = !(isLoading || isError || !stats) ? (
        <div className={st['table__body']}>
            <SingleLessonStat title='Завершенные занятия' lastMonth={stats.allLessonsPastMonth} lastThreeMonth={stats.allLessonsPast3Month} allTime={stats.allLessons} key={1} />
            <SingleLessonStat title='Посещаемость' lastMonth={`${stats.attendancePastMonth}%`} lastThreeMonth={`${stats.attendancePast3Month}%`} allTime={`${stats.attendance}%`} key={2} />
            <SingleLessonStat title='Отмененные занятия' lastMonth={stats.cancelledLessonsPastMonth} lastThreeMonth={stats.cancelledLessonsPast3Month} allTime={stats.cancelledLessons} key={3} />
        </div>
    ) : null;
    
    return (
        <div className={st['table']} style={{width, padding}}>
            <div className={st['table__head']}>
                <h2 className={st['table__title']}>Статистика занятий</h2>
                <h3 className={st['col__title']}>Прошлый месяц</h3>
                <h3 className={st['col__title']}>Последние 3 месяца</h3>
                <h3 className={st['col__title']}>Все время</h3>
            </div>
            {spinner}
            {error}
            {content}
        </div>
    )
}