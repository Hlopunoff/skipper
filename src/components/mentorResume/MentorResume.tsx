import st from './mentorResume.module.scss';

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
                        <div className={st['table__item']}>
                            <span className={st['period']}>2005 - 2010</span>
                            <span className={st['organization']}>ОАО Сбербанк России</span>
                        </div>
                        <div className={st['table__item']}>
                            <span className={st['period']}>2010 - 2020</span>
                            <span className={st['organization']}>Собственное ИП</span>
                        </div>
                    </div>
                    <div className={`${st['table__col']} education`}>
                        <div className={st['table__item']}>
                            <span className={st['period']}>2001 - 2005</span>
                            <span className={st['organization']}>Магистр, Уральский Юридический Институт</span>
                        </div>
                    </div>
                    <div className={`${st['table__col']} certificates`}>
                        <div className={st['table__item']}>
                            <span className={st['organization']}>Сертификат юриста самой серьезной степени</span>
                        </div>
                    </div>
                    <div className={`${st['table__col']} other`}>
                        <div className={st['table__item']}>
                            <span className={st['organization']}>Место №3 во всероссийском конкурсе “Алло, мы ищем таланты”</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};