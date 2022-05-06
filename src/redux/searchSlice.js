import { createSlice } from '@reduxjs/toolkit';



export const searchSlice = createSlice({
    name:"search",
    initialState:{
        search:''
    },
    reducers:{
        searchHandler:(state,action)=>{
            state.search = action.payload;
        },
    }
})
export const {searchHandler} = searchSlice.actions;
export default searchSlice.reducer;