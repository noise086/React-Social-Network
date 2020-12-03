import React from 'react';
import s from './post.module.css';

const Post = (props) => {
    return (
        <>
            <div className={s.item}>
                <img src='https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_35.jpg' alt='avatar'></img>
                <div className={s.description}>{props.message}</div>
            </div>
            <div>
                likes {props.likescount}
            </div>
        </>
                

    )
}

export default Post;