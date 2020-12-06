import React from 'react';
import MyPostsContainer from './myPosts/myPostsContainer';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';



const Profile = ({store, state}) => {
    return (
        <div className={s.content}>
            <div className={s.profileImg}>
                <img src='https://img-fotki.yandex.ru/get/4700/202027913.2/0_b7e42_26e669d8_orig.jpg' alt='pic' />
            </div>
            <ProfileInfo />
            <MyPostsContainer state={state} dispatch={store.dispatch.bind(store)} />
        </div>
    )
}

export default Profile;