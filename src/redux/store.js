/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoryReducer,
  },
});
