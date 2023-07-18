import ShippingApiUrl from "../../config/shippingurl"
import instanceBaseurl from './../../config/Baseurl';





export function postShipmentrates(data) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.post('/common/rates', data).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}




export function postShipmentcreate(data) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.post('/customer/rates', data).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}


export function getShipmentTrack(id) {
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/track/${id}`).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}