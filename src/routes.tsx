import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* 
    <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
