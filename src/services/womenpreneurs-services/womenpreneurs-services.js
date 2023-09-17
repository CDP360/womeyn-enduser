import instanceBaseurl from "../../config/Baseurl";

export function Getwomenpreneursbanner(data) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/get-placement/${data}/100`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function WomenpreneursSellers() {
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs?sortBy=updatedAt:desc&limit=12&page=1`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursSellerspagintaion(current) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs?sortBy=updatedAt:desc&limit=12&page=${current}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursFilter(filter) {



    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs?search=&categoryId=${filter}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursSearch(search) {



    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs?search=${search}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursCommoncategories() {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/categories?typeId=1`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function WomenpreneursStores(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs/${data}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursCategorylistStore(data) {



    if (data) {
        return new Promise((resolve, reject) => {
            instanceBaseurl.get(`/common/womenpreneurs/categories/${data}`).then(response => {
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

export function WomenpreneursCategoryproducts(sellerid, categoryid, current) {


    if (sellerid || categoryid) {
        return new Promise((resolve, reject) => {
            instanceBaseurl.get(`/common/products/${sellerid}/${categoryid}?limit=10&page=${current}`).then(response => {
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





export function WomeynpreServiceList(sellerid) {




    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/services-list/${sellerid}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}