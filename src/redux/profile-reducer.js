const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

let initialState = {
    newText: '',
    posts: [
      { id:1, message: "How are you?", likecount: 30 },
      { id:2, message: "It`s my first post", likecount: 50 },
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newText,
                likecount: 0
              };
              state.posts.push(newPost);
              state.newText = '';
              return state;
        case UPDATE_NEW_TEXT_POST:
            state.newText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator  = () => ({type: ADD_POST});
export const updateNewTextPostActionCreator = (text) => 
  ({type: UPDATE_NEW_TEXT_POST, newText: text});

export default profileReducer;