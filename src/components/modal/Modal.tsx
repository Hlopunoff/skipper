import {useRef, useEffect, useState, FC} from 'react';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {TableTimeCol} from '../schedule/Schedule';

import st from './modal.module.scss';

import mentorLogoPlug from '../../assets/img/avatar_plug.jpg';
import skypeImg from '../../assets/img/skype.png';

//! DELETE LATER
const times = ['00:04 AM', '04:08 AM', '08:12 AM', '08:15 AM', '12:04 PM', '04:08 PM', '08:12 PM'];

interface IModalProps {
    getModalRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | undefined>>;
}

interface IModalOptionProps {
    title: string;
    subtitle?: string;
    price?: number;
    getBookInfo?: React.Dispatch<React.SetStateAction<string[]>>;
}

interface ICurrentBookOptions {
    title?: string;
    subtitle?: string;
    price?: string;
}

export const removeActiveClasses = (parent: HTMLElement | null) => {
    if(parent) {
        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].classList.remove('modal_chosen');
        }
    }
};

export const Modal:FC<IModalProps> = ({getModalRef}) => {
    const [step, setStep] = useState(1);
    const [modalBookInfo, setModalBookInfo] = useState<string[]>([]);
    const modalRef= useRef<HTMLDivElement>(null);
    const stepRef = useRef<HTMLDivElement>(null);
    const firstScreenRef = useRef<HTMLDivElement>(null);
    const secondScreenRef = useRef<HTMLDivElement>(null);
    const thirdScreenRef = useRef<HTMLDivElement>(null);
    const fourthScreenRef = useRef<HTMLDivElement>(null);
    const goBackRef = useRef<HTMLDivElement>(null);

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
    };

    const displayModalTitle = () => {
        if(step === 1) {
            return (<h3 className={st['modal__title']}>Выберите тип занятия</h3>);
        } else if(step === 2) {
            return (<h3 className={st['modal__title']}>Детали занятия</h3>);
        } else if(step === 3) {
            return (<h3 className={st['modal__title']}>Выберите время</h3>);
        } else {
            return (<h3 className={st['modal__title']}>Выберите вариант связи</h3>);
        }
    };

    const displayArrowBack = () => {
        if (goBackRef.current) {
            if (step === 1) {
                goBackRef.current.style.display = 'none';
            } else {
                goBackRef.current.style.display = 'block';
            }
        }
    };

    const displayBookInfo = () => {
        if(modalBookInfo.length) {
            return modalBookInfo.map(info => {
                return (
                    <>
                        <span className={st['modal__vertical-divider']}></span>
                        <span className={st['modal__curr-info']}>{info}</span>
                    </>
                );
            });
        }
        return null;
    };

    useEffect(() => {
        stepHandler(step);

        getModalRef(modalRef);
    }, []);

    useEffect(() => {
        displayArrowBack();
    }, [step]);

    return (
        <div className={`${st['modal']}`} ref={modalRef} onClick={closeModal}>
            <div className={st['modal__content']} onClick={e => e.stopPropagation()}>
                {displayModalTitle()}
                <div className={st['modal__steps']} ref={stepRef}>
                    <div className={st['steps__line']}></div>
                    <div className={st['step']}></div>
                    <div className={st['step']}></div>
                    <div className={st['step']}></div>
                    <div className={st['step']}></div>
                </div>
                <div className={st['modal__options']} ref={firstScreenRef}>
                    <LessonType title='Теоретическая консультация' subtitle='Решение профильных вопросов в устной форме' price={1250} key={1}/>
                    <LessonType title='Практическое решение текущих проблем' subtitle='Решение профильных вопросов в устной форме' price={1370} key={2}/>
                    <LessonType title='Решение “под ключ”' subtitle='Описание задачи с последующим онлайн-решением' price={1700} key={3}/>
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
                            <LessonPack title='1 занятие' price={100} key={1} getBookInfo={setModalBookInfo}/>
                        </div>
                        <div className={st['lessons__category']}>
                            <LessonPack title='1 занятие' price={700} key={1} getBookInfo={setModalBookInfo}/>
                            <LessonPack title='3 занятия' price={1950} key={2} getBookInfo={setModalBookInfo}/>
                            <LessonPack title='5 занятий' price={3250} key={3} getBookInfo={setModalBookInfo}/>
                        </div>
                        <div className={st['lessons__category']}>
                            <LessonPack title='1 занятие' price={1370} key={1}  getBookInfo={setModalBookInfo}/>
                            <LessonPack title='3 занятия' price={3800} key={2}  getBookInfo={setModalBookInfo}/>
                            <LessonPack title='5 занятий' price={600} key={3}  getBookInfo={setModalBookInfo}/>
                        </div>
                        <div className={st['lessons__category']}>
                            <LessonPack title='1 занятие' price={200} key={1}  getBookInfo={setModalBookInfo}/>
                            <LessonPack title='3 занятия' price={5800} key={2}  getBookInfo={setModalBookInfo}/>
                            <LessonPack title='5 занятий' price={9400} key={3}  getBookInfo={setModalBookInfo}/>
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
                            <TableTimeCol times={times} key={1} getCurrentTime={setModalBookInfo}/>
                            <TableTimeCol times={times} key={2} getCurrentTime={setModalBookInfo}/>
                            <TableTimeCol times={times} key={3} getCurrentTime={setModalBookInfo}/>
                            <TableTimeCol times={times} key={4} getCurrentTime={setModalBookInfo}/>
                            <TableTimeCol times={times} key={5} getCurrentTime={setModalBookInfo}/>
                            <TableTimeCol times={times} key={6} getCurrentTime={setModalBookInfo}/>
                            <TableTimeCol times={times} key={7} getCurrentTime={setModalBookInfo}/>
                        </div>
                    </div>
                </div>
                <div className={st['modal__communication']} ref={fourthScreenRef}>
                    <div className={st['communication__wrap']}>
                        <CommunicationMethod title='Skype' subtitle='Ваш ID: bolshoyPapochka93' key={1} getBookInfo={setModalBookInfo}/>
                        <CommunicationMethod title='Skype' subtitle='Ваш ID: bolshoyPapochka93' key={2} getBookInfo={setModalBookInfo}/>
                        <CommunicationMethod title='Skype' subtitle='Ваш ID: bolshoyPapochka93' key={3} getBookInfo={setModalBookInfo}/>
                        <CommunicationMethod title='Skype' subtitle='Ваш ID: bolshoyPapochka93' key={4} getBookInfo={setModalBookInfo}/>
                    </div>
                </div>
                <div className={st['modal__descr']}>
                    <div className={st['modal__mentor']}>
                        <div className={st['mentor__logo-wrap']}>
                            <img src={mentorLogoPlug} alt="Фото ментора" className={st['mentor__logo']} />
                        </div>
                        <span className={st['mentor__username']}>Сергей Веснушкин</span>
                        <div className={st['modal__curr-info-wrap']}>
                            {displayBookInfo()}
                        </div>
                    </div>
                    {step === 4 ? (<button className={st['modal__book']}>Забронировать</button>) : <button className={st['modal__next']} onClick={() => modalHandler('forward')}>Дальше</button>}
                </div>
                <div className={st['modal__close']} onClick={closeModal}>
                    <CloseOutlinedIcon sx={{ color: '#AEAEAE', width: '30px', height: '30px'}}/>
                </div>
                <div className={st['modal__previous']} onClick={() => modalHandler('back')} ref={goBackRef}>
                    <ArrowBackIosIcon sx={{color: '#AEAEAE', width: '30px', height: '30px'}}/>
                </div>
            </div>
        </div>
    );
};


const LessonType:FC<IModalOptionProps> = ({title, subtitle, price}) => {
    return (
        <div className={st['option']} onClick={(e) => {
            removeActiveClasses(e.currentTarget.parentElement);
            (e.currentTarget as HTMLDivElement).classList.add('modal_chosen');
            }}>
            <div className={st['option__info']}>
                <h4 className={st['option__title']}>{title}</h4>
                <span className={st['option__subtitle']}>{subtitle}</span>
            </div>
            <span className={st['option__price']}>{price} руб</span>
        </div>
    );
};

const LessonPack:FC<IModalOptionProps> = ({title, price, getBookInfo}) => {
    return (
        <div className={st['lessons__available']} onClick={(e) => {
            removeActiveClasses(e.currentTarget.parentElement);
            (e.currentTarget as HTMLDivElement).classList.add('modal_chosen');

            if(getBookInfo) {
                getBookInfo(prev => [...prev, title]);
            }
            }}>
            <span className="lessons__amountOfLessons">{title}</span>
            <span className="lessons__priceOfLessons">{price} руб</span>
        </div>
    );
};

const CommunicationMethod:FC<IModalOptionProps> = ({title, subtitle, getBookInfo}) => {
    return (
        <div className={st['communication__way']} onClick={e => {
            removeActiveClasses(e.currentTarget.parentElement);
            (e.currentTarget as HTMLDivElement).classList.add('modal_chosen');

            if (getBookInfo) {
                getBookInfo(prev => [...prev, title]);
            }
        }}>
            <div className={st['communication__info']}>
                <h4 className={st['communication__name']}>{title}</h4>
                <span className={st['communication__ID']}>{subtitle}</span>
            </div>
            <div className={st['communication__img-wrap']}>
                <img src={skypeImg} alt="skype" className={st['communication__img']} />
            </div>
        </div>
    );
};