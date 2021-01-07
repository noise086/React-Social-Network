import React from 'react'
import s from './users.module.css'
import unknownUser from './unknownUser.jpg'
import { NavLink } from 'react-router-dom';
import ToggleFollow from '../../common/buttonFollow/toggleFollow';

const User = ({user, followingInProgress, setToggleUnFollow, setToggleFollow}) => {
    
            return (
                <div className={s.usersWrapper}>
                    <div className={s.avaBtnWrapper}>
                        <div className={s.avatar}>
                            <NavLink to={`profile/${user.id}`} >
                                <img src={user.photos.small ? user.photos.small : unknownUser} alt="avatar" />
                            </NavLink>
                            <ToggleFollow
                                followed={user.followed}
                                id={user.id}
                                followingInProgress={followingInProgress}
                                setToggleUnFollow={setToggleUnFollow}
                                setToggleFollow={setToggleFollow} />
                        </div>
                    </div>
                    <div className={s.infoWrapper}>
                        <div className={s.nameStatus}>
                            <div className="name">{user.name}</div>
                            <div className={s.status}>{user.status}</div>
                        </div>
                        <div className={s.location}>
                            <div className={s.country}>{'user.location.country'}</div>
                            <div className={s.city}>{'user.location.city'}</div>
                        </div>
                    </div>
                </div>
            )
}

export default User;