import React from 'react';
import { useSelector } from "react-redux";
import { selectMovies } from "../moviesSection/moviesSlice";
import {Outlet} from "react-router-dom";

const Header = () => {
    const movie_list = useSelector(selectMovies); //get data from slicer
  return (
    <div>
        <h1 style={{ textDecoration: "underline" }}>Movie database</h1>
        We currently have {movie_list.length} movies in our database!
        <Outlet />
    </div>
  )
}

export default Header