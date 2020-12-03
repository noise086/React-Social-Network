import React from 'react';
import s from './profileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
                <img src='https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_35.jpg' alt='avatar'></img>
            </div>
            <div className={s.description}>
                description
            </div>
        </div>
    )
}

export default ProfileInfo;