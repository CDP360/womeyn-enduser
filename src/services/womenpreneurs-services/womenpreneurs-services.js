import instanceBaseurl from "../../config/Baseurl";

export function Getwomenpreneursbanner() {
    return instanceBaseurl.get("/common/get-placement/WomenpreneursBanner/3").then((res) => {
        return res
    }).catch((err) => console.log(err));
}


export function WomenpreneursSellers(search) {
    return instanceBaseurl.get(`/common/womenpreneurs`).then((res) => {
        return res
    }).catch((err) => console.log(err));
}

export function WomenpreneursFilter(filter) {
    return instanceBaseurl.get(`/common/womenpreneurs?search=&categoryId=${filter}`).then((res) => {
        return res
    }).catch((err) => console.log(err));
}

export function WomenpreneursSearch(search) {
    return instanceBaseurl.get(`/common/womenpreneurs?search=${search}`).then((res) => {
        return res
    }).catch((err) => console.log(err));
}

export function WomenpreneursCommoncategories() {
    return instanceBaseurl.get(`/common/categories?typeId=1`).then((res) => {
        return res
    }).catch((err) => console.log(err));
}


export function WomenpreneursStores(data) {
    return instanceBaseurl.get(`/common/womenpreneurs/${data}`).then((res) => {
        return res
    }).catch((err) => console.log(err));
}

export function WomenpreneursCategorylistStore(data) {
    return instanceBaseurl.get(`/common/womenpreneurs/categories/${data}`).then((res) => {
        return res
    }).catch((err) => console.log(err));
}

export function WomenpreneursCategoryproducts(sellerid,categoryid) {
    return instanceBaseurl.get(`/common/products/${sellerid}/${categoryid}`).then((res) => {
        return res
    }).catch((err) => console.log(err));
}