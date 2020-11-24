import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setUserData} from '../../redux/auth-reducer';
import { authApi } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount () {
       authApi.getAuth()
      .then(data => {
          if (data.resultCode === 0){
            let {id, email, login} = data.data;
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