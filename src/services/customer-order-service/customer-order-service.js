import instanceBaseurl from "../../config/Baseurl";
export function CustomerOrders(data) {
    return instanceBaseurl.post(`/customer/order`, data).then((res) => {
        return res
    }).catch((err) => {
        console.log(err);
    })
}