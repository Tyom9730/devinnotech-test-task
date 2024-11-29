import React, { useEffect } from "react";
import "./Header.scss";
import { currentWether } from "../../api/api";
import Search from "../search/Search";
import RadioGroup from "../radio-group/RadioGroup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  // searchCity
  // dispatch(getCurrentWheather());
  useEffect(() => {
    // const data = currentWether;
  }, []);
  return (
    <div className="header">
      <div className="container">
        <div />
        <div className="header-search-bar">
          <Search />
        </div>
        <div className="header-type-indicators">
          <RadioGroup />
        </div>
      </div>
    </div>
  );
};

export default Header;
