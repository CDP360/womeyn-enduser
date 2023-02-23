import axios from "axios";

const Baseurl = axios.create({
    baseURL: process.env.WOMEYN_BASEURL
});


export default Baseurl;