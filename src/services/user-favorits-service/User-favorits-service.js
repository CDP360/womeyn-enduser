import instanceBaseurl from "../../config/Baseurl";

export function GetFavoritsList() {

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/wishlist`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function ProductLikeWishlistRemove(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/wishlist`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}