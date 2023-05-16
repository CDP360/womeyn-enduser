import instanceBaseurl from "../../config/Baseurl";


export function getEvents() {
   

    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/events`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function getingleEvent(id) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.get(`/common/events/${id}`, ).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}