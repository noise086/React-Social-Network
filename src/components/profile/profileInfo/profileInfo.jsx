import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './profileInfo.module.css';

const ProfileInfo = (props) => {
    // debugger
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className={s.profileInfo}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large} alt='avatar'></img>
                </div>
                <div className={s.description}>
                    description
                </div>
            </div>
        )
    }
    
}

export default ProfileInfo;