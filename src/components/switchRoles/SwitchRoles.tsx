import st from './switchRoles.module.scss';

export const SwitchRoles = () => {
    return (
        <div className={st['switch']}>
            <button className={st['switch__mentee']}>Профиль менти</button>
            <button className={st['switch__mentor']}>Профиль ментора</button>
        </div>
    );
};