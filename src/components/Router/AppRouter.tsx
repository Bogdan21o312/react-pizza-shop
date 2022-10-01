import React from 'react';
import Home from "../../page/Home";
import Error from "../../page/Error";
import {Navigate, Route, Routes} from "react-router-dom";

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