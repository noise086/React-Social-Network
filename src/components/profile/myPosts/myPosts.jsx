import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post';


const MyPosts = (props) => {

    const postsElements = props.profilePage.posts.map(p => <Post message={p.message} likescount={p.likescount} />);

    const addPosts = () => {
        props.addPost()
    }

    const onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text)
    }
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.myPosts}>MY POSTS</div>
                <div className={s.input}>
                    <textarea 
                           type='text' 
                           value={props.profilePage.newPostText}
                           placeholder='Как дела?' 
                           className={s.inputPost} 
                           onChange={onPostChange}
                    />
                    <button 
                        className={s.button}
                        onClick={addPosts}
                        >send</button>
                </div>
                    {postsElements}
            </div>

        </div>
    )

}

export default MyPosts;