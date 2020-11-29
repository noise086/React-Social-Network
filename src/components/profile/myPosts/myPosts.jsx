import React from 'react';
import Post from './post/post'
import s from './myPosts.module.css';

const MyPosts = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.myPosts}>MY POSTS</div>
                <div className={s.input}>
                    <input placeholder='Input' />
                    <button className={s.button}>send</button>
                </div>
                <Post message='Hello world' likescount='3' />
                <Post message='Its my third post' likescount='5' />
                <Post message='Its my second post' likescount='10' />
                <Post message='Its my first post' likescount='3' />
            </div>

        </div>
    )
}

export default MyPosts;