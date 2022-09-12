import React from 'react';
import classes from "./Header.module.scss";
import ButtonCart from "../buttons/ButtonCart";
import logo from "../../assets/img/pizza-logo.svg"
import {Link} from "react-router-dom";
import Search from "../Search";

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <Link to="/" className={classes.header__logo}>
                    <img width="38" src={logo} alt={"Pizza logo"}/>
                    <div className={classes.header__blockText}>
                        <h1 className={classes.header__title}>React Pizza</h1>
                        <p className={classes.header__subTitle}>the most delicious pizza in the universe</p>
                    </div>
                </Link>
                <Search/>
                <div className={classes.header__cart}>
                    <ButtonCart/>
                </div>
            </div>
        </header>
    );
};

export default Header;