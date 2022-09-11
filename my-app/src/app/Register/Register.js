import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAsync } from "./registerSlice";
import { TextField } from "@mui/material";

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <br />
      <TextField
        size="small"
        value={username}
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
        type="text"
      />
      &nbsp;
      <TextField
        size="small"
        value={password}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      />
      &nbsp;
      <TextField
        size="small"
        value={email}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
        type="email"
      />
      &nbsp;
      <button
        onClick={() =>
          dispatch(
            addUserAsync({
              username: username,
              password: password,
              email: email,
            })
          )
        }
        type="submit"
      >
        Register
      </button>
      <hr />
    </div>
  );
};

export default Register;
