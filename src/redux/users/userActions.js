import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from "./userConsts";
import Axios from "axios";

export const getUserRequest = () => ({ type: LOAD_USER_REQUEST });
export const getUserSuccess = data => ({ type: LOAD_USER_SUCCESS, payload: data });
export const getUserError = errorMsg => ({ type: LOAD_USER_ERROR, payload: errorMsg });

export const getUser = url => {
  return dispatch => {
    dispatch(getUserRequest());
    Axios.get(url)
      .then(response => {
        const data = response.data;
        let processedData = {
          username: data.login,
          id: data.id,
          avatar: data.avatar_url,
          name: data.name,
          location: data.location,
          followers: data.followers,
          following: data.following,
          public_repos: data.public_repos,
        };
        dispatch(getUserSuccess(processedData));
      })
      .catch(err => {
        console.log(err.response.data);
        if (err.response && err.response.data && err.response.data.message) dispatch(getUserError("Uh Oh, " + err.response.data.message));
        else dispatch(getUserError("Something went wrong"));
      });
  };
};
