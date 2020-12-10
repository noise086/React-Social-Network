import * as Axios from 'axios';
import React from 'react';
import s from './users.module.css'
import unknownUser from './unknownUser.jpg'



const Users = (props) => {
    if (props.users.length === 0) {
    Axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => {
            props.setUsers(res.data.items);
        })
    }


    return (
        props.users.map(u => {
            return (
                <div key={u.id} className={s.usersWrapper}>
                    <div className={s.avaBtnWrapper}>
                        <div className={s.avatar}>
                            <img src={u.photos.small ? u.photos.small : unknownUser} alt="avatar" />
                            { u.followed ? 
                            <button className={s.unfollow} onClick={() => props.onUnfollow(u.id)} >Unfollow</button> : 
                            <button className={s.follow} onClick={() => props.onFollow(u.id)} >Follow</button> }
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
    )
}

export default Users;