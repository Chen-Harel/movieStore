import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAsync } from "./registerSlice";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <br />
      <TextField
        id="filled-basic"
        label="Username"
        variant="filled"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        required
      />
      &nbsp;
      <TextField
        value={password}
        id="filled-basic"
        label="Password"
        variant="filled"
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        required
      />
      &nbsp;
      <TextField
        id="filled-basic"
        label="Email"
        variant="filled"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        required
      />
      <br />
      <Button
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
        <span className="buttonColor">
        Register
        </span>
      </Button>
      <hr />
    </div>
  );
};

export default Register;
