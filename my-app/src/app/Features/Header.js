import React from 'react';
// import { useSelector } from "react-redux";
// import { selectMovies } from "../moviesSection/moviesSlice";
import {Outlet} from "react-router-dom";

const Header = () => {
    // const movie_list = useSelector(selectMovies); //get data from slicer
  return (
    <div>
        <h1 style={{fontSize: 35, paddingBottom: 0}}>Disney Movie DataBase</h1>
        <h3>Welcome to the most magical place on the web!</h3>
        <br /><br />
        <Outlet />
    </div>
  )
}

export default Header