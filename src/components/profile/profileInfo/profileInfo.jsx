import React from 'react';
import s from './profileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BwjX3A664aigfCJDHqnS9fPD70Sm4oHJcg&usqp=CAU' alt='avatar'></img>
            </div>
            <div className={s.description}>
                description
            </div>
        </div>
    )
}

export default ProfileInfo;