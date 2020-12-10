import * as axios from 'axios';
import React, { Component } from 'react';
import s from './users.module.css'
import unknownUser from './unknownUser.jpg'


// debugger

export default class Users extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items, res.data.totalCount);
            })
    }
    onSetCurrenPage = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items, res.data.totalCount);
            })
    }
    render() { 
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let start;
        this.props.currentPage < 5 ? start = 1 : start = this.props.currentPage - 4 ;
        let pages = [];
        
        for (let i = start; i <= start + 8; i++) {
         
                pages.push(i)
        }


        // debugger
        return <div>

            <div>
                {
                    pages.map((p) => {
                        return <span onClick={() => this.onSetCurrenPage(p)} className={this.props.currentPage === p ? s.currentPage : s.pages} > {p}</span>
                    })
                }
            </div>


            {

                this.props.users.map(u => {
                    return (
                        <div className={s.usersWrapper}>
                            <div className={s.avaBtnWrapper}>
                                <div className={s.avatar}>
                                    <img src={u.photos.small ? u.photos.small : unknownUser} alt="avatar" />
                                    {u.followed ?
                                        <button
                                            className={s.unfollow}
                                            onClick={() => this.props.onUnfollow(u.id)} >Unfollow</button> :
                                        <button
                                            className={s.follow}
                                            onClick={() => this.props.onFollow(u.id)} >Follow</button>}
                                </div>
                            </div>
                            <div className={s.infoWrapper}>
                                <div className={s.nameStatus}>
                                    <div className="name">{u.name}</div>
                                    <div className={s.status}>{u.status}</div>
                                </div>
                                <div className={s.location}>
                                    <div className={s.country}>{'u.location.country'}</div>
                                    <div className={s.city}>{'u.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    }

}