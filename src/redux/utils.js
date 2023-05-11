import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appID = 'BhEHYP4Dpj08dXzy8Nm6';

export const addBook = createAsyncThunk(
  'books/addBook', async (book, { rejectWithValue }) => {
    try {
      await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`, book);
    } catch (e) {
      rejectWithValue(e);
    }
    return book;
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook', async (bookID, { rejectWithValue }) => {
    try {
      await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books/${bookID}`);
    } catch (e) {
      rejectWithValue(e);
    }
    return bookID;
  },
);
