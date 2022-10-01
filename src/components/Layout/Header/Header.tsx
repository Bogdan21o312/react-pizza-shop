import React from 'react';
import classes from "./Header.module.scss";
import ButtonCart from "../../Buttons/ButtonCart";
import logo from "../../../assets/img/pizza-logo.svg"
import Search from "../../Search";

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <a href="/" className={classes.header__logo}>
                    <img width="38" src={logo} alt={"Pizza logo"}/>
                    <div className={classes.header__blockText}>
                        <h1 className={classes.header__title}>React Pizza</h1>
                        <p className={classes.header__subTitle}>the most delicious pizza in the universe</p>
                    </div>
                </a>
                {/*<Search />*/}
                <div className={classes.header__cart}>
                    <ButtonCart/>
                </div>
            </div>
        </header>
    );
};

export default Header;