const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessages = {
                id: 4,
                message: state.newMessage,
              };
              state.messages.push(newMessages);
              state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }

    return state;
}

export const addMessageActionCreator  = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (Mtext) => 
  ({type: UPDATE_NEW_MESSAGE, newMessage: Mtext});

export default dialogsReducer;