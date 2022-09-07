import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMyFavorites,
  getMyFavoritesAsync,
  removeFavoriteAsync,
} from "./favoritesListSlice";

const FavoritesList = () => {
  const dispatch = useDispatch(); //allow method calls from slicer
  const favorites_list = useSelector(selectMyFavorites); //get data from slicer

  useEffect(() => {
    dispatch(getMyFavoritesAsync());
  }, []);

  return (
    <div>
      <p>My Favorites</p>
      <span>Your favorites {favorites_list.length}</span>
      <div>
        {favorites_list.map((fav) => (
          <div key={fav.id}>
            {fav.movie_name}&nbsp;
            <button onClick={() => dispatch(removeFavoriteAsync(fav.id))}>
              <span style={{ textDecoration: "line-through" }}>🖤</span>
            </button>
          </div>
        ))}
      </div>
      <button className="btn btn-dark">Buy your favorites!</button>
    </div>
  );
};

export default FavoritesList;
