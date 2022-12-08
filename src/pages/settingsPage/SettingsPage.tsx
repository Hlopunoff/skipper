import { useState } from 'react';

import { Settings } from '../../components/settings/Settings';
import { SettingsMenu } from '../../components/settingsMenu/SettingsMenu';

import st from './settingsPage.module.scss';

export const SettingsPage = () => {
    const [endpoints, setEndpoints] = useState<number[]>([]);

    return (
        <section className={st['settings']}>
            <div className="container">
                <div className={st['settings__content']}>
                    <div className={st['settings__roadmap']}>
                        <SettingsMenu endpoints={endpoints}/>
                    </div>
                    <Settings getEndpoints={(data: number[]) => {setEndpoints(data)}}/>
                </div>
            </div>
        </section>
    );
};