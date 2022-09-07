import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSection/moviesSlice";
import MyFavoritesSlice from "./FavoritesSection/favoritesListSlice";
import registerSlice from "./Register/registerSlice";
import loginSlice from "./Login/loginSlice";


export const store = configureStore({
  reducer: {
    movie: moviesSlice,
    favorite: MyFavoritesSlice,
    register:registerSlice,
    login:loginSlice,
  },
});
