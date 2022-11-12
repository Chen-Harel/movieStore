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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//Card imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"

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
        </span>
      )}
      <hr />
      {/* Card Section */}

      {movie_list.map((movie) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={`https://picsum.photos/id/${movie.id}/200`}
            alt={movie.movie_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.movie_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Release date: {movie.release_date}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
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
              Add to Favorites
            </Button>
            <Button disabled size="small">More info</Button>
            {isStaff && (
            <span>
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
            </span>
          )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default MyMovies;