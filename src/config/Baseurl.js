import axios from 'axios';
import { toast } from 'react-toastify';
// const instanceBaseurl = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_URL,
// });

// // const token=localStorage.getItem("womenUserToken");
// // Instance.defaults.headers.common['Authorization'] = 'Bearer ';
// // Instance.defaults.headers.post['Content-Type'] = 'application/json';

// export default instanceBaseurl;.


axios.interceptors.request.use(
    function (config) {
        // const token = localStorage.getItem("womenUserToken");
        // config.url = process.env.NEXT_PUBLIC_URL + config.url;
        // config.headers = {
        //     ...config.headers,
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${token}`
        // };
        // config.withCredentials = true;
        // return config;
        if ((config.url.search("/auth/customer/verify-otp") !== -1)) {
            console.log("crede called")
            const token = localStorage.getItem("womenUserToken");
            config.url = process.env.NEXT_PUBLIC_URL + config.url;
            config.headers = {
                ...config.headers,
                "Content-Type": "application/json",
                Authorization: `Bearer ${JSON.parse(token)}`
            };
            config.withCredentials = true;
            return config;
        }
        else {
            const token = localStorage.getItem("womenUserToken");
            config.url = process.env.NEXT_PUBLIC_URL + config.url;
            config.headers = {
                ...config.headers,
                "Content-Type": "application/json",
                Authorization: `Bearer ${JSON.parse(token)}`
            };
            config.withCredentials = true;
            return config;

        }


    },
    function (error) {
        return Promise.reject(error);
    }
);


axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {

        if (error.response.status === 401) {
            // toast.error("Logout user!!");
        }
        return Promise.reject(error);
    }
);

const instanceBaseurl = axios;


export default instanceBaseurl;
