import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC } from '../../../redux/usersReducer';
import Users from './users';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followAC(userId));
        },
        onUnfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users, totalCount) => {
            dispatch(setUsersAC(users, totalCount));
        },
        setCurrentPage: (pageId) => {
            dispatch(setCurrentPageAC(pageId));
        }
        
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;