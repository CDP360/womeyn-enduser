
import { GetFavoritsList } from './../../../services/user-favorits-service/User-favorits-service';
export const FavortActions = (dispatch) => {
    GetFavoritsList().then((res) => {

        dispatch({
            type: "FAVORTS_SUCCESS",
            payload: res?.data[0]?.results
        })
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: "FAVORTS_ERROR",
            payload: true,

        })
    })
}
