import React from 'react';
import Categories from "../components/Categories/Categories";
import Layout from "../components/Layout/Layout";
import Pizzaitem from "../components/Pizza/Pizzaitem";
import GridFourColumns from "../components/Grid/GridFourColumns";
import Pizza from "../components/Pizza/Pizza";

const Home = () => {
    return (
        <Layout>
            <Categories/>
            <Pizza/>
        </Layout>
    );
};

export default Home;