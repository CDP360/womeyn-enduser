
import instanceBaseurl from './../../config/Baseurl';

export function CheckoutSuucessUpdate(orderid) {
    return instanceBaseurl.post(`/customer/complete-order/${orderid}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}