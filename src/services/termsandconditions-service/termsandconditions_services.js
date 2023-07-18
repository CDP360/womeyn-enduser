import instanceBaseurl from './../../config/Baseurl';

export function Gettermsandconditions(data) {

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/static-info?typeId=${data}`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}