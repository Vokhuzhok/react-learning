import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reduser";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./reducers/app-reducer";
import settingReducer from "./reducers/setting-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  setting: settingReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
