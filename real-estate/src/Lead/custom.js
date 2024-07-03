import axios from "axios";

var tokken = JSON.parse(localStorage.getItem("userInfo")).token;
const authFetch = axios.create({
    baseURL: 'http://127.0.0.1:5001/api',
    headers:{
        Accept: 'application/json',
        Authorization: tokken
    }
})

export default authFetch;