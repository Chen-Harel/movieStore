import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInAsysnc, selectUserName, selectLogged, selectToken } from "./loginSlice";
import { TextField, Button } from "@mui/material";


const Login = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const logged = useSelector(selectLogged);
  const userToken = useSelector(selectToken);

  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");


  return (
    <div>
      <br />
      {userName ? <div> Welcome: {userName}</div>:<div>Welcome: Please log in</div>}
      {logged && <div>You have logged in successfully</div>}
      {/* {logged && console.log({userToken})} */}
      <TextField
        size="small"
        placeholder="Username"
        onChange={(event) => setNewUserName(event.target.value)}
        type="text"
      />
      &nbsp;
      <TextField
        size="small"
        placeholder="Password"
        onChange={(event) => setNewPassword(event.target.value)}
        type="password"
      />
      &nbsp;
      <Button variant="contained" onClick={()=>dispatch(loginInAsysnc({ username: newUserName, password: newPassword}))}>
        Login
      </Button>
      <hr />
    </div>
  );
};

export default Login;