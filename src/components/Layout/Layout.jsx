import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../assets/style/Style.scss"

const Layout = ({children, ...props}) => {

    return (
        <div className="wrapper">
            <Header/>
            <main className="page">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;