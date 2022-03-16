/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

interface IUiSlice {
  searchInput: string;
}

const initialState: IUiSlice = {
  searchInput: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = uiSlice.actions;

export const selectUiState = (state: RootState) => state.ui;

export default uiSlice.reducer;
