import React from "react";
import "./Search.scss";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentWheather,
  searchCity,
} from "../../redux/features/wheatherSlice/wheatherSlice";
const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchText, setSearchText] = React.useState<string>("");

  const changeCity = () => {
    dispatch(searchCity(searchText));
    dispatch(getCurrentWheather());
  };
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="search-button" onClick={() => changeCity()}>
        Search City
      </button>
    </div>
  );
};

export default Search;
