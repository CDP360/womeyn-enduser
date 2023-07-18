
import instanceBaseurl from './../../config/Baseurl';


export function Userlogin(data) {



    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/auth/customer/login`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
export function userSignup(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/auth/customer/register`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function OTPSend(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/auth/customer/verify-otp`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
export function OTPResend(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/auth/customer/resend-otp`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
export function CreateProfileuser(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/update-profile`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
export function GoogleOauth() {
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
        instanceBaseurl.get(`/customer/oauth/success`).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
export function UserProfileImageupload(userid, data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/update-photo/${userid}`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}
export function UserProfileInformation(userid) {



    if (userid) {
        return new Promise((resolve, reject) => {
            instanceBaseurl.get(`/customer/basicinfo/${userid}`).then(response => {
                resolve(response)
            }).catch(err => {

                reject(err)
            })
        })
    }
    else {
        return null
    }


}
export function UserForgetPassword(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/auth/customer/forgot-password`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function UserResetPassword(token, data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/auth/customer/reset-password?token=${token}`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function Changepassworduser(data) {


    return new Promise((resolve, reject) => {
        instanceBaseurl.post(`/customer/change-password`, data).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}


export function logout(data) {
    return new Promise((resolve, reject) => {
        localStorage.removeItem("userid");
        localStorage.removeItem("userToken");
        localStorage.removeItem("userTokens");
        localStorage.removeItem("whish");
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        localStorage.removeItem("productid");
        localStorage.removeItem('signupuser');
        resolve(true)
    })
}