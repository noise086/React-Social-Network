import React from 'react';
import MyPostsContainer from './myPosts/myPostsContainer';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import bg from './background.jpg'



const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.profileImg}>
                <img src={bg} alt='pic' />
            </div>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;