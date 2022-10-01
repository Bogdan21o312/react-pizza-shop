import React, {FC} from 'react';
import Header from "./Header/Header";

import "../../assets/style/Style.scss"
import Footer from "./Footer/Footer";

type Props = {
    children: any,
}

const Layout: FC<Props> = ({children}) => {

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