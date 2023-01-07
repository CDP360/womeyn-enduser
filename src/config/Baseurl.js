import axios from "axios";

const Baseurl = axios.create({
    baseURL: process.env.REACT_BASEURL || 'http://localhost:8000/'
})