import React, {FC} from 'react';
import classes from "./Grid.module.scss";

type Any = {
    children: any
}

const GridFourColumns: FC<Any> = ({children}) => {
    return (
        <div className={classes.GridFourColumns}>
            {children}
        </div>
    );
};

export default GridFourColumns;