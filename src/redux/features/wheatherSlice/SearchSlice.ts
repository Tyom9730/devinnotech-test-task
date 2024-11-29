import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchText: "Yerevan",
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchCity: (state, action) => {
      state.searchText = action.payload;
      //   return {
      //     ...state,
      //     searchText: action.payload,
      //   };
    },
  },
});

export const { searchCity } = searchSlice.actions;

export default searchSlice.reducer;
