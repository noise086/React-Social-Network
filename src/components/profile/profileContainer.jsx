import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { setProfileTC, setStatusTC, updateStatusTC } from '../../redux/profileReducer';
import { WithAuthRedirect } from '../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { stateProfile, stateStatus, stateIsAuth, stateAuthorizedId } from '../../redux/profileSelectors';


class ProfileContainer extends Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
                userId = this.props.authorizedId
            //     if(this.props.isAuth) {
            //     userId = this.props.authorizedId
            // }
        }
            this.props.setProfileTC(userId)
            this.props.setStatusTC(userId)
        }

        
    render() {       
        return <Profile {...this.props} />  
    }
}
// debugger
let mapStateToProps = (state) => ({
    profile: stateProfile(state),
    status: stateStatus(state),
    isAuth: stateIsAuth(state),
    authorizedId: stateAuthorizedId(state)
})

export default compose(
    connect(mapStateToProps, {setProfileTC, setStatusTC, updateStatusTC }),
    WithAuthRedirect,
    withRouter
)(ProfileContainer)
