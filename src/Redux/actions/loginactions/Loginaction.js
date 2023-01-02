
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from '../../types';

const LoginActions = (data) => async (dispatch) => {

    dispatch({ type: LOGIN_LOADING });
    try {
      
            setTimeout(() => {
                toast.success("Login Success")
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                router.push("/");
                Cookies.set("womeyntoken", "token");
            }, 1000);
     
    } catch (err) {
        dispatch({ type: LOGIN_ERROR, error: "User not found" });
    }
};

export default LoginActions;
