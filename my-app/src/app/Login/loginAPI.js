import axios from "axios";

const login_URL = "http://127.0.0.1:8000/token/";
const logout_URL = "http://127.0.0.1/logout/"


export function loginUser(creds) {
  return new Promise((resolve) =>
    axios
      .post(login_URL, creds)
      .then((res) => resolve({ data: res.data }))
  );
}

export function logoutUser(token){
    console.log(token.token)
    return new Promise((resolve) => 
    axios(logout_URL, {
        headers: {
            'Authorization': `Bearer ${token.token}`
        }
    }).then((res) => resolve({ data: res.data}))
    );
}
