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
      <TextField
        id= "filled-basic"
        label="Username"
        variant="filled"
        onChange={(event) => setNewUserName(event.target.value)}
        type="text"
        required
      />
      &nbsp;
      <TextField
        id="filled-basic"
        label="Password"
        variant="filled"
        onChange={(event) => setNewPassword(event.target.value)}
        type="password"
        required
      />
      <br />
      <br />
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
      <hr />
    </div>
  );
};

export default Login;
