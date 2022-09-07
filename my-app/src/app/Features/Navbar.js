import React from 'react'
import {Link} from 'react-router-dom' 

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/movies">Movies</Link>&nbsp;|&nbsp;
        <Link to="/register">Register</Link>&nbsp;|&nbsp;
        <Link to="/login">Login</Link>&nbsp;|&nbsp;
        <Link to="/favorites">Favorites</Link>
    </div>
  )
}

export default Navbar