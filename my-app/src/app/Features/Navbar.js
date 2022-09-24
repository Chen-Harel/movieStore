import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='topnav'>
        <Link className='linkcolor' to="/">Home</Link>&nbsp;|&nbsp;
        <Link className='linkcolor' to="/movies">Movies</Link>&nbsp;|&nbsp;
        <Link className='linkcolor' to="/register">Register</Link>&nbsp;|&nbsp;
        <Link className='linkcolor' to="/login">Login</Link>&nbsp;|&nbsp;
        <Link className='linkcolor' to="/favorites">Favorites</Link>        
    </div>
    
    );
  };
export default Navbar;



