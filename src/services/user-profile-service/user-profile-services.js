
import instanceBaseurl from './../../config/Baseurl';

export function Addaddress(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/addresses`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function GetAddressData() {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/addresses`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function DeleteAddress(id) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.delete(`/customer/delete-address/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function SingleAddress(id) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/addresses/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}




export function UpdateAddress(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/addresses`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}








