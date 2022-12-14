import {useState, FC} from 'react';
import { IUserSettings } from '../../models/IUserSettings';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

import Switch from '@mui/material/Switch';

import st from './settings.module.scss';
import imgPlug from '../../assets/img/avatar_plug.jpg';
import skypeIcon from '../../assets/img/skype.png';
import creditCardIcon from '../../assets/img/creditCard.png';
import certificateImg from '../../assets/img/certificate.png';

interface ISettingsProps {
    setSettings: (settings: any) => void;
}

export const Settings:FC<ISettingsProps> = ({setSettings}) => {
    const {menteeInfo, mentorInfo, id} = useAppSelector(state => {
        return {
            id: state.user.user?.mentee?.userId,
            menteeInfo: state.user.user?.mentee,
            mentorInfo: state.user.user?.mentor,
        }
    });
    const [username, setUsername] = useState('');
    const [usersurname, setUsersurname] = useState('');
    const [userpatronymic, setUserpatronymic] = useState('');
    const [userDay, setUserDay] = useState('');
    const [userMonth, setUserMonth] = useState('');
    const [userYear, setUserYear] = useState('');
    const [userTimezone, setUserTimezone] = useState('');
    const [userDesc, setUserDesc] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userBalance, setUserBalance] = useState('0');

    const collectData = () => {
        const data:IUserSettings = {
            username: username ? `${username.trim()} ${usersurname.trim()} ${userpatronymic.trim()}` : menteeInfo?.username || menteeInfo?.sub,
            birthdate: new Date(+userYear, +userMonth - 1, +userDay - 1).toISOString(),
            balance: +userBalance,
            timeZone: `${userTimezone}`,
            email: `${userEmail.trim()}`,
            description: `${userDesc.trim()}`,
            phoneNumber: `${userPhone.trim() || menteeInfo?.sub?.trim()}`,
            id,
        }

        setSettings(data);
    }

    const handleSettingsInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, fieldName: string) => {
        const {value} = e.target;

        switch (fieldName) {
            case 'username':
                setUsername(value);
                break;
            case 'usersurname':
                setUsersurname(value);
                break;
            case 'userpatronymic':
                setUserpatronymic(value);
                break;
            case 'userDay':
                setUserDay(value);
                break;
            case 'userMonth':
                setUserMonth(value);
                break;
            case 'userYear':
                setUserYear(value);
                break;
            case 'userTimezone': 
                setUserTimezone(value);
                break;
            case 'userDesc':
                setUserDesc(value);
                break;
            case 'userEmail':
                setUserEmail(value);
                break;
            case 'userPhone':
                setUserPhone(value);
                break;
            case 'userPassword':
                setUserPassword(value);
                break;
            case 'userBalance': 
                setUserBalance(value);
                break;
            default:
                return;
        }
        collectData();
    };

    return (
        <div className={st['settings']}>
            <form action="POST" className={st['settings__form']}>
                <div className={st['settings__section']} id="generalInfo" data-name="settingsSection">
                    <h3 className={st['settings__title']}>?????????? ????????????????????</h3>
                    <div className={st['settings__img']}>
                        <div className="settings__imgPreview">
                            <div className={st['settings__imgWrap']}>
                                <img src={imgPlug} alt="???????? ??????????????" />
                            </div>
                            <label className={st['settings__imgUpload']}>
                                ?????????????????? ?? ????
                                <input type="file"/>
                            </label>
                        </div>
                        <div className="settings__imgDesc">
                            <h5 className={st['settings__imgSubtitle']}>???????????????? ???????? ???????????? ??????????????</h5>
                            <span className={st['settings__imgMaxSize']}>???????????? ???????????????????? ???? ???????????? ?????????????????? 20????</span>
                            <span className={st['settings__imgPermission']}>?????????? ???? ???????????? ???????????????????????? ???????? ?????????????? ??????. ??????????</span>
                            <ul className={st['settings__imgIcons']}>
                                <li className={st['settings__imgIcon']}><img src={skypeIcon} alt="skype" /></li>
                                <li className={st['settings__imgIcon']}><img src={skypeIcon} alt="skype" /></li>
                                <li className={st['settings__imgIcon']}><img src={skypeIcon} alt="skype" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className={st['settings__generalInfoField']}>
                            <label htmlFor="name" className={st['settings__label']}>???????? ???????????? ??????</label>
                            <div className={st['settings__fields']}>
                                <input type="text" className={st['settings__nameField']} id="name" name='name' placeholder='??????' onChange={(e) => handleSettingsInput(e, 'username')} value={username}/>
                                <input type="text" className={st['settings__surnameField']} name="surname" placeholder='??????????????' onChange={(e) => handleSettingsInput(e, 'usersurname')} value={usersurname}/>
                                <input type="text" className={st['settings__patronymic']} name="patronymic" placeholder='????????????????' onChange={(e) => handleSettingsInput(e, 'userpatronymic')} value={userpatronymic}/>
                            </div>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className={st['settings__generalInfoField']}>
                            <label htmlFor="dayOfBirth" className={st['settings__label']}>???????? ????????????????</label>
                            <div className={st['settings__fields']}>
                                <select className={st['settings__dayOfBirthField']} id="dayOfBirth" name='dayOfBirth' defaultValue="default" onChange={(e) => handleSettingsInput(e, 'userDay')} value={userDay}>
                                    <option value="default">????????</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                </select>
                                <select className={st['settings__monthOfBirthField']} name="monthOfBirth" defaultValue="default" onChange={(e) => handleSettingsInput(e, 'userMonth')} value={userMonth}>
                                    <option value="default">??????????</option>
                                    <option value="1">????????????</option>
                                    <option value="2">??????????????</option>
                                    <option value="3">????????</option>
                                    <option value="4">????????????</option>
                                </select>
                                <select className={st['settings__yearOfBirthField']} name="yearOfBirth" defaultValue="default" onChange={(e) => handleSettingsInput(e, 'userYear')} value={userYear}>
                                    <option value="default">??????</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2000">2000</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className={st['settings__generalInfoField']}>
                            <label htmlFor="timezone" className={st['settings__label']}>?????????????? ????????</label>
                            <div className={st['settings__fields']}>
                                <select className={st['settings__timezoneField']} name="timezone" id="timezone" onChange={(e) => handleSettingsInput(e, 'userTimezone')} value={userTimezone} defaultValue="???????????????? ?????????????? ????????">
                                    <option value="default">???????????????? ?????????????? ????????</option>
                                    <option value="+5">(GMT+5) ????????????????????????</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="settings__generalInfo">
                        <div className={st['settings__generalInfoField']}>
                            <label htmlFor="aboutMentee" className={st['settings__label']}>?????? ?????? <span>(?????? ??????????)</span></label>
                            <div className={st['settings__fields']}>
                                <textarea name="descriptionMentee" id="aboutMentee" className={st['settings__aboutMenteeField']} placeholder='???????????????????? ?????????????? ?? ????????' onChange={(e) => handleSettingsInput(e, 'userDesc')} value={userDesc}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st['settings__section']} id="accountSettings" data-name="settingsSection">
                    <h3 className={st['settings__title']}>?????????????????? ????????????????</h3>
                    <div className={st['settings__accountInfo']}>
                        <label htmlFor="email" className={st['settings__label']}>Email</label>
                        <div className={st['settings__fields']}>
                            <input type="email" name="email" id="email" className={st['settings__emailField']} placeholder='?????????? ?????????????????????? ??????????' onChange={(e) => handleSettingsInput(e, 'userEmail')} value={userEmail}/>
                            <button className={st['settings__confirmFieldBtn']}>??????????????????????</button>
                        </div>
                    </div>
                    <div className={st['settings__accountInfo']}>
                        <label htmlFor="phoneNumber" className={st['settings__label']}>??????????????</label>
                        <div className={st['settings__fields']}>
                            <input type="tel" name="phoneNumber" id="phoneNumber" className={st['settings__phoneField']} placeholder='??????????????' onChange={(e) => handleSettingsInput(e, 'userPhone')} value={userPhone}/>
                            <button className={`${st['settings__confirmFieldBtn']} ${st['settings__confirmFieldBtn_confirmed']}`}>??????????????????????</button>
                        </div>
                    </div>
                    <div className={st['settings__accountInfo']}>
                        <label htmlFor="changePassword" className={st['settings__label']}>????????????</label>
                        <div className={st['settings__fields']}>
                            <button className={st['settings__changePassword']}>?????????????? ????????????</button>
                        </div>
                    </div>
                    <div className={st['settings__accountInfo']}>
                        <label htmlFor="password" className={st['settings__label']}>???????????????? ????????????????</label>
                        <div className={st['settings__fields']}>
                            <button className={st['settings__deleteAccount']}>?????????????? ??????????????</button>
                        </div>
                    </div>
                </div>
                <div className={st['settings__section']} id="notifications" data-name="settingsSection">
                    <h3 className={st['settings__title']}>??????????????????????</h3>
                    <div className={st['settings__notificationsInfo']}>
                        <label htmlFor="" className={st['settings__label']}>??????????????</label>
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
                            <span className={st['settings__notificationsPermission']}>?????????????????? Skipper ???????????????????? ?????? ?? ????????????????</span>
                            <p className={st['settings__notificationsWarning']}>???? ?????????????????????? ?????? ?? ???????????? ?????????????? ???? 2 ????????, ?????????? ???? ???????????? ???? ????????????????????.<b>????????????????!</b> ???????????? ?????????????????? ???????????????????? ?? ?????????????????????? ?? ???????????????????? ???????????? ????????????????!</p>
                        </div>
                    </div>
                    <div className={st['settings__notificationsInfo']}>
                        <label htmlFor="" className={st['settings__label']}>Email</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__notificationLesson']}>
                                <input type="checkbox" name="" id="lessonStart" />
                                <label htmlFor="lessonStart">?? ???????????? ??????????????</label>
                            </div>
                            <div className={st['settings__notificationLesson']}>
                                <input type="checkbox" name="" id="lessonPayment" />
                                <label htmlFor="lessonPayment">???? ????????????</label>
                            </div>
                            <div className={st['settings__notificationLesson']}>
                                <input type="checkbox" name="" id="newReviews" />
                                <label htmlFor="newReviews">?? ?????????? ??????????????</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st['settings__section']} id="communication" data-name="settingsSection">
                    <h3 className={st['settings__title']}>???????????? ????????????????????????</h3>
                    <div className={st['settings__communication']}>
                        <label htmlFor="skypeId" className={st['settings__label']}>Skype</label>
                        <div className={st['settings__fields']}>
                            <input type="text" className={st['settings__skypeName']} placeholder='Skype' id='skypeId'/>
                            <button className={st['settings__btnDelete']}>??????????????</button>
                        </div>
                    </div>
                    <div className={st['settings__communication']}>
                        <label htmlFor="hangoutsId" className={st['settings__label']}>Google Hangouts</label>
                        <div className={st['settings__fields']}>
                            <input type="text" className={st['settings__hangoutsId']} placeholder='Google Hangouts' id='hangoutsId'/>
                            <button className={st['settings__btnDelete']}>??????????????</button>
                        </div>
                    </div>
                    <button className={st['settings__addNewWayOf']}>+ ???????????????? ?????????? ???????????? ??????????</button>
                </div>
                <div className={st['settings__section']} id="payment" data-name="settingsSection">
                    <h3 className={st['settings__title']}>??????????????</h3>
                    <div className={st['settings__wallet']}>
                        <label htmlFor="browser" className={st['settings__label']}>?????????????????? ??????????</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__creditCard']}>
                                <img src={creditCardIcon} alt="?????????????????? ??????????" className="settings__creditCardIcon" />
                                <div className={st['settings__creditCardInfo']}>
                                    <span className="settings__creditCardNumber">**** **** **** 3197</span>
                                    <span className="settings__creditCardLimit">11/2022</span>
                                </div>
                            </div>
                            <button className={st['settings__btnDelete']}>??????????????</button>
                        </div>
                    </div>
                    <div className={st['settings__wallet']}>
                        <label htmlFor="currencyDisplay" className={st['settings__label']}>???????????????????? ?? ????????????</label>
                        <div className={st['settings__fields']}>
                            <select className={st['settings__displayCurrency']} id="currencyDisplay">
                                <option value="rub">RUB ??? (???????????????????? ??????????)</option>
                            </select>
                        </div>
                    </div>
                    <div className={st['settings__wallet']}>
                        <label htmlFor="" className={st['settings__label']}>?????????????????? ??????????</label>
                        <div className={st['settings__fields']}>
                            <span className={st['settings__amountOfMoney']}>{userBalance},00 ????????????</span>
                        </div>
                    </div>
                    <button className={st['settings__addNewWayOf']}>+ ???????????????? ?????????? ???????????? ????????????</button>
                </div>
                <div className={st['settings__section']} id="mentorSettings" data-name="settingsSection">
                    <h3 className={st['settings__title']}>?????????????????? ??????????????</h3>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>?????????????? ????????????</label>
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
                            <span className={st['settings__mentorStatus']}>???????????????? <img src="" alt="" className="tip" /></span>
                        </div>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="mentorDesc" className={st['settings__label']}>?????? ?????? <span>(?????? ?? ??????????????)</span></label>
                        <div className={st['settings__fields']}>
                            <textarea name="" id="mentorDesc" className={st['settings__mentorAboutMe']} placeholder='???????????????????? ?????????????? ?? ????????'></textarea>
                        </div>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="specialty" className={st['settings__label']}>??????????????????????????</label>
                        <div className={st['settings__fields']}>
                            <textarea name="" id="specialty" className={st['settings__mentorSpecialty']} placeholder='???????????????? ???????? ??????????????????????????'></textarea>
                        </div>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="lessonConstructor" className={st['settings__label']}>?????????????????????? ??????????????</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__lessonTypes']}>
                                <div className={st['settings__lessonType']}>
                                    <input type="text" placeholder='?????????????????????????? ????????????????????????' />
                                    <button className={st['settings__btnDelete']}>??????????????</button>
                                </div>
                                <div className={st['settings__lessonType']}>
                                    <input type="text" placeholder='???????????????????????? ?????????????? ?????????????? ??????????????' />
                                    <button className={st['settings__btnDelete']}>??????????????</button>
                                </div>
                                <div className={st['settings__lessonType']}>
                                    <input type="text" placeholder='?????????????? "?????? ????????"' />
                                    <button className={st['settings__btnDelete']}>??????????????</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ ???????????????? ?????????? ?????? ??????????????</button>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>???????? ????????????</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__workingExps']}>
                                <div className={st['settings__workingExp']}>
                                    <div className={st['settings__workingExpInfo']}>
                                        <span className="settings__workingDuration">2005 - 2010</span>
                                        <span className="settings__workingPlace">?????? ???????????????? ????????????</span>
                                    </div>
                                    <button className={st['settings__btnDelete']}>??????????????</button>
                                </div>
                                <div className={st['settings__workingExp']}>
                                    <div className={st['settings__workingExpInfo']}>
                                        <span className="settings__workingDuration">2010 - 2020</span>
                                        <span className="settings__workingPlace">?????????????????????? ????</span>
                                    </div>
                                    <button className={st['settings__btnDelete']}>??????????????</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ ???????????????? ?????????? ???????? ????????????</button>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>??????????????????????</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__educations']}>
                                <div className={st['settings__education']}>
                                    <div className={st['settings__educationInfo']}>
                                        <span className="settings__educationDuration">2001 - 2005</span>
                                        <span className="settings__educationPlace">??????????????, ?????????????????? ?????????????????????? ????????????????</span>
                                    </div>
                                    <button className={st['settings__btnDelete']}>??????????????</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ ???????????????? ?????????? ???????????????????? ???? ??????????????????????</button>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>??????????????????????</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__certificates']}>
                                <div className={st['settings__certificate']}>
                                    <img src={certificateImg} alt="????????????????????" className="settings__mentorCertificateImg" />
                                    <button className={st['settings__btnDelete']}>??????????????</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ ???????????????? ?????????? ????????????????????</button>
                    </div>
                    <div className={st['settings__mentor']}>
                        <label htmlFor="" className={st['settings__label']}>???????????? ????????????????????</label>
                        <div className={st['settings__fields']}>
                            <div className={st['settings__exytaInfos']}>
                                <div className={st['settings__exytaInfo']}>
                                    <span className={st['settings__mentorAchievement']}>?????????? ???3 ???? ?????????????????????????? ???????????????? ???????????, ???? ???????? ?????????????????</span>
                                    <button className={st['settings__btnDelete']}>??????????????</button>
                                </div>
                            </div>
                        </div>
                        <button className={st['settings__addNewWayOf']}>+ ???????????????? ???????????????????????????? ????????????????????</button>
                    </div>
                </div>
            </form>
        </div>
    );
};