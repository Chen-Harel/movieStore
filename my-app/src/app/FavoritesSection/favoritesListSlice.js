import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addMyFavorites,
  getMyFavorites,
  removeFromMyFavorites,
  buyMyFavorites,
} from "./favoritesListApi";

const initialState = {
  MyFavoritesList: [],
};

export const getMyFavoritesAsync = createAsyncThunk(
  "MyFavorites/getMyFavorites",
  async (payload) => {
    // console.log(payload);
    const response = await getMyFavorites(payload);
    return response.data;
  }
);

export const addToMyFavoritesAsync = createAsyncThunk(
  "MyFavorites/addMyFavorites",
  async (newFavorite) => {
    // console.log(newFavorite);
    const response = await addMyFavorites(newFavorite);
    return response.data;
  }
);

export const removeFavoriteAsync = createAsyncThunk(
  "MyFavorites/removeFavorites",
  async (favoriteToRemove) => {
    // console.log(payload)
    const response = await removeFromMyFavorites(favoriteToRemove);
    return response.data;
  }
);

export const buyFavoritesAsync = createAsyncThunk(
  "MyFavorites/buyFavorites",
  async(payload) => {
    // console.log(payload)
    const response = await buyMyFavorites(payload);
    return response;
  }
)

export const MyFavoritesSlice = createSlice({
  name: "MyFavorites",
  initialState,
  reducers: {
    // addFavoriteLocal: (state, action) => {
    // state.MyFavoritesList.push(action.payload);
    // },
    // removeFavorite: (state) => {
    //   state.MyFavoritesList.pop("Favorite_Favorite");
    // },
    // updateFavorite: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyFavoritesAsync.fulfilled, (state, action) => {
        state.MyFavoritesList = action.payload;
        // state.status = "loading";
      })
      .addCase(addToMyFavoritesAsync.fulfilled, (state, action) => {
        // console.log(action.meta.arg)
        state.MyFavoritesList.push(action.meta.arg);
      })
      .addCase(removeFavoriteAsync.fulfilled, (state, action) => {
        console.log("deleted favorite");
        state.MyFavoritesList = state.MyFavoritesList.filter(
          (fav) => fav.id !== action.payload
        );
      })
      .addCase(buyFavoritesAsync.fulfilled, (state) => {
        console.log("You have successfully purchased your movies!");
        state.MyFavoritesList = []
      });
  },
});

export const { addFavorite, removeFavorite, updateFavorite } =
  MyFavoritesSlice.actions;
export const selectMyFavorites = (state) => state.favorite.MyFavoritesList;
export default MyFavoritesSlice.reducer;
