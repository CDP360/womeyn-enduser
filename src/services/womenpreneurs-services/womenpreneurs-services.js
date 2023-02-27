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

export function WomenpreneursSerachandFilter({search,filter}) {
    return instanceBaseurl.get(`/common/womenpreneurs?search=${search}&categoryId=${filter}`).then((res) => {
        return res
    }).catch((err) => console.log(err));
}


export function WomenpreneursCommoncategories() {
    return instanceBaseurl.get(`/common/categories?typeId=1`).then((res) => {
        return res
    }).catch((err) => console.log(err));
}