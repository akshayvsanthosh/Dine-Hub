import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";

const restaurantStore = configureStore({
    reducer:{
        restaurantReducer:restaurantSlice
    }
})

export default restaurantStore