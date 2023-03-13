
import instanceBaseurl from './../../config/Baseurl';

export function MyCouponList() {
    return instanceBaseurl.get(`/common/coupons`).then((res) => {
        return res
    }).catch((err) => {
        console.log(err);
    })
}