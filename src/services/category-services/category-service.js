
import instanceBaseurl from './../../config/Baseurl';

export function CategoryBanners() {
    return instanceBaseurl.get(`/common/get-placement/CategoryPageBanner/3`).then((res) => {
        return res;
    }).catch((err) => {
        console.log(err);
    })
}


export function ProductCatgorylist(data, current) {
    return instanceBaseurl.get(`/common/category/products?slugName=${data}&limit=10&page=${current}`).then((res) => {
        return res;
    }).catch((err) => {
        console.log(err);
    })
}