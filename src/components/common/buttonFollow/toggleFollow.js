
import React from 'react';
import s from './toggleFollow.module.css'


const ToggleFollow = (props) => {
    if (props.followed) {

        return (
            <button
                className={s.unfollow}
                disabled={props.followingInProgress.some(id => id === props.id)}
                onClick={() => {
                    props.setToggleUnFollow(props.id)
                }} >Unfollow</button>
        )
    }

    return (
        <button
            className={s.follow}
            disabled={props.followingInProgress.some(id => id === props.id)}
            onClick={() => {
                props.setToggleFollow(props.id)
            }}
        >Follow</button>
    )
}

export default ToggleFollow;