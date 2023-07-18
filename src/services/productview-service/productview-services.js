
import instanceBaseurl from './../../config/Baseurl';


export function ProductView(data) {


    if (data) {
        return new Promise((resolve, reject) => {
            instanceBaseurl.get(`/common/product/${data}`).then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }
    else {
        return null;
    }



}

export function ProductLikeWishlist(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/wishlist`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function ProductLikeWishlistGet() {




    const token = localStorage.getItem("userToken");


    if (token) {
        return new Promise((resolve, reject) => {
            instanceBaseurl.get(`/customer/wishlist`).then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }
    else {
        return null;
    }


}

export function ProductLikeandUnlikeCheck(id) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/wishlist/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function AllProductCategorys(current) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/search/products?search=""&limit=12&page=${current || 1}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}







