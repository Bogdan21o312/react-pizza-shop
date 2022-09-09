import React from 'react';
import classes from "./Pizza.module.scss"
import ButtonAdd from "../buttons/ButtonAdd";

const Pizzaitem = () => {
    return (
        <div className={classes.pizzaBlock}>
            <div className={classes.pizzaBlock__image}><img
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"/>
            </div>
            <h4 className={classes.pizzaBlock__title}>Чизбургер-пицца</h4>
            <div className={classes.pizzaBlock__selector}>
                <div className={classes.selectorBlockPizza}>
                    <ul className={classes.selectorBlockPizza__list}>
                        <li className={classes.selectorBlockPizza__item}>тонкое</li>
                        <li className={classes.selectorBlockPizza__item}>традиционное</li>
                    </ul>
                    <ul className={classes.selectorBlockPizza__list}>
                        <li className={classes.selectorBlockPizza__item}>26 см.</li>
                        <li className={classes.selectorBlockPizza__item}>30 см.</li>
                        <li className={classes.selectorBlockPizza__item}>40 см.</li>
                    </ul>
                </div>
            </div>
            <div className={classes.pizzaBlock__bottom}>
                <div className={classes.bottomBlockPizza}>
                    <div className={classes.bottomBlockPizza__prise}>от 395 $</div>
                    <ButtonAdd/>
                </div>
            </div>
        </div>
    );
};

export default Pizzaitem;