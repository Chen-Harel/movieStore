import React from 'react'
import { useSelector } from 'react-redux'
import {selectMovies} from './moviesSlice'

const MovieDetails = () => {

    const movie_list=useSelector(selectMovies);

  return (
    <div>
        <h1>
            {movie_list.map((movie) => <p>{movie.movie_details}</p>)}
        </h1>
    </div>
  )
}

export default MovieDetails