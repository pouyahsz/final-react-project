import { createSlice } from '@reduxjs/toolkit';



export const filterSlice = createSlice({
    name:"filter",
    initialState:{
        filter:''
    },
    reducers:{
        addFilters:(state,action)=>{
            
            state.filter = `category/${action.payload}`;
            console.log(state.filter)
        },
        removeFilters:(state,action)=>{
            state.filter = '';
            console.log("bye")
        },
    }
})
export const {addFilters,removeFilters} = filterSlice.actions;
export default filterSlice.reducer;