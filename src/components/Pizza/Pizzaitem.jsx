import React from 'react';
import classes from "./Pizza.module.scss"
import ButtonAdd from "../buttons/ButtonAdd";


const Pizzaitem = ({sizes, imageUrl, title, price}) => {
    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);

    const onClickType = (type) => {
        setActiveType(type);
    }

    const onClickSize = (size) => {
        setActiveSize(size);
    }

    return (
        <>
            <div className={classes.pizzaBlock}>
                <div className={classes.pizzaBlock__image}><img
                    src={imageUrl} alt="Pizza"/>
                </div>
                <h4 className={classes.pizzaBlock__title}>{title}</h4>
                <div className={classes.pizzaBlock__selector}>
                    <div className={classes.selectorBlockPizza}>
                        {/*<ul className={classes.selectorBlockPizza__list}>*/}
                        {/*    {item.types.map((typeId) => (*/}
                        {/*        <li*/}
                        {/*            key={typeId}*/}
                        {/*            onClick={() => onClickType(typeId)}*/}
                        {/*            className={`${classes.selectorBlockPizza__item} */}
                        {/*                ${activeType === typeId ? classes.active : ''}`*/}
                        {/*            }>{typesName[typeId]}*/}
                        {/*        </li>*/}
                        {/*    ))}*/}
                        {/*</ul>*/}
                        <ul className={classes.selectorBlockPizza__list}>
                            {sizes.map((size, i) => (
                                <li onClick={() => onClickSize(i)} className={
                                    `${classes.selectorBlockPizza__item} 
                                            ${activeSize === i ?
                                        classes.active : ''}`
                                }>{size} см.</li>
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