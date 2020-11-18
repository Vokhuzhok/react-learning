const ADD_POST = "ADD_POST";
const UPDATE_NEW_TEXT_POST = "UPDATE_NEW_TEXT_POST";
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';

let initialState = {
  newText: "",
  posts: [
    { id: 1, message: "How are you?", likecount: 30 },
    { id: 2, message: "It`s my first post", likecount: 50 },
  ],
  profile: null
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
        profile: action.profile
      };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewTextPost = (text) => ({ type: UPDATE_NEW_TEXT_POST, text });
export const setCurrentProfile = (profile) => ({ type: SET_CURRENT_PROFILE, profile})

export default profileReducer;
