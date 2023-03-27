import instanceBaseurl from "../../config/Baseurl";

export function GetFavoritsList() {
    return instanceBaseurl.get(`/customer/wishlist`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}


export function ProductLikeWishlistRemove(data) {
    return instanceBaseurl.post(`/customer/wishlist`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}