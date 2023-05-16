import axios from "axios";

const ShippingApiUrl = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SHIPPING_API,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "API-Key": process.env.NEXT_PUBLIC_SHIPPING_KEY,
    },
});


export default ShippingApiUrl;