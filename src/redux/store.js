import { configureStore } from '@reduxjs/toolkit'
import filter from "./slices/filtrerSlice";

export const store = configureStore({
    reducer: {
        filter,
    },
})

