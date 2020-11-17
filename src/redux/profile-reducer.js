const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";

let initialState = {
  newText: "",
  posts: [
    { id: 1, message: "How are you?", likecount: 30 },
    { id: 2, message: "It`s my first post", likecount: 50 },
  ],
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
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewTextPost = (text) => ({ type: UPDATE_NEW_TEXT_POST, text });

export default profileReducer;
