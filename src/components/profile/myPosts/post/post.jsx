import React from 'react';
import s from './post.module.css';

const Post = (props) => {
    return (
        <>
            <div className={s.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BwjX3A664aigfCJDHqnS9fPD70Sm4oHJcg&usqp=CAU' alt='avatar'></img>
                <div className={s.description}>{props.message}</div>
            </div>
            <div>
                likes {props.likescount}
            </div>
        </>
                

    )
}

export default Post;