import React from "react";
import "./RadioGroup.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  getCurrentWheather,
  setTempType,
} from "../../redux/features/wheatherSlice/wheatherSlice";

const RadioGroup = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onSelectChange = (e: any) => {
    dispatch(setTempType(e.target.value));
    dispatch(getCurrentWheather());
  };
  return (
    <div className="radio-group">
      <div className="radio-group-item">
        <input
          type="radio"
          name="radio"
          id="radio1"
          value={"metric"}
          defaultChecked
          onChange={(e) => onSelectChange(e)}
        />
        <label htmlFor="radio1">&deg;C</label>
      </div>
      <div className="radio-group-item">
        <input
          type="radio"
          name="radio"
          id="radio2"
          value={"imperial"}
          onChange={(e) => onSelectChange(e)}
        />
        <label htmlFor="radio2">&deg;F</label>
      </div>
    </div>
  );
};

export default RadioGroup;
