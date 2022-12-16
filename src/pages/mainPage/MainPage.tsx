import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useAppSelector } from '../../hooks/redux';
import { MentorsList } from '../../components/mentorsList/MentorsList';
import { Filter } from '../../components/filter/Filter';

import st from './mainPage.module.scss';

export const MainPage = () => {
    const {length: amountOfFound} = useAppSelector( state => state.filter.filter.body.content)

    return (
        <section className={st['mainPage']}>
           <div className={st['mainPage__left']}>
            <Filter/>
           </div>
            <div className={st['mainPage__right']}>
                <header className={st['mainPage__header']}>
                    <span className={st['mainPage__amountOfMentors']}>{amountOfFound} специалистов найдено</span>
                    <div className={st['mainPage__settingsBtn']}>
                        <SettingsOutlinedIcon sx={{color: '#fff', width: '15px', height: '15px'}}/>
                    </div>
                    <input type="text" className={st['mainPage__search']} placeholder='Найти ментора'/>
                </header>
                <MentorsList/>
            </div>
        </section>
    );
};