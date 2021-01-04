import { profileApi } from "../../api/api";

const SET_AUTH_USER_PROFILE = "SET_AUTH_USER_PROFILE";
const SET_IS_LOAD = "SET_IS_LOAD";
const SET_LFAJ = "SET_LFAJ";

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
      case SET_LFAJ:
        return {
          ...state.profileAuth,
          lookingForAJob: action.lookingForAJob
        };
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
export const setLookingForAJob = (lookingForAJob) => ({
  type: SET_LFAJ,
  lookingForAJob
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
    let resultCode = await profileApi.putAuthUserProfile(profile);
    if (resultCode === 0) {
      setAuthUserProfile(profile);
      setIsLoad(true);
    }
  };
};

export default settingReducer;
