
import instanceBaseurl from './../../config/Baseurl';


export function ProductView(data) {
    // return instanceBaseurl.get(`/common/product/${data}`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     // console.log("kalaierror",err?.response?.data?.message)
    //     return err?.response?.data?.message;
    // })

    if(data)
    {
        return new Promise((resolve, reject) => {
            instanceBaseurl.get(`/common/product/${data}`).then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }
    else
    {
        return null;
    }


   
}

export function ProductLikeWishlist(data) {
    // return instanceBaseurl.post(`/customer/wishlist`, data).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/wishlist`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function ProductLikeWishlistGet() {
    // return instanceBaseurl.get(`/customer/wishlist`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })


    // const userId=localStorage.getItem("")
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
    // return instanceBaseurl.get(`/customer/wishlist/${id}`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/wishlist/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function AllProductCategorys(current) {
    // return instanceBaseurl.get(`/common/search/products?search=shoe&page=0&limit=10`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/search/products?search=""&limit=12&page=${current || 1}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}







