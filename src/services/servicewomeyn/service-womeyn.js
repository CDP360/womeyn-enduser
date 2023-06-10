import instanceBaseurl from "../../config/Baseurl";


export function Serviceusers(current) {
    // return instanceBaseurl.get(`/common/services`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })
    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/services?page=0&limit="100"`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}



export function ServiceusersGetSingle(data) {
    // return instanceBaseurl.get(`/common/services/${data}`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err?.response?.data?.message;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/services/${data}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function ServiceusersGetSingleId(id) {
    // return instanceBaseurl.get(`/customer/service/${id}`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/service/${id}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}



export function ServiceBooking(data) {
    // return instanceBaseurl.post(`/customer/service/booking`, data).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/service/booking`,data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}




export function ServiceBookingUsers() {
    // return instanceBaseurl.get(`/customer/bookings`).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/customer/bookings`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}






