import React, {FC} from 'react';
import classes from "./Pizza.module.scss"
import ButtonAdd from "../Buttons/ButtonAdd";
import {typesName} from "./Pizzaitems";

type Any = {
    sizes: any,
    imageUrl: any,
    title: any,
    types: any,
    price: any,
}

const Pizzaitem: FC<Any> = ({sizes, imageUrl, title, price, types}) => {
    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);

    return (
        <>
            <div className={classes.pizzaBlock}>
                <div className={classes.pizzaBlock__image}><img
                    src={imageUrl} alt="Pizza"/>
                </div>
                <h4 className={classes.pizzaBlock__title}>{title}</h4>
                <div className={classes.pizzaBlock__selector}>
                    <div className={classes.selectorBlockPizza}>
                        <ul className={classes.selectorBlockPizza__list}>
                            {types.map((typeId: any) => (
                                <li
                                    key={title}
                                    onClick={() => setActiveType(typeId)}
                                    className={`${classes.selectorBlockPizza__item} 
                                    ${activeType === typeId ? classes.active : ''}`
                                    }>{typesName[typeId]}
                                </li>
                            ))}
                        </ul>
                        <ul className={classes.selectorBlockPizza__list}>
                            {sizes.map((size: any, i: any) => (
                                <li
                                    key={size}
                                    onClick={() => setActiveSize(i)}
                                    className={`${classes.selectorBlockPizza__item} ${activeSize === i ? classes.active : ''}`
                                    }>{size} см.
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={classes.pizzaBlock__bottom}>
                    <div className={classes.bottomBlockPizza}>
                        <div className={classes.bottomBlockPizza__prise}>от {price} $</div>
                        <ButtonAdd/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pizzaitem;