import React from 'react';
import s from './profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
				<img src='https://klike.net/uploads/posts/2019-06/1561528146_5.jpg' alt='pic' />
				<div>
                    <div>
                        ava + description
                    </div>
                    <div>
                        my posts
                    </div>
                    <div>
                        new post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
			    </div>
            </div>
    )
}

export default Profile;