import React from 'react';
import {Link} from 'react-router-dom';
// import {selectUserName, logout} from '../Login/loginSlice';
// import { useSelector, useDispatch } from 'react-redux';



const Navbar = () => {
  return (
    <div className='topnav'>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/movies">Movies</Link>&nbsp;|&nbsp;
        <Link to="/register">Register</Link>&nbsp;|&nbsp;
        <Link to="/login">Login</Link>&nbsp;|&nbsp;
        <Link to="/favorites">Favorites</Link>  
    </div>
    
    );
  };
export default Navbar;



