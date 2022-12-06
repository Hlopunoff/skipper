import Switch from '@mui/material/Switch';

import st from './settings.module.scss';
import imgPlug from '../../assets/img/avatar_plug.jpg';
import skypeIcon from '../../assets/img/skype.png';

export const Settings = () => {
    return (
        <div className="settings">
            <form action="POST" className="settings__form">
                <div className="settings__section">
                    <h3 className="settings__title">Общая информация</h3>
                    <div className="settings__img">
                        <div className="settings__imgPreview">
                            <div className="settings__imgWrap">
                                <img src={imgPlug} alt="фото профиля" />
                            </div>
                            <input type="file" name="" id="" className="settings__imgUpload" placeholder='Загрузить с ПК'/>
                        </div>
                        <div className="settings__imgDesc">
                            <h5 className="settings__imgSubtitle">Добавьте фото своего профиля</h5>
                            <span className="settings__imgMaxSize">Размер фотографии не должен превышать 20Мб</span>
                            <span className="settings__imgPermission">Также вы можете использовать фото профиля соц. сетей</span>
                            <ul className="settings__imgIcons">
                                <li className="settings__imgIcon"><img src={skypeIcon} alt="skype" /></li>
                                <li className="settings__imgIcon"><img src={skypeIcon} alt="skype" /></li>
                                <li className="settings__imgIcon"><img src={skypeIcon} alt="skype" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className="settings__generalInfoField">
                            <label htmlFor="name" className="settings__label">Ваше полное имя</label>
                            <input type="text" className="settings__nameField" id="name" placeholder='Имя'/>
                            <input type="text" className="settings__surnameField" placeholder='Фамилия'/>
                            <input type="text" className="settings__patronymic" placeholder='Отчество'/>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className="settings__generalInfoField">
                            <label htmlFor="dayOfBirth" className="settings__label">Дата рождения</label>
                            <select className="settings__dayOfBirthField" id="dayOfBirth" placeholder='День'/>
                            <select className="settings__monthOfBirthField" placeholder='Месяц'/>
                            <select className="settings__yearOfBirth" placeholder='Год'/>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className="settings__generalInfoField">
                            <label htmlFor="timezone" className="settings__label">Часовой пояс</label>
                            <select className="settings__timezoneField" id="timezone" placeholder='(GMT+5) Екатеринбург'/>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className="settings__generalInfoField">
                            <label htmlFor="timezone" className="settings__label">Обо мне <span>(как менти)</span></label>
                            <textarea name="" id="" className="settings__aboutMeField" placeholder='Расскажите немного о себе'></textarea>
                        </div>
                    </div>
                </div>
                <div className="settings__section">
                    <h3 className="settings__title">Настройки аккаунта</h3>
                    <div className="settings__accountInfo">
                        <label htmlFor="email" className="settings__label">Email</label>
                        <input type="email" name="" id="email" className="settings__emailField" placeholder='Адрес электронной почты'/>
                        <button className="settings__confirmEmail">Подтвердить</button>
                    </div>
                    <div className="settings__accountInfo">
                        <label htmlFor="phoneNumber" className="settings__label">Телефон</label>
                        <input type="tel" name="" id="phoneNumber" className="settings__phoneField" placeholder='Телефон'/>
                        <button className="settings__confirmPhone">Подтвердить</button>
                    </div>
                    <div className="settings__accountInfo">
                        <label htmlFor="changePassword" className="settings__label">Пароль</label>
                        <button className="settings__changePassword">Сменить пароль</button>
                    </div>
                    <div className="settings__accountInfo">
                        <label htmlFor="password" className="settings__label">Удаление аккаунта</label>
                        <button className="deleteAccount">Удалить аккаунт</button>
                    </div>
                </div>
                <div className="settings__section">
                    <h3 className="settings__title">Уведомления</h3>
                    <div className="settings__notificationsInfo">
                        <label htmlFor="browser" className="settings__label">Браузер</label>
                        <Switch/>
                        <span className="settings__notificationsPermission">Разрешить Skipper уведомлять вас в браузере</span>
                        <p className="settings__notificationsWarning">Мы предупредим вас о начала занятия за 2 часа, чтобы вы ничего не пропустили.<b>Внимание!</b> Данная настройка включается и выключается в настройках вашего браузера!</p>
                    </div>
                    <div className="settings__notificationsInfo">
                        <label htmlFor="browser" className="settings__label">Email</label>
                        <div className="settings__notificationLesson">
                            <input type="checkbox" name="" id="lessonStart" />
                            <label htmlFor="lessonStart">О начале занятия</label>
                        </div>
                        <div className="settings__notificationLesson">
                            <input type="checkbox" name="" id="lessonPayment" />
                            <label htmlFor="lessonPayment">Об оплате</label>
                        </div>
                        <div className="settings__notificationLesson">
                            <input type="checkbox" name="" id="newReviews" />
                            <label htmlFor="newReviews">О новых отзывах</label>
                        </div>
                    </div>
                </div>
                <div className="settings__section">
                    <h3 className="settings__title">Способок коммуникации</h3>
                    <div className="settings__communication">
                        <label htmlFor="browser" className="settings__label">Skype</label>
                        <input type="text" className="settings__skypeName" placeholder='Skype'/>
                        <button className="settings__btnDelete">Удалить</button>
                    </div>
                    <div className="settings__communication">
                        <label htmlFor="browser" className="settings__label">Google Hangouts</label>
                        <input type="text" className="settings__hangoutsId" placeholder='Google Hangouts'/>
                        <button className="settings__btnDelete">Удалить</button>
                    </div>
                    <button className="settings__addNewWayOf">+ Добавить новый способ связи</button>
                </div>
                <div className="settings__section">
                    <h3 className="settings__title">Кошелёк</h3>
                    <div className="settings__wallet">
                        <label htmlFor="browser" className="settings__label">Кредитная карта</label>
                        <div className="settings__creditCard">
                            <img src="" alt="" className="settings__creditCardIcon" />
                            <div className="settings__creditCard__info">
                                <span className="settings__creditCardNumber">**** **** **** 3197</span>
                                <span className="settings__creditCardLimit">11/2022</span>
                            </div>
                        </div>
                        <button className="settings__btnDelete">Удалить</button>
                    </div>
                    <div className="settings__wallet">
                        <label htmlFor="currencyDisplay" className="settings__label">Отображать в валюте</label>
                        <select className="settings__hangoutsId" id="currencyDisplay"></select>
                    </div>
                    <div className="settings__wallet">
                        <label htmlFor="" className="settings__label">Состояние счета</label>
                        <span className="settings__amountOfMoney">1025,00 рублей</span>
                    </div>
                    <button className="settings__addNewWayOf">+ Добавить новый способ оплаты</button>
                </div>
                <div className="settings__section">
                    <h3 className="settings__title">Настройки ментора</h3>
                    <div className="settings__mentor">
                        <label htmlFor="" className="settings__label">Текущий статус</label>
                        <Switch/>
                        <span className="settingsMentorStatus">Активный <img src="" alt="" className="tip" /></span>
                    </div>
                    <div className="settings__mentor">
                        <label htmlFor="mentorDesc" className="settings__label">Обо мне <span>(как о менторе)</span></label>
                        <textarea name="" id="mentorDesc" className="settings__mentorAboutMe" placeholder='Расскажите немного о себе'></textarea>
                    </div>
                    <div className="settings__mentor">
                        <label htmlFor="specialty" className="settings__label">Специальность</label>
                        <textarea name="" id="specialty" className="settings__mentorSpecialty" placeholder='Добавьте свою специализацию'></textarea>
                    </div>
                    <div className="settings__mentor">
                        <label htmlFor="lessonConstructor" className="settings__label">Конструктор занятий</label>
                        <div className="settings__lessonTypes">
                            <div className="settings__lessonType">
                                <input type="text" placeholder='Теоретическая консультация' />
                                <button className="settings__btnDelete">Удалить</button>
                            </div>
                            <div className="settings__lessonType">
                                <input type="text" placeholder='Практическое решение текущих проблем' />
                                <button className="settings__btnDelete">Удалить</button>
                            </div>
                            <div className="settings__lessonType">
                                <input type="text" placeholder='Решение "под ключ"' />
                                <button className="settings__btnDelete">Удалить</button>
                            </div>
                        </div>
                        <button className="settings__addNewWayOf">+ Добавить новый тип занятий</button>
                    </div>
                    <div className="settings__mentor">
                        <label htmlFor="" className="settings__label">Опыт работы</label>
                        <div className="settings__workingExps">
                            <div className="settings__workingExp">
                                <span className="settings__workingDuration">2005 - 2010</span>
                                <span className="settings__workingPlace">ОАО Сбребанк России</span>
                                <button className="settings__btnDelete">Удалить</button>
                            </div>
                            <div className="settings__workingExp">
                                <span className="settings__workingDuration">2010 - 2020</span>
                                <span className="settings__workingPlace">Собственное ИП</span>
                                <button className="settings__btnDelete">Удалить</button>
                            </div>
                        </div>
                        <button className="settings__addNewWayOf">+ Добавить новый опыт работы</button>
                    </div>
                    <div className="settings__mentor">
                        <label htmlFor="" className="settings__label">Образование</label>
                        <div className="settings__educations">
                            <div className="settings__education">
                                <span className="settings__educationDuration">2001 - 2005</span>
                                <span className="settings__educationPlace">Магистр, Уральский Юридический Институт</span>
                                <button className="settings__btnDelete">Удалить</button>
                            </div>
                        </div>
                        <button className="settings__addNewWayOf">+ Добавить новую информацию об образовании</button>
                    </div>
                    <div className="settings__mentor">
                        <label htmlFor="" className="settings__label">Сертификаты</label>
                        <div className="settings__certificates">
                            <div className="settings__certificate">
                                <img src="" alt="сертификат" className="settings__mentorCertificateImg" />
                                <button className="settings__btnDelete">Удалить</button>
                            </div>
                        </div>
                        <button className="settings__addNewWayOf">+ Добавить новый сертификат</button>
                    </div>
                    <div className="settings__mentor">
                        <label htmlFor="" className="settings__label">Прочая информация</label>
                        <div className="settings__extraInfos">
                            <div className="settings__extraInfo">
                                <span className="settings__mentorAchievent">Место №3 во всероссийском конкурсе “Алло, мы ищем таланты”</span>
                                <button className="settings__btnDelete">Удалить</button>
                            </div>
                        </div>
                        <button className="settings__addNewWayOf">+ Добавить дополнительную информацию</button>
                    </div>
                </div>
            </form>
        </div>
    );
};