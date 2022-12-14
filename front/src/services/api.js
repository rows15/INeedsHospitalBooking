import axios from "axios";

const api = axios.create({
  
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Method": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": true
    

  }

});

/* const signed = JSON.parse(localStorage.getItem('signed'));

if (signed) {
  const tokenJwt = signed.token.jwt;
  
  api.defaults.headers.common["Authorization"] = `Bearer ${tokenJwt}`;
} */

export default api;