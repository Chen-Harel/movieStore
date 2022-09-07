import axios from "axios";

//Asyncronis method to add items to the "database"
const registerURL = "http://127.0.0.1:8000/register/";
// A function that makes an async get request for data
export function getUsersDB() {
  return new Promise((resolve) =>
    axios(registerURL).then((res) => resolve({ data: res.data }))
  );
}

//A function that makes an async post request
export function registerUserDB(newUser) {
  return new Promise((resolve) =>
    axios.post(registerURL, newUser).then((res) => resolve({ data: res.data }))
  );
}

export function removeUserDB(id) {
  return new Promise((resolve) =>
    axios.delete(registerURL + id).then((res) => resolve({ data: res.data }))
  );
}
