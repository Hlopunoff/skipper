import {FC} from 'react';
import { useAuth } from '../../hooks/use-auth';

import st from './consultation.module.scss';

interface IConsultationProps {
    modalRef: React.RefObject<HTMLDivElement> | undefined;
}

export const Consultation:FC<IConsultationProps> = ({modalRef}) => {
    const {isAuth} = useAuth();

    const bookConsultation = () => {
        modalRef?.current?.classList.add('modal_shown');
        document.querySelector('body')?.classList.add('scrollbar_hidden');
    };

    return (
        <div className={st['consultation']}>
            <div className={st['consultation__descr']}>
                <h2 className={st['consultation__title']}>Консультация</h2>
                <span className={st['consultation__price']}>от 1250 руб</span>
            </div>
            <div className={st['consultation__cla']}>
                <button className={st['consultation__book']} onClick={bookConsultation} disabled={!isAuth}>Забронировать</button>
            </div>
        </div>
    );
};