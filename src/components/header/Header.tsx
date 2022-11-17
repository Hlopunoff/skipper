import {useRef} from 'react';
import {Link} from 'react-router-dom';
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
import profileImg from '../../assets/img/header_profile.png';

export const Header = () => {
    const searchFieldRef = useRef<HTMLInputElement>(null);

    const showSearchField = () => {
        if(searchFieldRef.current) {
            searchFieldRef.current.classList.toggle('header__search_shown');
            searchFieldRef.current.focus();
        }
    };

    return (
        <header className={st['header']}>
            <div className="container">
                <nav className={st['header__nav']}>
                    <div className={st['header__left']}>
                        <Logo sx={{}}/>
                        <div className={st['header__icons-wrap']}>
                            <ul className={st['header__icons']}>
                                <li className={st['header__icon']}>
                                    <Badge badgeContent={3} sx={{ "& .MuiBadge-badge": { backgroundColor: '#ED5F5F', color: "#fff" } }}>
                                        <CheckBoxOutlinedIcon sx={{ color: "rgba(96, 96, 96, 1)", width: "24px", height: "24px" }} />
                                    </Badge>
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
                                <span className={st['username']}>Азамат Амаев</span>
                                <span className={st['role']}>ментор</span>
                            </div>
                            <div className={st['img-wrap']}>
                                <img src={profileImg} alt="Фото пользователя" />
                            </div>
                            <div className={st['profile-dropdown']}>
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
                                                <Link to="mentee" className={st['profile-dropdown__name']}>Профиль</Link>
                                            </div>
                                        </li>
                                        <li className={st['profile-dropdown__item']}>
                                            <div className={st['profile-dropdown__info']}>
                                                <CalendarTodayOutlinedIcon sx={{ gridRowStart: '1', gridRowEnd: '4', width: '24px', height: '25px' }} />
                                                <h4 className={st['profile-dropdown__name']}>Настройки</h4>
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