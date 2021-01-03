import { profileApi } from "../../api/api";

const SET_AUTH_USER_PROFILE = "SET_AUTH_USER_PROFILE";
const SET_IS_LOAD = "SET_IS_LOAD";

let initialState = {
  profileAuth: null,
  isLoad: false,
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOAD:
      return {
        ...state,
        isLoad: true,
      };
    case SET_AUTH_USER_PROFILE:
      return {
        ...state,
        profileAuth: action.profileAuth,
      };
    default:
      return state;
  }
};

export const setAuthUserProfile = (profileAuth) => ({
  type: SET_AUTH_USER_PROFILE, profileAuth
});
export const setIsLoad = (isLoadCase) => ({
  type: SET_IS_LOAD, isLoadCase
})

export const getAuthUserProfile = (userId) => {
  return async (dispatch) => {
    let data = await profileApi.getUserProfile(userId)
    dispatch(setAuthUserProfile(data))
    dispatch(setIsLoad(true))
  }
};



export default settingReducer;