import React, {FC} from 'react';
import classes from "./Categories.module.scss";
import Sort from "../Sort/Sort";
import {Categoryitems} from "./Categoryitem";

type Categories = {
    caregories: any,
}



const Categories: FC<Categories> = ({caregories}) => {
    const [activeCategory, setActiveCategory] = React.useState(0)
    const categoryItem = Categoryitems[activeCategory];

    return (
        <section className={classes.categories}>
            <div className="categories__container">
                <div className={classes.categories__content}>
                    <ul className={classes.categories__list}>
                        {caregories.map((value: string, index: any) => (
                            <li
                                key={value}
                                onClick={() => setActiveCategory(index)}
                                className={
                                    `${classes.categories__item} 
                                 ${activeCategory === index ?
                                        classes.active : ''}`
                                }>{value}
                            </li>
                        ))}
                    </ul>
                    <Sort/>
                </div>
                <div className={classes.categories__title}>{categoryItem} Pizza</div>
            </div>
        </section>
    );
};

export default Categories;