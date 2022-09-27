import React from 'react';
import {Link} from 'react-router-dom';
import {selectUserName, logout} from '../Login/loginSlice';
import { useSelector, useDispatch } from 'react-redux';



const Navbar = () => {
  const username = useSelector(selectUserName);
  const dispatch = useSelector(useDispatch);
  return (
    <div className='topnav'>
        <Link className='linkcolor' to="/">Home</Link>&nbsp;|&nbsp;
        <Link className='linkcolor' to="/movies">Movies</Link>&nbsp;|&nbsp;
        <Link className='linkcolor' to="/register">Register</Link>&nbsp;|&nbsp;
        <Link className='linkcolor' to="/login">Login</Link>&nbsp;|&nbsp;
        <Link className='linkcolor' to="/favorites">Favorites</Link>&nbsp;&nbsp;&nbsp;{username}&nbsp;<button onClick={()=>dispatch(logout())}>Logout</button>  
    </div>
    
    );
  };
export default Navbar;



