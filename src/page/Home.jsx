import React from 'react';
import Categories from "../components/Categories/Categories";
import Layout from "../components/Layout/Layout";
import Pizza from "../components/Pizza/Pizza";
import {Categoryitems} from "../components/Categories/Categoryitem";

export const SearchContext = React.createContext();

const Home = () => {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Layout>
                <Categories caregories={Categoryitems}/>
                <Pizza searchValue={searchValue}/>
            </Layout>
        </SearchContext.Provider>
    );
};

export default Home;