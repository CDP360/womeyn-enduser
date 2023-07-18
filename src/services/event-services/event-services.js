import instanceBaseurl from "../../config/Baseurl";


export function getEvents(current) {

    if (current) {
        return new Promise((resolve, reject) => {
            instanceBaseurl.get(`/common/events?limit=12&page=${current}`).then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }
    else {
        return new Promise((resolve, reject) => {
            instanceBaseurl.get(`/common/events?limit=12`).then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }

}

export function getSingleEvent(id) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/events/${id}`,).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}