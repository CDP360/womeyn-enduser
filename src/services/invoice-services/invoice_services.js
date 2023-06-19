
import instanceBaseurl from './../../config/Baseurl';

export function Invoicedownload(orderid) {
    // return instanceBaseurl.get(`/common/coupons`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // })
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/invoice/${orderid}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}