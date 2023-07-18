
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

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/top-womenprenuers`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function TopProductCategories() {

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/top-product-categories`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function TopProducts() {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/top-products`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function TopServices() {

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/top-services`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}