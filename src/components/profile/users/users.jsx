import React from 'react'
import s from './users.module.css'
import unknownUser from './unknownUser.jpg'
import Preloader from '../../common/preloader/preloader';
import { NavLink } from 'react-router-dom';
import ToggleFollow from '../../common/buttonFollow/toggleFollow';


const Users = (props) => {
    let start;
    props.currentPage < 5 ? start = 1 : start = props.currentPage - 4;
    let pages = [];

    for (let i = start; i <= start + 8; i++) {

        pages.push(i)
    }
    return <div>

        <div>
            {
                pages.map((p) => {
                    return <span key={p} onClick={() => props.onSetCurrentPage(p)} className={props.currentPage === p ? s.currentPage : s.pages} > {p}</span>
                })
            }
        </div>
        <div> {(props.isLoaded) ? <Preloader /> : props.users.map(u => {
            return (
                <div key={u.id} className={s.usersWrapper}>
                    <div className={s.avaBtnWrapper}>
                        <div className={s.avatar}>
                            <NavLink to={`profile/${u.id}`} >
                                <img src={u.photos.small ? u.photos.small : unknownUser} alt="avatar" />
                            </NavLink>
                            <ToggleFollow 
                                followed={u.followed} 
                                id={u.id} 
                                followingInProgress={props.followingInProgress}
                                setToggleUnFollow={props.setToggleUnFollow}
                                setToggleFollow={props.setToggleFollow} />
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
        } </div>
        {

        }

    </div>
}

export default Users;