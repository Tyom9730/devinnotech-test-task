import React from "react";
import "./App.scss";
import AppRoutes from "./routes";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
