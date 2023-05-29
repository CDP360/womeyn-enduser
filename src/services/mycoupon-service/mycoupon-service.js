
import instanceBaseurl from './../../config/Baseurl';

export function MyCouponList() {
    // return instanceBaseurl.get(`/common/coupons`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // })


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/coupons`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function couponApply(data) {
    // return instanceBaseurl.get(`/common/coupons`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // })


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/coupon`, data).then(response => {
            resolve(response?.data)
        }).catch(err => {
            reject(err)
        })
    })
}