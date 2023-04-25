
import instanceBaseurl from './../../config/Baseurl';


export function Userlogin(data) {
    return instanceBaseurl
        .post(`/auth/customer/login`, data)
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
            return err;
        })
}
export function CreateProfileuser(data) {
    return instanceBaseurl.post(`/customer/update-profile`, data)
        .then((res) => {
            return res
        }).catch((err) => {
            return err;
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
    return instanceBaseurl.get('/customer/oauth/success').then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}
export function UserProfileImageupload(userid, data) {
    return instanceBaseurl.post(`/customer/update-photo/${userid}`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err?.response?.data?.message
    })
}
export function UserProfileInformation(userid) {

    return instanceBaseurl.get(`/customer/basicinfo/${userid}`).then((res) => {
        return res;
    }).catch((err) => {

        console.log(err, "k")
        return err;
    })
}
export function UserForgetPassword(data) {
    return instanceBaseurl.post(`/auth/customer/forgot-password`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export function UserResetPassword(token, data) {
    return instanceBaseurl.post(`/auth/customer/reset-password?token=${token}`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export function Changepassworduser(data) {
    return instanceBaseurl.post(`/customer/change-password`, data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}