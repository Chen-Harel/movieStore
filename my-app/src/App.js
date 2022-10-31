import React from "react";
import "./App.css";
import Header from "./app/Features/Header";
import Navbar from "./app/Features/Navbar";
import Footer from "./app/Features/Footer";
import ResponsiveAppBar from "./app/Features/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <ResponsiveAppBar />
        <Header />
        <Footer />
    </div>
  );
}

export default App;
