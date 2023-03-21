
import instanceBaseurl from './../../config/Baseurl';


export function ProductView(data) {
    return instanceBaseurl.get(`/common/product/${data}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export function ProductLikeWishlist(data) {
    return instanceBaseurl.post(`/customer/wishlist`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export function ProductLikeWishlistGet() {
    return instanceBaseurl.get(`/customer/wishlist`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}