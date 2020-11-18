import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileMain/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        
        <Header />

        <Navigation />

        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/profile" render={() => <ProfileContainer />} />

          <Route path="/news" render={() => <News />} />

          <Route path="/music" render={() => <Music />} />

          <Route path="/settings" render={() => <Settings />} />

          <Route path="/friends" render={() => <Friends />} />

          <Route path="/users" render={() => <UsersContainer />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
