
import instanceBaseurl from './../../config/Baseurl';

export function Addaddress(data) {
    return instanceBaseurl.post(`/customer/addresses`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}


export function GetAddressData() {
    return instanceBaseurl.get(`/customer/addresses`).then((res) => {
        return res
    }).catch((err) => {
        return err;
    })
}


export function DeleteAddress(id) {
    return instanceBaseurl.delete(`/customer/delete-address/${id}`).then((res) => {
        return res
    }).catch((err) => {
        return err;
    })
}



export function GetOrders() {
    return instanceBaseurl.get(`/customer/order`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}




