import React, { useEffect, useReducer } from "react";
import "./CurrentWheatherSection.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentWheather,
  selectLoadingState,
  selectWheater,
} from "../../redux/features/wheatherSlice/wheatherSlice";
import { AppDispatch } from "../../redux/store";
const CurrentWheatherSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentWeatherData = useSelector(
    (state: any) => state.whether.currentWheather
  );

  const newText = useSelector((state: any) => state.whether.tempType);

  useEffect(() => {
    dispatch(getCurrentWheather());
    console.log("state", currentWeatherData);
  }, [dispatch]);
  return (
    <div className="current-weather">
      <div className="container-sm">
        <div className="current-weather-area">
          <h3 className="current-weather-area-city">
            {currentWeatherData?.name}
          </h3>
          <h3 className="current-weather-area-temperature">
            {Math.floor(currentWeatherData?.main?.temp)}{" "}
            {newText === "metric" ? "°C" : "°F"}
          </h3>
          <div className="current-weather-area-icon">
            <img
              src={` https://openweathermap.org/img/wn/${currentWeatherData?.weather[0]?.icon}.png`}
              alt="icon"
            />
          </div>
          <p className="current-weather-area-type">
            {currentWeatherData?.weather[0]?.main}
          </p>
        </div>
        <div className="current-weather-dates"></div>
      </div>
    </div>
  );
};

export default CurrentWheatherSection;
