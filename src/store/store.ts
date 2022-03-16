import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { hotelsApi } from 'services/api/hotels';
import uiReducer from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [hotelsApi.reducerPath]: hotelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
