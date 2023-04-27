
import instanceBaseurl from './../../config/Baseurl';

export function Addaddress(data) {
    // return instanceBaseurl.post(`/customer/addresses`, data).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/addresses`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function GetAddressData() {
    // return instanceBaseurl.get(`/customer/addresses`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/addresses`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function DeleteAddress(id) {
    // return instanceBaseurl.delete(`/customer/delete-address/${id}`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.delete(`/customer/delete-address/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}







