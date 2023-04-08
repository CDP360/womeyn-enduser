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
        return err;
    })
}
