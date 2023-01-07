import { useSession } from "next-auth/react";

const LoginActions = () => async (dispatch) => {
    dispatch({ type: LOGIN_LOADING });
    try {
        const { status, data: session } = useSession();

        dispatch({ type: LOGIN_SUCCESS, payload: session });
    } catch (err) {
        dispatch({ type: LOGIN_ERROR, error: "User not found" });
    }
};

export default LoginActions;
