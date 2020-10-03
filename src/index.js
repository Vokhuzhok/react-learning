import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import store from './redux/state';

let rerenderEntityTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state}
        addPost={store.addPost.bind(store)} 
        updateNewTextPost={store.updateNewTextPost.bind(store)} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

rerenderEntityTree(store.getState () );

store.subscribe(rerenderEntityTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
