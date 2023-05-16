import axios from "axios";

const ConfigIpAddress = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GOOGLE_IP_ADDRESS
});


export default ConfigIpAddress;