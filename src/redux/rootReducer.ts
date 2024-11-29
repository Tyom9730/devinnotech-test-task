import { combineReducers } from "@reduxjs/toolkit";
import wheatherSlice from "./features/wheatherSlice/wheatherSlice";
import searchSlice from "./features/wheatherSlice/SearchSlice";

const rootReducer = combineReducers({
  whether: wheatherSlice,
  search: searchSlice,
});

export default rootReducer;
