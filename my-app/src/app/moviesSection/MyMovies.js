import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMovies,
  getMoviesAsync,
  addMoviesAsync,
  removeMovieAsync,
} from "./moviesSlice";
import { addToMyFavoritesAsync } from "../FavoritesSection/favoritesListSlice";
import { selectToken } from "../Login/loginSlice";

const MyMovies = () => {
  useEffect(() => {
    dispatch(getMoviesAsync());
  }, []);

  const dispatch = useDispatch(); //allow method calls from slicer
  const movie_list = useSelector(selectMovies); //get data from slicer
  const userToken = useSelector(selectToken); //get user token

  const [MovieName, setMovieName] = useState("");
  const [ReleaseDate, setReleaseDate] = useState("");

  return (
    <div>
      <br />
      <input
        value={MovieName}
        placeholder="Movie name"
        onChange={(event) => setMovieName(event.target.value)}
      />
      &nbsp;
      <input
        value={ReleaseDate}
        placeholder="Release Date"
        onChange={(event) => setReleaseDate(event.target.value)}
      />
      &nbsp;
      <button
        onClick={() =>
          dispatch(
            addMoviesAsync({
              movie_name: MovieName,
              release_date: ReleaseDate,
              userToken:userToken
            })
          )
        }
      >
        Add Movie
      </button>
      <hr />
      {movie_list.map((movie) => (
        <div key={movie.id}>
          {movie.movie_name}&nbsp;{movie.release_date}&nbsp;
          <button
            onClick={() =>
              dispatch(
                addToMyFavoritesAsync({
                  movie_name: movie.movie_name,
                  release_date: movie.release_date,
                  userToken:userToken
                })
              )
            }
          >
            🤍
          </button>
          &nbsp;
          <button onClick={() => dispatch(removeMovieAsync({movieId:movie.id, userToken:userToken}))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyMovies;
