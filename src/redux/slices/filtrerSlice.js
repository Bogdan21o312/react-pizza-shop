import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    caregoryID: 0,
    sort: {
     name: 'populariti',
        sortPropertu: 'rating',
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryID(state, action) {
            console.log(action);
            state.caregoryID = action.payload;
        }
    }
});

export const { setCategoryID } = filterSlice.actions;

export default filterSlice.reducer;