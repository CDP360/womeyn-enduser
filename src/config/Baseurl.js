import axios from 'axios';
import { redirect } from 'next/navigation';
import { NavigatePage } from './PageNavigate';
import jwt_decode from "jwt-decode";

axios.interceptors.request.use(
    function (config) {
        if (config.url.search("/customer/update-photo") !== -1 || config.url.search("/customer/add-review") !== -1) {
            const token = localStorage.getItem("userToken");
            config.url = process.env.NEXT_PUBLIC_URL + config.url;
            config.headers = {
                ...config.headers,
                "Content-Type": false,
                "process-data": false,
                cache: false,
                "data-type": "Text",
                Authorization: `Bearer ${JSON.parse(token)}`,
            };
            return config;
        }
        else if ((config.url.search("/customer/oauth/google") !== -1) || (config.url.search("/oauth-success") !== -1)) {
            const token = localStorage.getItem("userToken");
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
            const token = localStorage.getItem("userToken");
            // var tokenDate = new Date(parseInt(token) * 1000)
            config.url = process.env.NEXT_PUBLIC_URL + config.url;
            // var date = new Date();
            // if(tokenDate)
            // {
            //     if (tokenDate.exp < date.getTime() / 1000) {
            //         localStorage.clear();
            //     } else {
            //         console.log('The token is still valid');
        
            //     }
            // }
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
    },

);





axios.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        if (error.response.status === 401) {
            const token = localStorage.getItem("userToken");

            var tokenDate = new Date(parseInt(token) * 1000)
            // if (jwt_decode(token).exp < Date.now() / 1000) {
            //     localStorage.clear();
            //     NavigatePage("/");

            // }

            var date = new Date();
            if(tokenDate)
            {
                if (tokenDate.exp < date.getTime() / 1000) {
                    localStorage.clear();
                NavigatePage("/");

                } else {
                    console.log('The token is still valid');
        
                }
            }
        } else {
            return Promise.reject(error);
        }

    }
);

const instanceBaseurl = axios;

export default instanceBaseurl;
