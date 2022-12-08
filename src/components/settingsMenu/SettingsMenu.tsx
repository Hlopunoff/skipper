import {useRef, useEffect, FC, useState} from 'react';

import st from './settingsMenu.module.scss';

interface ISettingsMenuProps {
    endpoints: number[];
}

export const SettingsMenu:FC<ISettingsMenuProps> = ({endpoints}) => {
    const [checkpoints, setCheckpoints] = useState<number[]>([]);
    const settingsListRef = useRef<HTMLUListElement>(null);

    const handleScroll = () => {
        if(settingsListRef.current) {
            settingsListRef.current.childNodes.forEach((child, i) => {
                console.log((child as HTMLLIElement).scrollHeight, checkpoints[i]);
                if(window.scrollY >= checkpoints[i]) {
                    settingsListRef.current?.childNodes.forEach(item => {
                        (item as HTMLLIElement).classList.remove('menu__settingsItem_current');
                    });
                    (settingsListRef.current?.childNodes.item(settingsListRef.current.childNodes.length - 1) as HTMLDivElement).childNodes.forEach(step => {
                        (step as HTMLDivElement).classList.remove('menu__settingsStep_current');
                    });

                    (child as HTMLLIElement).classList.add('menu__settingsItem_current');
                    (settingsListRef.current?.childNodes.item(settingsListRef.current.childNodes.length - 1).childNodes.item(i) as HTMLDivElement).classList.add('menu__settingsStep_current');
                }
            });
        }
    };

    useEffect(() => {
        setCheckpoints(endpoints);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={st['menu']}>
            <ul className={st['menu__list']} ref={settingsListRef}>
                <li className={st['menu__settingsItem']}>Общая информация</li>
                <li className={st['menu__settingsItem']}>Настройки аккаунта</li>
                <li className={st['menu__settingsItem']}>Уведомления</li>
                <li className={st['menu__settingsItem']}>Способ коммуникации</li>
                <li className={st['menu__settingsItem']}>Кошелёк</li>
                <li className={st['menu__settingsItem']}>Настройки ментора</li>
                <div className={st['steps']}>
                    <div className={st['settingsStep']}></div>
                    <div className={st['settingsStep']}></div>
                    <div className={st['settingsStep']}></div>
                    <div className={st['settingsStep']}></div>
                    <div className={st['settingsStep']}></div>
                    <div className={st['settingsStep']}></div>
                </div>
            </ul>
            <div className={st['menu__cla']}>
                <button className={st['menu__confirmChanges']}>Сохранить</button>
                <button className={st['menu__cancelChanges']}>Отменить изменения</button>
            </div>
        </div>
    );
};