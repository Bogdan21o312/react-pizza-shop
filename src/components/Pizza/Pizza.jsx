import React from 'react';
import classes from "./Pizza.module.scss";
import GridFourColumns from "../Grid/GridFourColumns";
import Pizzaitem from "./Pizzaitem";

const Pizza = () => {
    return (
        <section className="pizza">
            <div className="pizza__container">
                <GridFourColumns>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                    <Pizzaitem/>
                </GridFourColumns>
            </div>
        </section>
    );
};

export default Pizza;