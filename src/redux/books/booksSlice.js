import { createSlice } from '@reduxjs/toolkit';
import { addBook } from '../utils';

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.item_id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
  },
});

export const { removeBook } = booksSlice.actions;

export default booksSlice.reducer;
