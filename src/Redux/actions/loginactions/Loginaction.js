
import { UserProfileInformation } from "../../../services/user-login-service/user-login-services";


export const LoginActions = async (dispatch) => {
    const userid = localStorage.getItem("userid");
    try {
        if(userid)
        {
            const responses = await UserProfileInformation(JSON.parse(userid));
            if (responses) {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: responses?.data
                })
            }
        }
        else
        {
            return null
        }
      
    }
    catch (err) {
        dispatch({
            type: "LOGIN_ERROR",
            payload: {
                message: "unAuthorized User",
                code: 401 || 404
            },

        })
    }
}


