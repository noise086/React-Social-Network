import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUsersTC, setCurrentPage, setToggleFollow, setToggleUnFollow } from '../../../redux/usersReducer';
import { stateCurrentPage, stateFollowingInProgress, stateIsLoaded, statePageSize, stateTotalCount, stateUsers } from '../../../redux/usersSelectors';
import Users from './users';

class UsersContainer extends Component {
   
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersTC(currentPage, pageSize);
    }
    onSetCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        this.props.getUsersTC(currentPage, this.props.pageSize);
    }
    render() {
        return <Users 
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    isLoaded={this.props.isLoaded}
                    onSetCurrentPage={this.onSetCurrentPage}
                    followingInProgress={this.props.followingInProgress}
                    setToggleUnFollow={this.props.setToggleUnFollow}
                    setToggleFollow={this.props.setToggleFollow} />
    }
}


let mapStateToProps = (state) => {
    return {
        users: stateUsers(state),
        totalCount: stateTotalCount(state),
        pageSize: statePageSize(state),
        currentPage: stateCurrentPage(state),
        isLoaded: stateIsLoaded(state),
        followingInProgress: stateFollowingInProgress(state),
        // isAuth: state.auth.isAuth

    }
}           

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsersTC,
        setToggleUnFollow,
        setToggleFollow
    })
)(UsersContainer)