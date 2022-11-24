import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import BasicModal from "./MovieDetailsModal";

const MyMovies = () => {
  const dispatch = useDispatch(); //allow method calls from slicer
  const movie_list = useSelector(selectMovies); //get data from slicer
  const userToken = useSelector(selectToken); //get user token
  const user_id = useSelector(selectUserID);
  const isStaff = useSelector(selectStaff);
  // const MyFavorites = useSelector(selectMyFavorites);

  const MovieDetailsButton = <BasicModal />;

  useEffect(() => {
    dispatch(getMoviesAsync(movie_list));
  }, [movie_list.length]);

  return (
    <div>
      <br />
      <hr />
      {/* Card Section */}
      <div className="container">
        {movie_list.map((movie) => (
          <Card
            className="movieCard"
            sx={{ maxWidth: 345, minWidth: 345, maxHeight: 345 }}
          >
            <CardMedia
              component="img"
              height="140"
              image={`https://picsum.photos/id/${movie.id}/200`}
              alt={movie.movie_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.movie_name.slice(0, 25)}
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
                <span className="buttonColor">
                Add to Favorites
                </span>
              </Button>
              <div>
                <span style={{ color: "blue" }}>
                  {/* {movie.movie_details.slice(0,10)}&nbsp; */}
                  {MovieDetailsButton}
                </span>
              </div>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyMovies;
