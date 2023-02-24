import axios from 'axios';


const instanceBaseurl = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
});
// Instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// Instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instanceBaseurl;


