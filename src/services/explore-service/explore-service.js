import instanceBaseurl from "../../config/Baseurl";


export function ExploreCategorys() {
    // return instanceBaseurl.get('/common/explore').then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    // })

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/explore`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}