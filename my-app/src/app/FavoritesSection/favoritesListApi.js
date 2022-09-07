import axios from "axios";

//Asyncronis method to add items to the "database"
const favoritesListURL = "http://127.0.0.1:8000/favorites/";

// A function that makes an async get request for data
export function getMyFavorites(token) {
  return new Promise((resolve) =>
    axios(favoritesListURL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => resolve({ data: res.data }))
  );
}

//A function that makes an async post request
export function addMyFavorites(newFavorite) {
  return new Promise((resolve) =>
    axios
      .post(favoritesListURL, newFavorite)
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
