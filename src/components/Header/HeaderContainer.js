import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import setUserData from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount () {
        axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
          if (response.data.resultCode === 0){
            let {id, email, login} = response.data.data;
            debugger;
            this.props.setUserData (id, email, login)
            };
        })
    }

    render () {
        return < Header {...this.props} />
    }
};

let mapStateToProps = (state) => ({
    login: state.auth.login,
    auth: state.auth.auth
})

export default connect(mapStateToProps, {setUserData}) (HeaderContainer);