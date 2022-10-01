import React, {FC} from 'react';
import classes from "./Pizza.module.scss";
// import GridFourColumns from "../Grid/GridFourColumns";
import Pizzaitem from "./Pizzaitem";
import PizzaSkeleton from "./PizzaSkeleton";
import {Pizzaitems} from "./Pizzaitems";
import GridFourColumns from "../Grid/GridFourColumns";

type Any = {
    searchValue?: any,
    title?: any,
    id?: any,
    obj?: any
}

const Pizza: FC<Any> = ({searchValue}) => {
    const [pizzaItems, setPizzaItems] = React.useState([]);
    const [isPizzaLoading, setPizzaLoading] = React.useState(true);


    React.useEffect(() => {
        fetch('https://631df311cc652771a48e8df2.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setPizzaItems(arr);
                setPizzaLoading(false);
            });
    }, [])

    const PizzaSearchFilter = pizzaItems
        .filter((obj: any) => {
            // if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
            //     return true;
            // }
            return true;
        })
    .map((obj: any) => (<Pizzaitem key={obj.id}  {...obj}/>))

    const PizzaSkeletonLoading = [...new Array(12)].map((_, index) => <PizzaSkeleton key={index}/>)

    return (
        <section className={classes.pizza}>
            <div className="pizza__container">
                <GridFourColumns>
                    {isPizzaLoading
                        ? PizzaSkeletonLoading
                        : PizzaSearchFilter
                    }
                </GridFourColumns>
            </div>
        </section>
    );
};

export default Pizza;