import { profileApi } from "../../api/api";

const ADD_POST = "ADD_POST";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "How are you?", likecount: 30 },
    { id: 2, message: "It`s my first post", likecount: 50 },
  ],
  profile: null,
  status: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: action.text,
        likecount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
      case SET_STATUS:
        return {
          ...state,
          status: action.status
        };
    default:
      return state;
  }
};

export const addPost = (text) => ({ type: ADD_POST, text });
export const setCurrentProfile = (profile) => ({
  type: SET_CURRENT_PROFILE,
  profile,
});
export const setUserStatusInState = (status) =>({
  type:SET_STATUS,
  status
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileApi.getUserProfile(userId).then((data) => {
      dispatch(setCurrentProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileApi.getUserStatus(userId).then((data) => {
      dispatch(setUserStatusInState(data));
    });
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileApi.setUserStatus(status).then((resultCode) => {
      if (resultCode === 0) {dispatch(setUserStatusInState(status))}
    });
  };
};

export default profileReducer;
