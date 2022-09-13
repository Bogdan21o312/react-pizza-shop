import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../../page/Home";
import Error from "../../page/Error";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/error" replace/>}
                />
            </Routes>
        </>
    );
};

export default AppRouter;