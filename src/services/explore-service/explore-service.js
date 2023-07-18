import instanceBaseurl from "../../config/Baseurl";


export function ExploreCategorys() {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/explore`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}