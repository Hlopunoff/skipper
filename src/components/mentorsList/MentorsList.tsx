import { MentorPromoCard } from '../mentorPromoCard/MentorPromoCard';

import st from './mentorsList.module.scss';

export const MentorsList = () => {
    return (
        <section className={st['mentorsList']}>
            <MentorPromoCard 
                key={1}
                name='Сергей'
                specialty='Специалист налогового делопроизводства'
                description='Более 10 лет занимаюсь налогами, откатами и прочими бухгалтерскими штучками на производстве. Готов помочь с вопросами составления отчетности и прочих...'
                rating={4.7}
                price={17}
                typeOfPayment='почасовая оплата'/>
            <MentorPromoCard 
                key={2}
                rating={4.0}
                price={19}
                typeOfPayment='почасовая оплата'
                name='Николай'
                specialty='Делопроизводитель высшей категории'
                description='Привет! Помогу с налоговой декларацией, отчетности по приходу и уходу, рассчитаю и научу рассчитывать зарплаты, научу пользоваться интернетом.'/>
            <MentorPromoCard 
                key={3}
                name='Мария'
                specialty='Бухгалтер'
                typeOfPayment='почасовая оплата'
                description='Я работаю ведущим бухгалтером в большой компании в сфере транспортной промышленности. Также имеется опыт в счетоводстве и обучении молодых бухгалтеров...'
                rating={4.1}
                price={11}/>
            <MentorPromoCard 
                key={4}
                name='Евгения'
                specialty='Бухгалтер и счетовод в ИП'
                typeOfPayment='почасовая оплата'
                description='Решу все ваши бухгалтерские проблемы в приемлемые сроки. Научу ваших специалистов всему необходимому, приворожу любимого и скрою от налоговой вашу жо...'
                rating={4.9}
                price={22}/>
        </section>
    );
};