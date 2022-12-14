import {useRef, useEffect, FC} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { changeUserInfo } from '../../store/slices/userSlice';
import { IUserSettings } from '../../models/IUserSettings';

import st from './settingsMenu.module.scss';

interface ISettingsMenuProps {
    settings: IUserSettings | undefined;
}

export const SettingsMenu:FC<ISettingsMenuProps> = ({settings}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {accessToken, refreshToken, id} = useAppSelector(state => {
        return {
            accessToken: state.user.user?.accessToken,
            refreshToken: state.user.user?.refreshToken,
            id: state.user.user?.mentee?.userId,
        };
    });
    const settingsListRef = useRef<HTMLUListElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                const steps = document.querySelectorAll('div[data-id]');
                document.querySelectorAll('li[data-id] a').forEach((item, i) => {
                    item.classList.remove('menu__settingsItem_current');
                    steps[i]?.classList.remove('menu__settingsStep_current');
                });

                const targetId = entry.target.id;

                if (document.querySelector(`li[data-id="${targetId}"]`) && document.querySelector(`div[data-id="${targetId}"]`)) {
                    document.querySelector(`li[data-id="${targetId}"] a`)?.classList.add('menu__settingsItem_current');
                    document.querySelector(`div[data-id="${targetId}"]`)?.classList.add('menu__settingsStep_current');
                }
            }

        });
    };

    useEffect(() => {

        const clickMenuHandler = (e: Event) => {
            e.preventDefault();
            const target = e.target as HTMLElement;
            if (target.hasAttribute('href')) {
                const id = target.getAttribute('href')!.replace('#', '');
                window.scrollTo({
                    behavior: 'smooth',
                    top: document.getElementById(id)?.offsetTop,
                });
            }
        };

        if(settingsListRef.current) {
            settingsListRef.current.addEventListener('click', clickMenuHandler);
        }
        
        const sectionMenuObserver = new IntersectionObserver(handleScroll, {threshold: 0.7});
        document.querySelectorAll('[data-name="settingsSection"]').forEach(item => sectionMenuObserver.observe((item as HTMLElement)));

        return () => settingsListRef.current?.removeEventListener('click', clickMenuHandler);
    }, []);

    return (
        <div className={st['menu']}>
            <ul className={st['menu__list']} ref={settingsListRef}>
                <li className={st['menu__settingsItem']} data-id="generalInfo"><a href="#generalInfo" className={st['menu__settingsItem']}>Общая информация</a></li>
                <li className={st['menu__settingsItem']} data-id="accountSettings"><a href="#accountSettings" className={st['menu__settingsItem']}>Настройки аккаунта</a></li>
                <li className={st['menu__settingsItem']} data-id="notifications"><a href="#notifications" className={st['menu__settingsItem']}>Уведомления</a></li>
                <li className={st['menu__settingsItem']} data-id="communication"><a href="#communication" className={st['menu__settingsItem']}>Способ коммуникации</a></li>
                <li className={st['menu__settingsItem']} data-id="payment"><a href="#payment" className={st['menu__settingsItem']}>Кошелёк</a></li>
                <li className={st['menu__settingsItem']} data-id="mentorSettings"><a href="#mentorSettings" className={st['menu__settingsItem']}>Настройки ментора</a></li>
                <div className={st['steps']} ref={stepsRef}>
                    <div className={st['settingsStep']} data-id="generalInfo"></div>
                    <div className={st['settingsStep']} data-id="accountSettings"></div>
                    <div className={st['settingsStep']} data-id="notifications"></div>
                    <div className={st['settingsStep']} data-id="communication"></div>
                    <div className={st['settingsStep']} data-id="payment"></div>
                    <div className={st['settingsStep']} data-id="mentorSettings"></div>
                </div>
            </ul>
            <div className={st['menu__cla']}>
                <button className={st['menu__confirmChanges']} onClick={() => {
                    console.log(JSON.stringify(settings));
                    dispatch(changeUserInfo({accessToken, refreshToken, id, body: settings}))
                    .then(() => navigate(`/mentee/${id}`));
                }}>Сохранить</button>
                <button className={st['menu__cancelChanges']}>Отменить изменения</button>
            </div>
        </div>
    );
};