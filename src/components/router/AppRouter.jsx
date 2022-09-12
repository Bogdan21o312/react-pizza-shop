import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../page/Home";
import Error from "../../page/Error";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </>
    );
};

export default AppRouter;