import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {addMyFavorites,getMyFavorites,removeFromMyFavorites} from './favoritesListApi'
const initialState = {
  MyFavoritesList: [],
  stars: 0,
  status: "idle",
};

export const getMyFavoritesAsync = createAsyncThunk(
  "MyFavorites/getMyFavorites",
  async (token) => {
    const response = await getMyFavorites(token);
    return response.data;
  }
);

export const addToMyFavoritesAsync = createAsyncThunk(
  "MyFavorites/addMyFavorites",
  async (newFavorite) => {
    const response = await addMyFavorites(newFavorite);
    return response.data;
  }
);

export const removeFavoriteAsync = createAsyncThunk(
  "MyFavorites/removeFavorites",
  async (id) => {
    const response = await removeFromMyFavorites(id)
    return id;
  }
);

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
        state.MyFavoritesList.push(action.payload);
        state.status = "idle";
      })
      .addCase(removeFavoriteAsync.fulfilled, (state, action) => {
        console.log("deleted favorite")
        state.MyFavoritesList = state.MyFavoritesList.filter(fav => fav.id !== action.payload)
        state.status="idle";
      })
  },
});

export const { addFavorite, removeFavorite, updateFavorite } = MyFavoritesSlice.actions;
export const selectMyFavorites = (state) => state.favorite.MyFavoritesList;
export default MyFavoritesSlice.reducer;
