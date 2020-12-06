import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import s from './myPosts.module.css';
import Post from './post/post';





const MyPosts = ({state, dispatch}) => {
    const postsElements = state.profilePage.posts.map(p => <Post message={p.message} likescount={p.likescount} />);

    const addPosts = () => {
        dispatch(addPostActionCreator());
        dispatch(onPostChangeActionCreator(''));
    }

    const onPostChange = (e) => {
        let text = e.target.value;
        dispatch(onPostChangeActionCreator(text))
    }
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.myPosts}>MY POSTS</div>
                <div className={s.input}>
                    <textarea 
                           type='text' 
                           value={state.profilePage.newPostText}
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