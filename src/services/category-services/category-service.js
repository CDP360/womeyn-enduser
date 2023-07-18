
import instanceBaseurl from './../../config/Baseurl';

export function CategoryBanners() {
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/get-placement/CategoryPageBanner/100`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function ProductCatgorylist(data, current) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/category/products?slugName=${data}&limit=12&page=${current}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}




export function SearchProductCategorys() {

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/all-categories`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function AllSearchProductUser(current) {



    return new Promise((resolve, reject) => {

        instanceBaseurl.get(`/common/search/products?sortBy=updatedAt:desc&limit=12&page=${current}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })



}

export function SearchProductUser(data, current) {



    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/search/products?search=${data}&sortBy=updatedAt:desc&limit=12&page=${current}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })



}

export function CategoryproductFilter(data, current) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/common/filter/products?limit=12&page=${current}`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
