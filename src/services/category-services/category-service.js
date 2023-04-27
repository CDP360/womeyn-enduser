
import instanceBaseurl from './../../config/Baseurl';

export function CategoryBanners() {
    // return instanceBaseurl.get(`/common/get-placement/CategoryPageBanner/3`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;

    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/get-placement/CategoryPageBanner/3`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function ProductCatgorylist(data, current) {
    // return instanceBaseurl.get(`/common/category/products?slugName=${data}&limit=10&page=${current}`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;

    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/category/products?slugName=${data}&limit=10&page=${current}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}




export function SearchProductCategorys() {
    // return instanceBaseurl.get(`/common/all-categories`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;

    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/all-categories`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function SearchProductUser(data) {
    // return instanceBaseurl.get(`/common/search/products?search=${data}`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;

    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/search/products?search=${data}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

