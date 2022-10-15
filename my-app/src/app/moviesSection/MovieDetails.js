import React from 'react'
import { useSelector } from 'react-redux'
import {selectMovies} from './moviesSlice'

const MovieDetails = () => {

    const movie_list=useSelector(selectMovies);

  return (
    <div>
        <h1>
            {movie_list.map((movie) => <div>{movie.movie_details}</div>)}
        </h1>
    </div>
  )
}

export default MovieDetails