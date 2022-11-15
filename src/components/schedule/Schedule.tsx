import {FC} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { removeActiveClasses } from '../modal/Modal';

import st from './schedule.module.scss';

interface ITableColProps {
    times: string[];
    getCurrentTime?: React.Dispatch<React.SetStateAction<string[]>>;
}

//! DELETE LATER
const times = ['00:04 AM', '04:08 AM', '08:12 AM', '08:15 AM', '12:04 PM', '04:08 PM', '08:12 PM'];

export const Schedule = () => {
    return (
        <div className={st['schedule']}>
            <div className={st['schedule__slider-wrap']}>
                <div className={st['schedule__arrow']}>
                    <ArrowBackIosIcon sx={{color: '#828282'}}/>
                </div>
                <div className={st['slider']}>
                    <div className={st['slider__content']}>
                        <span className={st['slider__period']}>май, 18 - май, 24</span>
                    </div>
                </div>
                <div className={st['schedule__arrow']}>
                    <ArrowForwardIosIcon sx={{color: '#828282'}}/>
                </div>
            </div>
            <div className={st['table']}>
                <div className={st['table__days']}>
                    <div className={st['table__day']}>ПН</div>
                    <div className={st['table__day']}>ВТ</div>
                    <div className={st['table__day']}>СР</div>
                    <div className={st['table__day']}>ЧТ</div>
                    <div className={st['table__day']}>ПТ</div>
                    <div className={st['table__day']}>СБ</div>
                    <div className={st['table__day']}>ВС</div>
                </div>
                <div className={st['table__times']}>
                    <TableTimeCol times={times} key={1}/>
                    <TableTimeCol times={times} key={2}/>
                    <TableTimeCol times={times} key={3}/>
                    <TableTimeCol times={times} key={4}/>
                    <TableTimeCol times={times} key={5}/>
                    <TableTimeCol times={times} key={6}/>
                    <TableTimeCol times={times} key={7}/>
                </div>
            </div>
            <button className={st['schedule__check']}>Проверить свободное время</button>
        </div>
    )
};

export const TableTimeCol: FC<ITableColProps> = ({times, getCurrentTime}) => {
    return (
        <div className={st['table__col']}>
            {times.map(time => (<div 
                    className={st['table__time']}
                    key={time} 
                    onClick={e => {
                        removeActiveClasses(e.currentTarget.parentElement);
                        (e.currentTarget as HTMLDivElement).classList.add('modal_chosen');
                        
                        if(getCurrentTime) {
                            getCurrentTime(prev => [...prev, time]);
                        }
            }}>{time}</div>))}
        </div>
    );
};