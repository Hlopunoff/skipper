import {useRef, useEffect, useState, FC} from 'react';

import Switch from '@mui/material/Switch';

import st from './settings.module.scss';
import imgPlug from '../../assets/img/avatar_plug.jpg';
import skypeIcon from '../../assets/img/skype.png';
import creditCardIcon from '../../assets/img/creditCard.png';
import certificateImg from '../../assets/img/certificate.png';

interface ISettingsProps {
    getEndpoints: (data: number[]) => void;
}

export const Settings:FC<ISettingsProps> = ({getEndpoints}) => {
    const settingsFormRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if(settingsFormRef.current) {
            const endpoints: number[] = [];

            settingsFormRef.current?.childNodes.forEach(child => {
                //TODO Пофиксить баг с отображением
                endpoints.push((child as HTMLDivElement).scrollTop);
            });
            getEndpoints(endpoints);
        }  
    }, []);
    

    return (
        <div className={st['settings']}>
            <form action="POST" className={st['settings__form']} ref={settingsFormRef}>
                <div className={st['settings__section']}>
                    <h3 className={st['settings__title']}>Общая информация</h3>
                    <div className={st['settings__img']}>
                        <div className="settings__imgPreview">
                            <div className={st['settings__imgWrap']}>
                                <img src={imgPlug} alt="фото профиля" />
                            </div>
                            <label className={st['settings__imgUpload']}>
                                Загрузить с ПК
                                <input type="file"/>
                            </label>
                        </div>
                        <div className="settings__imgDesc">
                            <h5 className={st['settings__imgSubtitle']}>Добавьте фото своего профиля</h5>
                            <span className={st['settings__imgMaxSize']}>Размер фотографии не должен превышать 20Мб</span>
                            <span className={st['settings__imgPermission']}>Также вы можете использовать фото профиля соц. сетей</span>
                            <ul className={st['settings__imgIcons']}>
                                <li className={st['settings__imgIcon']}><img src={skypeIcon} alt="skype" /></li>
                                <li className={st['settings__imgIcon']}><img src={skypeIcon} alt="skype" /></li>
                                <li className={st['settings__imgIcon']}><img src={skypeIcon} alt="skype" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className={st['settings__generalInfoField']}>
                            <label htmlFor="name" className={st['settings__label']}>Ваше полное имя</label>
                            <div className={st['settings__fields']}>
                                <input type="text" className={st['settings__nameField']} id="name" placeholder='Имя' />
                                <input type="text" className={st['settings__surnameField']} placeholder='Фамилия' />
                                <input type="text" className={st['settings__patronymic']} placeholder='Отчество' />
                            </div>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className={st['settings__generalInfoField']}>
                            <label htmlFor="dayOfBirth" className={st['settings__label']}>Дата рождения</label>
                            <div className={st['settings__fields']}>
                                <select className={st['settings__dayOfBirthField']} id="dayOfBirth" defaultValue="day" >
                                    <option value="day">День</option>
                                </select>
                                <select className={st['settings__monthOfBirthField']} placeholder='Месяц' defaultValue="month" >
                                    <option value="month">Месяц</option>
                                    <option value="january">Январь</option>
                                </select>
                                <select className={st['settings__yearOfBirthField']} placeholder='Год' defaultValue="year" >
                                    <option value="year">Год</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className={st['settings__generalInfoField']}>
                            <label htmlFor="timezone" className={st['settings__label']}>Часовой пояс</label>
                            <div className={st['settings__fields']}>
                                <select className={st['settings__timezoneField']} id="timezone">
                                    <option value="ekb">(GMT+5) Екатеринбург</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className={st['settings__generalInfoField']}>
                            <label htmlFor="aboutMentee" className={st['settings__label']}>Обо мне <span>(как менти)</span></label>
                            <div className={st['settings__fields']}>
                                <textarea name="" id="aboutMentee" className={st['settings__aboutMenteeField']} placeholder='Расскажите немного о себе'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st['settings__section']}>
                    <h3 className={st['settings__title']}>Настройки аккаунта</h3>
                    <div className={st['settings__accountInfo']}>
                        <label htmlFor="email" className={st['settings__label']}>Email</label>
                        <div className={st['settings__fields']}>
                            <input type="email" name="" id="email" className={st['settings__emailField']} placeholder='Адрес электронной почты' />
                            <button className={st['settings__confirmFieldBtn']}>Подтвердить</button>
                        </div>
                    </div>
                    <div className={st['settings__accountInfo']}>
                        <label htmlFor="phoneNumber" className={st['settings__label']}>Телефон</label>
                        <div className={st['settings__fields']}>
                            <input type="tel" name="" id="phoneNumber" className={st['settings__phoneField']} placeholder='Телефон' />
                            <button className={`${st['settings__confirmFieldBtn']} ${st['settings__confirmFieldBtn_confirmed']}`}>Подтверждён</button>
                        </div>
                    </div>
                    <div className={st['settings__accountInfo']}>
                        <label htmlFor="changePassword" className={st['settings__label']}>Пароль</label>
                        <div className={st['settings__fields']}>
                            <button className={st['settings__changePassword']}>Сменить пароль</button>
                        </div>
                    </div>
                    <div className={st['settings__accountInfo']}>
                        <label htmlFor="password" className={st['settings__label']}>Удаление аккаунта</label>
                        <div className={st['settings__fields']}>
                            <button className={st['settings__deleteAccount']}>Удалить аккаунт</button>
                        </div>
                    </div>
                </div>
                <div className={st['settings__section']}>
                    <h3 className={st['settings__title']}>Уведомления</h3>
                    <div className={st['settings__notificationsInfo']}>
                        <label htmlFor="" className={st['settings__label']}>Браузер</label>
                        <div className={st['settings__fields']}>
                            <Switch sx={{
                                '& .MuiSwitch-thumb': {
                                    color: '#7E72F2',
                                    height: '15px',
                                    width: '15px',
                                    marginTop: '4px'

                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: '#fff',
                                    border: '1px solid #9E9E9E',
                                    height: '17px',
                                    width: '28px',
                                    borderRadius: '15px'
                                },
                                '& .PrivateSwitchBase-input': {
                                    margin: '0px',
                                    padding: '0px'
                                },
                                '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                                    backgroundColor: 'rgb(143, 133, 236)'
                                }
                            }} />
                            <span className={st['settings__notificationsPermission']}>Разрешить Skipper уведомлять вас в браузере</span>
                            <p className={st['settings__notificationsWarning']}>Мы предупредим вас о начала занятия за 2 часа, чтобы вы ничего не пропустили.<b>Внимание!</b> Данная настройка включается и выключается в настройках вашего браузера!</p>
                        </div>
                    </div>
                    <div className={st['settings__notificationsInfo']}>
                        <label htmlFor="" className={st['settings__label']}>Email</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__notificationLesson']}>
                                <input type="checkbox" name="" id="lessonStart" />
                                <label htmlFor="lessonStart">О начале занятия</label>
                            </div>
                            <div className={st['settings__notificationLesson']}>
                                <input type="checkbox" name="" id="lessonPayment" />
                                <label htmlFor="lessonPayment">Об оплате</label>
                            </div>
                            <div className={st['settings__notificationLesson']}>
                                <input type="checkbox" name="" id="newReviews" />
                                <label htmlFor="newReviews">О новых отзывах</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st['settings__section']}>
                    <h3 className={st['settings__title']}>Способ коммуникации</h3>
                    <div className={st['settings__communication']}>
                        <label htmlFor="skypeId" className={st['settings__label']}>Skype</label>
                        <div className={st['settings__fields']}>
                            <input type="text" className={st['settings__skypeName']} placeholder='Skype' id='skypeId'/>
                            <button className={st['settings__btnDelete']}>Удалить</button>
                        </div>
                    </div>
                    <div className={st['settings__communication']}>
                        <label htmlFor="hangoutsId" className={st['settings__label']}>Google Hangouts</label>
                        <div className={st['settings__fields']}>
                            <input type="text" className={st['settings__hangoutsId']} placeholder='Google Hangouts' id='hangoutsId'/>
                            <button className={st['settings__btnDelete']}>Удалить</button>
                        </div>
                    </div>
                    <button className={st['settings__addNewWayOf']}>+ Добавить новый способ связи</button>
                </div>
                <div className={st['settings__section']}>
                    <h3 className={st['settings__title']}>Кошелёк</h3>
                    <div className={st['settings__wallet']}>
                        <label htmlFor="browser" className={st['settings__label']}>Кредитная карта</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__creditCard']}>
                                <img src={creditCardIcon} alt="кредитная карта" className="settings__creditCardIcon" />
                                <div className={st['settings__creditCardInfo']}>
                                    <span className="settings__creditCardNumber">**** **** **** 3197</span>
                                    <span className="settings__creditCardLimit">11/2022</span>
                                </div>
                            </div>
                            <button className={st['settings__btnDelete']}>Удалить</button>
                        </div>
                    </div>
                    <div className={st['settings__wallet']}>
                        <label htmlFor="currencyDisplay" className={st['settings__label']}>Отображать в валюте</label>
                        <div className={st['settings__fields']}>
                            <select className={st['settings__displayCurrency']} id="currencyDisplay">
                                <option value="rub">RUB ₽ (Российский рубль)</option>
                            </select>
                        </div>
                    </div>
                    <div className={st['settings__wallet']}>
                        <label htmlFor="" className={st['settings__label']}>Состояние счета</label>
                        <div className={st['settings__fields']}>
                            <span className={st['settings__amountOfMoney']}>1025,00 рублей</span>
                        </div>
                    </div>
                    <button className={st['settings__addNewWayOf']}>+ Добавить новый способ оплаты</button>
                </div>
                <div className={st['settings__section']}>
                    <h3 className={st['settings__title']}>Настройки ментора</h3>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>Текущий статус</label>
                        <div className={st['settings__fields']}>
                            <Switch sx={{
                                '& .MuiSwitch-thumb': {
                                    color: '#7E72F2',
                                    height: '15px',
                                    width: '15px',
                                    marginTop: '4px'

                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: '#fff',
                                    border: '1px solid #9E9E9E',
                                    height: '17px',
                                    width: '28px',
                                    borderRadius: '15px'
                                },
                                '& .PrivateSwitchBase-input': {
                                    margin: '0px',
                                    padding: '0px'
                                },
                                '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                                    backgroundColor: 'rgb(143, 133, 236)'
                                }
                            }}/>
                            <span className={st['settings__mentorStatus']}>Активный <img src="" alt="" className="tip" /></span>
                        </div>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="mentorDesc" className={st['settings__label']}>Обо мне <span>(как о менторе)</span></label>
                        <div className={st['settings__fields']}>
                            <textarea name="" id="mentorDesc" className={st['settings__mentorAboutMe']} placeholder='Расскажите немного о себе'></textarea>
                        </div>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="specialty" className={st['settings__label']}>Специальность</label>
                        <div className={st['settings__fields']}>
                            <textarea name="" id="specialty" className={st['settings__mentorSpecialty']} placeholder='Добавьте свою специализацию'></textarea>
                        </div>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="lessonConstructor" className={st['settings__label']}>Конструктор занятий</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__lessonTypes']}>
                                <div className={st['settings__lessonType']}>
                                    <input type="text" placeholder='Теоретическая консультация' />
                                    <button className={st['settings__btnDelete']}>Удалить</button>
                                </div>
                                <div className={st['settings__lessonType']}>
                                    <input type="text" placeholder='Практическое решение текущих проблем' />
                                    <button className={st['settings__btnDelete']}>Удалить</button>
                                </div>
                                <div className={st['settings__lessonType']}>
                                    <input type="text" placeholder='Решение "под ключ"' />
                                    <button className={st['settings__btnDelete']}>Удалить</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ Добавить новый тип занятий</button>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>Опыт работы</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__workingExps']}>
                                <div className={st['settings__workingExp']}>
                                    <div className={st['settings__workingExpInfo']}>
                                        <span className="settings__workingDuration">2005 - 2010</span>
                                        <span className="settings__workingPlace">ОАО Сбребанк России</span>
                                    </div>
                                    <button className={st['settings__btnDelete']}>Удалить</button>
                                </div>
                                <div className={st['settings__workingExp']}>
                                    <div className={st['settings__workingExpInfo']}>
                                        <span className="settings__workingDuration">2010 - 2020</span>
                                        <span className="settings__workingPlace">Собственное ИП</span>
                                    </div>
                                    <button className={st['settings__btnDelete']}>Удалить</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ Добавить новый опыт работы</button>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>Образование</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__educations']}>
                                <div className={st['settings__education']}>
                                    <div className={st['settings__educationInfo']}>
                                        <span className="settings__educationDuration">2001 - 2005</span>
                                        <span className="settings__educationPlace">Магистр, Уральский Юридический Институт</span>
                                    </div>
                                    <button className={st['settings__btnDelete']}>Удалить</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ Добавить новую информацию об образовании</button>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>Сертификаты</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__certificates']}>
                                <div className={st['settings__certificate']}>
                                    <img src={certificateImg} alt="сертификат" className="settings__mentorCertificateImg" />
                                    <button className={st['settings__btnDelete']}>Удалить</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ Добавить новый сертификат</button>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>Прочая информация</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__exytaInfos']}>
                                <div className={st['settings__exytaInfo']}>
                                    <span className={st['settings__mentorAchievement']}>Место №3 во всероссийском конкурсе “Алло, мы ищем таланты”</span>
                                    <button className={st['settings__btnDelete']}>Удалить</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ Добавить дополнительную информацию</button>
                    </div>
                </div>
            </form>
        </div>
    );
};