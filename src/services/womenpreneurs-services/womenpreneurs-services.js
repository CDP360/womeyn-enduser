import instanceBaseurl from "../../config/Baseurl";

export function Getwomenpreneursbanner() {
    return instanceBaseurl.get("/common/get-placement/WomenpreneursBanner/3").then((res) => {
        return res
    }).catch((err) => console.log(err));
}