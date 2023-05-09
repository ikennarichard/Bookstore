import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.filter((book) => book !== action.payload);
    },
  },
});

export const { addBook, remove_book } = booksSlice.actions;

export default booksSlice.reducer;
