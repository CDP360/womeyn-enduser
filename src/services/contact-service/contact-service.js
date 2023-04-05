
import instanceBaseurl from './../../config/Baseurl';

export function ConatctformsUser(data) {
    return instanceBaseurl.post(`/common/contactus`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}