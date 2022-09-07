import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAsync } from "./registerSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <br />
      <input
        value={username}
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
        type="text"
      />
      &nbsp;
      <input
        value={password}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      />
      &nbsp;
      <input
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
