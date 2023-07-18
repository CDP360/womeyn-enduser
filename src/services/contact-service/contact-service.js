
import instanceBaseurl from './../../config/Baseurl';

export function ConatctformsUser(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/common/contactus`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function ConatctAdminInfor() {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/contact-info`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}