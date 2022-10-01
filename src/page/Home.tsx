import React, {FC, createContext} from 'react';
import Categories from "../components/Categories/Categories";
import Layout from "../components/Layout/Layout";
import Pizza from "../components/Pizza/Pizza";
import {Categoryitems} from "../components/Categories/Categoryitem";
import {Provider} from "react-redux";


type Any = {
    SearchContext: any,
    createContext: any,
    value: any,
}




const Home = () => {
    const [searchValue, setSearchValue] = React.useState('');


    return (
        <div>
            <Layout>
                <Categories caregories={Categoryitems}/>
                <Pizza searchValue={searchValue}/>
            </Layout>
          </div>
    );
};

export default Home;