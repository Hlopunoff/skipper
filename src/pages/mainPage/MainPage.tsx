import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { MentorsList } from '../../components/mentorsList/MentorsList';

import st from './mainPage.module.scss';

export const MainPage = () => {
    return (
        <section className={st['mainPage']}>
           <div className={st['mainPage__left']}>adawdwa</div>
            <div className={st['mainPage__right']}>
                <header className={st['mainPage__header']}>
                    <span className={st['mainPage__amountOfMentors']}>7,618 специалистов найдено</span>
                    <div className={st['mainPage__settingsBtn']}>
                        <SettingsOutlinedIcon sx={{color: '#fff', width: '15px', height: '15px'}}/>
                    </div>
                    <input type="text" className={st['mainPage__search']} placeholder='Подача отчета налоговой'/>
                </header>
                <MentorsList/>
            </div>
        </section>
    );
};