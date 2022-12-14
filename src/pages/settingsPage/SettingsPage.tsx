import { useState } from 'react';

import { Settings } from '../../components/settings/Settings';
import { SettingsMenu } from '../../components/settingsMenu/SettingsMenu';
import { IUserSettings } from '../../models/IUserSettings';

import st from './settingsPage.module.scss';

export const SettingsPage = () => {
    const [settings, setSettings] = useState<IUserSettings>();

    return (
        <section className={st['settings']}>
            <div className="container">
                <div className={st['settings__content']}>
                    <div className={st['settings__roadmap']}>
                        <SettingsMenu settings={settings}/>
                    </div>
                    <Settings setSettings={(settings:IUserSettings) => setSettings(settings)}/>
                </div>
            </div>
        </section>
    );
};