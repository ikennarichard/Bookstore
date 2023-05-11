import { createSlice } from '@reduxjs/toolkit';
import { addBook, deleteBook } from '../utils';

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });

    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.value = state.value.filter((book) => book.item_id !== action.payload);
    });
  },
});

export default booksSlice.reducer;
