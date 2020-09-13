import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewTextPost } from "./redux/state";

export let rerenderEntityTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewTextPost={updateNewTextPost} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

