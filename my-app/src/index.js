import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMovies from "./app/moviesSection/MyMovies";
import FavoritesList from "./app/FavoritesSection/FavoritesList";
import About from "./app/Features/About";
import AdminMovieSection from "./app/adminTools/AdminMovieSection";
import ThankYouScreen from "./app/adminTools/ThankYouScreen";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/movies" element={<MyMovies />} />
            <Route path="/adminMovieSection" element={<AdminMovieSection />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/favorites" element={<FavoritesList />}/>
            <Route path="/purchaseSuccessful" element={<ThankYouScreen />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
