
import instanceBaseurl from './../../config/Baseurl';


export function ProductView(data) {
    return instanceBaseurl.get(`/common/product/${data}`).then((res) => {


        return res;
    }).catch((err) => {
        // console.log("kalaierror",err?.response?.data?.message)
        return err?.response?.data?.message;
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

export function ProductLikeandUnlikeCheck(id) {
    return instanceBaseurl.get(`/customer/wishlist/${id}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}


export function AllProductCategorys() {
    return instanceBaseurl.get(`/common/search/products?search=shoe&page=0&limit=10`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}







