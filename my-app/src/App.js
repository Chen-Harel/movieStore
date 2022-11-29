import React from "react";
import "./App.css";
import Header from "./app/Features/Header";
import Footer from "./app/Features/Footer";
import ResponsiveAppBar from "./app/Features/ResponsiveAppBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Header />
      <Outlet />
      <div id="before-footer"></div>
      <Footer />
    </div>
  );
}

export default App;
