import React, { useEffect } from "react";
import "./FiveDaysWheatherList.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getFiveDaysWheather } from "../../redux/features/wheatherSlice/wheatherSlice";
const FiveDaysWheatherList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const fiveDaysWheatherListData = useSelector(
    (state: any) => state.whether.fiveDaysWheatherList
  );

  useEffect(() => {
    dispatch(getFiveDaysWheather());
    console.log("fiveDaysWheatherListData", fiveDaysWheatherListData);
  }, [dispatch]);
  return (
    <div>
      <h3>fadf </h3>
    </div>
  );
};

export default FiveDaysWheatherList;
