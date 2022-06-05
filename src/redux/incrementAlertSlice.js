import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name:"aletStatus",
    initialState:{
        status:false,
    },
    reducers:{
        changeState: (state)=>{
            state.status = true;
            
        },
        changeStatusWithInterval:(state)=>{
            state.status = false;
        }
    }

})
export const {changeState,changeStatusWithInterval} = alertSlice.actions;
export default alertSlice.reducer;