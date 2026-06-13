import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "../slice/counterSlice.js"


const store  = configureStore({
    reducer:{
        counter:CountReducer,
        
    }
})


export default store