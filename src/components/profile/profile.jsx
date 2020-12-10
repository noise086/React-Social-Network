import React from 'react';
import MyPostsContainer from './myPosts/myPostsContainer';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import bg from './background.jpg'



const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.profileImg}>
                <img src={bg} alt='pic' />
            </div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;