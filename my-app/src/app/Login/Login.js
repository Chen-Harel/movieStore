import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInAsysnc, selectUserName, logout } from "./loginSlice";
// import { input, button } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  // const logged = useSelector(selectLogged);
  // const userToken = useSelector(selectToken);

  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div>
      {userName ? (
        <div>You are now logged in</div>
      ) : (
        <div>Welcome! Please log in.</div>
      )}
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
      <button
        onClick={() =>
          dispatch(
            loginInAsysnc({ username: newUserName, password: newPassword })
          )
        }
      >
        Login
      </button>
      <hr />
    </div>
  );
};

export default Login;
