import instanceBaseurl from "../../config/Baseurl";
export function CustomerOrders(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/order`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function GetOrders() {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/order`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}



export function CustomerOrderCancel(id) {



    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/cancel-order/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
