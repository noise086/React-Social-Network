import React from 'react';
import Post from './post/post'
import s from './myPosts.module.css';




const MyPosts = ({postsData}) => {

    const postsElements = postsData.map(post => {
        return <Post message={post.message} likescount={post.likescount} />
    })
    
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