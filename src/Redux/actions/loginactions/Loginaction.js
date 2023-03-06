import instanceBaseurl from "../../../config/Baseurl";


export const LoginActions = (dataresponse) => (dispatch) => {
    console.log("67", data)
    const userid = localStorage.getItem("womenUserid");
    const dataresponse = instanceBaseurl.get(`/seller/basicinfo/${JSON.parse(userid)}`);
    dispatch({
        type: "LOGIN_SUCCESS",
        payload: dataresponse
    })
}   