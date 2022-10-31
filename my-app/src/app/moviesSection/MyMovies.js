import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  selectMovies,
  getMoviesAsync,
  addMoviesAsync,
  removeMovieAsync,
} from "./moviesSlice";
import { addToMyFavoritesAsync } from "../FavoritesSection/favoritesListSlice";
import { selectToken, selectUserID, selectStaff } from "../Login/loginSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { grey } from "@mui/material/colors";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
// import { selectMyFavorites } from "../FavoritesSection/favoritesListSlice";
// import { button, input } from "@mui/material/";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// function QueryNavLink({ to, ...props}){
//   let location = useLocation();
//   return <NavLink to={to + location.search} {...props} />;
// }

const MyMovies = () => {
  const dispatch = useDispatch(); //allow method calls from slicer
  const movie_list = useSelector(selectMovies); //get data from slicer
  const userToken = useSelector(selectToken); //get user token
  const user_id = useSelector(selectUserID);
  const isStaff = useSelector(selectStaff);
  // const MyFavorites = useSelector(selectMyFavorites);

  const [MovieName, setMovieName] = useState("");
  const [ReleaseDate, setReleaseDate] = useState("");
  const [MovieDetails, setMovieDetails] = useState("");

  useEffect(() => {
    dispatch(getMoviesAsync(movie_list));
  }, [movie_list.length]);

  

  return (
    <div>
      <br />
      {isStaff && <span><input
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
              movie_details: MovieDetails,
              userToken: userToken,
            })
          )
        }
      >
        Add Movie
      </button>
      <p>
        <textarea
          value={MovieDetails}
          placeholder="Movie details"
          onChange={(event) => setMovieDetails(event.target.value)}
        />
      </p></span>}
      {/* <input
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
              movie_details: MovieDetails,
              userToken: userToken,
            })
          )
        }
      >
        Add Movie
      </button>
      <p>
        <textarea
          value={MovieDetails}
          placeholder="Movie details"
          onChange={(event) => setMovieDetails(event.target.value)}
        />
      </p> */}
      <hr />
      {movie_list.map((movie) => (
        <div key={movie.id}>
          {movie.movie_name}&nbsp;{movie.release_date}
          &nbsp;
          {/* <button
            className="border-radius"
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
          > */}
          <Tooltip title="Add to favorites" sx={{color: grey[900]}}
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
            <IconButton>
              <AddIcon />
            </IconButton>
          </Tooltip>
          {/* </button> */}
          &nbsp;
          {/* <button
            onClick={() =>
              dispatch(
                removeMovieAsync({
                  movieId: movie.id,
                  userToken: userToken,
                })
              )
            }
          > */}
          {/* Remove */}
          {/* <Fab size="small" sx={{color: red[500]}} onClick={() =>
              dispatch(
                removeMovieAsync({
                  movieId: movie.id,
                  userToken: userToken,
                })
              )
            }>
                <DeleteIcon />
              </Fab> */}
          {/* </button> */}
          {isStaff && <span><Tooltip title="Delete" sx={{color: grey[900]}}  onClick={() =>
              dispatch(
                removeMovieAsync({
                  movieId: movie.id,
                  userToken: userToken,
                })
              )
            }>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip></span>}
          &nbsp;
          <NavLink key={movie.id} to={`/movie_details/${movie.id}`}>
            Details
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default MyMovies;
