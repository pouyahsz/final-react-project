import { createSlice } from '@reduxjs/toolkit';

export const decrementAlertSlice = createSlice({
    name:"decrementAlert",
    initialState:{
        status:false,
    },
    reducers:{
        changeDecrementState: (state)=>{
            state.status = true;
        },
        changeDecrementStatusWithInterval:(state)=>{
            state.status = false;
        }
    }

})
export const {changeDecrementState,changeDecrementStatusWithInterval} = decrementAlertSlice.actions;
export default decrementAlertSlice.reducer;