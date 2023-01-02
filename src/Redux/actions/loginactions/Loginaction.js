
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from '../../types';

const LoginActions = (data) => async (dispatch) => {
    dispatch({ type: LOGIN_LOADING });
    try {
        const login = await
            setTimeout(() => {
                toast.success("Login Success")
                dispatch({ type: LOGIN_SUCCESS, payload: data });
                Cookies.set("womeyntoken", "token");
            }, 1000);
        return login;
    } catch (err) {
        dispatch({ type: LOGIN_ERROR, error: "User not found" });
    }
};

export default LoginActions;
