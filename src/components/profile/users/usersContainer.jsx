import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onFollow, setUsers, onUnfollow, setCurrentPage, togglePreloader } from '../../../redux/usersReducer';
import Users from './users';

class UsersContainerAPI extends Component {
    componentDidMount() {
        this.props.togglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items, res.data.totalCount);
                this.props.togglePreloader(false)
            })
    }
    onSetCurrentPage = (p) => {
        this.props.setCurrentPage(p)
        this.props.togglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items, res.data.totalCount);
                this.props.togglePreloader(false)
            })
    }
    render() {
        return <Users 
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    isLoaded={this.props.isLoaded}
                    onSetCurrentPage={this.onSetCurrentPage}
                    onFollow={this.props.onFollow}
                    onUnfollow={this.props.onUnfollow} />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoaded: state.usersPage.isLoaded
    }
}           



const UsersContainer = connect(mapStateToProps, {
    onFollow,
    onUnfollow,
    setUsers,
    setCurrentPage,
    togglePreloader
}) (UsersContainerAPI);

export default UsersContainer;