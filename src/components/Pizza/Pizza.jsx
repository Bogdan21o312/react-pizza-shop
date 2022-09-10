import React from 'react';
import classes from "./Pizza.module.scss";
import GridFourColumns from "../Grid/GridFourColumns";
import Pizzaitem from "./Pizzaitem";
import {Pizzaitems} from "./Pizzaitems";

const Pizza = () => {
    return (
        <section className={classes.pizza}>
            <div className="pizza__container">
                <div className={classes.pizza__title}>All Pizza</div>
                <GridFourColumns>
                    {Pizzaitems.map((obj) => (
                        <Pizzaitem sizes={obj.sizes} price={obj.price}/>
                    ))}
                </GridFourColumns>
            </div>
        </section>
    );
};

export default Pizza;