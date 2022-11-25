import React from "react";
import "./App.css";
import Header from "./app/Features/Header";
import Footer from "./app/Features/Footer";
import ResponsiveAppBar from "./app/Features/ResponsiveAppBar";
import CustomizedSnackbars from "./app/Features/SnackBar";

function App() {
  return (
    <div className="App">
        <ResponsiveAppBar />
        <Header />
        <CustomizedSnackbars />
        <Footer />
    </div>
  );
}

export default App;
