import {useRef, useEffect, useState} from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {TableTimeCol} from '../schedule/Schedule';

import st from './modal.module.scss';

import mentorLogoPlug from '../../assets/img/avatar_plug.jpg';
import skypeImg from '../../assets/img/skype.png';

//! DELETE LATER
const times = ['00:04 AM', '04:08 AM', '08:12 AM', '08:12 AM', '12:04 PM', '04:08 PM', '08:12 PM'];

export const Modal = () => {
    const [step, setStep] = useState(1);
    const modalRef= useRef<HTMLDivElement>(null);
    const stepRef = useRef<HTMLDivElement>(null);
    const firstScreenRef = useRef<HTMLDivElement>(null);
    const secondScreenRef = useRef<HTMLDivElement>(null);
    const thirdScreenRef = useRef<HTMLDivElement>(null);
    const fourthScreenRef = useRef<HTMLDivElement>(null);

    const screenRefs = [firstScreenRef, secondScreenRef, thirdScreenRef, fourthScreenRef];

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

    const modalHandler = (option: 'back' | 'forward') => {
        screenRefs.forEach(ref => {
            if(ref.current) {
                ref.current.style.display = 'none';
            }
        });

        if (option === 'back') {
            setStep(prev => prev - 1);
            stepHandler(step - 1);
            screenRefs[step - 2].current!.style.display = 'flex';
        } else {
            setStep(prev => prev + 1);
            stepHandler(step + 1);
            screenRefs[step].current!.style.display = 'flex';
        }
        console.log(step, screenRefs[step]);
    };

    useEffect(() => {
        stepHandler(step);
    }, []);

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
                <div className={st['modal__options']} ref={firstScreenRef}>
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
                <div className={st['modal__lessons']} ref={secondScreenRef}>
                    <div className={st['lessons__categories']}>
                        <h2 className={st['lessons__category']}>15 мин (пробное занятие)</h2>
                        <h2 className={st['lessons__category']}>30 минут</h2>
                        <h2 className={st['lessons__category']}>60 минут</h2>
                        <h2 className={st['lessons__category']}>90 минут</h2>
                    </div>
                    <div className={st['lessons__categories']}>
                        <div className={st['lessons__category']}>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">1 занятие</span>
                                <span className="lessons__priceOfLessons">100 руб</span>
                            </div>
                        </div>
                        <div className={st['lessons__category']}>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">1 занятие</span>
                                <span className="lessons__priceOfLessons">700 руб</span>
                            </div>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">3 занятия</span>
                                <span className="lessons__priceOfLessons">1950 руб</span>
                            </div>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">5 занятий</span>
                                <span className="lessons__priceOfLessons">3250 руб</span>
                            </div>
                        </div>
                        <div className={st['lessons__category']}>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">1 занятие</span>
                                <span className="lessons__priceOfLessons">1370 руб</span>
                            </div>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">3 занятия</span>
                                <span className="lessons__priceOfLessons">3800 руб</span>
                            </div>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">5 занятий</span>
                                <span className="lessons__priceOfLessons">6000 руб</span>
                            </div>
                        </div>
                        <div className={st['lessons__category']}>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">1 занятие</span>
                                <span className="lessons__priceOfLessons">2000 руб</span>
                            </div>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">3 занятия</span>
                                <span className="lessons__priceOfLessons">5800 руб</span>
                            </div>
                            <div className={st['lessons__available']}>
                                <span className="lessons__amountOfLessons">5 занятий</span>
                                <span className="lessons__priceOfLessons">9400 руб</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st['modal__timetable']} ref={thirdScreenRef}>
                    <div className={st['modal__slider-wrap']}>
                        <div className={st['modal__arrow']}>
                            <ArrowBackIosIcon sx={{ color: '#828282' }} />
                        </div>
                        <div className={st['slider']}>
                            <div className={st['slider__content']}>
                                <span className={st['slider__period']}>май, 18 - май, 24</span>
                            </div>
                        </div>
                        <div className={st['modal__arrow']}>
                            <ArrowForwardIosIcon sx={{ color: '#828282' }} />
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
                            <TableTimeCol times={times} key={1} />
                            <TableTimeCol times={times} key={2} />
                            <TableTimeCol times={times} key={3} />
                            <TableTimeCol times={times} key={4} />
                            <TableTimeCol times={times} key={5} />
                            <TableTimeCol times={times} key={6} />
                            <TableTimeCol times={times} key={7} />
                        </div>
                    </div>
                </div>
                <div className={st['modal__communication']} ref={fourthScreenRef}>
                    <div className={st['communication__wrap']}>
                        <div className={st['communication__way']}>
                            <div className={st['communication__info']}>
                                <h4 className={st['communication__name']}>Skype</h4>
                                <span className={st['communication__ID']}>Ваш ID: bolshoyPapochka93</span>
                            </div>
                            <div className={st['communication__img-wrap']}>
                                <img src={skypeImg} alt="skype" className={st['communication__img']} />
                            </div>
                        </div>
                        <div className={st['communication__way']}>
                            <div className={st['communication__info']}>
                                <h4 className={st['communication__name']}>Skype</h4>
                                <span className={st['communication__ID']}>Ваш ID: bolshoyPapochka93</span>
                            </div>
                            <div className={st['communication__img-wrap']}>
                                <img src={skypeImg} alt="skype" className={st['communication__img']} />
                            </div>
                        </div>
                        <div className={st['communication__way']}>
                            <div className={st['communication__info']}>
                                <h4 className={st['communication__name']}>Skype</h4>
                                <span className={st['communication__ID']}>Ваш ID: bolshoyPapochka93</span>
                            </div>
                            <div className={st['communication__img-wrap']}>
                                <img src={skypeImg} alt="skype" className={st['communication__img']} />
                            </div>
                        </div>
                        <div className={st['communication__way']}>
                            <div className={st['communication__info']}>
                                <h4 className={st['communication__name']}>Skype</h4>
                                <span className={st['communication__ID']}>Ваш ID: bolshoyPapochka93</span>
                            </div>
                            <div className={st['communication__img-wrap']}>
                                <img src={skypeImg} alt="skype" className={st['communication__img']} />
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
                    <button className={st['modal__next']} onClick={() => modalHandler('forward')}>Дальше</button>
                </div>
                <div className={st['modal__close']} onClick={closeModal}>
                    <CloseOutlinedIcon sx={{ color: '#AEAEAE', width: '30px', height: '30px'}}/>
                </div>
                <div className={st['modal__previous']} onClick={() => modalHandler('back')}>
                    <ArrowBackIosIcon sx={{color: '#AEAEAE', width: '30px', height: '30px'}}/>
                </div>
            </div>
        </div>
    );
};