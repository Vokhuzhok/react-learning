import { stopSubmit } from "redux-form";
import { profileApi } from "../../api/api";

const SET_AUTH_USER_PROFILE = "SET_AUTH_USER_PROFILE";
const SET_IS_LOAD = "SET_IS_LOAD";
const SET_AUSER_PHOTO ="SET_AUSER_PHOTO"

let initialState = {
  profileAuth: null,
  isLoad: false,
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOAD:
      return {
        ...state,
        isLoad: action.isLoadCase,
      };
    case SET_AUTH_USER_PROFILE:
      return {
        ...state,
        profileAuth: action.profileAuth,
      };
      case SET_AUSER_PHOTO:
        return {
          ...state,
          profileAuth: {...state.profileAuth, photos:action.photos}
        }
    default:
      return state;
  }
};

export const setAuthUserProfile = (profileAuth) => ({
  type: SET_AUTH_USER_PROFILE,
  profileAuth,
});
export const setIsLoad = (isLoadCase) => ({
  type: SET_IS_LOAD,
  isLoadCase,
});
export const setAUserPhoto = (photos) =>({
  type: SET_AUSER_PHOTO,
  photos,

})

export const loadAuthUserProfile = (userId) => {
  return async (dispatch) => {
    let data = await profileApi.getUserProfile(userId);
    dispatch(setAuthUserProfile(data));
    dispatch(setIsLoad(true));
  };
};
export const putAuthUserProfile = (profile) => {
  return async (dispatch) => {
    dispatch(setIsLoad(false));
    let data = await profileApi.putAuthUserProfile(profile);
    if (data.resultCode === 0) {
      setAuthUserProfile(profile);
      setIsLoad(true);
    }
    else {
      const message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit ("settings", {_error: message}))
    }
  };
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    const data = await profileApi.putAuthUserPhoto(file);
    if (data.resultCode === 0) {dispatch(setAUserPhoto(data.data.photos))}
  }
}

export default settingReducer;
