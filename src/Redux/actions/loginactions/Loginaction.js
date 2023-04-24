
import { UserProfileInformation } from "../../../services/user-login-service/user-login-services";


export const LoginActions = (dispatch) => {
    const userid = localStorage.getItem("userid");
    UserProfileInformation(JSON.parse(userid)).then((res) => {
        if (res?.data) {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res?.data
            })
        }
    }).catch((err) => {
        dispatch({
            type: "LOGIN_ERROR",
            payload: err,

        })
    })
}


