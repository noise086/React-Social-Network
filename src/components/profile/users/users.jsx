import React from 'react';
import s from './users.module.css'

const Users = (props) => {
    return (
        props.users.map(u => {
            return (
                <div className={s.usersWrapper}>
                    <div className={s.avaBtnWrapper}>
                        <div className={s.avatar}>
                            <img src={u.avatarUrl} alt="avatar" />
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className={s.infoWrapper}>
                        <div className={s.nameStatus}>
                            <div className="name">{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                        </div>
                        <div className={s.location}>
                            <div className={s.country}>{u.location.country}</div>
                            <div className={s.city}>{u.location.city}</div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Users;