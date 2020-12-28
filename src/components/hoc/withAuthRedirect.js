import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
// debugger
export const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props} />
        }
    }

    const WithConnectAuthRedirect = connect(mapStateToProps)(RedirectComponent)

    return WithConnectAuthRedirect
}

