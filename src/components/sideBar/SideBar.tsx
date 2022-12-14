import { useAppDispatch } from '../../hooks/redux';
import { setCategory, getTags } from '../../store/slices/filterSlice';

import { Logo } from '../../UI/logo/Logo';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import st from './sideBar.module.scss';

const setCategoryTitle = (title: string) => title.length > 16 ? title.slice(0, 16) + '...' : title;

export const SideBar = () => {
    const dispatch = useAppDispatch();

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

    const getSphere:React.MouseEventHandler<HTMLDivElement> = (e) => {
        const target = e.target;
        if(target && (target as HTMLElement).tagName === 'SPAN') {
            dispatch(setCategory((target as HTMLSpanElement).getAttribute('data-category')));
        }
    };

    const handleCategory: React.MouseEventHandler<HTMLLIElement> = (e) => {
        const currTarget = e.currentTarget;

        if(currTarget) {
            dispatch(getTags(currTarget.querySelector('span[data-category]')?.getAttribute('data-category') as string));
        }
    };

    return (
        <aside className={st['sidebar']}>
            <Logo loc='sidebar'/>
            <div className={st['sidebar__content']} onClick={getSphere}>
                <div className={st['sidebar__sphere']}>
                    <h3 className={st['sidebar__subtitle']}>IT ?? ????????????????????</h3>
                    <ul className={st['sidebar__list']}>
                        <li className={st['item']} onClick={(e) => {
                            showSubList(e);
                            handleCategory(e);
                        }}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <TableChartOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']} data-category="programming">{setCategoryTitle('????????????????????????????????')}</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Web ????????????????????????????????')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Data science')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Mobile')}
                                </li>
                            </ul>
                        </li>
                        <li className={st['item']} onClick={handleCategory}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <InvertColorsOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']} data-category="testing">{setCategoryTitle('????????????????????????')}</span>
                            </div>
                        </li>
                        <li className={st['item']} onClick={(e) => {
                            showSubList(e);
                            handleCategory(e);
                        }}>
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
                                    {setCategoryTitle('Web ????????????????????????????????')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Data science')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Mobile')}
                                </li>
                            </ul>
                        </li>
                        <li className={st['item']} onClick={handleCategory}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <GridViewOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']} data-category="analytics">{setCategoryTitle('??????????????????')}</span>
                            </div>
                        </li>
                        <li className={st['item']} onClick={(e) => {
                            showSubList(e);
                            handleCategory(e);
                        }}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <Inventory2OutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']} data-category="administrating">{setCategoryTitle('??????????????????????????????????')}</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Web ????????????????????????????????')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Data science')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Mobile')}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={st['sidebar__sphere']}>
                    <h3 className={st['sidebar__subtitle']}>??????????????????</h3>
                    <ul className={st['sidebar__list']}>
                        <li className={st['item']} onClick={(e) => {
                            showSubList(e);
                            handleCategory(e);
                        }}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <ContentCopyOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']} data-category="cooking">{setCategoryTitle('?????????????????????????? ????????')}</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Web ????????????????????????????????')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Data science')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Mobile')}
                                </li>
                            </ul>
                        </li>
                        <li className={st['item']} onClick={handleCategory}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <CreditCardOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060', transform: 'rotate(-90deg)' }} />
                                </div>
                                <span className={st['item__title']} data-category="confectionery">{setCategoryTitle('???????????????????????? ????????')}</span>
                            </div>
                        </li>
                        <li className={st['item']} onClick={handleCategory}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <FeedOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']} data-category="food-stylist">{setCategoryTitle('??????-??????????????')}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={st['sidebar__sphere']}>
                    <h3 className={st['sidebar__subtitle']}>??????????????????????????</h3>
                    <ul className={st['sidebar__list']}>
                        <li className={st['item']} onClick={(e) => {
                            showSubList(e);
                            handleCategory(e);
                        }}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <LockOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']} data-category="housing-issues">{setCategoryTitle('???????????????? ??????????????')}</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Web ????????????????????????????????')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Data science')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Mobile')}
                                </li>
                            </ul>
                        </li>
                        <li className={st['item']} onClick={handleCategory}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <QueryBuilderOutlinedIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']} data-category="domesticIssues">{setCategoryTitle('?????????????? ??????????????')}</span>
                            </div>
                        </li>
                        <li className={st['item']} onClick={(e) => {
                            showSubList(e);
                            handleCategory(e);
                        }}>
                            <div className={st['item__wrap']}>
                                <div className={st['item__logo']}>
                                    <WarningAmberIcon sx={{ width: '20px', height: '20px', color: '#606060' }} />
                                </div>
                                <span className={st['item__title']} data-category="criminal">{setCategoryTitle('???????????? ????????????????????????')}</span>
                                <div className={st['item__dropdown']}>
                                    <KeyboardArrowRightOutlinedIcon sx={{ width: '20px', height: '20px', lineHeight: '20px' }} />
                                </div>
                            </div>
                            <ul className={st['sidebar__sublist']}>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Web ????????????????????????????????')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Data science')}
                                </li>
                                <li className={st['sublist__item']}>
                                    {setCategoryTitle('Mobile')}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};