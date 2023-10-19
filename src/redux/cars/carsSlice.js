import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsOperations';

const CarsInitial = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const CarsSlice = createSlice({
  name: 'cars',
  initialState: CarsInitial,
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected),
});

export const carsReducer = CarsSlice.reducer;
