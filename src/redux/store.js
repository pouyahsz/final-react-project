import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import filterSlice from './filterSlice';
import searchSlice from './searchSlice';
import alertSlice from './incrementAlertSlice';
import decrementAlertSlice from './decrementAlertSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
        filter: filterSlice,
        search: searchSlice,
        alertStatus:alertSlice,
        alertDecrement:decrementAlertSlice
    },
  })