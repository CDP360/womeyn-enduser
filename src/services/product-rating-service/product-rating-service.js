
import instanceBaseurl from './../../config/Baseurl';


export function ProductRatingView(data) {



    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/add-review`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}