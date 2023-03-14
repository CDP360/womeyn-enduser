
import instanceBaseurl from './../../config/Baseurl';


export function ProductView(data) {
    return instanceBaseurl.get(`/common/product/${data}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}