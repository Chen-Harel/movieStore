import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInAsysnc, selectUserName, logout } from "./loginSlice";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  // const userStaff = useSelector(selectStaff);
  // const logged = useSelector(selectLogged);
  // const userToken = useSelector(selectToken);

  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");

 
  return (
    <div>      
      {userName ? (
        <div> Hello, {userName}! <Button onClick={()=>dispatch(logout())}>Logout</Button></div>
      ) : (
        <span></span>       
      )}
      <div>Don't have an account? <span>Register here</span></div>
      <TextField
        id= "filled-basic"
        label="Username"
        variant="filled"
        onChange={(event) => setNewUserName(event.target.value)}
        type="text"
      />
      &nbsp;
      <TextField
        id="outlined-basic"
        label="Password"
        onChange={(event) => setNewPassword(event.target.value)}
        type="password"
      />
      &nbsp;
      <Button
        // variant="contained"
        onClick={() =>
          dispatch(
            loginInAsysnc({ username: newUserName, password: newPassword })
          )
        }
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
