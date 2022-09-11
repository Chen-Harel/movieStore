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
import { Button, TextField } from "@mui/material/";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

const MyMovies = () => {
  const dispatch = useDispatch(); //allow method calls from slicer
  const movie_list = useSelector(selectMovies); //get data from slicer
  const userToken = useSelector(selectToken); //get user token

  const [MovieName, setMovieName] = useState("");
  const [ReleaseDate, setReleaseDate] = useState("");

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, []);

  return (
    <div>
      <br />
      <TextField
        size="small"
        value={MovieName}
        placeholder="Movie name"
        onChange={(event) => setMovieName(event.target.value)}
      />
      &nbsp;
      <TextField
        size="small"
        value={ReleaseDate}
        placeholder="Release Date"
        onChange={(event) => setReleaseDate(event.target.value)}
      />
      &nbsp;
      <Button
        variant="contained"
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
      </Button>
      <hr />
      {movie_list.map((movie) => (
        <div key={movie.id}>
          {movie.movie_name}&nbsp;{movie.release_date}&nbsp;
          <Button
            onClick={() =>
              dispatch(
                addToMyFavoritesAsync({
                  movie_name: movie.movie_name,
                  release_date: movie.release_date,
                  userToken: userToken,
                })
              )
            }
          >
            <AddShoppingCart />
          </Button>
          &nbsp;
          <Button
            variant="contained"
            onClick={() =>
              dispatch(
                removeMovieAsync({ movieId: movie.id, userToken: userToken })
              )
            }
          >
            <DeleteIcon />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MyMovies;


