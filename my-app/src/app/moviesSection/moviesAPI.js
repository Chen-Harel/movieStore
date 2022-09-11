import axios from "axios";


//Asyncronis method to add items to the "database"
const movieNameURL = "http://127.0.0.1:8000/movies/";
const getmoviesURL = "http://127.0.0.1:8000/getmovies/";

// A function that makes an async get request for data
export function getMoviesDB() {
  return new Promise((resolve) =>
    axios(getmoviesURL).then((res) => resolve({ data: res.data }))
  );
}

//A function that makes an async post request
export function addMoviesDB(newMovie) {
  return new Promise((resolve) =>
    axios
      .post(movieNameURL, newMovie, {
        headers: {
            'Authorization': `Bearer ${newMovie.userToken}`
        }
      })
      .then((res) => resolve({ data: res.data }))
  );
}

//A function that makes an async delete request
export function removeMovieDB(id) {
  return new Promise((resolve) =>
    axios.delete(movieNameURL + id.movieId,{
      headers:{
        'Authorization':`Bearer ${id.userToken}`
      }  
    }).then((res) => resolve({ data: res.data }))
  );
}
