
import instanceBaseurl from './../../config/Baseurl';

export function SubscribeUser(data) {
    // return instanceBaseurl.post(`/common/subscribe`, data).then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })



    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/common/subscribe`,data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}