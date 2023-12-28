// slices/appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    books: [],
    categories: { status: 'Under Construction' },
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    // You can add other book-related actions here

    // Category-related actions
    updateCategoryStatus: (state, action) => {
      state.categories.status = action.payload;
    },
    // You can add other category-related actions here
  },
});

export const {
  addBook,
  removeBook,
  updateCategoryStatus,
} = appSlice.actions;
export default appSlice.reducer;
