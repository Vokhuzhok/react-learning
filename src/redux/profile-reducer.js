import { profileApi } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_TEXT_POST = "UPDATE_NEW_TEXT_POST";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  newText: "",
  posts: [
    { id: 1, message: "How are you?", likecount: 30 },
    { id: 2, message: "It`s my first post", likecount: 50 },
  ],
  profile: 12751,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newText,
        likecount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newText: "",
      };
    case UPDATE_NEW_TEXT_POST:
      return {
        ...state,
        newText: action.text,
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

export const addPost = () => ({ type: ADD_POST });
export const updateNewTextPost = (text) => ({
  type: UPDATE_NEW_TEXT_POST,
  text,
});
export const setCurrentProfile = (profile) => ({
  type: SET_CURRENT_PROFILE,
  profile,
});
export const setStatus = (status) =>({
  type:SET_STATUS,
  status
});

export const getProfile = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((data) => {
      dispatch(setCurrentProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export default profileReducer;
