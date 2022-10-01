import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMovies,
  getMoviesAsync,
  addMoviesAsync,
  removeMovieAsync,
} from "./moviesSlice";
import { addToMyFavoritesAsync } from "../FavoritesSection/favoritesListSlice";
import { selectToken, selectUserID } from "../Login/loginSlice";
// import { selectMyFavorites } from "../FavoritesSection/favoritesListSlice";
import { button, input } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MyMovies = () => {
  const dispatch = useDispatch(); //allow method calls from slicer
  const movie_list = useSelector(selectMovies); //get data from slicer
  const userToken = useSelector(selectToken); //get user token
  const user_id = useSelector(selectUserID)
  // const MyFavorites = useSelector(selectMyFavorites);

  const [MovieName, setMovieName] = useState("");
  const [ReleaseDate, setReleaseDate] = useState("");

  useEffect(() => {
    dispatch(getMoviesAsync(movie_list));
  }, [movie_list.length]);

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
              userToken: userToken,
            })
          )
        }
      >
        Add Movie
      </button>
      <hr />
      {movie_list.map((movie) => (
        <div key={movie.id}>{movie.movie_name}&nbsp;{movie.release_date}
                <button
                  onClick={() =>
                    dispatch(
                      addToMyFavoritesAsync({
                        movie_name: movie.movie_name,
                        release_date: movie.release_date,
                        userToken: userToken,
                        user_id: user_id,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
                &nbsp;
                <button
                  onClick={() =>
                    dispatch(
                      removeMovieAsync({
                        movieId: movie.id,
                        userToken: userToken,
                      })
                    )
                  }
                >
                  Remove
                </button>
          </div>
      ))}
      {/* <button onClick={() => console.log(MyFavorites)}>Show FAv</button> */}
    </div>
  );
};

export default MyMovies;

//2.9 navbar/bootstrap. Towards the end of the lesson he talks about saving the cart to the server.
