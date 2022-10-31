import React from 'react';
import {Link} from 'react-router-dom';
// import {selectUserName, logout} from '../Login/loginSlice';
// import { useSelector, useDispatch } from 'react-redux';



const Navbar = () => {
  return (
    <div className='navigation'>
        <Link to="/register">Register</Link>&nbsp;
        <Link to="/login">Login</Link>&nbsp;
        <Link to="/favorites">Favorites</Link>  
    </div>
    
    );
  };
export default Navbar;



