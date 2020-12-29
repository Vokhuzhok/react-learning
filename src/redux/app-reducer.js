import { getAuth } from "./auth-reducer";

const SET_INIT = "SET_INIT";

let initialState = {
  initialised: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        initialised: true,
      };
    default:
      return state;
  }
};

const setInit = () => ({type: SET_INIT});

export const getInit = () => (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise])
    .then (() => {
      debugger;
      dispatch(setInit())
    });
};

export default appReducer;