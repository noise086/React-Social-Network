import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/state';
import s from './myPosts.module.css';
import Post from './post/post';





const MyPosts = ({state, dispatch}) => {
    const postsElements = state.profilePage.posts.map(p => <Post message={p.message} likescount={p.likescount} />);

    let newPostElement = React.createRef()

    const addPosts = () => {
        dispatch(addPostActionCreator());
        dispatch(onPostChangeActionCreator(''));
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch(onPostChangeActionCreator(text))
    }
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.myPosts}>MY POSTS</div>
                <div className={s.input}>
                    <input ref={newPostElement} 
                           type='text' 
                           value={state.newPostText}
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