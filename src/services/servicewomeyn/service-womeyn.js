import instanceBaseurl from "../../config/Baseurl";


export function Serviceusers(data, current) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/services?limit=12`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function ServiceusersSerach(data, current) {



    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/services?search=${data}&limit=12&page=${current}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}



export function ServiceusersGetSingle(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/services/${data}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function ServiceusersGetSingleId(id) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/service/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}



export function ServiceBooking(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/service/booking`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}




export function ServiceBookingUsers() {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/bookings`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}




export function InvoicedownloadService(orderid) {

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/service/invoice/${orderid}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

