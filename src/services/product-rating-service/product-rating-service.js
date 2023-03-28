
import instanceBaseurl from './../../config/Baseurl';


export function ProductRatingView(data) {
    return instanceBaseurl.post(`/customer/add-review`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}