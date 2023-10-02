import axios from "axios";
("use strict");

const instance = axios.create({
  baseURL: "http://localhost:8081",
  timeout: 1000,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

instance.post("/login", {
    username: "test",
    password: "test"
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
    
