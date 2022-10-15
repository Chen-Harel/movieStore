import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMovies from "./app/moviesSection/MyMovies";
import FavoritesList from "./app/FavoritesSection/FavoritesList";
import Register from "./app/Register/Register";
import Login from "./app/Login/Login";
import MovieDetails from "./app/moviesSection/MovieDetails";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/movies" element={<MyMovies />} />
            <Route path="/movie_details" element={<MovieDetails />} >
              <Route path=":movieid" element={<MovieDetails />} />
            </Route>
            <Route path="/favorites" element={<FavoritesList />}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
