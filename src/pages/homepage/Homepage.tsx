import React from "react";
import "./Homepage.scss";
import { useSelector } from "react-redux";
import { selectWheater } from "../../redux/features/wheatherSlice/wheatherSlice";
import CurrentWheatherSection from "../../components/currentWheatherSection/CurrentWheatherSection";
import FiveDaysWheatherList from "../../components/fiveDaysWheatherList/FiveDaysWheatherList";
const Homepage = () => {
  return (
    <div>
      <CurrentWheatherSection />
      <FiveDaysWheatherList />
    </div>
  );
};

export default Homepage;
