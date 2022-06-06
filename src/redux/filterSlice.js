import { createSlice } from '@reduxjs/toolkit';



export const filterSlice = createSlice({
    name:"filter",
    initialState:{
        filter:''
    },
    reducers:{
        addFilters:(state,action)=>{
            
            state.filter = `category/${action.payload}`;
        },
        removeFilters:(state,action)=>{
            state.filter = '';
        },
    }
})
export const {addFilters,removeFilters} = filterSlice.actions;
export default filterSlice.reducer;