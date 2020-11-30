import React from 'react';
import Post from './post/post'
import s from './myPosts.module.css';

let postsData = [
    {id:1, message: 'Hello world', likescount: 3},
    {id:1, message: 'Its my third post', likescount: 10},
    {id:1, message: 'Its my second post', likescount: 13},
    {id:1, message: 'Its my first post', likescount: 23},
]

const postsElements = postsData.map(post => {
    return <Post message={post.message} likescount={post.likescount} />
})

const MyPosts = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.myPosts}>MY POSTS</div>
                <div className={s.input}>
                    <input placeholder='Input' />
                    <button className={s.button}>send</button>
                </div>
                    {postsElements}
            </div>

        </div>
    )
}

export default MyPosts;