import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://64b2da5538e74e386d55a6e2.mockapi.io/api/cars'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
