import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        basketItems:{total:0,products:[]},
      },
    reducers: {
        increment: (state,action) => {
            if(state.basketItems.products.length>0){
                for(let i = 0; i< state.basketItems.products.length;i++){
                    if(state.basketItems.products[i].product.id===action.payload.id){
                        state.basketItems.products[i].count++;
                        break;
                    }
                    else if(i===state.basketItems.products.length-1){
                        state.basketItems.products.push({product:action.payload,count:0});
                    }
                }
                state.basketItems.total++;
            }else{
                state.basketItems.products.push({product:action.payload,count:1});
                state.basketItems.total++;
            }
        },
        decrement: (state,action) => {
            if(action.payload.count===1){
                for(let i = 0;i<state.basketItems.products.length;i++){
                    if(action.payload.product.id===state.basketItems.products[i].product.id){
                        state.basketItems.products.splice(i,1);
                    }
                }
            }else{
                for(let i = 0;i<state.basketItems.products.length;i++){
                    if(action.payload.product.id===state.basketItems.products[i].product.id){
                        state.basketItems.products[i].count--;
                    }
                }
            }
            state.basketItems.total--;
            console.log(state.basketItems.products.length)
        },
    },
})


export const { increment ,decrement} = counterSlice.actions;
export default counterSlice.reducer;
