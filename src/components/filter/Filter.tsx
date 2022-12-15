import {useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setFilters } from '../../store/slices/filterSlice';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

import st from './filter.module.scss';

const RatingSlider = styled(Slider)(() => ({
    color: '#667BE9',
    padding: '10px 0',
    borderRadius: '3px',
    '& .MuiSlider-track': {
        height: 6,
    },
    '& .MuiSlider-rail': {
        color: '#EDEDED',
        height: 6,
    },
}));

export const Filter = () => {
    const dispatch = useAppDispatch();
    const {category, tags: recievedTags} = useAppSelector(state => state.filter.filter.filters);
    const [rating, setRating] = useState<number[]>([2,4]);
    const [[minPrice, maxPrice], setPriceRange] = useState<number[]>([0, 0]);
    const [tags, setTags] = useState<(string | null)[]>(['javascript']);

    const ratingSliderHandler = (e: Event, newValue: number | number[]) => {
        setRating(newValue as number[]);
    };

    const selectPriceRange:React.MouseEventHandler<HTMLLIElement> = (e) => {
        e.stopPropagation();

        const currentTarget = e.currentTarget as HTMLLIElement;
        const target = e.target as HTMLElement;

        if(target) {
            console.log((currentTarget.firstChild as HTMLInputElement).value);
            currentTarget.parentElement?.childNodes.forEach(child => {
                (child.firstChild as HTMLInputElement).checked = false;
            });

            (currentTarget.firstChild as HTMLInputElement).checked = true;
            setPriceRange((currentTarget.firstChild as HTMLInputElement).value.split('-').map(num => +num));
        }
    };

    const selectTags:React.MouseEventHandler<HTMLUListElement>= (e) => {
        const target = e.target;

        if (target && (target as HTMLElement).tagName === 'LABEL' && (target as HTMLElement).getAttribute('data-tag_value')) {
            if (((target as HTMLLabelElement).previousElementSibling as HTMLInputElement).checked) {
                setTags((prev => prev.filter(item => item !== (target as HTMLLabelElement).textContent)));
            } else {
                setTags((prev => [...new Set([...prev, (target as HTMLLabelElement).textContent])]));
            }
        }
    };

    return (
        <section className={st['filter']}>
            <div className={st['filter__prices']}>
                <h2 className={st['filter__pricesTitle']}>Стоимость часа консультации</h2>
                <ul className={st['filter__pricesList']}>
                    <li className={st['filter__price']} onClick={selectPriceRange}>
                        <input type="radio" name="upToFive" id="upToFive" className={st['filter__checkbox']} value="0-5"/>
                        <label htmlFor="upToFive" className={st['filter__checkboxLabel']}>до $5</label>
                    </li>
                    <li className={st['filter__price']} onClick={selectPriceRange}>
                        <input type="radio" name="fiveToTen" id="fiveToTen" className={st['filter__checkbox']} value="5-10"/>
                        <label htmlFor="fiveToTen" className={st['filter__checkboxLabel']}>$5-$10</label>
                    </li>
                    <li className={st['filter__price']} onClick={selectPriceRange}>
                        <input type="radio" name="tenToOneFifty" id="tenToOneFifty" className={st['filter__checkbox']} value="10-150"/>
                        <label htmlFor="tenToOneFifty" className={st['filter__checkboxLabel']}>$10-$150</label>
                    </li>
                    <li className={st['filter__price']} onClick={selectPriceRange}>
                        <input type="radio" name="moreThanFiveHundred" id="moreThanFiveHundred" className={st['filter__checkbox']} value="500-1000000"/>
                        <label htmlFor="moreThanFiveHundred" className={st['filter__checkboxLabel']}>больше $500</label>
                    </li>
                    <li className={st['filter__price']} onClick={selectPriceRange}>
                        <input type="radio" name="all" id="all" className={st['filter__checkbox']} value="0-1000000"/>
                        <label htmlFor="all" className={st['filter__checkboxLabel']}>All</label>
                    </li>
                </ul>
            </div>
            <div className={st['filter__rating']}>
                <div className={st['filter__ratingHeader']}>
                    <h2 className={st['filter__ratingTitle']}>Рейтинг</h2>
                    <span className={st['filter__ratingRage']}>1 - 5</span>
                </div>
                <RatingSlider
                    value={rating}
                    step={1}
                    min={1}
                    max={5}
                    onChange={ratingSliderHandler}/>
            </div>
            <div className={st['filter__tags']}>
                <h2 className={st['filter__tagsTitle']}>Теги</h2>
                <ul className={st['filter__tagsList']} onClick={selectTags}>
                    {recievedTags.length ? recievedTags.map(tag => {
                        return (
                            <li className={st['filter__tag']} key={tag}>
                                <input type="checkbox" name="" id="taxPaymentsTag" className={st['filter__tagInput']} />
                                <label htmlFor="taxPaymentsTag" className={st['filter__tagName']} data-tag_value>{tag}</label>
                                <label htmlFor="taxPaymentsTag" className={st['filter__tagAmount']}>1920</label>
                            </li>
                        );
                    }) : <span>Нет тегов</span>}
                    {/* <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="taxPaymentsTag" className={st['filter__tagInput']} />
                        <label htmlFor="taxPaymentsTag" className={st['filter__tagName']} data-tag_value>Налоговые выплаты</label>
                        <label htmlFor="taxPaymentsTag" className={st['filter__tagAmount']}>1920</label>
                    </li>
                    <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="accountingReportTag" className={st['filter__tagInput']} />
                        <label htmlFor="accountingReportTag" className={st['filter__tagName']} data-tag_value>Бух учет</label>
                        <label htmlFor="accountingReportTag" className={st['filter__tagAmount']}>1820</label>
                    </li>
                    <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="stateAnalyticsTag" className={st['filter__tagInput']} />
                        <label htmlFor="stateAnalyticsTag" className={st['filter__tagName']} data-tag_value>Аналитика состояний</label>
                        <label htmlFor="stateAnalyticsTag" className={st['filter__tagAmount']}>462</label>
                    </li>
                    <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="reportTag" className={st['filter__tagInput']} />
                        <label htmlFor="reportTag" className={st['filter__tagName']} data-tag_value>Отчетность</label>
                        <label htmlFor="reportTag" className={st['filter__tagAmount']}>6556</label>
                    </li>
                    <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="auditTag" className={st['filter__tagInput']} />
                        <label htmlFor="audiTag" className={st['filter__tagName']} data-tag_value>Аудит</label>
                        <label htmlFor="auditTag" className={st['filter__tagAmount']}>120</label>
                    </li>
                    <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="consultationTag" className={st['filter__tagInput']} />
                        <label htmlFor="consultationTag" className={st['filter__tagName']} data-tag_value>Консультации</label>
                        <label htmlFor="consultationTag" className={st['filter__tagAmount']}>353</label>
                    </li>
                    <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="fieldWorksTag" className={st['filter__tagInput']} />
                        <label htmlFor="fieldWorksTag" className={st['filter__tagName']} data-tag_value>Выездные работы</label>
                        <label htmlFor="fieldWorksTag" className={st['filter__tagAmount']}>45</label>
                    </li>
                    <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="registrationTag" className={st['filter__tagInput']} />
                        <label htmlFor="registrationTag" className={st['filter__tagName']} data-tag_value>Регистрация</label>
                        <label htmlFor="registrationTag" className={st['filter__tagAmount']}>456</label>
                    </li>
                    <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="annualPaddingTag" className={st['filter__tagInput']} />
                        <label htmlFor="annualPaddingTag" className={st['filter__tagName']} data-tag_value>Годовая подбивка</label>
                        <label htmlFor="annualPaddingTag" className={st['filter__tagAmount']}>55</label>
                    </li>
                    <li className={st['filter__tag']}>
                        <input type="checkbox" name="" id="kickbacksTag" className={st['filter__tagInput']} />
                        <label htmlFor="kickbacksTag" className={st['filter__tagName']} data-tag_value>Откаты</label>
                        <label htmlFor="kickbacksTag" className={st['filter__tagAmount']}>10</label>
                    </li> */}
                </ul>
            </div>
            <button className={st['filter__apply']} onClick={(e) => {
                console.log(category, minPrice, maxPrice, rating[0], rating[1], tags);
                dispatch(setFilters(
                    {
                filters: {
                    category,
                    maxPrice,
                    minPrice,
                    tags,
                    minRating: rating[0],
                    maxRating: rating[1],
                },
                pageable: {
                    size: 5,
                    page: 0
                }
                }));
                    const disableBtn = setTimeout(() => {
                        e.currentTarget.disabled = true;
                    }, 0);

                    clearTimeout(disableBtn);
                    e.currentTarget.disabled = false;
                }}>Применить фильтры</button>
        </section>
    );
};