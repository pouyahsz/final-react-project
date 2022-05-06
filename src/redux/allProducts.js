import { createSlice } from '@reduxjs/toolkit';



export const allProducts = createSlice({
    name:"allProducts",
    initialState:{
        filters:[]
    },
    reducers:{
        addFilters:(state,action)=>{
            state.filters.push(action.payload);
        },
        removeFilters:(state,action)=>{
            for(let i = 0;i<state.filters.length;i++){
                if(state.filters[i]===action.payload){
                    state.filters.splice(i,1);
                }
            }
        },
    }
})
export const {addFilters,removeFilters} = allProducts.actions;
export default allProducts.reducer;