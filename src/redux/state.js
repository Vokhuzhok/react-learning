import { rerenderEntityTree } from "../render";

let state = {
  profilePage: {
    newPostText = '',
    posts: [
      { id:1, message: "How are you?", likecount: 30 },
      { id:2, message: "It`s my first post", likecount: 50 },
    ],
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Dormidont",
        ava: "http://img.crazys.info/files/i/2012.12.25/1356372924_28.jpg",
      },
      {
        id: 2,
        name: "Assiry",
        ava: "https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg",
      },
      {
        id: 3,
        name: "Sara",
        ava: "https://moi-tvoi.ru/upload/iblock/photos215/product_214674_0.jpg",
      },
      {
        id: 4,
        name: "Solomon",
        ava: "https://cdn1.flamp.ru/8c5aead96cc82fbde736b4be1fe17432.jpg",
      },
      { id: 5, 
        name: "Ivan", 
        ava: "https://i.imgur.com/ad8toZw.jpg" },
      {
        id: 6,
        name: "Yarik",
        ava: "https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png",
      },
      {
        id: 7,
        name: "Alise",
        ava: "https://yt3.ggpht.com/a/AATXAJzwzRrAdErWWD7zuI-KBzY4Nma9XUotZ5UQBQ=s900-c-k-c0xffffffff-no-rj-mo",
      },
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "YO!" },
    ],
  },
};
export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likecount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntityTree(state);
};

export let updateNewTextPost = (newText) => {
  state.profilePage.newPostPost = newText;
  rerenderEntityTree(state);
}
export default state;
