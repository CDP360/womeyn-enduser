import instanceBaseurl from "../../config/Baseurl";

export function Getwomenpreneursbanner(data) {
    // return instanceBaseurl.get("/common/get-placement/WomenpreneursBanner/3").then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/get-placement/${data}/5`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function WomenpreneursSellers(current) {
    // return instanceBaseurl.get(`/common/womenpreneurs&limit=10&page=${current}`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs&limit=10&page=${current}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursFilter(filter) {
    // return instanceBaseurl.get(`/common/womenpreneurs?search=&categoryId=${filter}`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // });


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs?search=&categoryId=${filter}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursSearch(search) {
    // return instanceBaseurl.get(`/common/womenpreneurs?search=${search}`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // });


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs?search=${search}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursCommoncategories() {
    // return instanceBaseurl.get(`/common/categories?typeId=1`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/categories?typeId=1`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function WomenpreneursStores(data) {
    // return instanceBaseurl.get(`/common/womenpreneurs/${data}`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs/${data}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursCategorylistStore(data) {
    // return instanceBaseurl.get(`/common/womenpreneurs/categories/${data}`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/womenpreneurs/categories/${data}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function WomenpreneursCategoryproducts(sellerid, categoryid) {
    // return instanceBaseurl.get(`/common/products/${sellerid}/${categoryid}`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // });

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/products/${sellerid}/${categoryid}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}