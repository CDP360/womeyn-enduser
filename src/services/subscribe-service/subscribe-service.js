
import instanceBaseurl from './../../config/Baseurl';

export function SubscribeUser(data) {
    return instanceBaseurl.post(`/common/subscribe`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}