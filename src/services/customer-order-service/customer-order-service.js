import instanceBaseurl from "../../config/Baseurl";
export function CustomerOrders(data) {
    return instanceBaseurl.post(`/customer/order`, data).then((res) => {
        return res
    }).catch((err) => {
        return err;
    })
}

export function GetOrders() {
    return instanceBaseurl.get(`/customer/order`).then((res) => {
        return res
    }).catch((err) => {
        return err;
    })
}



export function CustomerOrderCancel(id) {
    return instanceBaseurl.post(`/customer/cancel-order/${id}`).then((res) => {
        return res
    }).catch((err) => {
        return err;
    })
}
