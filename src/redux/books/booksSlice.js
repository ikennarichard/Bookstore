import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: [],
};

let appID;

export const createNewApp = createAsyncThunk('create new app',
  async () => {
    try {
      const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');
      return response.data;
    } catch (e) {
      throw new Error(e);
    }
  });

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.item_id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createNewApp.fulfilled, (state, action) => {
      appID = localStorage.getItem('app_id') ? localStorage.getItem('app_id') : localStorage.setItem('app_id', action.payload);
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
