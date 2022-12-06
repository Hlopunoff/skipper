import {useRef, FC} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../hooks/use-auth';
import { useAppSelector } from '../../hooks/redux';
import {Badge} from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Logo } from '../../UI/logo/Logo';

import st from './header.module.scss';
import avatarPlug from '../../assets/img/avatar_plug.jpg';

interface INotificationProps {
    img: string | undefined;
    username: string;
    lessonType: string;
    date: string;
    timezone: string;
    price: string | number;
    connectionLink?: string;
    statusMessage: 'success' | 'reject' | 'pending';
}

interface IHeaderProps {
    sx?: {};
}

export const Header:FC<IHeaderProps> = ({sx}) => {
    const searchFieldRef = useRef<HTMLInputElement>(null);
    const {isAuth, mentee} = useAuth();
    const id = useAppSelector(state => state.user.user?.mentee?.userId);

    const showSearchField = () => {
        if(searchFieldRef.current) {
            searchFieldRef.current.classList.toggle('header__search_shown');
            searchFieldRef.current.focus();
        }
    };

    return (
        <header className={st['header']} style={{...sx}}>
            <div className="container">
                <nav className={st['header__nav']}>
                    <div className={st['header__left']}>
                        <Logo loc='header'/>
                        <div className={st['header__icons-wrap']}>
                            <ul className={st['header__icons']}>
                                <li className={`${st['header__icon']}`}>
                                    <Badge badgeContent={3} sx={{ "& .MuiBadge-badge": { backgroundColor: '#ED5F5F', color: "#fff" } }}>
                                        <CheckBoxOutlinedIcon sx={{ color: "rgba(96, 96, 96, 1)", width: "24px", height: "24px" }} />
                                    </Badge>
                                    <div className={st['notification']}>
                                        <div className={st['notification__content']}>
                                            <h3 className={st['notification__title']}>Уведомления</h3>
                                            <ul className={st['notification__list']}>
                                                <Notification 
                                                    key={1} 
                                                    username='Азамат Имаев' 
                                                    lessonType='Теоретическое занятие'
                                                    date='09.09.2022'
                                                    timezone='17:00 GMT+5'
                                                    price={1700}
                                                    img={undefined}
                                                    statusMessage='pending'/>
                                                <Notification 
                                                    key={2} 
                                                    username='Азамат Имаев' 
                                                    lessonType='Теоретическое занятие'
                                                    date='09.09.2022'
                                                    timezone='17:00 GMT+5'
                                                    price={1700}
                                                    img={undefined}
                                                    statusMessage='success'
                                                    connectionLink='clic.ly/skippermeetings'/>
                                                <Notification 
                                                    key={3} 
                                                    username='Азамат Имаев' 
                                                    lessonType='Теоретическое занятие'
                                                    date='09.09.2022'
                                                    timezone='17:00 GMT+5'
                                                    price={1700}
                                                    img={undefined}
                                                    statusMessage='reject'/>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className={st['header__icon']}>
                                    <Badge badgeContent={2} sx={{ "& .MuiBadge-badge": { backgroundColor: '#ED5F5F', color: "#fff" } }}>
                                        <ChatBubbleOutlineOutlinedIcon sx={{ color: "rgba(96, 96, 96, 1)", width: "24px", height: "24px" }} />
                                    </Badge>
                                </li>
                                <li className={st['header__icon']}>
                                    <Badge badgeContent={0} sx={{ "& .MuiBadge-badge": { backgroundColor: '#ED5F5F', color: "#fff" } }}>
                                        <EmailOutlinedIcon sx={{ color: "rgba(96, 96, 96, 1)", width: "100%", height: "100%" }} />
                                    </Badge>
                                </li>
                                <li className={st['header__icon']}>
                                    <Badge badgeContent={10} sx={{ "& .MuiBadge-badge": { backgroundColor: '#ED5F5F', color: "#fff" }}}>
                                        <CalendarTodayOutlinedIcon sx={{ color: "rgba(96, 96, 96, 1)", width: "24px", height: "24px" }} />
                                    </Badge>
                                </li>
                                <li className={st['header__icon']}>
                                    <StarBorderOutlinedIcon sx={{ color: 'rgba(255, 168, 76, 1)', width: "24px", height: "24px" }} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={st['header__right']}>
                        <div className={st['header__cla']}>
                            <Link to="/" className={st['header__find-mentor']}>Найти ментора</Link>
                            <span className={st['header__change-lang']}>Change language</span>
                            <span className={st['header__alert']}>
                                <Badge badgeContent={1} sx={{ "& .MuiBadge-badge": { backgroundColor: '#ED5F5F', color: "#fff" }}}>
                                    <NotificationsNoneOutlinedIcon sx={{ width: '24px', height: '24px', color: 'rgba(96, 96, 96, 1)' }} />
                                </Badge>
                            </span>
                            <span className={st['header__search']}>
                                <input type="text" className={st['header__search-inp']} ref={searchFieldRef}/>
                                <SearchOutlinedIcon sx={{ width: '24px', height: '24px', color: 'rgba(96, 96, 96, 1)' }} onClick={showSearchField}/>
                            </span>
                        </div>
                        <div className={st['header__profile']}>
                            <div className={st['info']}>
                                {!isAuth ? (
                                    <>
                                        <Link to="auth" className={st['header__login']}>Войти</Link>
                                        <Link to="auth/register" className={st['header__register']}>Регистрация</Link>
                                    </>
                                ) : (
                                    <>
                                        <span className={st['username']}>{mentee?.username}</span>
                                        <span className={st['role']}>менти</span>
                                    </>
                                )}
                            </div>
                            <div className={st['img-wrap']}>
                                <img src={mentee?.userPicture || avatarPlug} alt="Фото пользователя" />
                            </div>
                            <div className={st['profile-dropdown']} style={!isAuth ? ({display: 'none'}) : undefined}>
                                <div className={st['profile-dropdown__wrap']}>
                                    <ul className={st['profile-dropdown__list']}>
                                        <li className={st['profile-dropdown__item']}>
                                            <div className={st['profile-dropdown__info']}>
                                                <CalendarTodayOutlinedIcon sx={{ gridRowStart: '1', gridRowEnd: '4', width: '24px', height: '25px' }} />
                                                <h4 className={st['profile-dropdown__name']}>Кошелёк</h4>
                                                <span className={st['profile-dropdown__subtitle']}>всего на счету</span>
                                            </div>
                                            <span className={st['profile-dropdown__extra-info']}>2 403.00 ₽</span>
                                        </li>
                                        <li className={st['profile-dropdown__item']}>
                                            <div className={st['profile-dropdown__info']}>
                                                <CalendarTodayOutlinedIcon sx={{ gridRowStart: '1', gridRowEnd: '4', width: '24px', height: '25px' }} />
                                                <h4 className={st['profile-dropdown__name']}>Календарь</h4>
                                                <span className={st['profile-dropdown__subtitle']}>ближайшее событие</span>
                                            </div>
                                            <span className={st['profile-dropdown__extra-info']}>22.10.2020</span>
                                        </li>
                                        <li className={st['profile-dropdown__item']}>
                                            <div className={st['profile-dropdown__info']}>
                                                <CalendarTodayOutlinedIcon />
                                                <h4 className={st['profile-dropdown__name']}>Сохраненное</h4>
                                            </div>
                                            <span className={st['profile-dropdown__extra-info']}>14</span>
                                        </li>
                                        <li className={st['profile-dropdown__item']}>
                                            <div className={st['profile-dropdown__info']}>
                                                <CalendarTodayOutlinedIcon sx={{ gridRowStart: '1', gridRowEnd: '4', width: '24px', height: '25px' }} />
                                                <Link to={`mentee/${id}`} className={st['profile-dropdown__name']}>Профиль</Link>
                                            </div>
                                        </li>
                                        <li className={st['profile-dropdown__item']}>
                                            <div className={st['profile-dropdown__info']}>
                                                <CalendarTodayOutlinedIcon sx={{ gridRowStart: '1', gridRowEnd: '4', width: '24px', height: '25px' }} />
                                                <Link to="settings" className={st['profile-dropdown__name']}>Настройки</Link>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={st['profile-dropdown__cla']}>
                                        <a href="#" className={st['profile-dropdown__tech-help']}>Техническая поддержка</a>
                                        <a href="#" className={st['profile-dropdown__logout']}>Выйти</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

const Notification:FC<INotificationProps> = ({img, username, date, timezone, price, lessonType, statusMessage, connectionLink}) => {
    return (
        <li className={st['notification__item']}>
            <div className={st['notification__info']}>
                <div className={st['notification__img-wrap']}>
                    <img src={img || avatarPlug} alt="profile" className={st['notification__img']} />
                </div>
                <div className={st['notification__desc']}>
                    <span className={st['notification__username']}>{username} ({lessonType})</span>
                    <div className={st['notification__details']}>
                        <span className={st['notification__detail']}>{date}</span>
                        <div className={st['notification__divider']}></div>
                        <span className={st['notification__detail']}>{timezone}</span>
                        <div className={st['notification__divider']}></div>
                        <span className={st['notification__detail']}>{price} руб</span>
                    </div>
                    <div className={st['notification__status-message']}>
                        {statusMessage === 'pending' ? 'На рассмотрении' : statusMessage === 'success' ? <>Ссылка: <a href={connectionLink}>{connectionLink}</a></>: 'Отказано'}
                    </div>
                </div>
            </div>
            <div className={st['notification__status-marker']} style={{ backgroundColor: `${statusMessage === 'pending' ? '#EDE75F' : statusMessage === 'success' ? '#73ED5F' : '#ED5F5F'}`}}></div>
        </li>
    );
};