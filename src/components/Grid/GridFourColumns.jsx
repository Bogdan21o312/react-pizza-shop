import React from 'react';
import classes from "./Grid.module.scss";

const GridFourColumns = ({children}) => {
    return (
        <div className={classes.GridFourColumns}>
            {children}
        </div>
    );
};

export default GridFourColumns;