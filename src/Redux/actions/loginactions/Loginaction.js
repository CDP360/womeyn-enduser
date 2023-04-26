
import { UserProfileInformation } from "../../../services/user-login-service/user-login-services";


export const LoginActions = async (dispatch) => {
    const userid = localStorage.getItem("userid");
    try {
        const responses = await UserProfileInformation(JSON.parse(userid));
        if (responses) {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: responses?.data
            })
        }
    }
    catch (err) {
        dispatch({
            type: "LOGIN_ERROR",
            payload: {
                message: err?.response?.data?.message,
                code: err?.response?.data?.code
            },

        })
    }
}


