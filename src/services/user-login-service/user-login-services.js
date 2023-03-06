import axios from "axios";
import instanceBaseurl from './../../config/Baseurl';



export function Userlogin(data) {
    return instanceBaseurl
        .post(`http://localhost:8000/auth/login`, data)
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
}


export function userSignup(data) {
    return instanceBaseurl.post(`/auth/customer/register`, data);
    // .then((res) => {
    //     return res
    // }).catch((err) => {
    //    console.log(err)
    // })
}

export function OTPSend(data) {
    return instanceBaseurl.post(`/auth/customer/verify-otp`, data)
        .then((res) => {
            return res
        }).catch((err) => {
            console.log(err)
        })
}

export function OTPResend(data) {
    return instanceBaseurl.post(`/auth/customer/resend-otp`, data)
        .then((res) => {
            return res
        }).catch((err) => {
            console.log(err)
        })
}


export function CreatePassword(userid, data) {
    return instanceBaseurl.post(`/customer/update-profile/${userid}`, data)
        .then((res) => {
            return res
        }).catch((err) => {
            console.log(err)
        })
}

export function googleOauth() {
    return new Promise((resolve, reject) => {
        instanceBaseurl.get('/customer/oauth/google').then(response => {
            window.open(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function OauthSuccess() {
    return new Promise((resolve, reject) => {
        instanceBaseurl.get('/oauth-success').then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function oAuthSuccessTokenStage() {
    return new Promise(async (resolve, reject) => {
        this.OauthSuccess().then(async (result) => {
            // if (result.tokens) {
            //     // let auth_set = await this.asyncAuthStorage(result)
            //     localStorage.setItem("auth", true)
            //     if (auth_set) {
            //         resolve(true)
            //     }
            // } else {
            //     reject(false)
            // }
            return result;
        }).catch(err => {
            console.log(err)
        })
    })
}