import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from "./userConsts";
import Axios from "axios";

export const getUserRequest = () => ({type: LOAD_USER_REQUEST});
export const getUserSuccess = (data) => ({type: LOAD_USER_SUCCESS, payload: data});
export const getUserError = (errorMsg) => ({type: LOAD_USER_ERROR, payload: errorMsg});


export const getUser = url => {
    return (dispatch,getState) => {
        dispatch(getUserRequest());
        Axios.get(url)
        .then(response => {
            const data = response.data;
            console.log(data);
            dispatch(getUserSuccess(data));
        })
        .catch(err => {
            if(err.response){
                console.log(err.response);
                dispatch(getUserError(err.response.data));
            }
            else{
                dispatch(getUserError("Something went wrong"));
            }
        })
    }
}