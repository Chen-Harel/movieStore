import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLogged, selectToken, selectUserID } from "../Login/loginSlice";
import {
  selectMyFavorites,
  getMyFavoritesAsync,
  removeFavoriteAsync,
  buyFavoritesAsync,
} from "./favoritesListSlice";
import {Link} from 'react-router-dom';

const FavoritesList = () => {
  const dispatch = useDispatch(); //allow method calls from slicer
  const favorites_list = useSelector(selectMyFavorites); //get data from slicer

  const userID = useSelector(selectUserID);
  const userToken = useSelector(selectToken);
  let loggedIn = useSelector(selectLogged);

  // console.log(userID)
  useEffect(() => {
    dispatch(getMyFavoritesAsync({userToken, userID}));
  }, [favorites_list.length]);


  return (
    <div>
      <div>My Favorites ({favorites_list.length})</div>
      {/* <button onClick={()=>dispatch(getMyFavoritesAsync(userToken))}>Get favorites</button> */}
      {!loggedIn && <p>Please <Link to="/login">log in</Link> to view your favorites</p>}

      <div>
        {favorites_list.map((fav) => (
          <div key={fav.favorite_id}>
            {fav.movie_name}&nbsp;
            <button onClick={()=>dispatch(removeFavoriteAsync({userToken, favorite_id:fav.favorite_id}))}>
              Remove from favorites
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(buyFavoritesAsync({userToken, userID, favorites_list}))}>Buy your favorites!</button>
    </div>
  );
};

export default FavoritesList;
