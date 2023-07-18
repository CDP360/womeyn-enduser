
import instanceBaseurl from './../../config/Baseurl';

export function CheckoutSuccessUpdate(orderid) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/complete-order/${orderid}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function CheckoutSuccessUpdatePaypal(paymentid, payerid) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/complete-paypal-order?paymentId=${paymentid}&PayerID=${payerid}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function CheckoutServicePayment(servicepaymentid) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/service/complete-booking/${servicepaymentid}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function CheckoutServicePaymentPaypal(paymentid, payerid) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/service/complete-paypal-booking?paymentId=${paymentid}&PayerID=${payerid}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}