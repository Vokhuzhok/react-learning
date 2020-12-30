import { stopSubmit } from "redux-form";
import { authApi } from "../../api/api";

const SET_AUTH_ME = "SET_AUTH_ME";

let initialState = {
  userId: null,
  email: null,
  login: null,
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_ME:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setUserData = (userId, email, login, auth) => ({
  type: SET_AUTH_ME,
  data: { userId, email, login, auth },
});

export const authMe = () => {
  return (dispatch) => {
   return authApi.AuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
  };
};

export const logIn = (email, password,rememberMe) => {
  return (dispatch) => {
    authApi.postLogin(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(authMe());
      }
      else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
      }
    });
  };
};

export const logOut = () => {
  return (dispatch) => {
    authApi.deleteLogin().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
