const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

const profileReducer = (state, action) => {
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