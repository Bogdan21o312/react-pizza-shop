import React from 'react';
import Categories from "../components/Categories/Categories";
import Layout from "../components/Layout/Layout";
import Pizza from "../components/Pizza/Pizza";
import {Categoryitems} from "../components/Categories/Categoryitem";

const Home = () => {
    return (
        <Layout>
            <Categories caregories={Categoryitems}/>
            <Pizza/>
        </Layout>
    );
};

export default Home;