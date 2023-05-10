import axios from "axios";

const ConfigIpAddress = axios.create({
    baseURL: 'https://api.ipify.org/'
});


export default ConfigIpAddress;