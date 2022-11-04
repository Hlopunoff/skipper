import {FC} from 'react';

import st from './mentorResume.module.scss';

interface ITableItemProps {
    period?: string;
    organization?: string;
}

export const MentorResume = () => {
    return (
        <div className={st['mentorResume']}>
            <div className={st['table']}>
                <h2 className={st['table__title']}>Резюме</h2>
                <div className={st['table__headlines']}>
                    <h3 className={st['table__headline']}>Опыт работы</h3>
                    <h3 className={st['table__headline']}>Образование</h3>
                    <h3 className={st['table__headline']}>Сертификаты</h3>
                    <h3 className={st['table__headline']}>Прочее</h3>
                </div>
                <div className={st['table__cols']}>
                    <div className={`${st['table__col']} experience`}>
                        <ResumeItem period='2005 - 2010' organization='ОАО Сбербанк России' key='2005-2010'/>
                        <ResumeItem period='2010 - 2020' organization='Собственное ИП' key='2010-2020'/>
                    </div>
                    <div className={`${st['table__col']} education`}>
                        <ResumeItem period='2001 - 2005' organization='Магистр, Уральский Юридический Институт' key='2001 - 2005'/>
                    </div>
                    <div className={`${st['table__col']} certificates`}>
                        <ResumeItem organization='Сертификат юриста самой серьезной степени' key='1'/>
                    </div>
                    <div className={`${st['table__col']} other`}>
                        <ResumeItem organization='Место №3 во всероссийском конкурсе “Алло, мы ищем таланты”' key={2}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ResumeItem: FC<ITableItemProps> = ({period, organization}) => {
    return (
        <div className={st['table__item']}>
            <span className={st['period']}>{period}</span>
            <span className={st['organization']}>{organization}</span>
        </div>
    );
};