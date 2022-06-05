import { createSlice } from '@reduxjs/toolkit';

export const decrementAlertSlice = createSlice({
    name:"decrementAlert",
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
export const {changeState,changeStatusWithInterval} = decrementAlertSlice.actions;
export default decrementAlertSlice.reducer;