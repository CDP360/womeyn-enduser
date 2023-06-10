
import instanceBaseurl from "../../config/Baseurl";

export function Bannerimage() {



    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/home-placements`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
export function Topwomenprenuers() {
    // return instanceBaseurl.get("/common/top-womenprenuers").then((res) => {
    //     return res
    // }).catch((err) => { return err });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/top-womenprenuers`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function TopProductCategories() {
    // return instanceBaseurl.get("/common/top-product-categories").then((res) => {
    //     return res
    // }).catch((err) => { return err });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/top-product-categories`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function TopProducts() {
    // return instanceBaseurl.get("/common/top-products").then((res) => {
    //     return res
    // }).catch((err) => { return err });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/top-products`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function TopServices() {
    // return instanceBaseurl.get("/common/top-services").then((res) => {
    //     return res
    // }).catch((err) => { return err });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/top-services`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}