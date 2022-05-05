import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        basketItems:[],
      },
    reducers: {
        increment: (state,action) => {
            state.basketItems.push(action.payload);
        },
    },
})


export const { increment ,decrement} = counterSlice.actions;
export default counterSlice.reducer;
