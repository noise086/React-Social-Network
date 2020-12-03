import React from 'react';
import MyPosts from './myPosts/myPosts';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';



const Profile = ({state, addPost, onPostChange}) => {
    return (
        <div className={s.content}>
            <div className={s.profileImg}>
                <img src='https://img-fotki.yandex.ru/get/4700/202027913.2/0_b7e42_26e669d8_orig.jpg' alt='pic' />
            </div>
            <ProfileInfo />
            <MyPosts state={state} addPost={addPost} onPostChange={onPostChange} />
        </div>
    )
}

export default Profile;