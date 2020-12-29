import React from "react";
import { connect } from "react-redux";
import {Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Friends from "./components/Friends/Friends";
import HeaderContainer from "./components/Header/HeaderContainer";
import { LoginContainer } from "./components/Login/LoginContainer";
import Music from "./components/Music/Music";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileMain/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {getInit} from "./redux/app-reducer";

class App extends React.Component {

  componentDidMount() {
    this.props.getInit()
  }

  render () { 
    if (!this.props.initialised) {
      return <Preloader />
    }
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navigation />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => <Friends />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
  );}
}

let mapStateToProps = (state) => ({
  initialised: state.app.initialised
})

export default compose(
  connect (mapStateToProps,{getInit}),
  withRouter
  ) (App);
