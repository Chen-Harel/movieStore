import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLogged } from "../Login/loginSlice";
import {
  selectMyFavorites,
  getMyFavoritesAsync,
  removeFavoriteAsync,
} from "./favoritesListSlice";
import {Link} from 'react-router-dom';

const FavoritesList = () => {
  const dispatch = useDispatch(); //allow method calls from slicer
  const favorites_list = useSelector(selectMyFavorites); //get data from slicer

  let loggedIn = useSelector(selectLogged);

  useEffect(() => {
    dispatch(getMyFavoritesAsync());
  }, []);


  return (
    <div>
      <div>My Favorites</div>

      {!loggedIn && <p>Please <Link to="/login">log in</Link> to view your favorites</p>}

      <div>
        {favorites_list.map((fav) => (
          <div key={fav.id}>
            {fav.movie_name}&nbsp;
            <button onClick={() => dispatch(removeFavoriteAsync(fav=fav.id))}>
              Remove from favorites
            </button>
          </div>
        ))}
      </div>
      <button>Buy your favorites!</button>
    </div>
  );
};

export default FavoritesList;
