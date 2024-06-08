import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const restaurantsFetch = createAsyncThunk('restaurants/restaurantsFetch',async()=>{
    const result = await axios.get("http://localhost:3000/restaurants")
    localStorage.setItem("restaurants",JSON.stringify(result.data))
    return result.data
})

const restaurantSlice = createSlice({
    name:'restaurants',
    initialState:{
        allRestaurants:[],
        allRestaurantsDummy:[],
        loading:false,
        error:"",
    },
    reducers:{
        searchRestaurantNeighborhood:(state,action)=>{
            state.allRestaurants = state.allRestaurantsDummy.filter(restaurant=>restaurant.neighborhood.toLowerCase().includes(action.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(restaurantsFetch.fulfilled,(state,action)=>{
            state.allRestaurants=action.payload
            state.allRestaurantsDummy=action.payload
            state.loading=false
            state.error=""
        })
        builder.addCase(restaurantsFetch.pending,(state,action)=>{
            state.allRestaurants=[]
            state.allRestaurantsDummy=[]
            state.loading=true
            state.error=""
        })
        builder.addCase(restaurantsFetch.rejected,(state,action)=>{
            state.allRestaurants=[]
            state.allRestaurantsDummy=[]
            state.loading=false
            state.error="API Call failed.. Please try after some times!!!"
        })
    }
})

export const {searchRestaurantNeighborhood} = restaurantSlice.actions
export default restaurantSlice.reducer