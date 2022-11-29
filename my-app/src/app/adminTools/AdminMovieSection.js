import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMovies,
  getMoviesAsync,
  addMoviesAsync,
  removeMovieAsync,
} from "../moviesSection/moviesSlice";
import { selectToken, selectStaff } from "../Login/loginSlice";
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
  const isStaff = useSelector(selectStaff);

  const [MovieName, setMovieName] = useState("");
  const [ReleaseDate, setReleaseDate] = useState("");
  const [MovieDetails, setMovieDetails] = useState("");
  const [MoviePrice, setMoviePrice] = useState("");

  useEffect(() => {
    dispatch(getMoviesAsync(movie_list));
  }, [movie_list.length]);

  return (
    <div>
      {isStaff ? (
        <span>
          <h2>As admin, you will be able to add/remove movies from here.</h2>
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
          <TextField
            id="outlined-basic"
            label="Movie Price"
            variant="outlined"
            value={MoviePrice}
            placeholder="Movie Price"
            onChange={(event) => setMoviePrice(event.target.value)}
          />
          <p>
            <TextField
              id="outlined-multiline-flexible"
              label="Movie Details"
              maxRows={10}
              multiline
              value={MovieDetails}
              onChange={(event) => setMovieDetails(event.target.value)}
            />
            &nbsp;
            <Button
              variant="contained"
              onClick={() =>
                dispatch(
                  addMoviesAsync({
                    movie_name: MovieName,
                    release_date: ReleaseDate,
                    movie_price: MoviePrice,
                    movie_details: MovieDetails,
                    userToken: userToken,
                  })
                )
              }
            >
              Add Movie
            </Button>
          </p>
          {movie_list.map((movie) => (
            <div>
              <div>
                <span>{movie.movie_name}</span>
                <br />
                <span>Price: {movie.movie_price}</span>

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
            </div>
          ))}
        </span>
      ) : (
        <h2 style={{textAlign:"center"}}>You aren't authorized to view this page!</h2>
      )}
    </div>
  );
};

export default AdminMovieSection;
