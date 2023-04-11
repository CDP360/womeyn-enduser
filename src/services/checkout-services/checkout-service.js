
import instanceBaseurl from './../../config/Baseurl';

export function CheckoutSuccessUpdate(orderid) {
    return instanceBaseurl.post(`/customer/complete-order/${orderid}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export function CheckoutSuccessUpdatePaypal(paymentid, payerid) {
    return instanceBaseurl.post(`/customer/complete-paypal-order?paymentId=${paymentid}&PayerID=${payerid}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export function CheckoutServicePayment(servicepaymentid) {
    return instanceBaseurl.post(`/customer/service/complete-booking/${servicepaymentid}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}


export function CheckoutServicePaymentPaypal(paymentid, payerid) {
    return instanceBaseurl.post(`/customer/service/complete-paypal-booking?paymentId=${paymentid}&PayerID=${payerid}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}