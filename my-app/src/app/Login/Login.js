import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInAsysnc, selectUserName, selectLogged, selectToken } from "./loginSlice";


const Login = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const logged = useSelector(selectLogged);
  const token = useSelector(selectToken);

  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");


  return (
    <div>
      <br />
      {userName && <div> Welcome: {userName}</div>}
      {logged && <div>You are logged in successfully</div>}
      {token && <div>Your token is: {token}</div>}
      <input
        placeholder="Username"
        onChange={(event) => setNewUserName(event.target.value)}
        type="text"
      />
      &nbsp;
      <input
        placeholder="Password"
        onChange={(event) => setNewPassword(event.target.value)}
        type="password"
      />
      &nbsp;
      <button onClick={()=>dispatch(loginInAsysnc({ username: newUserName, password: newPassword}))}>
        Login
      </button>
      <hr />
    </div>
  );
};

export default Login;