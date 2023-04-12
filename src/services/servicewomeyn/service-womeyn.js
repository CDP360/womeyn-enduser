import instanceBaseurl from "../../config/Baseurl";


export function Serviceusers() {
    return instanceBaseurl.get(`/common/services`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}



export function ServiceusersGetSingle(data) {
    return instanceBaseurl.get(`/common/services/${data}`).then((res) => {
        return res;
    }).catch((err) => {
        return err?.response?.data?.message;
    })
}


export function ServiceusersGetSingleId(id) {
    return instanceBaseurl.get(`/customer/service/${id}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}



export function ServiceBooking(data) {
    return instanceBaseurl.post(`/customer/service/booking`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}




export function ServiceBookingUsers() {
    return instanceBaseurl.get(`/customer/bookings`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}






