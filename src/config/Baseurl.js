import axios from 'axios';
import jwt_decode from "jwt-decode";

import useRouter from 'next/router';
import { useDispatch } from 'react-redux';
import TokenErrorCheck from '../Redux/actions/tokencheck/Tokencheck';
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
        console.log("kalais", error?.response?.data?.message)


        return Promise.reject(error);
    },

);


axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {


        const dispacth=useDispatch();


        console.log("kalai", error?.response?.data?.message)


        dispacth(TokenErrorCheck(error?.response?.data?.message || error?.response?.status))




        const history = useRouter();

        if (error.response.data.status === 401 || error?.response?.data?.message=="Please authenticate") {
           

            localStorage.removeItem("userid");
            localStorage.removeItem("userToken");
            localStorage.removeItem("whish");
            localStorage.removeItem("user");
            localStorage.removeItem("auth");
            localStorage.removeItem("productid");

        }
        return Promise.reject(error);
    }
);

const instanceBaseurl = axios;


export default instanceBaseurl;
