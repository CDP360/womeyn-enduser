import ShippingApiUrl from "../../config/shippingurl"

export function getCarriersshipping() {
    return new Promise((resolve, reject) => {
        ShippingApiUrl.get('/carriers').then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function postestimateshipping(data) {
    return new Promise((resolve, reject) => {
        ShippingApiUrl.post('/rates/estimate',data).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function postShipment(data) {
    return new Promise((resolve, reject) => {
        ShippingApiUrl.post('/shipments',data).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}