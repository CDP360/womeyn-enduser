import Baseurl from './../../config/Baseurl';

export function Bannerimage() {
    return Baseurl.get("/common/placement/63f66e0f73a58143f7752658").then((res) => {
        console.log("thala",res);
        return res
    }).catch((err) => console.log(err));
}