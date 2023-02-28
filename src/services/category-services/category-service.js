
import instanceBaseurl from './../../config/Baseurl';

export function CategoryBanners() {
    return instanceBaseurl.get(`/common/get-placement/CategoryPageBanner/3`).then((res) => {
        return res;
    }).catch((err) => {
        console.log(err);
    })
}