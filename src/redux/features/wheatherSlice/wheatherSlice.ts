import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initialSearchState = {
  text: "Yerevan",
};

const initialState = {
  currentWheather: null,
  isLoading: false,
  hasError: false,
  searchText: "Yerevan",
  tempType: "metric",
  fiveDaysWheatherList: null,
};

const apiKey = "94bd35bbe8b4ad16febb0f7d73ec19c5";

export const getCurrentWheather = createAsyncThunk(
  "wheatherList/getCurrentWheather",
  async (_, thunkAPI) => {
    // @ts-ignore
    const searchedText = thunkAPI.getState().whether.searchText;
    // @ts-ignore
    const tempTypeText = thunkAPI.getState().whether.tempType;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedText}&appid=${apiKey}&units=${tempTypeText}`;
    try {
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getFiveDaysWheather = createAsyncThunk(
  "wheatherList/getFiveDaysWheather",
  async (_, thunkAPI) => {
    // @ts-ignore
    const searchedText = thunkAPI.getState().whether.searchText;
    // @ts-ignore
    const tempTypeText = thunkAPI.getState().whether.tempType;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedText}&appid=${apiKey}&units=${tempTypeText}`;
    try {
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const wheatherSlice = createSlice({
  name: "wheatherList",
  initialState: initialState,
  reducers: {
    searchCity: (state, action) => {
      state.searchText = action.payload;
    },
    setTempType: (state, action) => {
      state.tempType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWheather.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getCurrentWheather.fulfilled, (state, action) => {
        state.currentWheather = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getCurrentWheather.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = false;
      })
      .addCase(getFiveDaysWheather.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getFiveDaysWheather.fulfilled, (state, action) => {
        state.fiveDaysWheatherList = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getFiveDaysWheather.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export const selectWheater = (state: any) => state.whether.currentWeather;
export const selectLoadingState = (state: any) => state.whether.isLoading;
export const selectErrorState = (state: any) => state.whether.hasError;
export const { searchCity, setTempType } = wheatherSlice.actions;
export default wheatherSlice.reducer;
