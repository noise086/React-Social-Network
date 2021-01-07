import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './profileInfo.module.css';
import unknownUser from '../users/unknownUser.jpg'
import ProfileStatusWithHooks from './profileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className={s.profileInfo}>

                <div className={s.mainInfo} >
                    <div className={s.avatar}>
                        <img src={props.profile.data.photos.large ? props.profile.data.photos.large : unknownUser} alt='avatar'></img>
                    </div>
                    <div className={s.nameStatus} >
                        <div> {props.profile.data.fullName} </div>
                        <div className={s.status} ><ProfileStatusWithHooks {...props} /></div>
                    </div>
                </div>
                <div className={s.description}>{props.profile.aboutMe} </div>


            </div>
        )
    }

}

export default ProfileInfo;