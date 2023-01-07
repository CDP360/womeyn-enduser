import axios from "axios";


const Userlogin = async (data) => {
    return axios
        .post(`http://localhost:8000/auth/login`, data)
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
}


export { Userlogin };