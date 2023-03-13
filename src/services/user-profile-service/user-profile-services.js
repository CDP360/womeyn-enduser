
import instanceBaseurl from './../../config/Baseurl';

export function Addaddress(data) {
    return instanceBaseurl.post(`/customer/addresses`, data).then((res) => {
        return res;
    }).catch((err) => {
        console.log(err);
    })
}


export function GetAddressData(){
    return instanceBaseurl.get(`/customer/addresses`).then((res)=>{
        return res
    }).catch((err)=>{
        console.log(err);
    })
}