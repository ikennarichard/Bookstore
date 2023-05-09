import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
});

export const { add_book, remove_book } = booksSlice.actions;

export default booksSlice.reducer;
