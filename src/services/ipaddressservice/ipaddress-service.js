

import ConfigIpAddress from "../../config/ipaddressurl"

export function IpAddress() {
    return new Promise((resolve, reject) => {
        ConfigIpAddress.get(`?format=json`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

// https://geolocation-db.com/json/