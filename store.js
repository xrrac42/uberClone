import { configureStore } from "@reduxjs/toolkit";
import navReduce from "./slices/navSlice"

export const store = configureStore({
    reducer:{
        nav: navReduce
    }
})