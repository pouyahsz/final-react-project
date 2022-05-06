import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import filterSlice from './filterSlice';
import searchSlice from './searchSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
        filter: filterSlice,
        search: searchSlice,
    },
  })