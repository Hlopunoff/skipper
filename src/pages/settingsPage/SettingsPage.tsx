import { Settings } from '../../components/settings/Settings';

import st from './settingsPage.module.scss';

export const SettingsPage = () => {
    return (
        <section className={st['settings']}>
            <div className="container">
                <div className={st['settings__content']}>
                    <div className={st['settings__roadmap']}>
                        road map
                    </div>
                    <Settings/>
                </div>
            </div>
        </section>
    );
};