import axios from "axios";

//Asyncronis method to add items to the "database"
const favoritesListURL = "http://127.0.0.1:8000/favorites/";

// A function that makes an async get request for data
export function getMyFavorites(userToken) {
  return new Promise((resolve) =>
    axios(favoritesListURL, {
      headers: {
          'Authorization': `Bearer ${userToken.userToken}`
      }
    }).then((res) => resolve({ data: res.data }))
  );
}

//A function that makes an async post request
export function addMyFavorites(newFavorite) {
  // console.log(newFavorite)
  return new Promise((resolve) =>
    axios
      .post(favoritesListURL, newFavorite,{
        headers:{
          'Authorization': `Bearer ${newFavorite.userToken}`
        }
      })
      .then((res) => resolve({ data: res.data }))
  );
}

export function removeFromMyFavorites(id) {
  return new Promise((resolve) =>
    axios
      .delete(favoritesListURL + id)
      .then((res) => resolve({ data: res.data }))
  );
}
