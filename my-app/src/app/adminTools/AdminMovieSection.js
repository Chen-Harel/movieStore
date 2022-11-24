import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMovies,
  getMoviesAsync,
  addMoviesAsync,
  removeMovieAsync,
} from "../moviesSection/moviesSlice";
import { selectToken, selectUserID, selectStaff } from "../Login/loginSlice";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminMovieSection = () => {
  const dispatch = useDispatch(); //allow method calls from slicer
  const movie_list = useSelector(selectMovies); //get data from slicer
  const userToken = useSelector(selectToken); //get user token
  //   const user_id = useSelector(selectUserID);
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
      <h2>As admin, you will be able to add/remove movies from here.</h2>
      {isStaff && (
        <span>
          <TextField
            id="outlined-basic"
            label="Movie Name"
            variant="outlined"
            value={MovieName}
            onChange={(event) => setMovieName(event.target.value)}
          />
          &nbsp;
          <TextField
            id="outlined-basic"
            label="Release Date"
            variant="outlined"
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
                  movie_details: MovieDetails,
                  userToken: userToken,
                })
              )
            }
          >
            Add Movie
          </Button>
          <p>
            <TextField
              id="outlined-multiline-flexible"
              label="Movie Details"
              maxRows={10}
              multiline
              value={MovieDetails}
              onChange={(event) => setMovieDetails(event.target.value)}
            />
          </p>
          {movie_list.map((movie) => (
            <div>{movie.movie_name}
          
          <Tooltip
            title="Delete"
            sx={{ color: grey[900] }}
            onClick={() =>
              dispatch(
                removeMovieAsync({
                  movieId: movie.id,
                  userToken: userToken,
                })
              )
            }
          >
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          </div>
          ))}
        </span>
      )}
    </div>
  );
};

export default AdminMovieSection;