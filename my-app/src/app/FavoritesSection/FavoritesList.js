import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLogged, selectToken, selectUserID } from "../Login/loginSlice";
import {
  selectMyFavorites,
  getMyFavoritesAsync,
  removeFavoriteAsync,
  buyFavoritesAsync,
} from "./favoritesListSlice";
import { IconButton, Tooltip } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import NestedModal from "../Login/LoginModal";
import {Link} from "react-router-dom";

const FavoritesList = () => {
  const dispatch = useDispatch(); //allow method calls from slicer
  const favorites_list = useSelector(selectMyFavorites); //get data from slicer

  const userID = useSelector(selectUserID);
  const userToken = useSelector(selectToken);
  const Login = <NestedModal />;
  let loggedIn = useSelector(selectLogged);

  useEffect(() => {
    dispatch(getMyFavoritesAsync({ userToken, userID }));
  }, [favorites_list.length]);

  return (
    <div>
      {/* <div>My Favorites ({favorites_list.length})</div> */}
      {!loggedIn && (
        <div style={{ textAlign: "center" }}>
          <span>{Login}</span> to view your favorites
        </div>
      )}

      <div>
        {favorites_list.map((fav) => (
          <div key={fav.favorite_id}>
            {fav.movie_name}&nbsp;
            <Tooltip
              title="Remove"
              placement="right"
              onClick={() =>
                dispatch(
                  removeFavoriteAsync({
                    userToken,
                    favorite_id: fav.favorite_id,
                  })
                )
              }
            >
              <IconButton>
                <Delete />
              </IconButton>
            </Tooltip>
          </div>
        ))}
      </div>
      <Link className="purchase-link" to="/purchaseSuccessful">
        {/* <button
          onClick={() =>
            dispatch(buyFavoritesAsync({ userToken, userID, favorites_list }))
          }
        > */}
          Buy your favorites!
        {/* </button> */}
      </Link>
    </div>
  );
};

export default FavoritesList;
