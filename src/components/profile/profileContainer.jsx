import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { setProfile } from '../../redux/profileReducer';
import axios from 'axios';


class ProfileContainer extends Component {

    componentDidMount() {
   
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setProfile(res.data);
            })
        }

        
    render() {
        return <Profile {...this.props} />  
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setProfile})(ProfileContainer);