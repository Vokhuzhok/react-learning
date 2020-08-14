import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    { id: 1, name: "Dormidont" },
    { id: 2, name: "Assiry" },
    { id: 3, name: "Sara" },
    { id: 4, name: "Solomon" },
    { id: 5, name: "Ivan" },
    { id: 6, name: "Yarik" },
    { id: 7, name: "Alise" }
];

let messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "YO!" }
];

let posts = [
  { message: "How are you?", likecount: 30 },
  { message: "It`s my first post", likecount: 50 }
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} posts={posts} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
