import React, {FC, createContext} from 'react';
import Categories from "../components/Categories/Categories";
import Layout from "../components/Layout/Layout";
import Pizza from "../components/Pizza/Pizza";
import {Categoryitems} from "../components/Categories/Categoryitem";


type Any = {
    SearchContext: any,
    createContext: any,
}

// export const SearchContext = createContext();



const Home = () => {
    const [searchValue, setSearchValue] = React.useState('');


    return (
        // <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Layout>
                <Categories caregories={Categoryitems}/>
                <Pizza searchValue={searchValue}/>
            </Layout>
         // </SearchContext.Provider>
    );
};

export default Home;