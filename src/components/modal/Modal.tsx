import {useRef, useEffect} from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import st from './modal.module.scss';

import mentorLogoPlug from '../../assets/img/avatar_plug.jpg';

export const Modal = () => {
    const modalRef= useRef<HTMLDivElement>(null);
    const stepRef = useRef<HTMLDivElement>(null);

    const closeModal: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();

        if(modalRef.current) {
            modalRef.current.classList.remove('modal_shown');
        }
    };

    const stepHandler = (index: number) => {
        if(stepRef.current) {
            const currStep = stepRef.current.childNodes[index] as HTMLDivElement;

            stepRef.current.childNodes.forEach(child => {
                (child as HTMLDivElement).classList.remove('step_active');
            });
            currStep.classList.add('step_active');
        }
    };

    useEffect(() => {
        stepHandler(1);
    }, [ ]);

    return (
        <div className={`${st['modal']} modal_shown`} ref={modalRef} onClick={closeModal}>
            <div className={st['modal__content']} onClick={e => e.stopPropagation()}>
                <h3 className={st['modal__title']}>Выберите тип занятия</h3>
                <div className={st['modal__steps']} ref={stepRef}>
                    <div className={st['steps__line']}></div>
                    <div className={st['step']}></div>
                    <div className={st['step']}></div>
                    <div className={st['step']}></div>
                    <div className={st['step']}></div>
                </div>
                <div className={st['modal__options']} style={{display: 'none'}}>
                    <div className={st['option']}>
                        <div className={st['option__info']}>
                            <h4 className={st['option__title']}>Теоретическая консультация</h4>
                            <span className={st['option__subtitle']}>Решение профильных вопросов в устной форме</span>
                        </div>
                        <span className={st['option__price']}>1250 руб</span>
                    </div>
                    <div className={st['option']}>
                        <div className={st['option__info']}>
                            <h4 className={st['option__title']}>Практическое решение текущих проблем</h4>
                            <span className={st['option__subtitle']}>Решение профильных вопросов в устной форме</span>
                        </div>
                        <span className={st['option__price']}>1370 руб</span>
                    </div>
                    <div className={st['option']}>
                        <div className={st['option__info']}>
                            <h4 className={st['option__title']}>Решение “под ключ”</h4>
                            <span className={st['option__subtitle']}>Описание задачи с последующим онлайн-решением</span>
                        </div>
                        <span className={st['option__price']}>1700 руб</span>
                    </div>
                </div>
                <div className={st['modal__timetable']}>
                    <div className={st['timetable__categories']}>
                        <h2 className={st['timetable__category']}>15 мин (пробное занятие)</h2>
                        <h2 className={st['timetable__category']}>30 минут</h2>
                        <h2 className={st['timetable__category']}>60 минут</h2>
                        <h2 className={st['timetable__category']}>90 минут</h2>
                    </div>
                    <div className={st['timetable__categories']}>
                        <div className={st['timetable__category']}>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">1 занятие</span>
                                <span className="timetable__priceOfLessons">100 руб</span>
                            </div>
                        </div>
                        <div className={st['timetable__category']}>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">1 занятие</span>
                                <span className="timetable__priceOfLessons">700 руб</span>
                            </div>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">3 занятия</span>
                                <span className="timetable__priceOfLessons">1950 руб</span>
                            </div>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">5 занятий</span>
                                <span className="timetable__priceOfLessons">3250 руб</span>
                            </div>
                        </div>
                        <div className={st['timetable__category']}>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">1 занятие</span>
                                <span className="timetable__priceOfLessons">1370 руб</span>
                            </div>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">3 занятия</span>
                                <span className="timetable__priceOfLessons">3800 руб</span>
                            </div>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">5 занятий</span>
                                <span className="timetable__priceOfLessons">6000 руб</span>
                            </div>
                        </div>
                        <div className={st['timetable__category']}>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">1 занятие</span>
                                <span className="timetable__priceOfLessons">2000 руб</span>
                            </div>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">3 занятия</span>
                                <span className="timetable__priceOfLessons">5800 руб</span>
                            </div>
                            <div className={st['timetable__available']}>
                                <span className="timetable__amountOfLessons">5 занятий</span>
                                <span className="timetable__priceOfLessons">9400 руб</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st['modal__descr']}>
                    <div className={st['modal__mentor']}>
                        <div className={st['mentor__logo-wrap']}>
                            <img src={mentorLogoPlug} alt="Фото ментора" className={st['mentor__logo']} />
                        </div>
                        <span className={st['mentor__username']}>Сергей Веснушкин</span>
                    </div>
                    <button className={st['modal__next']}>Дальше</button>
                </div>
                <div className={st['modal__close']} onClick={closeModal}>
                    <CloseOutlinedIcon sx={{ color: '#AEAEAE', width: '19px', height: '19px'}}/>
                </div>
            </div>
        </div>
    );
};