// store.js
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Reducer';
import categoriesReducer from './Reducer';

const store = configureStore({
  reducer:{
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
