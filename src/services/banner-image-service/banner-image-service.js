
import instanceBaseurl from "../../config/Baseurl";

export function Bannerimage() {
    return instanceBaseurl.get("/common/home-placements").then((res) => {
        return res
    }).catch((err) => { return err });
}
export function Topwomenprenuers() {
    return instanceBaseurl.get("/common/top-womenprenuers").then((res) => {
        return res
    }).catch((err) => { return err });
}

export function TopProductCategories() {
    return instanceBaseurl.get("/common/top-product-categories").then((res) => {
        return res
    }).catch((err) => { return err });
}

export function TopProducts() {
    return instanceBaseurl.get("/common/top-products").then((res) => {
        return res
    }).catch((err) => { return err });
}

export function TopServices() {
    return instanceBaseurl.get("/common/top-services").then((res) => {
        return res
    }).catch((err) => { return err });
}