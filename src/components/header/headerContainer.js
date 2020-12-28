import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { setLogin, logout } from '../../redux/authReducer'

class HeaderContainer extends Component {
    


    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <Header {...this.props} logout={this.logout} />
        )
    }

}

let mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { setLogin, logout })(HeaderContainer);