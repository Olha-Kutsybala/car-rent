import { createSlice } from '@reduxjs/toolkit';

const favoritesInitial = {
  cars: [],
};

const favoritesSlice = createSlice({
  name: 'favoritesCar',
  initialState: favoritesInitial,

  reducers: {
    incrementToFavoriteList(state, action) {
      state.cars.push(action.payload);
    },
    decrementToFavoriteList(state, action) {
      state.cars = state.cars.filter(car => car !== action.payload);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { incrementToFavoriteList, decrementToFavoriteList } =
  favoritesSlice.actions;
