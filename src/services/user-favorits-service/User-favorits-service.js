import instanceBaseurl from "../../config/Baseurl";

export function GetFavoritsList() {
    return instanceBaseurl.get(`/customer/wishlist`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}