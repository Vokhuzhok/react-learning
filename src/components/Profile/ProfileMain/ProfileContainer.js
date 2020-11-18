import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile';
import {setCurrentProfile, addPost, updateNewTextPost} from '../../../redux/profile-reducer'

class ProfileContainer extends React.Component {
    componentDidMount () {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/12406`)
      .then((response) => {
        this.props.setCurrentProfile(response.data);
      });
    }

    render () {
        return <Profile {...this.props} profile = {this.props.profile} />;
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect( mapStateToProps, { setCurrentProfile, addPost, updateNewTextPost }) (ProfileContainer);