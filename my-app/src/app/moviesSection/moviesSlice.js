import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addMoviesDB, getMoviesDB, removeMovieDB } from "./moviesAPI";


const initialState = {
  moviesList: [],
  stars: 0,
  status: "idle",
};

export const getMoviesAsync = createAsyncThunk(
  "movies/getMoviesDB",
  async () => {
    const response = await getMoviesDB();
    return response.data;
  }
);

export const addMoviesAsync = createAsyncThunk(
  "movies/addMoviesDB",
  async (newMovie) => {
    // console.log(newMovie)
    const response = await addMoviesDB(newMovie);
    return response.data;
  }
);

export const removeMovieAsync = createAsyncThunk(
  "movies/removeMovieDB",
  async(id) => {
    // console.log(id)
    const response = removeMovieDB(id);
    return id
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovieLocal: (state, action) => {
    //   state.moviesList.push(action.payload);
    // },
    // removeMovie: (state) => {
    //   state.moviesList.pop("movie_movie");
    // },
    // updateMovie: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.moviesList = action.payload
        // state.status = "loading";
      })
      .addCase(addMoviesAsync.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.moviesList.push(action.payload);
        state.status = "idle";
      })
      .addCase(removeMovieAsync.fulfilled, (state, action) => {
        console.log("deleted movie");
        state.moviesList = state.moviesList.filter(movie=>movie.id !== action.payload)
        state.status = "idle";
      })
  },
});

export const { addMovie, removeMovie, updateMovie } = moviesSlice.actions;
export const selectMovies = (state) => state.movie.moviesList;
export default moviesSlice.reducer;
