import { Logo } from '../../UI/logo/Logo';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

import st from './sideBar.module.scss';

export const SideBar = () => {

    return (
        <aside className={st['sidebar']}>
            <Logo loc='sidebar'/>
            <div className={st['sidebar__content']}>
                <div className={st['sidebar__sphere']}>
                    <h3 className={st['sidebar__subtitle']}>IT и технологии</h3>
                    <ul className={st['sidebar__list']}>
                        <li className={st['item']}>
                            <div className={st['item__logo']}>
                                <TableChartOutlinedIcon sx={{width: '20px', height: '20px', color: '#606060'}}/>
                            </div>
                            <span className={st['item__title']}>Программирование</span>
                            <div className={st['item__dropdown']}>
                                <KeyboardArrowRightOutlinedIcon sx={{width: '20px', height: '20px', lineHeight: '20px'}}/>
                            </div>
                        </li>
                        <li className={st['item']}>
                            <div className={st['item__logo']}>
                                <TableChartOutlinedIcon sx={{width: '20px', height: '20px', color: '#606060'}}/>
                            </div>
                            <span className={st['item__title']}>Тестирование</span>
                            <div className={st['item__dropdown']}>
                                <KeyboardArrowRightOutlinedIcon sx={{width: '20px', height: '20px', lineHeight: '20px'}}/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};