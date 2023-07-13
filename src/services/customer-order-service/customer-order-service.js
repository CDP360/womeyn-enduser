import instanceBaseurl from "../../config/Baseurl";
export function CustomerOrders(data) {
    // return instanceBaseurl.post(`/customer/order`, data).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/order`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function GetOrders() {
    // return instanceBaseurl.get(`/customer/order`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/order?sortBy=updatedAt:desc&limit=5`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}



export function CustomerOrderCancel(id) {
    // return instanceBaseurl.post(`/customer/cancel-order/${id}`).then((res) => {
    //     return res
    // }).catch((err) => {
    //     return err;
    // })


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/cancel-order/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
