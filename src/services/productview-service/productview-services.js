
import instanceBaseurl from './../../config/Baseurl';


export function ProductView() {
    return instanceBaseurl.get(`/common/product/party-wears`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}