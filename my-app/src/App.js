import React from "react";
import "./App.css";
import Header from "./app/Features/Header";
import Navbar from "./app/Features/Navbar";
import Footer from "./app/Features/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Footer />
    </div>
  );
}

export default App;
