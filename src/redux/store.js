import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import { favoritesReducer } from './favorites/favoritesSlice';

const persistConfig = {
  key: 'favoritesCars',
  storage,
  whitelist: ['cars'],
};

const rootReducer = combineReducers({
  cars: carsReducer,
  favorites: persistReducer(persistConfig, favoritesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
