const SET_AUTH_ME = 'SET_AUTH_ME';

let initialState = {
    userId: null,
    email: null,
    login: null,
    auth: false
};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_AUTH_ME:
            return {
                ...state,
                ...action.data,
                auth: true
            }
            default:
                return state;
    }
}

export const setUserData = (userId, email, login) => ({ type: SET_AUTH_ME, data:{userId, email, login} });

export default authReducer;