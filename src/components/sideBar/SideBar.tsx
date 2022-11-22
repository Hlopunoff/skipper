import { Logo } from '../../UI/logo/Logo';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import st from './sideBar.module.scss';

export const SideBar = () => {

    const showSubList: React.MouseEventHandler<HTMLElement> = (e) => {
        const currentTarget = e.currentTarget as HTMLLIElement;

        currentTarget.parentElement?.childNodes.forEach(child => {
            if(child.nodeName === 'LI') {
                if(child.lastChild && child.lastChild.nodeName === 'UL') {
                    (child.lastChild as HTMLUListElement).classList.remove('sidebar__sublist_shown');
                }
            }
        });

        if (currentTarget.children.item(currentTarget.children.length - 1)) {
            currentTarget.children.item(currentTarget.children.length - 1)?.classList.add('sidebar__sublist_shown');
        }
    };

    return (
        <aside className={st['sidebar']}>
            <Logo loc='sidebar'/>
            <div className={st['sidebar__content']}>
                <div className={st['sidebar__sphere']}>
                    <h3 className={st['sidebar__subtitle']}>IT и технологии</h3>
                    <ul className={st['sidebar__list']}>
                        <li className={st['item']} onClick={showSubList}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <TableChartOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Программирование</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    Web программирование
                                </li>
                                <li className={st['sublist__item']}>
                                    Data science
                                </li>
                                <li className={st['sublist__item']}>
                                    Mobile
                                </li>
                            </ul>
                        </li>
                        <li className={st['item']}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <InvertColorsOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Тестирование</span>
                            </div>
                        </li>
                        <li className={st['item']} onClick={showSubList}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <CreditCardOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>DevOps</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    Web программирование
                                </li>
                                <li className={st['sublist__item']}>
                                    Data science
                                </li>
                                <li className={st['sublist__item']}>
                                    Mobile
                                </li>
                            </ul>
                        </li>
                        <li className={st['item']}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <GridViewOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Аналитика</span>
                            </div>
                        </li>
                        <li className={st['item']} onClick={showSubList}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <Inventory2OutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Администрирова...</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    Web программирование
                                </li>
                                <li className={st['sublist__item']}>
                                    Data science
                                </li>
                                <li className={st['sublist__item']}>
                                    Mobile
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={st['sidebar__sphere']}>
                    <h3 className={st['sidebar__subtitle']}>Финансы и расчеты</h3>
                    <ul className={st['sidebar__list']}>
                        <li className={st['item']} onClick={showSubList}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <ContentCopyOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Бухгалтерия</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    Web программирование
                                </li>
                                <li className={st['sublist__item']}>
                                    Data science
                                </li>
                                <li className={st['sublist__item']}>
                                    Mobile
                                </li>
                            </ul>
                        </li>
                        <li className={st['item']}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <CreditCardOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060', transform: 'rotate(-90deg)' }} />
                                </div>
                                <span className={st['item__title']}>Откаты</span>
                            </div>
                        </li>
                        <li className={st['item']}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <FeedOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Счетоводство</span>
                            </div>
                        </li>
                        <li className={st['item']}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <TaskAltOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Налоги</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={st['sidebar__sphere']}>
                    <h3 className={st['sidebar__subtitle']}>Юриспруденция</h3>
                    <ul className={st['sidebar__list']}>
                        <li className={st['item']} onClick={showSubList}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <LockOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Жилищные вопро...</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    Web программирование
                                </li>
                                <li className={st['sublist__item']}>
                                    Data science
                                </li>
                                <li className={st['sublist__item']}>
                                    Mobile
                                </li>
                            </ul>
                        </li>
                        <li className={st['item']}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <QueryBuilderOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Бытовые вопросы</span>
                            </div>
                        </li>
                        <li className={st['item']} onClick={showSubList}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <WarningAmberIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']}>Тяжкие преступле...</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    Web программирование
                                </li>
                                <li className={st['sublist__item']}>
                                    Data science
                                </li>
                                <li className={st['sublist__item']}>
                                    Mobile
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};