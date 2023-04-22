import axios from 'axios';
import jwt_decode from "jwt-decode";

import useRouter from 'next/router';
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
            // let decoded = jwt_decode(token);
            // console.log(decoded, "decoded")



            //     const token = 1681778582;

            //     const userId=localStorage.getItem('userid');


            //     if (Date.now() >= token.exp * 1000 || userId) {
            //       localStorage.removeItem("userid");
            //       localStorage.removeItem("userToken");
            //       localStorage.removeItem("whish");
            //       localStorage.removeItem("user");
            //       localStorage.removeItem("auth");
            //       localStorage.removeItem("productid");

            //   }

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
    },

);


axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {


        console.log(error.response.status,"status")

        const history=useRouter();

        if (error.response.status === 401) {
            // toast.error("Logout user!!");
            const token = localStorage.getItem("userToken");
            let decoded = jwt_decode(token);
            if (Date.now() >= decoded.exp * 1000 || error.response.status === 401) {
                localStorage.removeItem("userid");
                localStorage.removeItem("userToken");
                localStorage.removeItem("whish");
                localStorage.removeItem("user");
                localStorage.removeItem("auth");
                localStorage.removeItem("productid");
                history.push("/login");

            }
        }
        return Promise.reject(error);
    }
);

const instanceBaseurl = axios;


export default instanceBaseurl;
