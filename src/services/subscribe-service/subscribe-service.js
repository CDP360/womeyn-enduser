
import instanceBaseurl from './../../config/Baseurl';

export function SubscribeUser(data) {



    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/common/subscribe`,data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}