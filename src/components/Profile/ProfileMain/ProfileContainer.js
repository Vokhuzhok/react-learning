import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile';
import {setCurrentProfile} from '../../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { profileApi } from '../../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount () {
    let userId = this.props.match.params.userId;
   profileApi.getProfile(userId)
      .then((data) => {
        this.props.setCurrentProfile(data);
      });
    }

    render () {
        return <Profile {...this.props} profile = {this.props.profile} />;
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUserUrl = withRouter (ProfileContainer)

export default connect( mapStateToProps, { setCurrentProfile }) (WithUserUrl);