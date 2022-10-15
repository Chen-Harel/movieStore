import axios from "axios";

//Asyncronis method to add items to the "database"
const getfavoritesListURL = "http://127.0.0.1:8000/getfavorites/";
const addToFavoritesURL = "http://127.0.0.1:8000/addfavorite/";
const deletefavoriteURL = "http://127.0.0.1:8000/deletefavorite/";
const buyFavorites = "http://127.0.0.1:8000/buymyfavorites/";

// A function that makes an async get request for data
export function getMyFavorites(payload) {
  // console.log(payload)
  // console.log(payload.userID)
  // console.log(payload.userToken)
  return new Promise((resolve) =>
    axios(getfavoritesListURL + payload.userID, {
      headers:{
        'Authorization': `Bearer ${payload.userToken}`
      }
    }).then((res) =>
      resolve({ data: res.data })
    )
  );
}

//A function that makes an async post request
export function addMyFavorites(newFavorite) {
  // console.log(newFavorite)
  return new Promise((resolve) =>
    axios
      .post(addToFavoritesURL, newFavorite, {
        headers: {
          'Authorization': `Bearer ${newFavorite.userToken}`,
        },
      })
      .then((res) => resolve({ data: res.data }))
  );
}

export function removeFromMyFavorites(favoriteToRemove) {
  console.log(favoriteToRemove)
  return new Promise((resolve) =>
    axios
      .delete(deletefavoriteURL + favoriteToRemove.favorite_id,{
        headers:{
          'Authorization': `Bearer ${favoriteToRemove.userToken}`
        }
      })
      .then((res) => resolve({ data: res.data }))
  );
}

export function buyMyFavorites(payload) {
  // console.log(payload)
  return new Promise((resolve) =>
    axios
      .post(buyFavorites + payload.userID, {
        headers: {
          'Authorization': `Bearer ${payload.userToken}`,
        },
      })
      .then((res) => resolve({ data: res.data }))
  );
}
